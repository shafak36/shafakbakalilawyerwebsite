import Container from "@/components/layout/Container";

import styles from "@/styles/pages/Contactpage.module.css";

const ContactPageMap = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.contactPageMapsSection}>
      {/* <Container className="container-y-padding"> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711122336!2d73.78056653146903!3d18.524598599978933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1758445891623!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      {/* </Container> */}
    </section>
  );
};

export default ContactPageMap;
