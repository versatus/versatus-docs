import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

export default function Image({ src, srcDark, size, alt }) {
  const { colorMode } = useColorMode();

  const imageSrc = colorMode === "dark" && srcDark ? srcDark : src;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: size,
        margin: "20px auto",
      }}
    >
      <img className="img_component" src={useBaseUrl(imageSrc)} alt={alt} />
    </div>
  );
}
