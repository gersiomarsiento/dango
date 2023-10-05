"use client";
import Card from "./Cards";
import { useState } from "react";

export default function Home() {
  const [totalItemCount, setTotalItemCount] = useState(6); // To keep track/update item count

  const handleTotalItemCountChange = (newItemCount, prevItemCount) => {
    // Values coming fron Card inputs (itemCount)
    setTotalItemCount(
      totalItemCount + parseInt(newItemCount) - parseInt(prevItemCount) // Modify total item count using the difference between old and new values in input
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
