import Link from "next/link";
import React from "react";

const MealsPage = () => {
  return (
    <div>
      MealsPage
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/community">community</Link>
      </p>
      <p>
        <Link href="/meals">meals</Link>
      </p>
      <p>
        <Link href="/meals/share">meals - share</Link>
      </p>
    </div>
  );
};

export default MealsPage;
