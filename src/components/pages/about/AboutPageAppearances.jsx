import Image from "next/image";

import { Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import humanrightscommision from "../../../../public/humanrightscommision.webp";
import bombaycourt from "../../../../public/bombaycourt.webp";
import nashikcourt from "../../../../public/nashikcourt.webp";
import aurangabadcourt from "../../../../public/aurangabadcourt.webp";
import waqfboard from "../../../../public/waqfboard.webp";

import styles from "@/styles/pages/Aboutpage.module.css";

const AboutPageAppearances = ({ sectionID }) => {
  return (
    <section id={sectionID} className={styles.appearancesSection}>
      <Container className="container-y-padding">
        <Grid container>
          <Grid size={12}>
            <Stack alignItems={"center"}>
              <SectionTitle
                subTitle={"Court Experience"}
                subTitleColor={"var(--primaryDark)"}
                title={"Appearances"}
                titleColor={"var(--primaryDark)"}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        sx={{
          border: "2px solid var(--primary)",
          overflow: "clip",
          mx: { xs: 2, md: 0 },
          mb: 2,
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"var(--primary)"}
          px={{ xs: 2, md: 0 }}
          height={{ xs: "300px", md: "500px" }}
        >
          <Stack spacing={2} my={2}>
            <h4 style={{ color: "var(--white)" }}>
              State Human Rights Commission
            </h4>
            <h3 style={{ color: "var(--white)" }}>
              Defending fundamental rights
            </h3>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          position={"relative"}
          height={{ xs: "300px", md: "500px" }}
        >
          <Image
            src={humanrightscommision}
            alt="Signature styled Shafak Bakali Text"
            fill
            style={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          border: "2px solid var(--primary)",
          overflow: "clip",
          mx: { xs: 2, md: 0 },
          mb: 2,
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          position={"relative"}
          height={{ xs: "300px", md: "500px" }}
        >
          <Image
            src={bombaycourt}
            alt="Signature styled Shafak Bakali Text"
            fill
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"var(--primary)"}
          height={{ xs: "300px", md: "500px" }}
          px={{ xs: 2, md: 0 }}
        >
          <Stack spacing={2} my={2}>
            <h4 style={{ color: "var(--white)" }}>Mumbai Courts</h4>
            <h3 style={{ color: "var(--white)" }}>
              Civil, corporate, and criminal litigation
            </h3>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          border: "2px solid var(--primary)",
          overflow: "clip",
          mx: { xs: 2, md: 0 },
          mb: 2,
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"var(--primary)"}
          height={{ xs: "300px", md: "500px" }}
          px={{ xs: 2, md: 0 }}
        >
          <Stack spacing={2} my={2}>
            <h4 style={{ color: "var(--white)" }}>Nashik Courts</h4>
            <h3 style={{ color: "var(--white)" }}>
              Property disputes, family cases, criminal trials
            </h3>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          position={"relative"}
          height={{ xs: "300px", md: "500px" }}
        >
          <Image
            src={nashikcourt}
            alt="Signature styled Shafak Bakali Text"
            fill
            style={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          border: "2px solid var(--primary)",
          overflow: "clip",
          mx: { xs: 2, md: 0 },
          mb: 2,
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          position={"relative"}
          height={{ xs: "300px", md: "500px" }}
        >
          <Image
            src={aurangabadcourt}
            alt="Signature styled Shafak Bakali Text"
            fill
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"var(--primary)"}
          height={{ xs: "300px", md: "500px" }}
          px={{ xs: 2, md: 0 }}
        >
          <Stack spacing={2} my={2}>
            <h4 style={{ color: "var(--white)" }}>Aurangabad Courts</h4>
            <h3 style={{ color: "var(--white)" }}>
              Appeals, writs, civil disputes
            </h3>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          border: "2px solid var(--primary)",
          overflow: "clip",
          mx: { xs: 2, md: 0 },
          mb: 2,
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"var(--primary)"}
          height={{ xs: "300px", md: "500px" }}
          px={{ xs: 2, md: 0 }}
        >
          <Stack spacing={2} my={2}>
            <h4 style={{ color: "var(--white)" }}>Waqf Tribunal</h4>
            <h3 style={{ color: "var(--white)" }}>
              Religious property-related matters
            </h3>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          position={"relative"}
          height={{ xs: "300px", md: "500px" }}
        >
          <Image
            src={waqfboard}
            alt="Signature styled Shafak Bakali Text"
            fill
            style={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutPageAppearances;
