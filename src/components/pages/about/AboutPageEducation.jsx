"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { GiGraduateCap } from "react-icons/gi";
import { GiDiploma } from "react-icons/gi";

import Container from "@/components/layout/Container";

import styles from "@/styles/pages/Aboutpage.module.css";

const AboutPageEducation = ({ sectionID }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section id={sectionID} className={`${styles.educationSection}`}>
      <Container className="container-y-padding">
        <Timeline
          sx={{
            [`@media (max-width:600px)`]: {
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            },
          }}
          position={isSmallScreen ? "normal" : "alternate"}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" sx={{ p: 2 }}>
                <GiGraduateCap size={32} />
              </TimelineDot>
              <TimelineConnector sx={{ background: "var(--white)" }} />
            </TimelineSeparator>
            <TimelineContent height={90} mb={10}>
              <Stack height={"100%"} justifyContent={"center"}>
                <h4 style={{ color: "var(--accent)" }}>
                  {"L.L.M. (Master of Laws)"}
                </h4>
                <span style={{ color: "var(--white)" }}>
                  University of Pune
                </span>
              </Stack>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" sx={{ p: 2 }}>
                <GiGraduateCap size={32} />
              </TimelineDot>
              <TimelineConnector sx={{ background: "var(--white)" }} />
            </TimelineSeparator>
            <TimelineContent height={90} mb={10}>
              <Stack height={"100%"} justifyContent={"center"}>
                <h4 style={{ color: "var(--accent)" }}>
                  {"LL.B. (Bachelor of Laws)"}
                </h4>
                <span style={{ color: "var(--white)" }}>
                  University of Mumbai
                </span>
              </Stack>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" sx={{ p: 2 }}>
                <GiGraduateCap size={32} />
              </TimelineDot>
              <TimelineConnector sx={{ background: "var(--white)" }} />
            </TimelineSeparator>
            <TimelineContent height={90} mb={10}>
              <Stack height={"100%"} justifyContent={"center"}>
                <h4 style={{ color: "var(--accent)" }}>
                  {"B.C.A. (Bachelor of Computer Applications)"}
                </h4>
                <span style={{ color: "var(--white)" }}>
                  University of Mumbai
                </span>
              </Stack>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" sx={{ p: 2 }}>
                <GiDiploma size={32} />
              </TimelineDot>
              <TimelineConnector sx={{ background: "var(--white)" }} />
            </TimelineSeparator>
            <TimelineContent height={90} mb={10}>
              <Stack height={"100%"} justifyContent={"center"}>
                <h4 style={{ color: "var(--accent)" }}>
                  {"International Law on E-Commerce"}
                </h4>
                <span style={{ color: "var(--white)" }}>
                  Asian School of Law
                </span>
              </Stack>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" sx={{ p: 2 }}>
                <GiDiploma size={32} />
              </TimelineDot>
              <TimelineConnector sx={{ background: "var(--white)" }} />
            </TimelineSeparator>
            <TimelineContent height={90}>
              <Stack height={"100%"} justifyContent={"center"}>
                <h4 style={{ color: "var(--accent)" }}>
                  {"DCL (Diploma in Cyber Law)"}
                </h4>
                <span style={{ color: "var(--white)" }}>
                  {" "}
                  Government Law College & Asian School of Law
                </span>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </section>
  );
};

export default AboutPageEducation;
