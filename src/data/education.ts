export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string;
}

export const education: Education[] = [
  {
    institution: "Information Technology Institute (ITI)",
    degree: "Open Source Application Development Track - 9 Month Program",
    period: "Oct. 2023 – Jun. 2024",
    location: "Alexandria, Egypt",
  },
  {
    institution: "Alexandria University – Faculty of Science",
    degree: "Bachelor of Software Engineering, SIM Department",
    period: "Sept. 2019 – Jul. 2023",
    location: "Alexandria, Egypt",
    notes:
      "Graduation Project: Wasally Shipping System – CGPA: 3.9, Ranking 8th",
  },
];