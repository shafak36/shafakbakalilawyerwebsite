"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

export default function FirstLoadPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already dismissed the popup
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenPopup", "true");
    setOpen(false);
  };

  if (!mounted) return null; // <-- this is the main change

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="welcome-dialog-title"
    >
      <DialogTitle id="welcome-dialog-title">Disclaimer</DialogTitle>
      <DialogContent>
        <section id="disclaimer">
          <p>
            In India, the practice of law is governed by the Bar Council of
            India, which restricts advocates from advertising or soliciting
            clients in any form. By visiting the website of
            <strong>Adv. Shafak A. Bakali</strong> (www.shafakbakali.com), you
            acknowledge and accept the following terms:
          </p>

          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <li>
              <strong>Purpose of Content:</strong> The material on this site is
              intended only to provide general information about the Advocate
              and her areas of practice. It should not be regarded as an
              invitation, solicitation, or advertisement. Nothing here
              constitutes legal advice, and accessing this site does not
              establish an advocate–client relationship.
            </li>
            <li>
              <strong>User’s Initiative:</strong> You confirm that you are
              accessing this website on your own initiative and for your own
              information. There has been no solicitation, inducement, or
              advertisement from Adv. Shafak A. Bakali or her associates.
            </li>
            <li>
              <strong>Personal Information:</strong> If you choose to share
              details such as your name, contact number, or case‑related
              queries, this information will be used only for responding to
              inquiries, arranging consultations, or improving client service.
              All data will be handled in line with applicable data protection
              laws.
            </li>
            <li>
              <strong>Accuracy & Consent:</strong> Any information you provide
              must be accurate, complete, and submitted voluntarily. By doing
              so, you also confirm that you are of legal age under the laws of
              your jurisdiction.
            </li>
            <li>
              <strong>Recruitment & Internships:</strong> Adv. Shafak A. Bakali
              does not request or accept payments for recruitment or internship
              opportunities. Any such demand is fraudulent and should be
              ignored.
            </li>
            <li>
              <strong>Intellectual Property:</strong> All content, text, and
              design elements on this website are the exclusive intellectual
              property of Adv. Shafak A. Bakali. Unauthorized use, reproduction,
              or distribution is strictly prohibited.
            </li>
            <li>
              <strong>Limitation of Liability:</strong> The Advocate bears no
              responsibility for any consequences arising from reliance on the
              information provided on this website.
            </li>
          </ul>

          <p>
            By continuing to use this website, you agree to these terms and
            conditions.
          </p>
        </section>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
