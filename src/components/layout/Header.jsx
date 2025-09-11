"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import GetFreeConsultation from "@/components/popups/GetFreeConsultation";
import DesktopNavbar from "@/components/layout/DesktopNavbar";
import TabletNavbar from "@/components/layout/TabletNavbar";
import MobileNavbar from "@/components/layout/MobileNavbar";

import shafakBakaliLogo from "../../../public/shafakbakalilogo.svg";

import styles from "@/styles/components/Header.module.css";

const Header = () => {
  const [isGetFreeConsultation, setIsGetFreeConsultation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll based glass effect on header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : ""
        }`}
      >
        <Container>
          <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
              <Image
                src={shafakBakaliLogo}
                alt="Advocate Shafak Bakali & Associates, Lawyer Logo"
                width={60}
              />
            </Link>

            <Box sx={{ display: { xs: "none", sm: "block", lg: "none" } }}>
              <TabletNavbar width={300} />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <DesktopNavbar />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <GetFreeConsultation
                variant={"contained"}
                color={"secondary"}
                title="Hire Now 🡵"
                size="large"
                open={isGetFreeConsultation}
                setOpen={setIsGetFreeConsultation}
              />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <MobileNavbar />
            </Box>
          </nav>
        </Container>
      </header>
      {/* Offset 145 header height, because header is position fixed*/}
      <Box height={145}></Box>
    </>
  );
};

export default Header;
