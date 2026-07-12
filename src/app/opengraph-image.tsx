import { ImageResponse } from "next/og";

export const alt = "Silex Software Inc — Enterprise Software. Built Right.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFFFFF",
          color: "#000000",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          SILEX
        </div>
        <div
          style={{
            width: 64,
            height: 4,
            background: "#000000",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 28,
            lineHeight: 1.4,
            color: "#525252",
            maxWidth: 600,
          }}
        >
          Enterprise Software. Built Right.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
