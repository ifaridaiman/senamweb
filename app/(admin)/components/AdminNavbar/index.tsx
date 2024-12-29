import Image from "next/image";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const AdminNavbar = () => {
  return (
    <div className="text-black w-full  border-b border-gray-400 shadow-md">
      <div className="flex flex-row mx-auto justify-between items-center p-2 max-w-7xl">
        <div>
          <Link href={"/dashboard"}>
            <Image
              src={"/assets/logo/senamLogo_vertical.png"}
              width={200}
              height={100}
              alt="senamLogo_IconOnly"
            />
          </Link>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
