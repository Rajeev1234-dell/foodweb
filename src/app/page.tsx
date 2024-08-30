import Hero from "@/components/HeroSection/Hero";
import {
  heroSection,
  footerSection,
  offerSection,
  featuredSection,
  testimonialSection,
  aboutSection,
  productSection,
} from "../json";
import Footer from "@/components/Footer/Footer";
import Offer from "@/components/OfferSection/Offer";
import Featured from "@/components/FeaturedSection/Featured";
import Testimonial from "@/components/Testimonial/Testimonial";
import About from "@/components/AboutSection/About";

export default function Home() {
  return (
    <div>
      <Hero data={heroSection} />
      <About about_data={aboutSection} />
      <About about_data={productSection} />
      <Featured featured_data={featuredSection} />
      <Testimonial testimonial_data={testimonialSection} />
      <Offer offer_data={offerSection} />
      <Footer footer_data={footerSection} />
    </div>
  );
}
