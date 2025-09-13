"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Box, Button, Chip, Grid, Stack } from "@mui/material";
import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import GetFreeConsultation from "@/components/popups/GetFreeConsultation";

import homepageHero from "../../../../public/shafakbakalihomepagehero.webp";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageHero = ({ sectionID }) => {
  const [isGetFreeConsultation, setIsGetFreeConsultation] = useState(false);

  return (
    <>
      <section id={sectionID} className={styles.heroVideoSection}>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important for iOS devices
          className={styles.heroVideo}
        >
          <source src="/homepage-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          <img
            src="/homepage-hero-video-fallback.webp"
            alt="A status of a lady holding scale, in a lawyer office"
          />
        </video>

        {/* Video Overlay (optional - for better text contrast) */}
        <div className={styles.heroOverlay}></div>

        {/* Content for the hero section */}
        <Container>
          <div className={styles.heroContent}>
            <Grid
              container
              height={"var(--fullViewportHeight)"}
              marginTop={{
                xs: "var(--header-offset-height)",
                sm: "var(--header-offset-height)",
                lg: 0,
              }}
              alignItems={"center"}
            >
              <Grid size={{ xs: 12, sm: 12, lg: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Chip
                    color="primary"
                    size="large"
                    label="Advocate Shafak Bakali & Associates"
                  />
                  <Stack spacing={{ xs: 2, sm: 3 }}>
                    <h1 className={styles.heroTitle}>
                      Trusted Legal Solutions with a Personal Touch
                    </h1>
                    <p
                      className={styles.heroDescription}
                      style={{ maxWidth: "80%" }}
                    >
                      Practical, effective, and personalized legal advice in
                      Civil, Criminal, Family, Cyber, and Co-operative matters.
                    </p>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <Link href="/contact" passHref>
                        <Button
                          size="large"
                          disableElevation
                          variant="contained"
                          color="secondary"
                          sx={{ borderRadius: "var(--high-rounded-mui-btn)" }}
                        >
                          Contact Us <span className="btnEndIcon">➔</span>
                        </Button>
                      </Link>
                      <Box>
                        <GetFreeConsultation
                          variant="contained"
                          color="primary"
                          size="large"
                          title="Book Consultation"
                          btnEndIcon={"✉"}
                          isHighRounded
                          open={isGetFreeConsultation}
                          setOpen={setIsGetFreeConsultation}
                        />
                      </Box>
                    </Stack>
                  </Stack>
                </motion.div>
              </Grid>
              <Grid
                display={{ xs: "block", sm: "block" }}
                size={{ xs: 12, sm: 12, lg: 6 }}
                alignSelf={{
                  xs: "flex-start",
                  sm: "flex-start",
                  lg: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Box
                    position={"relative"}
                    minHeight={{ xs: 384, sm: 448, lg: 600 }}
                    height={"100%"}
                    width={"100%"}
                    overflow={"clip"}
                  >
                    <Image
                      src={homepageHero}
                      alt={"Advocate Shafak Bakali"}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{
                        objectFit: "contain",
                        transform: "scale(1)",
                        boxShadow: "var(--medium-light-shadow)",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePageHero;
