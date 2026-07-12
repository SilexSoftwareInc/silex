import { describe, it, expect } from "vitest";
import { createMetadata } from "@/lib/metadata";

describe("createMetadata", () => {
  it("builds a title and description", () => {
    const meta = createMetadata({ title: "About", description: "About description" });
    expect(meta.title).toBe("About");
    expect(meta.description).toBe("About description");
  });

  it("includes openGraph and twitter fields with the site name", () => {
    const meta = createMetadata({ title: "Contact", description: "Contact description" });
    expect(meta.openGraph?.title).toBe("Contact | Silex Software Inc");
    expect(meta.openGraph?.siteName).toBe("Silex Software Inc");
    expect(meta.openGraph?.images).toEqual([{ url: "/opengraph-image" }]);
    expect(meta.twitter?.images).toEqual(["/opengraph-image"]);
  });

  it("sets a canonical URL from the path", () => {
    const meta = createMetadata({
      title: "Pricing",
      description: "Pricing description",
      path: "/pricing",
    });
    expect(meta.alternates?.canonical).toBe("https://silex.software/pricing");
  });

  it("omits the title when not provided so the layout default is used", () => {
    const meta = createMetadata({ description: "Home description", path: "/" });
    expect(meta.title).toBeUndefined();
    expect(meta.alternates?.canonical).toBe("https://silex.software/");
  });
});
