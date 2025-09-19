import AboutPageHero from "@/components/pages/about/AboutPageHero";
import AboutPageEducation from "@/components/pages/about/AboutPageEducation";
import AboutPageAchievements from "@/components/pages/about/AboutPageAchievements";
import AboutPageAppearances from "@/components/pages/about/AboutPageAppearances";
import AboutPagePhilosophy from "@/components/pages/about/AboutPagePhilosophy";

export default function About() {
  return (
    <>
      <AboutPageHero sectionID="hero" />
      <AboutPageEducation sectionID="education" />
      <AboutPageAchievements sectionID="achievements" />
      <AboutPageAppearances sectionID="court-appearances" />
      <AboutPagePhilosophy sectionID="philosophy" />
    </>
  );
}
