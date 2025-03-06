import Link from "next/link";
import React from "react";

const MealsDetail = ({ params }) => {
  return (
    <div>
      <h2 className="text-2xl text-white">Meals Detail - {params.slug}</h2>
      <p><Link href="/">Home</Link></p>
      <p><Link href="/community">community</Link></p>
      <p><Link href="/meals">meals</Link></p>
      <p><Link href="/meals/share">meals - share</Link></p>
    </div>
  );
};

export default MealsDetail;
