import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import MoreFeatures from "@/components/MoreFeatures";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <MoreFeatures />
    </Layout>
  );
}
