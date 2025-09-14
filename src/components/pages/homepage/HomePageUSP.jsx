import Image from "next/image";

import { Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import signatureShafakBakali from "../../../../public/signature.webp";

import styles from "@/styles/pages/Homepage.module.css";

const HomePageUSP = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.uspSection}>
      <Container className="container-y-padding">
        <Grid container>
          <Grid size={12}>
            <Stack alignItems={"center"} spacing={4}>
              <SectionTitle
                subTitle={"Why Choose me"}
                subTitleColor={"var(--white)"}
                title={"About Us"}
                titleColor={"var(--primary)"}
              />
              <h3
                style={{
                  color: "var(--white)",
                  textAlign: "center",
                  maxWidth: "1150px",
                }}
              >
                With years of experience across diverse legal domains, we guide
                clients through complex matters with clarity and confidence. Our
                approach is rooted in integrity, transparency, and strong
                advocacy to protect your rights and interests.
              </h3>
              <Image
                src={signatureShafakBakali}
                alt="Signature styled Shafak Bakali Text"
                width={300}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomePageUSP;
