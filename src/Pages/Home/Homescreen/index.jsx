import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Rémi Lavigne portfolio, front-end web developer and UX/UI designer</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet"></link>
        <meta name="description" content="Hey my name is Rémi, and welcome to my portfolio. I'm a fornt-end web developer and UX/UI designer based in Lyon"></meta>
        <meta name="keywords" content="Front-end web developer, UX design, UI design, portfolio"></meta>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
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
