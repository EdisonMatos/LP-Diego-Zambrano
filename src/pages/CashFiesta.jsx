import bgHeroImg from "../assets/imgs/hero/bgHero.webp";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionWrapper from "../components/sectionElements/SectionWrapper";
import imgLogoFiesta from "../assets/imgs/logo/logoFiesta.png";
import imgButtonFiesta from "../assets/imgs/hero/buttonFiesta.png";
import baloonFiesta from "../assets/imgs/hero/baloonFiesta.png";
import cakeFiesta from "../assets/imgs/hero/cakeFiesta.png";
import giftsFiesta from "../assets/imgs/hero/giftsFiesta.png";
import masksFiesta from "../assets/imgs/hero/masksFiesta.png";
import MotionDivUpToDown from "../components/animation/MotionDivUpToDown";
import MotionDivDownToUp from "../components/animation/MotionDivDownToUp";
import "../styles/fiesta.css";

export default function CashFiesta() {
  return (
    <div
      className="bg-cover h-screen w-screen"
      style={{ backgroundImage: `url(${bgHeroImg})` }}
    >
      <SectionArea className=" h-screen flex items-center justify-center">
        <SectionWrapper className=" relative">
          <img
            src={baloonFiesta}
            alt="Imagem de balão"
            className="w-[25%] desktop1:w-[25%] absolute left-0 top-0 fadeinfiest"
          />

          <img
            src={cakeFiesta}
            alt="Imagem de balão"
            className="w-[25%] desktop1:w-[25%] absolute left-0 bottom-0 fadeinfiest"
          />
          <img
            src={masksFiesta}
            alt="Imagem de balão"
            className="w-[25%] desktop1:w-[25%] absolute right-0 top-0 fadeinfiest"
          />
          <img
            src={giftsFiesta}
            alt="Imagem de balão"
            className="w-[25%] desktop1:w-[25%] absolute right-0 bottom-0 fadeinfiest"
          />

          <div className="logoAndButtonArea w-[100%] desktop1:w-[60%] flex-col items-center justify-center my-[40px] ">
            <div className="mb-[20px]">
              <MotionDivUpToDown>
                <img src={imgLogoFiesta} alt="Logo Cash Fiesta" />
              </MotionDivUpToDown>
            </div>
            <div className="flex items-center ">
              <a href="#" className="w-full">
                <MotionDivDownToUp className="flex justify-center w-full">
                  <img
                    src={imgButtonFiesta}
                    alt="Logo Button Fiesta"
                    className="w-[40%] pulse-button"
                  />
                </MotionDivDownToUp>
              </a>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
