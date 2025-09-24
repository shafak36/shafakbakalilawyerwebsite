import AboutPageHero from "@/components/pages/about/AboutPageHero";
import AboutPageEducation from "@/components/pages/about/AboutPageEducation";
import AboutPageAchievements from "@/components/pages/about/AboutPageAchievements";
import AboutPageAppearances from "@/components/pages/about/AboutPageAppearances";
import AboutPagePhilosophy from "@/components/pages/about/AboutPagePhilosophy";
import PageCTA from "@/components/layout/PageCTA";

export default function About() {
  return (
    <>
      <AboutPageHero sectionID="main" />
      <AboutPageEducation sectionID="education" />
      <AboutPageAchievements sectionID="achievements" />
      <AboutPageAppearances sectionID="court-appearances" />
      <AboutPagePhilosophy sectionID="philosophy" />
      <PageCTA pageId={"page-cta"} />
    </>
  );
}
