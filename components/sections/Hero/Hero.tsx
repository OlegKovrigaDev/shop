import { SideBar } from "./SideBar";
import { Slider } from "./Slider";

export const Hero = () => {
  return (
    <section className="mt-8 flex justify-between">
      <SideBar />
      <Slider />
    </section>
  );
};
