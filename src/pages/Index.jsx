import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import BackToTopButton from "../components/interactives/BackToTopButton";
import HeroBgImg from "../components/sections/HeroBgImg";
import FooterSocial from "../components/sections/FooterSocial";
import NavbarSocial from "../components/sections/NavbarSocial";
import FeaturesWithIcons from "../components/sections/FeaturesWithIcons";
import Numbers from "../components/sections/Numbers";
import AboutInstagram from "../components/sections/AboutInstagram";
import HowItWorksImage from "../components/sections/HowItWorksImage";
import CtaMinimal from "../components/sections/CtaMinimal";
import Depositions from "../components/sections/Depositions";
import Hero from "../components/sections/Hero";
import FeaturesButton from "../components/sections/FeaturesButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";

// Para ativar o modal na Sessão Feature, copiar e colar: modal={true} e remover para desativar.

export default function Index() {
  return (
    <div>
      <NavbarSocial />
      <Hero />
      <FeaturesWithIcons modal={true} />
      {/* <FeaturesButton /> */}
      {/* <Numbers /> */}
      <About />
      {/* <AboutInstagram /> */}
      <CtaMinimal />
      {/* <Depositions /> */}
      <HowItWorksImage />
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
