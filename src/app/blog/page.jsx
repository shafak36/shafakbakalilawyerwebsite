import Link from "next/link";
import Image from "next/image";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
} from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import PageCTA from "@/components/layout/PageCTA";

import { featuredBlogsIndex } from "@/constants/fixedStats";

import { getAllBlogs } from "@/utils/markdownBlogsReader";
import { YYYYMMDDtoMonthDDYYYY } from "@/utils/dateUtils";

import blogsHero from "../../../public/bloghero.webp";

import styles from "@/styles/pages/Blog.module.css";

export default function Blogs() {
  const blogs = getAllBlogs();
  const featuredBlogs = blogs.filter((_, i) => featuredBlogsIndex.includes(i));

  return (
    <>
      <section id="hero" className={styles.heroPictureSection}>
        {/* Background picture */}
        <Image
          src={blogsHero}
          alt={
            "A typewriter with a paper and a line of text quoting something worth reading"
          }
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay}></div>
        <Container className="container-y-padding">
          <div className={styles.heroContent}>
            <Grid
              container
              minHeight={"var(--fullViewportHeightWithHeader)"}
              alignItems={"center"}
              spacing={2}
            >
              <Grid size={{ xs: 12 }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Stack spacing={{ xs: 2, sm: 3 }} alignItems={"center"}>
                    <h1 className={styles.heroTitle}>From Our Blog</h1>
                    <h2 className={styles.heroTitle}>
                      Your Legal Knowledge Hub
                    </h2>
                    <p className={styles.heroDescription}>
                      Explore expert insights, case studies, legal tips, and
                      client stories to empower your decisions and stay
                      informed.
                    </p>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section id="featured" className={styles.blogsFeaturedSection}>
        <Container className="container-y-padding">
          <Box textAlign={"center"}>
            <span
              className="overlineText"
              style={{ color: "var(--secondary)" }}
            >
              Check Out
            </span>
            <h2 style={{ color: "var(--secondary)" }}>Featured Post</h2>
          </Box>
          <Grid container mt={5} spacing={2}>
            {featuredBlogs.map((blog, index) => (
              <Grid key={`${blog.slug} ${index}`} size={{ xs: 12, lg: 4 }}>
                <Link
                  href={`/blog/${blog.slug}`}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      borderRadius: "var(--high-rounded)",
                      height: "100%",
                    }}
                    elevation={1}
                  >
                    <CardMedia
                      sx={{ height: 240 }}
                      image={blog.coverImage}
                      title={blog.slug}
                    />
                    <CardContent>
                      <Stack spacing={2}>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                        >
                          <Chip
                            label={YYYYMMDDtoMonthDDYYYY(blog.date)}
                            color="primary"
                          />
                          <Chip
                            label={"Featured"}
                            color="secondary"
                            variant="outlined"
                          />
                        </Stack>
                        <h4 style={{ color: "var(--secondary)" }}>
                          {blog.title}
                        </h4>
                        <p style={{ color: "var(--black)" }}>
                          {blog.description}
                        </p>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section id="all" className={styles.allBlogsSection}>
        <Container className="container-y-padding">
          <Box textAlign={"center"}>
            <span className="overlineText" style={{ color: "var(--white)" }}>
              Explore
            </span>
            <h2 style={{ color: "var(--white)" }}>All Blogs</h2>
          </Box>
          <Grid container mt={5} spacing={2}>
            {blogs.map((blog, index) => (
              <Grid key={`${blog.slug} ${index}`} size={{ xs: 12, lg: 4 }}>
                <Link
                  href={`/blog/${blog.slug}`}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      borderRadius: "var(--high-rounded)",
                      height: "100%",
                    }}
                    elevation={1}
                  >
                    <CardMedia
                      sx={{ height: 240 }}
                      image={blog.coverImage}
                      title={blog.slug}
                    />
                    <CardContent>
                      <Stack spacing={2}>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                        >
                          <Chip
                            label={YYYYMMDDtoMonthDDYYYY(blog.date)}
                            color="primary"
                          />
                          <Chip
                            label={blog.tag}
                            color="secondary"
                            variant="outlined"
                          />
                        </Stack>
                        <h4 style={{ color: "var(--secondary)" }}>
                          {blog.title}
                        </h4>
                        <p style={{ color: "var(--black)" }}>
                          {blog.description}
                        </p>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <PageCTA pageId={"page-cta"} />
    </>
  );
}
