"use client";

import { useState } from "react";

import { Box, Button, ButtonGroup, Grid, Stack } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageTestimonials = ({ sectionID }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Professional, approachable, and results-driven.",
    },
    {
      text: "Her clarity and dedication made all the difference in my case.",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Wraps around
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    ); // Wraps around backwards
  };

  return (
    <section id={sectionID} className={styles.testimonialSection}>
      <Container className="container-y-padding">
        <Grid container>
          <Grid size={12}>
            <Stack alignItems={"center"} spacing={8}>
              <SectionTitle
                subTitle={"What People Think"}
                subTitleColor={"var(--white)"}
                title={"Testimonials"}
                titleColor={"var(--accent)"}
              />

              <Stack direction={"row"} alignItems={"center"}>
                <h3 className={styles.superQuote}>“</h3>
                <h3
                  style={{
                    color: "var(--white)",
                    textAlign: "center",
                    maxWidth: "600px",
                    fontFamily: "var(--font-urbanist-sans)",
                  }}
                >
                  {testimonials[currentIndex].text}
                </h3>

                <h3 className={styles.subQuote}>”</h3>
              </Stack>

              <ButtonGroup color="primary" variant="contained" disableElevation>
                <Button onClick={goToPrev}>
                  <ChevronLeftIcon />
                </Button>
                <Button onClick={goToNext}>
                  <ChevronRightIcon />
                </Button>
              </ButtonGroup>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default HomePageTestimonials;
