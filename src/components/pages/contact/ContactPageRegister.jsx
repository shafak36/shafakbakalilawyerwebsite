import Image from "next/image";

import { Box, Grid } from "@mui/material";

import Container from "@/components/layout/Container";
import ContactUsRegistration from "@/components/forms/ContactUsRegistration";

import formBanner from "../../../../public/contactformfill.webp";

import styles from "@/styles/pages/Contactpage.module.css";

const ContactPageRegister = ({ sectionID }) => {
  return (
    <section id={sectionID} className={`${styles.contactPageFormSection}`}>
      <Container className="container-y-padding">
        <Grid container>
          <Grid
            size={{ xs: 12, md: 4 }}
            minHeight={300}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"var(--secondary)"}
            position={"relative"}
          >
            <Image
              src={formBanner}
              alt="A person in black suit holding tech vista code business card"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* <Stack>
              <p style={{ color: "var(--white)" }}>Register Now!</p>
              <h3 style={{ color: "var(--white)" }}>
                One track. One shot. Go live.
              </h3>
            </Stack> */}
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box bgcolor={"var(--white)"} p={{ xs: 2, md: 4 }}>
              <ContactUsRegistration themeColor="secondary" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactPageRegister;
