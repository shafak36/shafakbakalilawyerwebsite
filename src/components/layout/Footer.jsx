"use client";

import Link from "next/link";
import Image from "next/image";

import { Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import { socialLinks } from "@/constants/links";
import { emailAddress, phoneNumber } from "@/constants/personalInformation";

import shafakBakaliFullLogo from "../../../public/shafakbakaliandassociateslogo.png";

import styles from "@/styles/components/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <Grid container spacing={{ xs: 8, md: 2, lg: 4 }}>
          <Grid
            size={{ xs: 12, md: 6, lg: 3 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={2}>
              <Link href="/" className={styles.logo}>
                <Image
                  src={shafakBakaliFullLogo}
                  alt="Shafak Bakali & Associates Logo"
                  width={180}
                />
              </Link>
              <h4>Shafak Bakali & Associates</h4>
              <p className="caption">
                © {currentYear} Adv. Shafak Bakali. <br />
                All rights reserved
              </p>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 2 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={4}>
              <h5>Links</h5>
              <Stack spacing={1}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/practice-area">Practice Area</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 4 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={4}>
              <h5>Practice Area | Services</h5>
              <Stack spacing={1}>
                <Link href="/practice-area">Litigation</Link>
                <Link href="/practice-area">Family Matters</Link>
                <Link href="/practice-area">Real Estate</Link>
                <Link href="/practice-area">Legal Documentation</Link>
                <Link href="/practice-area">Cyber Crime</Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 3 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={4}>
              <h5>Contact</h5>
              <Stack spacing={1}>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </Stack>
              <h5>Follow Us</h5>
              <Stack
                direction={"row"}
                justifyContent={{ xs: "center", md: "left" }}
                spacing={2}
              >
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
