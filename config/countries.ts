// Where BuddyRide runs and how it works in each country — one place, so
// every page says the same thing. Mirrors the mobile app (BuddyRide-Mobile:
// its FAQ, terms and cancellation policy).
//
// Two kinds of service:
// - on-demand (UK, Sweden): request a ride now, propose a price, a nearby
//   driver accepts or sends a counter-offer — as a private ride, or a
//   shared ride with other passengers heading the same way (the app's
//   "Private Ride" / "Shared Ride" ride types);
// - carpool ride-sharing (Nigeria, Canada): drivers post planned rides,
//   passengers join them and split the cost.

export type RideMode = "on-demand" | "ride-sharing";

export type Country = {
  key: "uk" | "sweden" | "nigeria" | "canada";
  name: string;
  flag: string;
  mode: RideMode;
  currency: string;
  payment: string;
  emergency: string;
  // What "roadworthy" means there, for drivers.
  vehicleCheck: string;
  // Driver terms (as in the app's cancellation & refund policy).
  driverCommission: string;
  withdrawalEvery: string;
  minimumWithdrawal: string;
};

export const COUNTRIES: Country[] = [
  {
    key: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    mode: "on-demand",
    currency: "British Pounds (GBP)",
    payment: "Card, through Stripe",
    emergency: "999",
    vehicleCheck: "a valid MOT",
    driverCommission: "18%",
    withdrawalEvery: "every 5 days",
    minimumWithdrawal: "£20",
  },
  {
    key: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    mode: "on-demand",
    currency: "Swedish Krona (SEK)",
    payment: "Card, through Stripe",
    emergency: "112",
    vehicleCheck: "a valid vehicle inspection (besiktning)",
    driverCommission: "18%",
    withdrawalEvery: "every 5 days",
    minimumWithdrawal: "200 kr",
  },
  {
    key: "nigeria",
    name: "Nigeria",
    flag: "🇳🇬",
    mode: "ride-sharing",
    currency: "Nigerian Naira (NGN)",
    payment: "In-app wallet, funded by bank transfer or card",
    emergency: "112",
    vehicleCheck: "a valid roadworthiness certificate",
    driverCommission: "16.5%",
    withdrawalEvery: "every 3 days",
    minimumWithdrawal: "₦5,000",
  },
  {
    key: "canada",
    name: "Canada",
    flag: "🇨🇦",
    mode: "ride-sharing",
    currency: "Canadian Dollars (CAD)",
    payment: "Card, through Stripe",
    emergency: "911",
    vehicleCheck: "your province's vehicle safety requirements",
    driverCommission: "19.5%",
    withdrawalEvery: "every 5 days",
    minimumWithdrawal: "CA$50",
  },
];

export const RIDE_MODE_LABEL: Record<RideMode, string> = {
  "on-demand": "On-demand · private & shared",
  "ride-sharing": "Carpool ride-sharing",
};

// "the UK, Sweden, Nigeria and Canada"
export const COUNTRY_LIST_TEXT = "the UK, Sweden, Nigeria and Canada";

export const SUPPORT_EMAIL = "support@buddyridenow.com";
export const SUPPORT_PHONE = "+44 7359 592718";
export const SUPPORT_PHONE_HREF = "tel:+447359592718";
