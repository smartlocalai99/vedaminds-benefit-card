
"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Coffee Vendor",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      review:
        "VEDA helped us increase repeat customers by 42%. Membership validation became super fast and secure.",
    },
    {
      name: "Priya Sharma",
      role: "Retail Partner",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      review:
        "The dashboard analytics gave us complete visibility into discounts and customer engagement. Highly recommended.",
    },
    {
      name: "Arjun Reddy",
      role: "Restaurant Owner",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200",
      review:
        "Easy setup, premium experience, and secure transactions. VEDA transformed how we manage memberships.",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#B3873A] uppercase tracking-[3px] text-sm font-semibold">
            SUCCESS STORIES
          </p>

          <h2 className="text-[40px] md:text-[54px] font-serif text-[#0E1B16] mt-4 leading-tight">
            Trusted by businesses
            <br />
            that grow smarter.
          </h2>

          <p className="text-[#6B7280] text-lg mt-5 max-w-[650px] mx-auto leading-8">
            Thousands of vendors and businesses use
            VEDA to improve customer loyalty, secure
            transactions, and increase growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                relative bg-white
                rounded-[32px]
                border border-[#EFE8DD]
                p-8 shadow-sm
                hover:shadow-2xl
                hover:bg-white
                hover:-translate-y-2
                transition-all duration-500
              "
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D8B15C]/10 blur-[90px] rounded-full" />

              {/* Stars */}
              <div className="flex items-center gap-1 text-[#D8B15C] mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-[#4B5563] text-[17px] leading-8 relative z-10">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8 relative z-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#F5E8CA]"
                />

                <div>
                  <h4 className="font-semibold text-[#0E1B16] text-lg">
                    {item.name}
                  </h4>

                  <p className="text-sm text-[#6B7280]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

