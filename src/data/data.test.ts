import { describe, it, expect } from "vitest";
import { pricingPlans } from "@/data/pricing";
import { services, servicesSummary } from "@/data/services";
import { processSteps, processStepsSummary } from "@/data/process";

describe("pricing data", () => {
  it("has at least one highlighted plan", () => {
    expect(pricingPlans.some((p) => p.highlighted)).toBe(true);
  });

  it("gives every plan a name, price, and features", () => {
    for (const plan of pricingPlans) {
      expect(plan.name).toBeTruthy();
      expect(plan.price).toBeTruthy();
      expect(Array.isArray(plan.features)).toBe(true);
      expect(plan.features.length).toBeGreaterThan(0);
    }
  });
});

describe("services data", () => {
  it("exposes a summary with icon, title, and description", () => {
    expect(servicesSummary.length).toBe(services.length);
    for (const s of servicesSummary) {
      expect(s.icon).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
    }
  });

  it("exposes a summary matching the full service list", () => {
    expect(servicesSummary.length).toBe(services.length);
  });
});

describe("process data", () => {
  it("has ordered, unique step numbers", () => {
    const numbers = processSteps.map((s) => s.number);
    expect(new Set(numbers).size).toBe(numbers.length);
    expect(processSteps.length).toBeGreaterThan(0);
  });

  it("summary preserves number, title, description", () => {
    expect(processStepsSummary.length).toBe(processSteps.length);
    processStepsSummary.forEach((s, i) => {
      const original = processSteps[i]!;
      expect(s.number).toBe(original.number);
      expect(s.title).toBe(original.title);
    });
  });
});
