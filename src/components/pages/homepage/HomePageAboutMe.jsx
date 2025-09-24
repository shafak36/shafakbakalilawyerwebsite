import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import academicSuccess from "../../../../public/academic-success.png";
import court from "../../../../public/court.png";
import support from "../../../../public/support.png";
import aboutmebg from "../../../../public/aboutmebg.webp";
import aboutmeimage from "../../../../public/aboutmeimage2.webp";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageAboutMe = ({ sectionID }) => {
  return (
    <>
      <section id={sectionID} className={styles.aboutMeSection}>
        {/* Background picture */}
        <Image
          src={aboutmebg}
          alt={"Books cabinet"}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={styles.sectionOverlay}></div>

        <Container className="container-y-padding">
          <div className={styles.sectionOverlayContent}>
            <Stack alignItems={"center"} spacing={4}>
              <SectionTitle
                subTitle={"From Consultation to Court"}
                subTitleColor={"var(--white)"}
                title={"Legal Expertise"}
                titleColor={"var(--accent)"}
              />
              <Box px={{ xs: 2, sm: 0 }}>
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, md: 6 }}
                    position={"relative"}
                    minHeight={"50vh"}
                  >
                    <Image
                      src={aboutmeimage}
                      alt={"Advocate Shafak Bakali in her office wearing official lawyer outfit"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={2}>
                      <Grid
                        size={{ xs: 12, md: 12, lg: 12 }}
                        border={1}
                        borderColor={"var(--accent)"}
                        p={4}
                        className="secondaryNoiseSurfaceBackground"
                      >
                        <Box>
                          <Stack spacing={2}>
                            <Image
                              src={academicSuccess}
                              alt={"Academic success, books and graduation hat"}
                              width={100}
                              className="floating"
                            />
                            <h5 style={{ color: "var(--white)" }}>
                              Strong Academic Background
                            </h5>
                            <p style={{ color: "var(--white)" }}>
                              From commerce and technology to advanced law &
                              cyber law expertise.
                            </p>
                          </Stack>
                        </Box>
                      </Grid>
                      <Grid
                        size={{ xs: 12, md: 12, lg: 12 }}
                        border={1}
                        borderColor={"var(--accent)"}
                        p={4}
                        className="secondaryNoiseSurfaceBackground"
                      >
                        <Box>
                          <Stack spacing={2}>
                            <Image
                              src={court}
                              alt={"Court appearance"}
                              width={100}
                              className="floating"
                            />
                            <h5 style={{ color: "var(--white)" }}>
                              High-Level Court Experience
                            </h5>
                            <p style={{ color: "var(--white)" }}>
                              Appearances before Bombay High Court & Human
                              Rights Commission.
                            </p>
                          </Stack>
                        </Box>
                      </Grid>
                      <Grid
                        size={{ xs: 12, md: 12, lg: 12 }}
                        border={1}
                        borderColor={"var(--accent)"}
                        p={4}
                        className="secondaryNoiseSurfaceBackground"
                      >
                        <Box>
                          <Stack spacing={2}>
                            <Image
                              src={support}
                              alt={"Hand shake"}
                              width={100}
                              className="floating"
                            />
                            <h5 style={{ color: "var(--white)" }}>
                              Client-Centric Approach
                            </h5>
                            <p style={{ color: "var(--white)" }}>
                              Every case handled with clarity, dedication, and
                              strategy.
                            </p>
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePageAboutMe;
