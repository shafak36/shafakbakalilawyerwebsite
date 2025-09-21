import ContactPageHero from "@/components/pages/contact/ContactPageHero";
import ContactPageRegister from "@/components/pages/contact/ContactPageRegister";
import ContactPageMap from "@/components/pages/contact/ContactPageMap";
import PageCTA from "@/components/layout/PageCTA";

export default function About() {
  return (
    <>
      <ContactPageHero sectionID="hero" />
      <ContactPageRegister sectionID="form" />
      <ContactPageMap sectionID="map-location" />
      <PageCTA sectionID="page-cta" />
    </>
  );
}
