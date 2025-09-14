"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { IconButton, Box } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

import GetFreeConsultation from "@/components/popups/GetFreeConsultation";

import { headerNavItems } from "@/constants/links";

import shafakBakaliLogo from "../../../public/shafakbakalilogo.svg";

import styles from "@/styles/components/Header.module.css";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [isGetFreeConsultation, setIsGetFreeConsultation] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <IconButton size="large" color="primary" onClick={() => setOpen(true)}>
        <MenuIcon fontSize="large" sx={{color: "var(--accent)"}} />
      </IconButton>

      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "var(--white)",
            zIndex: "var(--z-index-header-mobile-menu)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
          className={styles.mobileNavLinks}
        >
          <IconButton
            color="error"
            size="large"
            onClick={closeMenu}
            sx={{
              position: "fixed",
              top: 40,
              right: 24,
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <Box
            sx={{
              bgcolor: "var(--white)",
              width: "100%",
              padding: "8px 0",
              textAlign: "center",
            }}
          >
            <Link href="/" className={styles.logo}>
              <Image
                src={shafakBakaliLogo}
                alt="Advocate Shafak Bakali & Associates, Lawyer Logo"
                width={60}
              />
            </Link>
          </Box>
          {headerNavItems.map(({ label, href }) => (
            <Link key={href} href={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
          <GetFreeConsultation
            variant={"contained"}
            color={"primary"}
            title="Hire Now"
            btnEndIcon={"🡭"}
            size="large"
            open={isGetFreeConsultation}
            setOpen={setIsGetFreeConsultation}
          />
        </Box>
      )}
    </>
  );
};

export default MobileNavbar;
