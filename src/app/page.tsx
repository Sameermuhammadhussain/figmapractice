import Arrival from "@/app/components/arrival";
import Blog from "@/app/components/blog";
import Follow from "@/app/components/follow";

import Hero from "@/app/components/hero";
import Pick from "@/app/components/pick";
import Side from "@/app/components/side";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="w-full h-[0px] py-[35px] pl-[505px] pr-[100px] flex gap-[158px]  bg-[#FBEBB5]">
        <nav className="w-[430px] h-[24px] flex justify-center items-center gap-[75px] text-[18px] font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/blog"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <div className="w-[247px] h-[28px] flex gap-[45px]">
          <Link href={"/account"}>
            <User
              size={28}
              className="hover:text-gray-600  stroke-[2]"
              cursor="pointer"
            />
          </Link>

          <Link href={"/"}>
            <Search size={28} className="hover:text-gray-600 stroke-[2]" />
          </Link>
          <Link href={"/checkout"}>
            {" "}
            <Heart
              size={28}
              className="hover:text-gray-600  stroke-[2]"
              cursor="pointer"
            />
          </Link>
          <Link href={"/cart"}>
            {" "}
            <ShoppingCart
              size={28}
              className="hover:text-gray-600 stroke-[2]"
              cursor="pointer"
            />
          </Link>
        </div>
      </div>
      <Hero />
      <Side />
      <Pick />
      <Arrival />
      <Blog />
      <Follow />
    </>
  );
}
