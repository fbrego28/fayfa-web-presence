import { describe, it, expect } from "vitest";
import { yearsInBusiness } from "@/lib/business";

describe("yearsInBusiness", () => {
  it("counts completed years after the anniversary", () => {
    expect(yearsInBusiness(new Date(2026, 9, 12))).toBe(15);
  });

  it("does not count the current year before 3 August", () => {
    expect(yearsInBusiness(new Date(2026, 7, 2))).toBe(14);
  });

  it("ticks over on the anniversary itself", () => {
    expect(yearsInBusiness(new Date(2026, 7, 3))).toBe(15);
  });
});
