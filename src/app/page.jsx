import Banner from "@/component/home/Banner";
import { Blogs } from "@/component/home/Blogs";
import { Categories } from "@/component/home/Categories";
import { FAQ } from "@/component/home/FAQ";
import { Highlights } from "@/component/home/Highlights";
import { Newsletter } from "@/component/home/Newsletter";
import { Services } from "@/component/home/Services";
import { Statistics } from "@/component/home/Statistics";
import { Testimonials } from "@/component/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20 ">
      <Banner />
      <Services />
      <Categories />
      <Highlights />
      <Statistics />
      <Testimonials />
      <Blogs />
      <Newsletter />
      <FAQ />
    </div>
  );
}
