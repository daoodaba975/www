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
    url: "https://github.com/GalsenDev221/made.in.senegal",
  },
  {
    name: "Galsen UI 🎨",
    repo: "GalsenDev221/galsen.ui",
    description:
      "It's a library of reusable components based on Tailwind (pure CSS coming soon), designed to accelerate the development of modern interfaces.",
    url: "https://github.com/GalsenDev221/galsen.ui",
  },
  {
    name: "Galsenify 💫",
    repo: "daoodaba975/galsenify",
    description:
      "An NPM package that makes it easy to work with data about Senegal, offering a wealth of information about the land of Teranga.",
    url: "https://github.com/daoodaba975/galsenify",
  },
  {
    name: "Exlogrn 🚀",
    repo: "daoodaba975/exlogrn",
    description:
      "A starter app template for React Native Expo, featuring a ready-to-use login screen.",
    url: "https://github.com/daoodaba975/exlogrn",
  },
  {
    name: "Taaru 🪐",
    repo: "daoodaba975/taaru",
    description:
      "A collection of stylish dark VS Code themes inspired by the beauty of Senegal.",
    url: "https://github.com/daoodaba975/taaru",
  },
  {
    name: "JustFrontKit 🧱",
    repo: "daoodaba975/just.front.kit",
    description:
      "A large collection of basic frontend components, crafted with only HTML, CSS, and JavaScript, ready to be used.",
    url: "https://github.com/daoodaba975/just.front.kit",
  },
  {
    name: "HTML Tricks ✨",
    repo: "daoodaba975/html.tricks",
    description: "A set of cool HTML tricks that many developers overlook.",
    url: "https://github.com/daoodaba975/html.tricks",
  },
  {
    name: "Git Jafewoul ⚙️",
    repo: "daoodaba975/git.jafewoul",
    description: "A collection of very useful yet lesser-known Git commands.",
    url: "https://github.com/daoodaba975/git.jafewoul",
  },
];
