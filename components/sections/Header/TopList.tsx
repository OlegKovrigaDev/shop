"use client";

import { topList } from "@/constants";
import { Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CartPopup } from "./CartPopup";
import { HoverMenu } from "./HoverMenu";
import { FC } from "react";
import { TopListProps } from "@/types";

export const TopList: FC<TopListProps> = ({ className }) => {
  return (
    <div className={className}>
      <ul className="flex items-center gap-5">
        <li className="flex lg:hidden items-center">
          {topList
            .filter(({ type }) => type === "cart")
            .map(({ id, link, text }) => (
              <HoverMenu key={id} icon={ShoppingCart} link={link} text={text}>
                <CartPopup text={text} />
              </HoverMenu>
            ))}
        </li>

        <li className="hidden lg:flex items-center">
          {topList.map(({ id, link, text, type, hover }) => (
            <div key={id}>
              {hover ? (
                <HoverMenu
                  icon={type === "cart" ? ShoppingCart : Phone}
                  link={link}
                  text={text}
                >
                  {type === "cart" && <CartPopup text={text} />}
                </HoverMenu>
              ) : (
                <Link
                  href={link}
                  className="w-[71px] flex flex-col items-center"
                >
                  {type === "cart" ? <ShoppingCart /> : <Phone />}
                  <span className="text-xs">{text}</span>
                </Link>
              )}
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};
