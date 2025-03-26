import Header from "@/../components/Header";
import Focus from "@/../components/projects/Focus";
import AllProjects from "@/../components/projects/AllProjects";

export default function Projects() {
  return (
    <>
      <Header header="Projects - Check out all my open-source work and projects here ⚡" />
      <Focus
        sentence="Code Eat Live Repeat"
        manualMode={false}
        blurAmount={5}
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <AllProjects />
    </>
  );
}
