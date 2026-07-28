import { mentionsLegales } from "@/content/corporate";
import { createInfoRoute } from "@/lib/info-route";

const route = createInfoRoute(mentionsLegales, { hideStickyCta: true });

export const metadata = route.metadata;
export default route.Page;
