import Navbar from "../components/Navbar";
import Homebanner from "../components/HeroBanner";
import DashboardPreview from "../components/DashboardPreview";
import Stats from "../components/StatsSection";
import FeatureSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Homebanner />
        <DashboardPreview />
        <FeatureSection />
        <Stats />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
