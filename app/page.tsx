import { Categories, ProductSlider } from "@/components/parts";
import { Advantages, Ethaps, Hero, Section } from "@/components/sections";
import { products } from "@/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Section title="Нові товари">
        <ProductSlider arr={products}></ProductSlider>
      </Section>
      <Section title="ХІТ продажу">
        <ProductSlider arr={products}></ProductSlider>
      </Section>
      <Section title="Етапи покупки">
        <Ethaps />
      </Section>
      <Section title="Популярні категорії">
        <Categories />
      </Section>
      <Section title="Також вас може зацікавити">
        <ProductSlider arr={products}></ProductSlider>
      </Section>
      <Section title="Чому нас обирають" className="mb-[72px]">
        <Advantages />
      </Section>
    </>
  );
}
