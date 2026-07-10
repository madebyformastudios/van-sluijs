import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Diensten from "@/components/Diensten";
import Projecten from "@/components/Projecten";
import OverOns from "@/components/OverOns";
import Offerte from "@/components/Offerte";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Header />
      <Hero />
      <TrustStrip />
      <Diensten />
      <Projecten />
      <OverOns />
      <Offerte />
      <Footer />
    </div>
  );
}
