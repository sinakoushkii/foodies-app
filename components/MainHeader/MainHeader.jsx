import React from "react";
import Link from "next/link";
import foodiesLogo from "@/assets/logo.png";
import classes from "@/components/MainHeader/MainHeader.module.css";
import Image from "next/image";
import MainHeaderBackround from "./MainHeaderBackround";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
