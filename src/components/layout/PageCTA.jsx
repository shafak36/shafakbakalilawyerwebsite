import Image from "next/image";

import { Box, Button, Divider, Grid, Stack } from "@mui/material";
import CallSharpIcon from "@mui/icons-material/CallSharp";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import { phoneNumber } from "@/constants/personalInformation";

import advocateLogo from "../../../public/advocate-logo.webp";

import styles from "@/styles/components/PageCTA.module.css";

const PageCTA = ({ pageId, textured = false }) => {
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
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack
              bgcolor={"var(--white)"}
              p={2}
              pb={4}
              spacing={2}
              sx={{ border: "4px double var(--white)" }}
              height={"100%"}
              maxWidth={{ xs: "100%", lg: "70%" }}
              mx={"auto"}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box height={"100px"} width={"100px"} position={"relative"}>
                  <Image
                    src={advocateLogo}
                    alt={"Advocate Shafak Bakali"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectFit: "contain",
                      transform: "scale(1)",
                    }}
                  />
                </Box>
                <Stack alignItems={"flex-end"}>
                  <h4 style={{ color: "var(--black)" }}>Adv. Shafak Bakali</h4>
                  <p style={{ color: "var(--black)" }}>BCA, B.Com, LLB, LLM</p>
                </Stack>
              </Stack>
              <Divider
                sx={{ backgroundColor: "var(--black)", width: "100%" }}
              />
              <p style={{ fontSize: "12px", color: "var(--black)" }}>
                Criminal | Civil | Labour | Agreements | Registration | Notary |
                Cyber Law
              </p>
              <Divider
                sx={{ backgroundColor: "var(--black)", width: "100%" }}
              />
              <a href={`tel:${phoneNumber}`}>
                <Button
                  size="large"
                  disableElevation
                  variant="contained"
                  color="primary"
                  endIcon={<CallSharpIcon />}
                  sx={{ borderRadius: "var(--high-rounded-mui-btn)" }}
                >
                  Call Now
                </Button>
              </a>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PageCTA;
