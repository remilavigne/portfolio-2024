import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills"
import LastWord from "../LastWord"
import MyPhilosophy from "../MyPhilosophy"

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyPortfolio />
      <AboutMe />
      <MySkills />
      <MyPhilosophy />
      <LastWord />
      <ContactMe />
      <Footer />
    </>
  );
}
