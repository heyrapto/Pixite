import Banner from "@/components/banner/Banner";
import Example from "@/components/Dropdown";
import Categories from "@/section/categories/Categories";
import CtaFooter from "@/section/ctafooter/CtaFooter";
import Footer from "@/section/footer/Footer";
import Hero from "@/section/hero/Hero";
import Projects from "@/section/projects/Projects";
import Ranking from "@/section/ranking/Ranking";
import WeDo from "@/section/wedo/WeDo";
import WhatMakesUs from "@/section/whatmakesus/WhatMakesUs";
import Testimonial from "@/section/testimonial/Testimonial";
import Team from "@/section/team/Team";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <Ranking />
      <Categories />
      <Projects />
      <WeDo />
      <Banner />
      <Testimonial />
      <WhatMakesUs />
      <Team />
      <CtaFooter />
      <Footer/>

     
    </div>
  );
}
