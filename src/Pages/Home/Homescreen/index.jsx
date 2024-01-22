import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills"
import LastWord from "../LastWord"

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyPortfolio />
      <AboutMe />
      <MySkills />
      <LastWord />
      <ContactMe />
      <Footer />
    </>
  );
}
