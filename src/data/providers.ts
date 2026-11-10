import clinicImg from "@/assets/clinic.jpg";
import hospitalImg from "@/assets/hospital.jpg";
import boardingImg from "@/assets/boarding.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import ambulanceImg from "@/assets/ambulance.jpg";
import ngoImg from "@/assets/ngo-rescue.jpg";
import vetCatImg from "@/assets/vet-cat.jpg";
import heroImg from "@/assets/hero-vet-dog.jpg";
import type { CategoryId } from "./categories";

/**
 * ALL PROVIDER DATA BELOW IS ILLUSTRATIVE SAMPLE DATA.
 * Names, addresses, phone numbers, ratings and reviews are fictional.
 */

export type Availability = "24x7" | "weekends" | "home-visit";

export interface Review {
  author: string;
  pet: string;
  rating: number;
  text: string;
}

export interface Provider {
  id: string;
  name: string;
  category: CategoryId;
  city: string;
  area: string;
  address: string;
  rating: number;
  reviewCount: number;
  hours: string;
  weeklyHours: { days: string; time: string }[];
  availability: Availability[];
  services: string[];
  phone: string;
  image: string;
  description: string;
  reviews: Review[];
  /** Relevance weight used for default sort (higher = more relevant). */
  relevance: number;
}

export const CITIES = [
  "Bengaluru",
  "Mumbai",
  "Delhi",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Kolkata",
] as const;

export const PROVIDERS: Provider[] = [
  {
    id: "greenpaws-vet-clinic-indiranagar",
    name: "GreenPaws Veterinary Clinic",
    category: "clinic",
    city: "Bengaluru",
    area: "Indiranagar",
    address: "Sample address: 214, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038",
    rating: 4.8,
    reviewCount: 312,
    hours: "9:00 AM – 9:00 PM",
    weeklyHours: [
      { days: "Mon – Sat", time: "9:00 AM – 9:00 PM" },
      { days: "Sunday", time: "10:00 AM – 2:00 PM" },
    ],
    availability: ["weekends", "home-visit"],
    services: ["Vaccinations", "General consultation", "Dental scaling", "Deworming", "Microchipping"],
    phone: "+91 98450 00001",
    image: clinicImg,
    description:
      "A calm, family-run clinic focused on preventive care for dogs and cats. Known for unhurried consultations, clear vaccination schedules and gentle handling of anxious pets.",
    reviews: [
      { author: "Ananya R.", pet: "Bruno, Beagle", rating: 5, text: "Dr. Kavya explained every step of Bruno's vaccination plan. No rush, no upselling." },
      { author: "Rahul M.", pet: "Misty, Indie cat", rating: 5, text: "Very gentle with my nervous cat. Clean clinic and on-time appointments." },
      { author: "Sneha P.", pet: "Coco, Shih Tzu", rating: 4, text: "Good care overall. Sunday hours are short, so book early." },
    ],
    relevance: 96,
  },
  {
    id: "lifeline-animal-hospital-andheri",
    name: "Lifeline Animal Hospital",
    category: "hospital",
    city: "Mumbai",
    area: "Andheri West",
    address: "Sample address: Plot 7, Veera Desai Road, Andheri West, Mumbai 400053",
    rating: 4.7,
    reviewCount: 528,
    hours: "Open 24 hours",
    weeklyHours: [{ days: "All days", time: "Open 24 hours" }],
    availability: ["24x7", "weekends"],
    services: ["Emergency care", "Soft-tissue surgery", "Orthopaedics", "ICU", "In-patient wards"],
    phone: "+91 98200 00002",
    image: hospitalImg,
    description:
      "A multi-specialty animal hospital with a round-the-clock emergency team, a dedicated ICU and modern surgical theatres. Handles referrals from clinics across the western suburbs.",
    reviews: [
      { author: "Farhan S.", pet: "Leo, Labrador", rating: 5, text: "They handled Leo's fracture surgery at 2 AM. Incredible team and great follow-up." },
      { author: "Priya K.", pet: "Simba, Persian", rating: 4, text: "Excellent doctors. Waiting area gets crowded on weekends." },
    ],
    relevance: 94,
  },
  {
    id: "happytails-boarding-baner",
    name: "HappyTails Pet Resort",
    category: "boarding",
    city: "Pune",
    area: "Baner",
    address: "Sample address: Survey No. 42, Baner–Pashan Link Road, Baner, Pune 411045",
    rating: 4.6,
    reviewCount: 187,
    hours: "7:00 AM – 8:00 PM (check-in)",
    weeklyHours: [
      { days: "All days", time: "7:00 AM – 8:00 PM check-in / check-out" },
      { days: "Stays", time: "Supervised 24 hours" },
    ],
    availability: ["24x7", "weekends"],
    services: ["Overnight boarding", "Day-care", "Grooming", "Supervised play", "Live camera updates"],
    phone: "+91 98220 00003",
    image: boardingImg,
    description:
      "Open-air boarding with large play yards, air-conditioned suites and trained caretakers on site at all times. Daily photo and video updates for pet parents.",
    reviews: [
      { author: "Karan D.", pet: "Max, Golden Retriever", rating: 5, text: "Max came back happy and tired. Loved the daily video updates." },
      { author: "Meera J.", pet: "Pepper, Indie", rating: 4, text: "Spacious and clean. Pick-up timings could be more flexible." },
    ],
    relevance: 88,
  },
  {
    id: "precisionvet-diagnostics-hauz-khas",
    name: "PrecisionVet Diagnostics",
    category: "diagnostics",
    city: "Delhi",
    area: "Hauz Khas",
    address: "Sample address: B-18, Aurobindo Marg, Hauz Khas, New Delhi 110016",
    rating: 4.5,
    reviewCount: 241,
    hours: "8:00 AM – 8:00 PM",
    weeklyHours: [
      { days: "Mon – Sat", time: "8:00 AM – 8:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    availability: ["home-visit"],
    services: ["Complete blood count", "Digital X-ray", "Ultrasound", "Urine & stool tests", "Home sample pickup"],
    phone: "+91 98110 00004",
    image: diagnosticsImg,
    description:
      "A dedicated veterinary diagnostic lab offering same-day blood reports, digital radiography and ultrasound imaging. Reports are shared directly with your vet on request.",
    reviews: [
      { author: "Ishaan G.", pet: "Bella, Pug", rating: 5, text: "Home sample pickup was on time and reports came the same evening." },
      { author: "Tanvi A.", pet: "Oreo, Rabbit", rating: 4, text: "Rare to find a lab comfortable with rabbits. Very professional." },
    ],
    relevance: 82,
  },
  {
    id: "rapidrescue-animal-ambulance-hyderabad",
    name: "RapidRescue Animal Ambulance",
    category: "ambulance",
    city: "Hyderabad",
    area: "Banjara Hills",
    address: "Sample address: Road No. 3, Banjara Hills, Hyderabad 500034",
    rating: 4.7,
    reviewCount: 156,
    hours: "Open 24 hours",
    weeklyHours: [{ days: "All days", time: "Dispatch available 24 hours" }],
    availability: ["24x7", "weekends", "home-visit"],
    services: ["Emergency pickup", "Stretcher transport", "On-board first aid", "Stray animal rescue", "Hospital transfers"],
    phone: "+91 98480 00005",
    image: ambulanceImg,
    description:
      "Equipped animal ambulances with trained paramedics, oxygen support and safe restraint. Serves pet emergencies and injured community animals across central Hyderabad.",
    reviews: [
      { author: "Vikram N.", pet: "Tiger, Indie", rating: 5, text: "Reached in 20 minutes for an injured street dog. Calm and caring team." },
      { author: "Lakshmi V.", pet: "Rocky, German Shepherd", rating: 4, text: "Quick response. Would love live tracking of the vehicle." },
    ],
    relevance: 90,
  },
  {
    id: "compassion-for-paws-foundation-chennai",
    name: "Compassion for Paws Foundation",
    category: "ngo",
    city: "Chennai",
    area: "Adyar",
    address: "Sample address: 16, Lattice Bridge Road, Adyar, Chennai 600020",
    rating: 4.9,
    reviewCount: 403,
    hours: "10:00 AM – 6:00 PM",
    weeklyHours: [
      { days: "Tue – Sun", time: "10:00 AM – 6:00 PM" },
      { days: "Monday", time: "Rescue helpline only" },
    ],
    availability: ["weekends"],
    services: ["Rescue & rehabilitation", "Adoption drives", "Sterilisation (ABC)", "Anti-rabies vaccination", "Volunteer programmes"],
    phone: "+91 98400 00006",
    image: ngoImg,
    description:
      "A volunteer-led welfare organisation running rescue, sterilisation and adoption programmes for community dogs and cats. Weekend adoption camps welcome first-time pet parents.",
    reviews: [
      { author: "Divya S.", pet: "Adopted: Lucky, Indie", rating: 5, text: "Adopted Lucky at their weekend camp. They checked in on us for weeks after." },
      { author: "Arjun T.", pet: "Volunteer", rating: 5, text: "Transparent, well organised and genuinely kind. Proud to volunteer here." },
    ],
    relevance: 86,
  },
  {
    id: "whiskers-and-tails-clinic-koramangala",
    name: "Whiskers & Tails Pet Clinic",
    category: "clinic",
    city: "Bengaluru",
    area: "Koramangala",
    address: "Sample address: 88, 5th Block, 17th Main, Koramangala, Bengaluru 560095",
    rating: 4.4,
    reviewCount: 129,
    hours: "10:00 AM – 8:00 PM",
    weeklyHours: [
      { days: "Mon – Fri", time: "10:00 AM – 8:00 PM" },
      { days: "Sat – Sun", time: "Closed" },
    ],
    availability: [],
    services: ["Cat-friendly consults", "Vaccinations", "Nutrition advice", "Skin & coat care"],
    phone: "+91 98450 00007",
    image: vetCatImg,
    description:
      "A cat-friendly certified clinic with separate waiting areas for cats and dogs, specialising in feline medicine, nutrition and dermatology.",
    reviews: [
      { author: "Nikhil B.", pet: "Luna, British Shorthair", rating: 5, text: "Finally a clinic that understands cats. Separate waiting area makes a big difference." },
      { author: "Riya C.", pet: "Biscuit, Indie", rating: 4, text: "Knowledgeable doctor, but weekday-only hours are tricky." },
    ],
    relevance: 78,
  },
  {
    id: "citycare-pet-hospital-salt-lake",
    name: "CityCare Pet Hospital",
    category: "hospital",
    city: "Kolkata",
    area: "Salt Lake",
    address: "Sample address: CF-112, Sector I, Salt Lake City, Kolkata 700064",
    rating: 4.3,
    reviewCount: 214,
    hours: "8:00 AM – 11:00 PM",
    weeklyHours: [{ days: "All days", time: "8:00 AM – 11:00 PM" }],
    availability: ["weekends"],
    services: ["General surgery", "Dialysis", "Cardiology", "Physiotherapy", "In-patient wards"],
    phone: "+91 98300 00008",
    image: heroImg,
    description:
      "A full-service pet hospital with cardiology, dialysis and physiotherapy units. Offers structured post-operative rehabilitation programmes for senior pets.",
    reviews: [
      { author: "Sourav M.", pet: "Bholu, Spitz", rating: 4, text: "Physiotherapy sessions helped Bholu walk again after surgery." },
      { author: "Ankita D.", pet: "Ginger, Indie cat", rating: 4, text: "Good doctors. Billing could be more transparent upfront." },
    ],
    relevance: 80,
  },
  {
    id: "pawhaven-boarding-gachibowli",
    name: "PawHaven Boarding & Day-care",
    category: "boarding",
    city: "Hyderabad",
    area: "Gachibowli",
    address: "Sample address: Plot 23, Old Mumbai Highway, Gachibowli, Hyderabad 500032",
    rating: 4.2,
    reviewCount: 96,
    hours: "8:00 AM – 9:00 PM",
    weeklyHours: [{ days: "All days", time: "8:00 AM – 9:00 PM" }],
    availability: ["weekends"],
    services: ["Day-care", "Short stays", "Basic grooming", "Pick-up & drop"],
    phone: "+91 98480 00009",
    image: boardingImg,
    description:
      "Compact, cage-free day-care popular with working pet parents in the IT corridor. Small group sizes and pick-up and drop service.",
    reviews: [
      { author: "Harsha K.", pet: "Zoe, Cocker Spaniel", rating: 4, text: "Convenient pick-up and drop. Zoe enjoys her day-care days." },
    ],
    relevance: 70,
  },
];

export const PROVIDER_BY_ID: Record<string, Provider> = Object.fromEntries(
  PROVIDERS.map((p) => [p.id, p]),
);
