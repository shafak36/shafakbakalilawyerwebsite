import HomePageHero from "@/components/pages/homepage/HomePageHero";
import HomePageUSP from "@/components/pages/homepage/HomePageUSP";
import HomePageServices from "@/components/pages/homepage/HomePageServices";
import HomePageAboutMe from "@/components/pages/homepage/HomePageAboutMe";
import HomePageTestimonials from "@/components/pages/homepage/HomePageTestimonials";
import HomePageBlog from "@/components/pages/homepage/HomePageBlog";
import PageCTA from "@/components/layout/PageCTA";

export default function Home() {
  return (
    <>
      <HomePageHero sectionID="main" />
      <HomePageUSP sectionID="about-us" />
      <HomePageServices sectionID="quick-services" />
      <HomePageAboutMe sectionID="professional-details" />
      <HomePageTestimonials sectionID="testimonials" />
      <HomePageBlog sectionID="blog" />
      <PageCTA pageId="page-cta" />
    </>
  );
}
