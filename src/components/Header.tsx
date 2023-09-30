import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import inkIcon from "../assets/images/ink.png";
import RegisterButton from "@/components/RegisterButton";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-6 px-8 flex items-center justify-between">
      <Link href={"/"} className="flex items-end">
        <Image src={inkIcon} alt="Ink Logo" width={50} height={50} />
        <h2 className="font-black text-3xl">.Social</h2>
      </Link>

      <div className="flex items-center gap-4">
        <RegisterButton />
        <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
