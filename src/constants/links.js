import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

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
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/+91-8956784556`,
    icon: FaWhatsapp,
  },
];