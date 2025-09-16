import Image from "next/image";
import Link from "next/link";

import { Box, Button, Chip, Divider, Grid, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import EastSharpIcon from '@mui/icons-material/EastSharp';

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import divorceLaw from "../../../../public/divorce-law.jpg";
import propertyDispute from "../../../../public/property-dispute.jpg";
import cyberBreach from "../../../../public/cyber-breach.jpg";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageBlog = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.blogSection}>
      <Container className="container-y-padding">
        <Grid container>
          <Grid size={12}>
            <Stack alignItems={"center"} spacing={4}>
              <SectionTitle
                subTitle={"Law made easy"}
                subTitleColor={"var(--white)"}
                title={"Our Blog"}
                titleColor={"var(--secondaryDark)"}
              />
              <Box px={{ xs: 2, sm: 0 }}>
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--transparent)"}
                    p={0}
                  >
                    {/* media */}
                    <Box
                      sx={{
                        position: "relative",
                        height: "400px",
                        zIndex: "var(--z-index-blog-preview-image)",
                      }}
                    >
                      <Image
                        src={divorceLaw}
                        alt={"Heartbreak, breakup, divorce"}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    {/* Content */}
                    <Box
                      sx={{
                        px: 4,
                        backgroundColor: "var(--transparent)",
                      }}
                    >
                      <Box
                        sx={{
                          height: "300px",
                          position: "relative",
                          bgcolor: "var(--secondaryDark)",
                          mt: "-100px",
                          zIndex: "var(--z-index-blog-preview-details)",
                        }}
                        p={5}
                        className="floating"
                      >
                        <Box
                          sx={{
                            height: "80px",
                            width: "80px",
                            bgcolor: "var(--white)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            right: 20,
                            top: -40,
                          }}
                        >
                          <Stack alignItems={"center"}>
                            <h4>15</h4>
                            <h5>Aug</h5>
                          </Stack>
                        </Box>
                        <Chip color="primary" label="Consulting" />
                        <Stack spacing={2} my={2}>
                          <h5 style={{ color: "var(--white)" }}>
                            5 Things to Know Before Filing for Divorce in Pune
                          </h5>
                          <Divider sx={{ background: "var(--white)" }} />
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                        >
                          <Chip
                            color="primary"
                            icon={<PersonIcon />}
                            label="Admin"
                          />
                          <Chip
                            color="primary"
                            icon={<BusinessIcon />}
                            label="Staff"
                          />
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--transparent)"}
                    p={0}
                  >
                    {/* media */}
                    <Box
                      sx={{
                        position: "relative",
                        height: "400px",
                        zIndex: "var(--z-index-blog-preview-image)",
                      }}
                    >
                      <Image
                        src={propertyDispute}
                        alt={"Private property, property dispute"}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    {/* Content */}
                    <Box
                      sx={{
                        px: 4,
                        backgroundColor: "var(--transparent)",
                      }}
                    >
                      <Box
                        sx={{
                          height: "300px",
                          position: "relative",
                          bgcolor: "var(--secondaryDark)",
                          mt: "-100px",
                          zIndex: "var(--z-index-blog-preview-details)",
                        }}
                        p={5}
                        className="floating"
                      >
                        <Box
                          sx={{
                            height: "80px",
                            width: "80px",
                            bgcolor: "var(--white)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            right: 20,
                            top: -40,
                          }}
                        >
                          <Stack alignItems={"center"}>
                            <h4>16</h4>
                            <h5>June</h5>
                          </Stack>
                        </Box>
                        <Chip color="primary" label="Consulting" />
                        <Stack spacing={2} my={2}>
                          <h5 style={{ color: "var(--white)" }}>
                            Understanding Property Dispute Resolution in India
                          </h5>
                          <Divider sx={{ background: "var(--white)" }} />
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                        >
                          <Chip
                            color="primary"
                            icon={<PersonIcon />}
                            label="Admin"
                          />
                          <Chip
                            color="primary"
                            icon={<BusinessIcon />}
                            label="Staff"
                          />
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6, lg: 4 }}
                    bgcolor={"var(--transparent)"}
                    p={0}
                  >
                    {/* media */}
                    <Box
                      sx={{
                        position: "relative",
                        height: "400px",
                        zIndex: "var(--z-index-blog-preview-image)",
                      }}
                    >
                      <Image
                        src={cyberBreach}
                        alt={"Laptop open lock, cyber breach"}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    {/* Content */}
                    <Box
                      sx={{
                        px: 4,
                        backgroundColor: "var(--transparent)",
                      }}
                    >
                      <Box
                        sx={{
                          height: "300px",
                          position: "relative",
                          bgcolor: "var(--secondaryDark)",
                          mt: "-100px",
                          zIndex: "var(--z-index-blog-preview-details)",
                        }}
                        p={5}
                        className="floating"
                      >
                        <Box
                          sx={{
                            height: "80px",
                            width: "80px",
                            bgcolor: "var(--white)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            right: 20,
                            top: -40,
                          }}
                        >
                          <Stack alignItems={"center"}>
                            <h4>28</h4>
                            <h5>May</h5>
                          </Stack>
                        </Box>
                        <Chip color="primary" label="Consulting" />
                        <Stack spacing={2} my={2}>
                          <h5 style={{ color: "var(--white)" }}>
                            Cyber Crime Complaints: A Step-by-Step Guide
                          </h5>
                          <Divider sx={{ background: "var(--white)" }} />
                        </Stack>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                        >
                          <Chip
                            color="primary"
                            icon={<PersonIcon />}
                            label="Admin"
                          />
                          <Chip
                            color="primary"
                            icon={<BusinessIcon />}
                            label="Staff"
                          />
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Link href="/blog" passHref>
                <Button
                  size="large"
                  disableElevation
                  variant="contained"
                  color="secondary"
                  endIcon={<EastSharpIcon />}
                  sx={{ borderRadius: "var(--high-rounded-mui-btn)" }}
                >
                  Read All
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomePageBlog;
