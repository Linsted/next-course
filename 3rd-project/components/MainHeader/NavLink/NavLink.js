"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./NavLink.module.css";

const NavLink = ({ pathLink, children }) => {
  const path = usePathname();

  return (
    <Link
      href={pathLink}
      className={path.startsWith(pathLink) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
