import { ImageResponse } from "next/og"

import { profile } from "@/lib/data"

export const alt = "Dsgnr Aremu, multidisciplinary designer and video editor"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
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
          background: "#ffffff",
          color: "#1d1816",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8a8078",
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            fontSize: 128,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          {profile.alias}
        </div>
        <div
          style={{
            fontSize: 32,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8a8078",
            marginTop: 16,
          }}
        >
          {profile.name}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
          {profile.roles.map((role) => (
            <div
              key={role}
              style={{
                fontSize: 28,
                border: "1px solid #e8e3df",
                borderRadius: 999,
                padding: "12px 28px",
              }}
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
