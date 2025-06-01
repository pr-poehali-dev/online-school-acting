import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import LocalClasses from "@/components/LocalClasses";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <LocalClasses />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
