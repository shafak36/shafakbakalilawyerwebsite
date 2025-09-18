import Image from "next/image";
import Link from "next/link";

import { Box, Button, Chip, Divider, Grid, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import EastSharpIcon from "@mui/icons-material/EastSharp";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import { featuredBlogsIndex } from "@/constants/fixedStats";

import { getAllBlogs } from "@/utils/markdownBlogsReader";
import { YYYYMMDDtoMonthDDYYYY } from "@/utils/dateUtils";
import { getDayFromMonthDDYYYY } from "@/utils/dateUtils";
import { getMonthFromMonthDDYYYY } from "@/utils/dateUtils";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageBlog = ({ sectionID }) => {
  const blogs = getAllBlogs();
  const featuredBlogs = blogs.filter((_, i) => featuredBlogsIndex.includes(i));

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
                  {featuredBlogs.map((blog, index) => (
                    <Grid
                      key={`${blog.slug} ${index}`}
                      size={{ xs: 12, md: 6, lg: 4 }}
                      bgcolor={"var(--transparent)"}
                      p={0}
                    >
                      <Link
                        href={`/blog/${blog.slug}`}
                        passHref
                        style={{ textDecoration: "none" }}
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
                            src={blog.coverImage}
                            alt={blog.slug}
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
                                <h4 style={{ color: "var(--primaryDark)" }}>
                                  {getDayFromMonthDDYYYY(
                                    YYYYMMDDtoMonthDDYYYY(blog.date)
                                  )}
                                </h4>
                                <h5 style={{ color: "var(--primaryDark)" }}>
                                  {getMonthFromMonthDDYYYY(
                                    YYYYMMDDtoMonthDDYYYY(blog.date)
                                  )}
                                </h5>
                              </Stack>
                            </Box>
                            <Chip color="primary" label="Consulting" />
                            <Stack spacing={2} my={2}>
                              <h5 style={{ color: "var(--white)" }}>
                                {blog.title}
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
                      </Link>
                    </Grid>
                  ))}
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
