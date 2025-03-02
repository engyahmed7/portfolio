export interface Project {
  title: string;
  github: string;
  description: string;
  tags: string[];
  demo?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Sizely AI Project",
    github: "https://github.com/engyahmed7/sizely-app",
    description:
      "Sizely App is a web-based application designed for real-time body pose detection via webcam. Utilizing the powerful TensorFlow.js and PoseNet models, it provides accurate body pose analysis. The application is built on Laravel for the backend, ensuring a robust and efficient user experience for pose recognition and analysis.",
    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "Javascript",
      "Tensorflow",
      "PoseNet",
      "Webcam",
      "CSS",
    ],
    demo: "http://sizely-pose-detection.wuaze.com/",
    image: "/src/assets/sizely.png",
  },
  {
    title: "Vacation Tracker",
    github: "https://github.com/engyahmed7/Vacation_Tracker",
    description:
      "A comprehensive vacation management system with dual-approval workflow and Mattermost integration. The system supports three primary roles: Admin, HR, and Supervisor, ensuring a structured approval workflow. The application integrates with Mattermost chat to provide real-time notifications regarding vacation requests and approvals.",
    tags: ["Laravel", "PHP", "Filament", "MySQL", "Eloquent", "Bootstrap"],
    demo: "https://vacation-tracker.free.nf/",
    image: "/src/assets/vacation.png",
  },
  {
    title: "WeBuild Project",
    github: "https://github.com/engyahmed7/node-deployer",
    description:
      "WeBuild is a sass product designed to deliver a seamless project deployment experience. The backend repository houses the server-side code, responsible for handling authentication, user management , deployment service and other essential functionalities.",
    tags: [
      "Nest",
      "MongoDB",
      "React",
      "TypeScript",
      "Bootstrap",
      "Jest",
      "Prisma",
    ],
    image: "/src/assets/webuild.png",
  },
  {
    title: "Food Tracking System",
    github: "https://github.com/engyahmed7/food-tracking-system",
    description:
      "The Food Tracking System is a comprehensive solution designed for managing e-commerce logistics, specifically focused on shipping and payment integrations. This project includes an admin control panel built with Filament, real-time shipping data updates using Livewire, and a factory design pattern implementation for multiple payment gateways.",
    tags: [
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "Redis",
    ],
    image: "/src/assets/food_tracking.png",
  },
];