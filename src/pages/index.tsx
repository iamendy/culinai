import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import MoreFeatures from "@/components/MoreFeatures";
import Quote from "@/components/icons/Quote";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Join from "@/components/Join";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <MoreFeatures />
      <Quote />
      {/* <Testimonial /> */}
      <Faq />
      <CTA />
      <Join />
    </Layout>
  );
}
