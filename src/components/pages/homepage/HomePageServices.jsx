import Image from "next/image";

import * as motion from "motion/react-client";

import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import criminalLaw from "../../../../public/criminal-law.png";
import familyLaw from "../../../../public/family-law.png";
import propertyLaw from "../../../../public/property-law.png";
import legalDocs from "../../../../public/gdpr.png";
import cyberCrime from "../../../../public/cyber-crime.png";
import auctionHammer from "../../../../public/auction.png";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageServices = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.servicesSection}>
      <Container className="container-y-padding">
        <Grid container>
          <Grid size={12}>
            <Stack alignItems={"center"} spacing={4}>
              <SectionTitle
                subTitle={"What We Do"}
                subTitleColor={"var(--secondary)"}
                title={"Quick Services"}
                titleColor={"var(--primary)"}
              />
              <Box px={{ xs: 2, sm: 0 }}>
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--white)"}
                    p={5}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Box>
                        <Stack spacing={2}>
                          <Image
                            src={criminalLaw}
                            alt={"Criminal Law"}
                            width={100}
                            style={{
                              border: "2px solid var(--black)",
                              padding: "16px",
                              borderRadius: "50%",
                            }}
                          />
                          <h5 style={{ color: "var(--primaryDark)" }}>
                            Civil & Criminal Litigation
                          </h5>
                          <p style={{ color: "var(--primaryDark)" }}>
                            Strong representation in court with a focus on
                            protecting your rights.
                          </p>
                        </Stack>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--white)"}
                    p={5}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Box>
                        <Stack spacing={2}>
                          <Image
                            src={familyLaw}
                            alt={"Family Law"}
                            width={100}
                            style={{
                              border: "2px solid var(--black)",
                              padding: "16px",
                              borderRadius: "50%",
                            }}
                          />
                          <h5 style={{ color: "var(--primaryDark)" }}>
                            Family Law & Divorce Matters
                          </h5>
                          <p style={{ color: "var(--primaryDark)" }}>
                            Compassionate guidance in disputes involving
                            marriage, custody, alimony, and property.
                          </p>
                        </Stack>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--white)"}
                    p={5}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <Box>
                        <Stack spacing={2}>
                          <Image
                            src={propertyLaw}
                            alt={"Property Law"}
                            width={100}
                            style={{
                              border: "2px solid var(--black)",
                              padding: "16px",
                              borderRadius: "50%",
                            }}
                          />
                          <h5 style={{ color: "var(--primaryDark)" }}>
                            Property & Real Estate Law
                          </h5>
                          <p style={{ color: "var(--primaryDark)" }}>
                            Assistance with disputes, agreements, registrations,
                            and due diligence.
                          </p>
                        </Stack>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--white)"}
                    p={5}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <Box>
                        <Stack spacing={2}>
                          <Image
                            src={legalDocs}
                            alt={"Legal Documentation"}
                            width={100}
                            style={{
                              border: "2px solid var(--black)",
                              padding: "16px",
                              borderRadius: "50%",
                            }}
                          />
                          <h5 style={{ color: "var(--primaryDark)" }}>
                            Legal Documentation
                          </h5>
                          <p style={{ color: "var(--primaryDark)" }}>
                            Drafting and reviewing MoUs, notices, affidavits,
                            and contracts with precision.
                          </p>
                        </Stack>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--white)"}
                    p={5}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      viewport={{ once: true }}
                    >
                      <Box>
                        <Stack spacing={2}>
                          <Image
                            src={cyberCrime}
                            alt={"Cyber crime"}
                            width={100}
                            style={{
                              border: "2px solid var(--black)",
                              padding: "16px",
                              borderRadius: "50%",
                            }}
                          />
                          <h5 style={{ color: "var(--primaryDark)" }}>
                            Cyber Crime
                          </h5>
                          <p style={{ color: "var(--primaryDark)" }}>
                            Filing complaints and guiding you through due legal
                            process.
                          </p>
                        </Stack>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--white)"}
                    p={5}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.0 }}
                      viewport={{ once: true }}
                    >
                      <Box>
                        <Stack spacing={2}>
                          <Image
                            src={auctionHammer}
                            alt={"Women's Right Advocacy"}
                            width={100}
                            style={{
                              border: "2px solid var(--black)",
                              padding: "16px",
                              borderRadius: "50%",
                            }}
                          />
                          <h5 style={{ color: "var(--primaryDark)" }}>
                            Women’s Rights & Advocacy
                          </h5>
                          <p style={{ color: "var(--primaryDark)" }}>
                            Legal support for women in matters of harassment,
                            domestic violence, property rights.
                          </p>
                        </Stack>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomePageServices;
