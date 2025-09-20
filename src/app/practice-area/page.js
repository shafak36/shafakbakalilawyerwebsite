import PageCTA from "@/components/layout/PageCTA";
import PracticeAreaPageHero from "@/components/pages/practiceArea/PracticeAreaPageHero";
import PracticeAreaServices from "@/components/pages/practiceArea/PracticeAreaServices";

export default function About() {
  return (
    <>
      <PracticeAreaPageHero sectionID="hero" />
      <PracticeAreaServices
        firstSectionID={"litigation"}
        secondSectionID={"family-law"}
        thirdSectionID={"real-estate-law"}
        fourthSectionID={"legal-documentation"}
        fifthSectionID={"cyber-crime-law"}
      />
      <PageCTA pageId="page-cta" />
    </>
  );
}
