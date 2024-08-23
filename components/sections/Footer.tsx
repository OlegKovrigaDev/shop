import { footerData } from "@/constants";
import Link from "next/link";
import { Logo } from "../parts/Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#47464B] text-white">
      <div className="container pt-8 pb-[58px] flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        <Logo />
        {footerData.map((column, index) => (
          <div key={index} className="mb-6 md:mb-0">
            <p className="text-xl md:text-2xl mb-1">{column.title}</p>

            {column.items && (
              <ul className="text-lg md:text-2xl flex flex-col gap-1">
                {column.items.map(({ id, text, link }) => (
                  <li key={id}>
                    <Link href={link}>{text}</Link>
                  </li>
                ))}
              </ul>
            )}
            {column.phones && (
              <ul className="text-base md:text-sm">
                {column.phones.map(({ id, text, link }) => (
                  <li key={id}>
                    <Link href={`tel:${link}`}>{text}</Link>
                  </li>
                ))}
                <li>
                  <div className="mt-4 flex justify-center md:justify-start gap-4">
                    {column.socials.map(({ id, icon: Icon, link }) => (
                      <Link key={id} href={link}>
                        <Icon size={20} />
                      </Link>
                    ))}
                  </div>
                </li>
              </ul>
            )}
            {column.schedule && (
              <div>
                {column.schedule.map(({ id, text }) => (
                  <p key={id} className="text-sm mb-1">
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};
