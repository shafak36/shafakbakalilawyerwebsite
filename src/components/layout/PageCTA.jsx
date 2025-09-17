"use client";

import { useState } from "react";

import { Grid, Stack } from "@mui/material";
import ForwardToInboxSharpIcon from "@mui/icons-material/ForwardToInboxSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";

import Container from "@/components/layout/Container";
import GetFreeConsultation from "@/components/popups/GetFreeConsultation";
import SectionTitle from "@/components/layout/SectionTitle";

import styles from "@/styles/components/PageCTA.module.css";

const PageCTA = ({ pageId, textured = false }) => {
  const [isGetFreeSessionOpen, setIsGetFreeSessionOpen] = useState(false);

  return (
    <section
      id={pageId}
      className={`${styles.pageCTA} ${
        textured ? "secondaryNoiseSurfaceBackground" : ""
      }`}
    >
      <Container className="container-y-padding">
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, lg: 6 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              spacing={4}
              alignItems={{ xs: "center", lg: "flex-start" }}
              textAlign={{ xs: "center", lg: "left" }}
            >
              <SectionTitle
                subTitle={""}
                subTitleColor={"var(--white)"}
                title={"Get Help"}
                titleColor={"var(--secondaryDark)"}
              />
              <h3 style={{ maxWidth: "450px" }}>
                Facing Legal Issues? Get Expert Help Now!
              </h3>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 6 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              bgcolor={"var(--primaryDark)"}
              p={5}
              spacing={2}
              alignItems={"center"}
              sx={{ border: "4px double var(--white)" }}
            >
              <CallSharpIcon fontSize="large" sx={{ color: "var(--white)" }} />
              <h3>+91-8956784556</h3>
              <GetFreeConsultation
                variant={"contained"}
                color={"primary"}
                title="Book Consultation"
                btnEndIcon={<ForwardToInboxSharpIcon />}
                size="large"
                open={isGetFreeSessionOpen}
                setOpen={setIsGetFreeSessionOpen}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PageCTA;
