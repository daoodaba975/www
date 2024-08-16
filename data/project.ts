export interface Project {
  name: string;
  repo: string;
  description: string;
  url?: string;
  stars?: number;
}

export const projects: Project[] = [
  {
    name: "Made In Senegal 🌍",
    repo: "GalsenDev221/made.in.senegal",
    description:
      "A collection of tools created by Senegalese developers, usable by anyone around the world.",
  },
  {
    name: "Galsenify 💫",
    repo: "daoodaba975/galsenify",
    description:
      "An NPM package that makes it easy to work with data about Senegal, offering a wealth of information about the land of Teranga.",
  },
  {
    name: "Taaru 🪐",
    repo: "daoodaba975/taaru",
    description:
      "A collection of stylish dark VS Code themes inspired by the beauty of Senegal.",
  },
  {
    name: "Exlogrn 🚀",
    repo: "daoodaba975/exlogrn",
    description:
      "A starter app template for React Native Expo, featuring a ready-to-use login screen.",
  },
  {
    name: "JustFrontKit 🛠",
    repo: "daoodaba975/just.front.kit",
    description:
      "A large collection of basic frontend components, crafted with only HTML, CSS, and JavaScript, ready to be used.",
  },
  {
    name: "HTML Tricks ✨",
    repo: "daoodaba975/html.tricks",
    description: "A set of cool HTML tricks that many developers overlook.",
  },
  {
    name: "Git Jafewoul ⚙️",
    repo: "daoodaba975/git.jafewoul",
    description: "A collection of very useful yet lesser-known Git commands.",
  },
];
