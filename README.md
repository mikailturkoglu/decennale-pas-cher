# DécennaleBTP.fr

Plateforme de mise en relation et d'information sur l'assurance responsabilité civile décennale
des artisans et entreprises du BTP.

Le site poursuit trois objectifs indissociables : capter les recherches liées à la décennale,
expliquer clairement le sujet métier par métier et situation par situation, et transformer ces
visites en demandes de devis suffisamment qualifiées pour être traitées par un courtier partenaire.

---

## Sommaire

1. [Modèle d'activité](#1-modèle-dactivité)
2. [Stack et principes techniques](#2-stack-et-principes-techniques)
3. [Installation](#3-installation)
4. [Variables d'environnement](#4-variables-denvironnement)
5. [Base de données et stockage](#5-base-de-données-et-stockage)
6. [Lancement local](#6-lancement-local)
7. [Structure du dépôt](#7-structure-du-dépôt)
8. [Modèle de contenu](#8-modèle-de-contenu)
9. [Ajouter une page métier](#9-ajouter-une-page-métier)
10. [Ajouter un guide](#10-ajouter-un-guide)
11. [Ajouter une page situation ou une landing](#11-ajouter-une-page-situation-ou-une-landing)
12. [Circuit de publication et de relecture](#12-circuit-de-publication-et-de-relecture)
13. [Mise à jour des tarifs](#13-mise-à-jour-des-tarifs)
14. [Placeholders bloquants](#14-placeholders-bloquants)
15. [Tunnel de devis et acheminement des demandes](#15-tunnel-de-devis-et-acheminement-des-demandes)
16. [Sécurité](#16-sécurité)
17. [RGPD, cookies et conservation](#17-rgpd-cookies-et-conservation)
18. [Tests](#18-tests)
19. [Contrôle SEO avant mise en ligne](#19-contrôle-seo-avant-mise-en-ligne)
20. [Déploiement](#20-déploiement)
21. [Sauvegarde et restauration](#21-sauvegarde-et-restauration)
22. [Décisions à fournir avant mise en ligne](#22-décisions-à-fournir-avant-mise-en-ligne)

---

## 1. Modèle d'activité

Le modèle exercé est déclaré à un seul endroit, dans `src/data/site.ts` :

```ts
export const businessModel: BusinessModel = "mise-en-relation";
```

| Valeur | Signification | Conséquences |
| --- | --- | --- |
| `mise-en-relation` | Le site collecte une demande et la transmet à un professionnel autorisé. | Aucun classement de contrats, aucune recommandation personnalisée, aucune souscription depuis le site. |
| `distribution` | Le site présente ou classe des contrats et aide à conclure. | Impose l'identité de l'intermédiaire, son numéro ORIAS, sa catégorie d'immatriculation, la méthodologie de classement, la rémunération, le panel réel et les informations précontractuelles. |

Le code d'affichage lit cette valeur pour n'employer que des formulations compatibles avec
l'activité réellement exercée. **Passer en `distribution` sans renseigner les mentions
correspondantes est un manquement réglementaire, pas une simple option de configuration.**

Les formulations proscrites (« attestation immédiate », « compare tous les assureurs », « meilleur
assureur garanti », etc.) sont listées dans `FORBIDDEN_CLAIMS` (`src/data/legal-notices.ts`) et
refusées par le contrôle de pré-build, dans tous les environnements.

## 2. Stack et principes techniques

- **Next.js 16** (App Router), **React 19**, **TypeScript strict**.
- **Tailwind CSS v4** ; le thème est défini dans `src/app/globals.css`.
- **Zod** pour la validation, côté serveur comme côté client.
- Rendu **statique par défaut**. Les composants client sont limités au tunnel de devis, au
  gestionnaire de consentement, à la recherche de métier et au menu.
- `trailingSlash: true` : **toutes** les URL et les canonical portent un slash final.
- Contenus écrits en **modules TypeScript typés** (`src/content/`) plutôt qu'en MDX : le contenu
  est ainsi validé par le compilateur, ce qui empêche de publier une page dont il manque les
  travaux couverts, les sinistres types, la FAQ, les sources ou la signature éditoriale.
- Aucune page n'existe sans être explicitement déclarée dans une collection : le routeur
  dynamique refuse tout slug absent de l'allowlist (`dynamicParams = false` + `notFound()`).

## 3. Installation

Prérequis : **Node.js ≥ 20.9**.

```bash
git clone <url-du-dépôt>
cd decennalebtp
npm ci
cp .env.example .env.local
```

Pour les tests de bout en bout, installer le navigateur une fois :

```bash
npx playwright install chromium
```

## 4. Variables d'environnement

Toutes les variables sont décrites dans `.env.example`. Aucune valeur réelle ne doit être commitée.

| Variable | Rôle | Absence |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Origine canonique, sans slash final. | Défaut `https://decennalebtp.fr`. |
| `DATABASE_URL` | PostgreSQL, persistance des demandes. | Les demandes ne sont pas stockées ; les autres canaux fonctionnent. |
| `EMAIL_PROVIDER`, `EMAIL_PROVIDER_API_KEY`, `EMAIL_FROM`, `LEAD_NOTIFICATION_EMAIL` | Notification interne d'arrivée d'une demande. | Canal email inactif. |
| `CRM_WEBHOOK_URL`, `CRM_WEBHOOK_SECRET` | Transmission au courtier partenaire. Le secret signe la charge utile en HMAC-SHA256 (en-tête `x-dbtp-signature`). | Canal CRM inactif. |
| `UPLOAD_BUCKET`, `UPLOAD_REGION`, `UPLOAD_ACCESS_KEY`, `UPLOAD_SECRET_KEY` | Stockage objet des pièces jointes. | Les dépôts de documents sont refusés proprement. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Anti-spam Cloudflare Turnstile. | Vérification désactivée ; le honeypot et la limitation de débit restent actifs. |
| `SENTRY_DSN` | Supervision des erreurs. | Pas de remontée. |
| `NEXT_PUBLIC_ANALYTICS_ID` | Mesure d'audience, chargée uniquement après consentement. | Aucun script tiers. |
| `ALLOW_BLOCKING_PLACEHOLDERS` | Tolère les placeholders réglementaires au build. | **Doit rester absent ou `false` en production.** |

Aucun canal d'acheminement n'est obligatoire : chacun s'active par la seule présence de sa
configuration, et l'échec d'un canal ne fait jamais perdre une demande.

## 5. Base de données et stockage

Le dépôt ne fixe pas d'ORM : il définit un contrat et laisse le choix de l'implémentation.

```ts
// src/lib/leads/dispatch.ts
export interface LeadRepository {
  save(record: LeadRecord): Promise<void>;
}
```

Pour brancher une base :

1. Créer une base PostgreSQL et renseigner `DATABASE_URL`.
2. Installer Prisma ou Drizzle et décrire la table des demandes (référence, date, charge utile
   chiffrée ou colonnes typées, route de traitement, score interne).
3. Implémenter `LeadRepository` puis l'enregistrer au démarrage via `setLeadRepository()`.
4. Faire de même pour l'email avec `setEmailSender()` et le fournisseur retenu.

Points à respecter au moment de la modélisation :

- la durée de conservation doit être portée par le schéma (colonne d'expiration ou purge
  planifiée), pas seulement par une intention ;
- les pièces jointes ne sont jamais accessibles publiquement : URL signées temporaires uniquement ;
- aucune donnée personnelle dans les journaux applicatifs. La trace technique produite par
  `auditTrace()` ne contient qu'une référence, un identifiant pseudonymisé, le métier et la file
  de traitement.

## 6. Lancement local

```bash
npm run dev            # serveur de développement
npm run build          # build de production (exécute le contrôle de pré-build)
npm start              # sert le build
```

Scripts de contrôle :

```bash
npm run typecheck      # TypeScript strict, sources et tests
npm run lint           # ESLint (règles Next.js core-web-vitals)
npm run test           # tests unitaires Vitest
npm run test:e2e       # tests de bout en bout Playwright (build + next start)
npm run audit:seo      # audit SEO du HTML construit
npm run check          # typecheck + lint + tests + contrôle de pré-build
```

Tant que les informations réglementaires ne sont pas fournies, le build local exige la tolérance
explicite des placeholders :

```bash
ALLOW_BLOCKING_PLACEHOLDERS=true npm run build
```

## 7. Structure du dépôt

```text
src/
├── app/                    routes App Router, sitemap, robots, manifest, images OG
│   ├── [slug]/             landings, métiers et situations servis depuis une allowlist
│   ├── guides/[slug]/      guides
│   ├── metiers/[category]/ sous-hubs éditoriaux par famille de métiers
│   ├── devis-assurance-decennale/  tunnel de devis + page de remerciement (noindex)
│   └── api/{leads,uploads}/        réception des demandes et dépôt de documents
├── components/
│   ├── layout/             en-tête, mégamenu, navigation mobile, pied de page, fil d'Ariane
│   ├── content/            blocs éditoriaux (essentiel, FAQ, sources, tableaux, sommaire)
│   ├── forms/              tunnel multi-étapes, mini-formulaire, checklist, dépôt de documents
│   ├── navigation/         recherche de métier
│   ├── templates/          gabarits de page (métier, situation, landing, guide, info)
│   ├── seo/                injection du JSON-LD
│   ├── ui/                 boutons, cartes, encarts, tableaux responsives
│   └── analytics/          consentement et chargement conditionnel de la mesure
├── content/                contenus rédigés (trades, situations, landing, guides, corporate)
├── data/                   registres : métiers, catégories, situations, navigation,
│                           redirections, sources, cookies, options de formulaire, experts
├── lib/                    seo, schema, contenu, validation, scoring, sécurité, analytics
└── types/                  content, lead, seo
scripts/
├── prebuild-check.mjs      refuse les placeholders et formulations interdites
└── seo-audit.mjs           audite le HTML construit
tests/
├── unit/                   Vitest
└── e2e/                    Playwright
```

Le registre `src/lib/content.ts` est la source de vérité de l'ensemble : allowlist des slugs,
résolution des chemins, dates de modification, entrées du sitemap. Toute nouvelle page doit y
être visible, sinon elle n'existe ni pour le routeur, ni pour le sitemap, ni pour le maillage.

## 8. Modèle de contenu

Les types sont définis dans `src/types/content.ts`. Cinq familles :

| Type | Gabarit | Collection |
| --- | --- | --- |
| `trade` | `TradePageTemplate` | `src/content/trades/index.ts` |
| `situation` | `SituationPageTemplate` | `src/content/situations/index.ts` |
| `landing` | `LandingPageTemplate` | `src/content/landing/index.ts` |
| `guide` | `GuidePageTemplate` | `src/content/guides/index.ts` |
| `info` | `InfoPageTemplate` | `src/content/corporate/index.ts` |

Les fabriques de `src/content/_factories.ts` (`defineTrade`, `defineSituation`, `defineLanding`,
`defineGuide`, `defineInfoPage`) posent uniquement ce qui est commun et vérifiable : fil d'Ariane,
dates éditoriales, sources de socle, mentions obligatoires. **Elles ne génèrent aucun contenu
substantiel.** Les travaux, les sinistres, la FAQ, les facteurs tarifaires et les documents sont
écrits page par page, sans quoi la page serait une variation de synonymes — précisément ce que le
brief interdit.

Une page métier n'est publiable que si elle apporte :

- une définition d'activité spécifique ;
- une répartition travaux inclus / accessoires / à déclarer séparément / exclus ;
- au moins trois scénarios de sinistre propres au métier ;
- une FAQ propre au métier (six questions au minimum) ;
- des facteurs tarifaires spécifiques ;
- des justificatifs adaptés au profil ;
- un maillage cohérent vers des métiers voisins réellement proches.

## 9. Ajouter une page métier

1. **Vérifier le registre.** Le métier doit exister dans `src/data/trades.ts` (`value`, `slug`,
   `name`, catégorie, synonymes de recherche). S'il est absent, l'ajouter d'abord : le registre
   alimente le sélecteur du tunnel, la recherche de métier et les hubs. Un métier présent au
   registre mais sans page rédigée renvoie vers le tunnel préfiltré, ce qui est le comportement
   attendu.
2. **Créer le fichier** `src/content/trades/<slug-court>.ts` et exporter une constante construite
   avec `defineTrade({ ... })`. Le `slug` et la valeur de formulaire sont dérivés du registre :
   seul `tradeValue` est à fournir.
3. **Rédiger** l'ensemble des blocs listés au point 8. Le contenu génériquement partagé ne doit
   pas représenter la majorité de la page.
4. **Renseigner les métadonnées** : `title` ≤ 70 caractères marque comprise, `description` de 140
   à 165 caractères, mot-clé principal et secondaires, H1 distinct du title.
5. **Ajouter les sources** propres au métier via `extraSources` ; le socle commun est déjà appliqué.
6. **Déclarer le maillage** : trois métiers voisins (`relatedTradeSlugs`), deux situations
   pertinentes, la page prix, le tunnel de devis, un ou deux guides.
7. **Importer la page** dans `src/content/trades/index.ts` et l'ajouter au tableau `tradePages`.
8. **Prévoir les redirections** des variantes de nommage dans `src/data/redirects.ts`
   (`/decennale-<metier>/`, `/garantie-decennale-<metier>/`, forme au nom du corps de métier).
9. **Contrôler** :

```bash
npm run check
ALLOW_BLOCKING_PLACEHOLDERS=true npm run build && npm run audit:seo
```

Les tests unitaires vérifient automatiquement l'unicité des métadonnées, la validité des liens
déclarés et la présence d'au moins un lien entrant. L'audit SEO vérifie le rendu réel.

## 10. Ajouter un guide

1. Créer `src/content/guides/<slug>.ts` avec `defineGuide({ ... })`. L'URL sera
   `/guides/<slug>/`.
2. Structurer le guide : résumé de trois à cinq lignes, réponse directe, explication détaillée,
   exemples, tableau ou checklist, sources, liens commerciaux pertinents, CTA contextuel,
   guides connexes.
3. Citer les articles de loi applicables via `legalSources` pour tout contenu juridique.
4. Importer le guide dans `src/content/guides/index.ts`.
5. Ne pas créer un guide pour une question à laquelle une page existante répond déjà : enrichir
   la page existante est préférable à un article de 500 mots.
6. Ne jamais modifier l'année d'un titre sans réviser réellement le contenu.

## 11. Ajouter une page situation ou une landing

- **Situation** : la déclarer d'abord dans `src/data/situations.ts` (slug, nom, valeur de
  formulaire, caractère sensible), puis créer `src/content/situations/<slug>.ts` avec
  `defineSituation`. Les situations marquées `sensitive` (résiliation, non-paiement, sinistre,
  chantier commencé, reprise du passé) affichent automatiquement les réserves nécessaires : ne
  jamais promettre une acceptation, ni laisser croire qu'un nouveau contrat couvrira un chantier
  ou un sinistre antérieur.
- **Landing commerciale** : créer `src/content/landing/<slug>.ts` avec `defineLanding`, puis
  l'importer dans la collection. Le slug racine devient automatiquement une route servie par
  `src/app/[slug]/page.tsx`.

## 12. Circuit de publication et de relecture

Le champ `status` (`draft` | `review` | `published`) commande tout : seules les pages
`published` sont routées, sitemapées et maillées. Une page `draft` ou `review` peut être
committée sans risque de fuite d'indexation.

Chaque page porte une signature éditoriale (`src/data/experts.ts`) :

- `authorId` — rédacteur ;
- `reviewerId` — relecteur ; obligatoire pour tout contenu juridique, tarifaire ou assurantiel ;
- `publishedAt`, `modifiedAt`, `nextReviewAt` — dates réelles, affichées telles quelles.

Séquence de publication :

1. rédiger en `status: "draft"` ;
2. passer en `review` et faire relire le contenu par le professionnel de l'assurance identifié ;
3. corriger, mettre `modifiedAt` à la date réelle de la dernière modification de fond ;
4. passer en `published` ;
5. lancer `npm run check`, puis le build et `npm run audit:seo` ;
6. après déploiement, vérifier la page dans le sitemap et demander son indexation.

Un profil d'expert non encore identifié reste `noindex` : il ne faut ni photo générique, ni auteur
fictif.

## 13. Mise à jour des tarifs

Les fourchettes vivent dans les `priceBands` de chaque page, construites par `indicativeBand()`.
Tant qu'aucune donnée n'est validée, les montants sont absents et la mention
`[À VALIDER PAR LE COURTIER]` reste visible : **c'est volontaire**, une fourchette inventée serait
une faute.

Pour publier une fourchette :

1. obtenir du partenaire disposant des données les montants, la période et le périmètre ;
2. renseigner `minAnnualPremium`, `maxAnnualPremium`, `sourceLabel`, `sourceDate`, ainsi que les
   hypothèses (chiffre d'affaires, ancienneté, expérience, antécédent) ;
3. conserver la mention indiquant qu'il s'agit d'une estimation et que seul un devis engage
   l'assureur ;
4. mettre à jour `modifiedAt` et `nextReviewAt`.

Révision **au minimum deux fois par an**. Une donnée devenue fausse est retirée, pas laissée en
place avec une date rafraîchie.

## 14. Placeholders bloquants

Quatre constantes, dans `src/lib/placeholders.ts` :

```text
[À RENSEIGNER]   [À CONFIRMER]   [À CHOISIR]   [À VALIDER PAR LE COURTIER]
```

Elles sont utilisées partout où une information réglementaire, tarifaire ou commerciale n'est pas
vérifiée, et restent **visibles en recette** pour être repérées.

`scripts/prebuild-check.mjs` détecte les deux formes — la chaîne littérale et la référence
symbolique `PLACEHOLDER.toFill` — et :

- **échoue** sur toute formulation commerciale interdite, quel que soit l'environnement ;
- **échoue** sur tout placeholder résiduel, sauf si `ALLOW_BLOCKING_PLACEHOLDERS=true`.

Renseigner une information consiste à remplacer la référence par la valeur réelle, ce qui fait
disparaître l'alerte. La liste des informations attendues figure au [point 22](#22-décisions-à-fournir-avant-mise-en-ligne).

## 15. Tunnel de devis et acheminement des demandes

Le tunnel (`/devis-assurance-decennale/`) est en six étapes : activité, entreprise, expérience,
assurance actuelle, besoin, contact.

- **Il fonctionne sans JavaScript.** Tous les champs sont rendus côté serveur et la soumission
  passe par une Server Action. Le composant client ajoute le découpage en étapes, la barre de
  progression, la validation instantanée, le résumé avant envoi et la reprise de la saisie en
  session.
- **Préremplissage** : chaque page métier ou situation transmet `trade` et `situation` en
  paramètres, ainsi que `source_page`. Le tunnel les applique et conserve une canonical sans
  paramètre.
- **Validation** : un schéma Zod par étape, plus des contrôles croisés (motif de résiliation exigé
  si résiliation déclarée, détail de sinistre si sinistres, part sous-traitée si sous-traitance).
  La validation serveur est autoritaire.
- **Consentements** : trois cases distinctes et jamais précochées — traitement de la demande,
  transmission aux partenaires, prospection future facultative.
- **Pièces jointes** : jamais exigées avant la conversion. La page de remerciement (`noindex`)
  propose un dépôt sécurisé.
- **Scoring interne** (`src/lib/lead-scoring.ts`) : produit une file de traitement (`standard`,
  `creation`, `resiliation`, `high_risk_trade`, `manual_review`, `incomplete`) et des signaux à
  étudier. Il n'est jamais montré au prospect et ne renvoie jamais de refus.

## 16. Sécurité

En-têtes définis dans `src/lib/security-headers.ts` et appliqués par `next.config.ts` :
`Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`,
`Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, `Cross-Origin-Opener-Policy`.

Côté application (`src/lib/security.ts`) :

- validation client **et** serveur ;
- limitation de débit par adresse ;
- contrôle de l'origine des requêtes (protection CSRF) ;
- honeypot et vérification Turnstile ;
- pièces jointes : liste blanche d'extensions, contrôle du type MIME, taille maximale, noms
  assainis, accès par URL signée temporaire uniquement ;
- pseudonymisation avant toute écriture de journal ;
- aucun secret dans le dépôt : tout passe par les variables d'environnement.

À la charge de l'exploitant : rotation des clés, audit des dépendances (`npm audit`), mises à
jour, analyse antivirale des dépôts, accès administrateur avec MFA, moindre privilège.

## 17. RGPD, cookies et conservation

- Information de collecte affichée sous le formulaire, avec lien vers la politique complète :
  responsable, finalité, base légale, destinataires, durée, droits, contact, caractère
  obligatoire ou facultatif des champs.
- Transmission aux partenaires explicitée : le prospect sait que ses données seront transmises, à
  quelle catégorie de destinataires, pour quelle finalité, et où consulter la liste à jour.
- Consentement aux traceurs : aucun script soumis à consentement n'est chargé avant l'accord.
  « Tout accepter » et « Tout refuser » ont la même visibilité ; le choix est révocable depuis le
  pied de page ; la preuve du choix est conservée.
- Registre des cookies dans `src/data/cookies.ts` : ajouter un traceur consiste à l'y déclarer,
  ce qui met à jour la page `/politique-cookies/` et le gestionnaire de consentement.
- Mesure d'audience : le consentement à la prospection commerciale est distinct du traitement
  nécessaire à la demande de devis.
- Aucun email, téléphone ni nom n'est transmis à l'outil de mesure (`src/lib/analytics.ts`
  filtre explicitement les données personnelles).
- Les durées de conservation sont des placeholders jusqu'à validation par le responsable du
  traitement. Aucun document ne doit être conservé sans durée définie.

## 18. Tests

**Unitaires** (Vitest, `tests/unit/`) : génération des canonical et des métadonnées, données
structurées, registre de contenu (unicité, allowlist, maillage, sitemap), validation du
formulaire, scoring, acheminement des demandes, redirections, sécurité, recherche de métier.

```bash
npm run test
npm run test:watch
```

**Bout en bout** (Playwright, `tests/e2e/`) : navigation mobile et mégamenu de bureau, recherche
de métier, fil d'Ariane, liens d'évitement, tunnel complet avec erreurs de champ et retour en
arrière, soumission, page de remerciement en `noindex`, consentement aux cookies, redirections,
en-têtes de sécurité, robots, sitemap, rendu serveur, absence d'erreur console.

```bash
npm run test:e2e
npx playwright test --project=mobile
```

Les tests de bout en bout s'exécutent sur un **build de production** servi par `next start`, et
jamais sur le serveur de développement : c'est la seule façon de vérifier le HTML réellement
livré, les en-têtes et les redirections. Le serveur n'est jamais réutilisé d'une exécution à
l'autre, pour ne pas tester un build obsolète.

## 19. Contrôle SEO avant mise en ligne

```bash
ALLOW_BLOCKING_PLACEHOLDERS=true npm run build
npm run audit:seo
```

`scripts/seo-audit.mjs` analyse le HTML construit, page par page, et vérifie :

- title et meta description présents, uniques, de longueur raisonnable ;
- canonical présente, absolue, sur le domaine officiel, avec slash final ;
- un seul H1 ;
- cohérence entre la politique d'indexation et la présence dans le sitemap ;
- image Open Graph déclarée ;
- JSON-LD parsable, avec fil d'Ariane sur les pages profondes ;
- signature éditoriale et date de modification affichées ;
- liens internes résolus et absence de page orpheline ;
- placeholders bloquants encore visibles dans le rendu.

Liste de contrôle finale, avant chaque mise en production :

1. `npm run check` sans erreur ;
2. build **sans** `ALLOW_BLOCKING_PLACEHOLDERS` : il doit passer, donc plus aucun placeholder ;
3. `npm run audit:seo` sans erreur ;
4. `npm run test:e2e` sans échec ;
5. sitemap dépourvu de page `noindex`, de remerciement, de recherche ou de brouillon ;
6. redirections testées, aucune chaîne de redirection ;
7. données structurées validées avec l'outil de test des résultats enrichis ;
8. Core Web Vitals mesurés sur mobile (LCP ≤ 2,5 s, INP < 200 ms, CLS < 0,1) ;
9. consentements non précochés, aucun script tiers avant accord ;
10. formulaire testé au clavier et au lecteur d'écran, avec de vraies données de test ;
11. réception effective des demandes par le destinataire configuré ;
12. Search Console et Bing Webmaster Tools configurés, sitemap soumis.

## 20. Déploiement

Cible : Vercel ou toute infrastructure équivalente supportant Next.js.

1. Renseigner les variables d'environnement de la plateforme. **Ne pas** définir
   `ALLOW_BLOCKING_PLACEHOLDERS` en production : le build doit échouer s'il reste un placeholder.
2. Configurer `NEXT_PUBLIC_SITE_URL` sur l'origine canonique définitive.
3. Vérifier que le domaine sans `www` et le domaine avec `www` convergent en 301 vers l'origine
   canonique, et que HTTPS est forcé.
4. Déployer, puis exécuter la liste de contrôle du point 19 sur l'environnement réel.
5. Soumettre le sitemap et surveiller la couverture d'indexation.

Le build échoue volontairement si une formulation interdite ou un placeholder subsiste : c'est le
garde-fou qui empêche de publier une information réglementaire inventée.

## 21. Sauvegarde et restauration

- **Contenu** : versionné dans Git. Aucune sauvegarde supplémentaire n'est nécessaire.
- **Demandes** : sauvegarde quotidienne de la base, avec rétention alignée sur la politique de
  conservation retenue. Chiffrement au repos.
- **Pièces jointes** : versioning du stockage objet et règle de cycle de vie appliquant la durée
  de conservation.
- **Restauration** : la procédure doit être **testée**, pas seulement documentée. Vérifier
  périodiquement qu'une restauration produit une base exploitable et que la purge des données
  expirées fonctionne.
- **Suppression** : le mécanisme d'effacement à la demande d'une personne doit couvrir la base,
  le stockage objet, le CRM du partenaire et les sauvegardes selon la politique définie.

## 22. Décisions à fournir avant mise en ligne

Ces informations conditionnent la levée des placeholders. Tant qu'elles sont absentes, le build
de production échoue — c'est le comportement attendu.

**Éditeur** : raison sociale, forme juridique, SIREN, capital, adresse, email, téléphone,
directeur de publication, hébergeur et son adresse.

**Modèle et intermédiation** : modèle A ou B, numéro ORIAS et catégorie d'immatriculation le cas
échéant, courtier partenaire, liste des partenaires, panel réellement comparé, nature de la
rémunération, liens capitalistiques, médiateur, procédure de réclamation.

**Service** : gratuité ou non, absence d'engagement, délai réel de réponse, horaires de rappel,
critères de qualification, métiers réellement acceptés par les partenaires, situations
réellement traitables, territoires couverts.

**Données** : responsable du traitement, DPO éventuel, durées de conservation (devis,
prospection, documents), CRM, fournisseur email, stockage objet, outil de mesure d'audience,
liste des cookies.

**Contenu** : fourchettes tarifaires et méthodologie de prix, auteurs, relecteur expert avec
photo réelle et qualifications, autorisations de logos et de marques.

**Relectures obligatoires** : mentions d'intermédiation par le courtier ou le conseil conformité,
pages prix par le partenaire disposant des données, activités couvertes par métier au regard des
nomenclatures contractuelles réelles, mentions RGPD par le responsable du traitement, pages
juridiques par un professionnel compétent.
