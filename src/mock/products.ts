export type Project = {
  id: number;
  name: string;
  repository: string;
  demo: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Countdown",
    repository: "https://github.com/davi1985/countdown",
    demo: "https://countdown-davi1985.vercel.app/",
    description: "Application with a timer to launch.",
  },
  {
    id: 2,
    name: "Dollar Now Quotation",
    repository: "https://github.com/davi1985/dollar-now-quotation",
    demo: "https://dollar-euro-quotation.vercel.app/",
    description:
      "This simple application makes fetch in API and returns the value of commercial dollar in real time",
  },
  {
    id: 3,
    name: "My Clock",
    repository: "https://github.com/davi1985/myclock",
    demo: "https://myclock-js.vercel.app/",
    description: "This is a digital clock build with ReactJS",
  },
  {
    id: 4,
    name: "IMC Calculation",
    repository: "https://github.com/davi1985/imc-calculator",
    demo: "https://imc-calculator-umber.vercel.app/",
    description: "Body mass index calculator",
  },
];
