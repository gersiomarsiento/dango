"use client";
import Card from "./Cards";
import { useState } from "react";

export default function Home() {
  const [totalItemCount, setTotalItemCount] = useState(6); // State for total totalItem count

  const handleTotalItemCountChange = (newItemCount, prevItemCount) => {
    setTotalItemCount(
      totalItemCount + parseInt(newItemCount) - parseInt(prevItemCount)
    );
  };
  return (
    <>
      <div className="text-center text-xl m-2">
        Total Item Count: {totalItemCount}
      </div>
      <div className="main-container flex-wrap">
        <Card onItemCountChange={handleTotalItemCountChange} />
        <Card onItemCountChange={handleTotalItemCountChange} />
        <Card onItemCountChange={handleTotalItemCountChange} />
        <Card onItemCountChange={handleTotalItemCountChange} />
        <Card onItemCountChange={handleTotalItemCountChange} />
        <Card onItemCountChange={handleTotalItemCountChange} />
      </div>
    </>
  );
}
