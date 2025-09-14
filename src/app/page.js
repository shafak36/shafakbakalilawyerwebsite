import HomePageHero from "@/components/pages/homepage/HomePageHero";
import HomePageUSP from "@/components/pages/homepage/HomePageUSP";
import HomePageServices from "@/components/pages/homepage/HomePageServices";

export default function Home() {
  return (
    <>
      <HomePageHero sectionId="hero" />
      <HomePageUSP sectionID={"usp"} />
      <HomePageServices sectionID={"services"} />
    </>
  );
}
