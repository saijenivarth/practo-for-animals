import clinicImg from "@/assets/clinic.jpg";
import hospitalImg from "@/assets/hospital.jpg";
import boardingImg from "@/assets/boarding.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import ambulanceImg from "@/assets/ambulance.jpg";
import ngoImg from "@/assets/ngo-rescue.jpg";

export type CategoryId = "clinic" | "hospital" | "boarding" | "diagnostics" | "ambulance" | "ngo";

export interface Category {
  id: CategoryId;
  name: string;
  short: string;
  description: string;
  image: string;
  highlights: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "clinic",
    name: "Veterinary Clinics",
    short: "Vet Clinic",
    description: "Everyday check-ups, vaccinations and expert consultations close to home.",
    image: clinicImg,
    highlights: ["Vaccinations", "General consultation", "Dental care", "Deworming"],
  },
  {
    id: "hospital",
    name: "Animal Hospitals",
    short: "Hospital",
    description: "Surgery, critical care and in-patient wards for serious conditions.",
    image: hospitalImg,
    highlights: ["Surgery", "ICU & in-patient", "Orthopaedics", "24×7 emergency"],
  },
  {
    id: "boarding",
    name: "Pet Boarding",
    short: "Boarding",
    description: "Safe, supervised stays and day-care while you travel or work.",
    image: boardingImg,
    highlights: ["Overnight stays", "Day-care", "Grooming", "Play sessions"],
  },
  {
    id: "diagnostics",
    name: "Diagnostics",
    short: "Diagnostics",
    description: "Blood work, X-rays, ultrasound and lab tests with quick reports.",
    image: diagnosticsImg,
    highlights: ["Blood tests", "Digital X-ray", "Ultrasound", "Home sample pickup"],
  },
  {
    id: "ambulance",
    name: "Animal Ambulance",
    short: "Ambulance",
    description: "Rapid transport for injured or critically ill animals, any time.",
    image: ambulanceImg,
    highlights: ["Emergency pickup", "Stretcher transport", "First aid", "Stray rescue"],
  },
  {
    id: "ngo",
    name: "Animal Welfare NGOs",
    short: "NGO",
    description: "Rescue, adoption, sterilisation drives and care for community animals.",
    image: ngoImg,
    highlights: ["Rescue", "Adoption", "Sterilisation (ABC)", "Volunteering"],
  },
];

export const CATEGORY_BY_ID: Record<CategoryId, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;

export function isCategoryId(value: unknown): value is CategoryId {
  return typeof value === "string" && value in CATEGORY_BY_ID;
}
