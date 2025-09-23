import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import {
  facebook,
  instagram,
  linkedin,
  whatsapp,
} from "./personalInformation";

export const headerNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Area", href: "/practice-area" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const socialLinks = [
  {
    label: "Facebook",
    href: `https://facebook.com/${facebook}`,
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: `https://instagram.com/${instagram}`,
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: `https://linkedin.com/in/${linkedin}`,
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${whatsapp}`,
    icon: FaWhatsapp,
  },
];
