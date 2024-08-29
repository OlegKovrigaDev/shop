"use client";
import { ModalPage } from "@/components/parts/ModalPage";
import { TopListProps } from "@/types";
import { Phone } from "lucide-react";
import Link from "next/link";

export const TopList = ({ className }: TopListProps) => {
  return (
    <div className={className}>
      <ul className="flex items-center gap-2">
        <li className="flex items-center">
          <Link
            href="/contacts"
            className="md:w-[71px] flex flex-col items-center"
          >
            <Phone />
            <span className="md:block hidden  text-xs">Контакти</span>
          </Link>
        </li>

        <li className="flex items-center">
          <ModalPage />
        </li>
      </ul>
    </div>
  );
};
