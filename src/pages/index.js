import FleetSection from "@/components/home-page/FleetSection";
import Hero from "@/components/home-page/Hero";
import LocationsSection from "@/components/home-page/LocationsSection";
import ServicesSection from "@/components/home-page/ServicesSection";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <FleetSection />
      <LocationsSection />
    </Layout>
  );
}
