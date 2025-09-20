import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import styles from "@/styles/pages/PracticeAreapage.module.css";

const PracticeAreaServices = ({
  firstSectionID,
  secondSectionID,
  thirdSectionID,
  fourthSectionID,
  fifthSectionID,
}) => {
  return (
    <>
      <section
        id={firstSectionID}
        className={`${styles.heroImageSection} ${styles.practiceAreaLitigationServices}`}
      >
        {/* Video Overlay (optional - for better text contrast) */}
        {/* <div className={styles.heroOverlay}></div> */}

        <Container>
          <div className={styles.heroContent}>
            <Box
              width={{ xs: "100%", lg: "50%" }}
              minHeight={{ xs: "40vh", sm: "var(--fullViewportHeight)" }}
              display={"flex"}
              alignItems={"center"}
            >
              <Stack spacing={2} p={2} bgcolor={"var(--primaryOverlay)"}>
                <h2 style={{ color: "var(--white)" }}>
                  Civil & Criminal Litigation
                </h2>
                <p style={{ color: "var(--white)" }}>
                  Strong representation in court with a focus on protecting your
                  rights in disputes, trials, and appeals.
                </p>
              </Stack>
            </Box>
          </div>
        </Container>
      </section>
      <section
        id={secondSectionID}
        className={`${styles.heroImageSection} ${styles.practiceAreaDivorceServices}`}
      >
        {/* Video Overlay (optional - for better text contrast) */}
        {/* <div className={styles.heroOverlay}></div> */}

        <Container>
          <div className={styles.heroContent}>
            <Box
              ml={"auto"}
              width={{ xs: "100%", lg: "50%" }}
              minHeight={{ xs: "40vh", sm: "var(--fullViewportHeight)" }}
              display={"flex"}
              alignItems={"center"}
            >
              <Stack spacing={2} p={2} bgcolor={"var(--primaryOverlay)"}>
                <h2 style={{ color: "var(--white)" }}>
                  Family Law & Divorce Matters
                </h2>
                <p style={{ color: "var(--white)" }}>
                  Compassionate guidance in marriage disputes, custody, alimony,
                  and property division.
                </p>
              </Stack>
            </Box>
          </div>
        </Container>
      </section>
      <section
        id={thirdSectionID}
        className={`${styles.heroImageSection} ${styles.practiceAreaRealEstateServices}`}
      >
        {/* Video Overlay (optional - for better text contrast) */}
        {/* <div className={styles.heroOverlay}></div> */}

        <Container>
          <div className={styles.heroContent}>
            <Box
              width={{ xs: "100%", lg: "50%" }}
              minHeight={{ xs: "40vh", sm: "var(--fullViewportHeight)" }}
              display={"flex"}
              alignItems={"center"}
            >
              <Stack spacing={2} p={2} bgcolor={"var(--primaryOverlay)"}>
                <h2 style={{ color: "var(--white)" }}>
                  Property & Real Estate Law
                </h2>
                <p style={{ color: "var(--white)" }}>
                  Resolving disputes, drafting agreements, handling
                  registrations, and conducting legal due diligence.
                </p>
              </Stack>
            </Box>
          </div>
        </Container>
      </section>
      <section
        id={fourthSectionID}
        className={`${styles.heroImageSection} ${styles.practiceAreaDocumentationServices}`}
      >
        {/* Video Overlay (optional - for better text contrast) */}
        {/* <div className={styles.heroOverlay}></div> */}

        <Container>
          <div className={styles.heroContent}>
            <Box
              ml={"auto"}
              width={{ xs: "100%", lg: "50%" }}
              minHeight={{ xs: "40vh", sm: "var(--fullViewportHeight)" }}
              display={"flex"}
              alignItems={"center"}
            >
              <Stack spacing={2} p={2} bgcolor={"var(--primaryOverlay)"}>
                <h2 style={{ color: "var(--white)" }}>
                  Legal Documentation & Agreements
                </h2>
                <p style={{ color: "var(--white)" }}>
                  Drafting and reviewing MoUs, notices, affidavits, and
                  contracts with precision.
                </p>
              </Stack>
            </Box>
          </div>
        </Container>
      </section>
      <section
        id={fifthSectionID}
        className={`${styles.heroImageSection} ${styles.practiceAreaCyberServices}`}
      >
        {/* Video Overlay (optional - for better text contrast) */}
        {/* <div className={styles.heroOverlay}></div> */}

        <Container>
          <div className={styles.heroContent}>
            <Box
              width={{ xs: "100%", lg: "50%" }}
              minHeight={{ xs: "40vh", sm: "var(--fullViewportHeight)" }}
              display={"flex"}
              alignItems={"center"}
            >
              <Stack spacing={2} p={2} bgcolor={"var(--primaryOverlay)"}>
                <h2 style={{ color: "var(--white)" }}>Cyber Crime</h2>
                <p style={{ color: "var(--white)" }}>
                  Filing complaints, guiding through due process, and handling
                  cyber fraud and e-commerce disputes.
                </p>
              </Stack>
            </Box>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PracticeAreaServices;
