import AboutPageHero from "@/components/pages/about/AboutPageHero";
import AboutPageEducation from "@/components/pages/about/AboutPageEducation";
import AboutPageAchievements from "@/components/pages/about/AboutPageAchievements";

export default function About() {
  return (
    <>
      <AboutPageHero sectionID="hero" />
      <AboutPageEducation sectionID="education" />
      <AboutPageAchievements sectionID="achievements" />
    </>
  );
}
