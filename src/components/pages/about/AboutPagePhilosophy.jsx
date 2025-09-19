import { Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import styles from "@/styles/pages/Aboutpage.module.css";

const AboutPagePhilosophy = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.philosophySection}>
      <Container className="container-y-padding">
        <Grid container>
          <Grid size={12}>
            <Stack alignItems={"center"} spacing={8}>
              <SectionTitle
                subTitle={"Philosophy"}
                subTitleColor={"var(--white)"}
                title={"Approach"}
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
                  I believe every client deserves clarity, respect, and strong
                  representation. My approach is to simplify complex legal
                  issues, provide practical advice, and fight for justice with
                  integrity and determination.
                </h3>

                <h3 className={styles.subQuote}>”</h3>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutPagePhilosophy;
