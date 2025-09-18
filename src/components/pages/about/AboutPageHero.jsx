"use client";

import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import aboutPagePicture from "../../../../public/shafakbakaliaboutpagepicture.webp";

import styles from "@/styles/pages/Aboutpage.module.css";

const AboutPageHero = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.heroImageSection}>
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
            <Grid size={12} maxWidth={1100}>
              <Stack spacing={4}>
                <Box position={"relative"} height={400}>
                  <Image
                    src={aboutPagePicture}
                    alt={"Advocate Shafak Bakali"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectFit: "contain",
                      transform: "scale(1)",
                    }}
                  />
                </Box>
                <h3
                  style={{
                    color: "var(--accent)",
                    textAlign: "center",
                  }}
                >
                  I am Advocate <b>Shafak Bakali</b>, a qualified and committed
                  lawyer with a background in commerce, computer applications,
                  and law. My mission is to protect rights, deliver justice, and
                  stand firmly with clients in their legal battles.
                </h3>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default AboutPageHero;
