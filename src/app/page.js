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
        <Card
          onItemCountChange={handleTotalItemCountChange}
          defaultTitle="Tourmaline & Eucalyptus Bar Soap"
          imgSrc="1.webp"
        />
        <Card
          onItemCountChange={handleTotalItemCountChange}
          defaultTitle="Tourmaline & Argan Oil Bar Soap"
          imgSrc="2.webp"
        />
        <Card
          onItemCountChange={handleTotalItemCountChange}
          defaultTitle="Tourmaline & Tea Tree Bar Soap"
          imgSrc="3.webp"
        />
        <Card
          onItemCountChange={handleTotalItemCountChange}
          defaultTitle="Tourmaline & Unscented Bar Soap"
          imgSrc="4.webp"
        />
        <Card
          onItemCountChange={handleTotalItemCountChange}
          defaultTitle="Tourmaline & Tea Tree Bar Soap"
          imgSrc="5.webp"
          className="title-centered"
        />
        <Card
          onItemCountChange={handleTotalItemCountChange}
          defaultTitle="Tourmaline & Unscented Bar Soap"
          imgSrc="6.webp"
          className="title-centered"
        />
      </div>
    </>
  );
}
