import AboutPageEducation from "@/components/pages/about/AboutPageEducation";
import AboutPageHero from "@/components/pages/about/AboutPageHero";

export default function About() {
  return (
    <>
      <AboutPageHero sectionID="hero" />
      <AboutPageEducation sectionID="education" />
    </>
  );
}
