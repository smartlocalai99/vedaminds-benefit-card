"use client";

import {
  Users,
  Store,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      icon: <Users size={30} />,
      value: "50K+",
      label: "Active Members",
    },
    {
      icon: <Store size={30} />,
      value: "2,500+",
      label: "Vendors",
    },
    {
      icon: <ShieldCheck size={30} />,
      value: "99.8%",
      label: "Validation Accuracy",
    },
    {
      icon: <TrendingUp size={30} />,
      value: "1.2M+",
      label: "Transactions Processed",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#06271D] to-[#0B3B2D] rounded-[40px] overflow-hidden shadow-2xl"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className={`
                  flex items-center gap-5
                  px-10 py-10
                  relative cursor-pointer
                  transition-all duration-300
                  ${
                    index !== stats.length - 1
                      ? "border-b lg:border-b-0 lg:border-r border-white/10"
                      : ""
                  }
                `}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-white/5" />

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 rounded-full bg-[#0F4A38] flex items-center justify-center text-[#D8B15C] shrink-0"
                >
                  {item.icon}
                </motion.div>

                {/* Text */}
                <div>
                  <motion.h3
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="text-white text-[34px] font-bold leading-none"
                  >
                    {item.value}
                  </motion.h3>

                  <p className="text-[#D1D5DB] text-sm mt-2">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}