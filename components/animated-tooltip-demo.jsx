"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Arjun Sharma",
    designation: "Small Business Owner",
    image: "/tooltip/arjun-sharma.png",
  },
  {
    id: 2,
    name: "Priya Reddy",
    designation: "School Administrator",
    image: "/tooltip/priya-reddy.png",
  },
  {
    id: 3,
    name: "Rahul Verma",
    designation: "Healthcare Professional",
    image: "/tooltip/rahul-verma.png",
  },
  {
    id: 4,
    name: "Ananya Patel",
    designation: "Community Member",
    image: "/tooltip/ananya-patel.png",
  },
  {
    id: 5,
    name: "Vikram Singh",
    designation: "Retail Partner",
    image: "/tooltip/vikram-singh.png",
  },
  {
    id: 6,
    name: "Meera Nair",
    designation: "Parent & Educator",
    image: "/tooltip/meera-nair.png",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="mt-7 flex w-full min-w-0 flex-row items-center justify-start">
      <AnimatedTooltip items={people} />
    </div>
  );
}
