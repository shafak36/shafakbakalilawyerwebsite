import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";

import contactPagePicture from "../../../../public/contactpagepicture2.webp";

import styles from "@/styles/pages/Contactpage.module.css";

const ContactPageHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroVideoSection}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS devices
        className={styles.heroVideo}
      >
        <source src="/contactusvideo-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        <img
          src="/contactusvideo-fallback.webp"
          alt="woman talking over the phone inside the office"
        />
      </video>
      {/* Video Overlay (optional - for better text contrast) */}
      <div className={styles.heroOverlay}></div>

      <Container>
        <div className={styles.heroContent}>
          <Grid
            container
            minHeight={"var(--fullViewportHeight)"}
            marginTop={{
              xs: "var(--header-offset-height)",
              sm: "var(--header-offset-height)",
              lg: 0,
            }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid size={12} alignSelf={{ xs: "center", lg: "flex-end" }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box position={"relative"} height={400}>
                  <Image
                    src={contactPagePicture}
                    alt={"Advocate Shafak Bakali"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectFit: "contain",
                      transform: "scale(1)",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
            <Grid
              size={12}
              maxWidth={800}
              alignSelf={{ xs: "flex-start", lg: "center" }}
            >
              <Stack spacing={4}>
                <h1
                  style={{
                    color: "var(--accent)",
                    textAlign: "center",
                  }}
                >
                  Contact Us
                </h1>
                <p
                  style={{
                    color: "var(--white)",
                    textAlign: "center",
                  }}
                >
                  Let’s Discuss Your Case Today
                </p>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default ContactPageHero;
