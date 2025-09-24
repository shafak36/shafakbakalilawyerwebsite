import Container from "@/components/layout/Container";

import styles from "@/styles/pages/Contactpage.module.css";
import { Grid, Stack } from "@mui/material";

const ContactPageMap = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.contactPageMapsSection}>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} p={2}>
          <Stack spacing={2}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.77506376325954!2d73.88893474840756!3d18.47026998583037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea6206ef2191%3A0xabc34ca105271ced!2sKonark%20Business%20Hub!5e0!3m2!1sen!2sin!4v1758716248900!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p style={{ color: "var(--white)" }}>
              Konark Business Hub, Kausar Baugh, Kondhwa, Pune,
              Maharashtra 411048
            </p>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} p={2}>
          <Stack spacing={2}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.6449235919783!2d73.85463369598577!3d18.526309026917357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06325cf3207%3A0x145b666a977960d8!2sPasalkar%20Bhavan%2C%20Nyaymurti%20Ranade%20Path%2C%20Tophakhana%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra%20411005!5e0!3m2!1sen!2sin!4v1758716425664!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p style={{ color: "var(--white)" }}>
              Pasalkar Bhavan Nyaymurti Ranade Path, Tophakhana, Shivajinagar,
              Pune, Maharashtra 411005
            </p>
          </Stack>
        </Grid>
      </Grid>
      {/* <Container className="container-y-padding"> */}
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711122336!2d73.78056653146903!3d18.524598599978933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1758445891623!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      {/* </Container> */}
    </section>
  );
};

export default ContactPageMap;
