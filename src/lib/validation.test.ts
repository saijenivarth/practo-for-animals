import { describe, expect, it } from "vitest";
import { bookingSchema, indianPhone } from "./validation";

describe("indianPhone", () => {
  it("accepts 10-digit mobiles with or without +91", () => {
    expect(indianPhone.safeParse("9845012345").success).toBe(true);
    expect(indianPhone.safeParse("+91 98450 12345").success).toBe(true);
  });
  it("rejects short numbers and numbers not starting 6–9", () => {
    expect(indianPhone.safeParse("98450").success).toBe(false);
    expect(indianPhone.safeParse("1234567890").success).toBe(false);
  });
});

describe("bookingSchema", () => {
  const base = {
    ownerName: "Asha",
    phone: "9845012345",
    petName: "Bruno",
    petType: "Dog",
    reason: "Annual vaccination",
  };
  it("rejects a preferred date in the past", () => {
    expect(bookingSchema.safeParse({ ...base, date: "2000-01-01" }).success).toBe(false);
  });
  it("accepts a future date", () => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    const iso = d.toISOString().slice(0, 10);
    expect(bookingSchema.safeParse({ ...base, date: iso }).success).toBe(true);
  });
});
