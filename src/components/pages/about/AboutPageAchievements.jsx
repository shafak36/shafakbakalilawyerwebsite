import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import llbDegree from "../../../../public/llbdegree.webp";
import punebarassociation from "../../../../public/punebarassociation.webp";
import punecitypresident from "../../../../public/punecitypresident.webp";

import styles from "@/styles/pages/Homepage.module.css";

const AboutPageAchievements = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.achievementsSection}>
      <Container className="container-y-padding">
        <Grid container>
          <Grid size={12}>
            <Stack alignItems={"center"} spacing={4}>
              <SectionTitle
                subTitle={"Recognition & Leadership"}
                subTitleColor={"var(--secondary)"}
                title={"Achievements"}
                titleColor={"var(--primary)"}
              />
            </Stack>
            <Box px={{ xs: 2, sm: 0 }} mt={4}>
              <Grid container spacing={2}>
                <Grid
                  size={{ xs: 12, md: 6, lg: 4 }}
                  bgcolor={"var(--white)"}
                  p={2}
                >
                  <Box position={"relative"} minHeight={"300px"}>
                    <Image
                      src={llbDegree}
                      alt={"Shafak Bakali - LL.B. (Bachelor of Laws) Degree"}
                      fill
                      style={{
                        border: "4px double var(--black)",
                        objectFit: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 6, lg: 4 }}
                  bgcolor={"var(--white)"}
                  p={2}
                >
                  <Box position={"relative"} minHeight={"300px"}>
                    <Image
                      src={punebarassociation}
                      alt={
                        "Shafak Bakali - Member, Bar Council of Pune, Pune Family Court Association"
                      }
                      fill
                      style={{
                        border: "4px double var(--black)",
                        objectFit: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 6, lg: 4 }}
                  bgcolor={"var(--white)"}
                  p={2}
                >
                  <Box position={"relative"} minHeight={"300px"}>
                    <Image
                      src={punecitypresident}
                      alt={
                        "Shafak Bakali - Pune City President, Women Cell, Anti-Crime Organisation"
                      }
                      fill
                      style={{
                        border: "4px double var(--black)",
                        objectFit: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutPageAchievements;
