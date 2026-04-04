import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Repairs from "@/components/Repairs";
import Rentals from "@/components/Rentals";
import Parts from "@/components/Parts";
import Carriages from "@/components/Carriages";
import NotSure from "@/components/NotSure";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Repairs />
      <Rentals />
      <Parts />
      <Carriages />
      <NotSure />
      <FAQ />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
