import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";

import practiceareaPagePicture from "../../../../public/practiceareapagepicture.webp";

import styles from "@/styles/pages/PracticeAreapage.module.css";

const PracticeAreaPageHero = ({ sectionID }) => {
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
            <Grid size={12} alignSelf={{ xs: "center", lg: "flex-end" }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box position={"relative"} height={400}>
                  <Image
                    src={practiceareaPagePicture}
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
                  Practice Areas
                </h1>
                <p
                  style={{
                    color: "var(--white)",
                    textAlign: "center",
                  }}
                >
                  Explore our core legal services designed to protect your
                  rights, resolve disputes, and provide clarity in complex legal
                  matters. Each area is handled with precision, empathy, and
                  strategic expertise.
                </p>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default PracticeAreaPageHero;
