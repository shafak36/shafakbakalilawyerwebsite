import HomePageHero from "@/components/pages/homepage/HomePageHero";
import HomePageUSP from "@/components/pages/homepage/HomePageUSP";

export default function Home() {
  return (
    <>
      <HomePageHero sectionId="hero" />
      <HomePageUSP sectionID={"usp"} />
    </>
  );
}
