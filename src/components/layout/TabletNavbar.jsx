"use client";

import Link from "next/link";

import { headerNavItems } from "@/constants/links";

import styles from "@/styles/components/Header.module.css";

const TabletNavbar = () => {
  return (
    <ul className={styles.navLinks}>
      {headerNavItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TabletNavbar;
