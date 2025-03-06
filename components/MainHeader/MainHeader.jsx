import React from "react";
import Link from "next/link";
import foodiesLogo from "@/assets/logo.png";
import classes from "@/components/MainHeader/MainHeader.module.css";
import Image from "next/image";
import MainHeaderBackround from "./MainHeaderBackround";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackround />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            width={100}
            height={100}
            src={foodiesLogo.src}
            alt="logo"
            priority
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
