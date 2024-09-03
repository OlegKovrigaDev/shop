import { TTitle } from "@/types";

export const Title = ({ children }: TTitle) => (
  <h2 className="font-semibold text-[32px] md:text-[40px] text-[#100C1F] mb-10">
    {children}
  </h2>
);
