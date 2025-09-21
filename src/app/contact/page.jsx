import ContactPageHero from "@/components/pages/contact/ContactPageHero";
import ContactPageRegister from "@/components/pages/contact/ContactPageRegister";

export default function About() {
  return (
    <>
      <ContactPageHero sectionID="hero" />
      <ContactPageRegister sectionID="form" />
    </>
  );
}
