import Link from "next/link";
import Image from "next/image";

import NavLink from "./NavLink/NavLink";

import logoImage from "@/assets/logo.png";

import classes from "./main-header.module.css";
import MainHeaderBackground from "./MainHeaderBackground/MainHeaderBackground";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImage} alt="logo" priority />
          <span>Next Food</span>
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink pathLink="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink pathLink="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
