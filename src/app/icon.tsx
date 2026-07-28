import { ImageResponse } from "next/og";

/**
 * Icône du site, générée au build.
 *
 * Aucun binaire n'est versionné et aucune police externe n'est téléchargée :
 * la marque tient dans un monogramme typographique.
 */
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1f33",
          color: "#ffffff",
          fontSize: 240,
          fontWeight: 700,
          letterSpacing: -8,
        }}
      >
        <span>D</span>
        <span style={{ color: "#f59e0b" }}>B</span>
      </div>
    ),
    size,
  );
}
