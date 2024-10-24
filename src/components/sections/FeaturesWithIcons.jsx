import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Icon1 from "../../assets/imgs/icons/icon1.png";
import Icon2 from "../../assets/imgs/icons/icon2.png";
import Icon3 from "../../assets/imgs/icons/icon3.png";
import Icon4 from "../../assets/imgs/icons/icon4.png";
import Button from "../interactives/Button";

export default function FeaturesWithIcons() {
  return (
    <SectionArea id="service" className="squares">
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color="dark"
      />

      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="col1 desktop1:w-[28%] flex flex-col items-center">
            <MotionDivDownToUp className="flex flex-col items-center">
              <IconFeatureCard
                icon={content.texts.features.card1.icon}
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card2.icon}
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
                className="tablet1:mt-[26px] desktop1:mt-0 desktop2:mt-[46px]"
              />
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
            <div
              className="hidden h-[640px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            >
              {/* <img
              src={content.texts.features.imgFeatures}
              alt="Imagem ilustrativa da seção"
              className="rounded-2xl"
            /> */}
            </div>
          </MotionDivDownToUp>
          <div className="col3 desktop1:w-[28%] flex flex-col items-center">
            <MotionDivDownToUp className=" flex items-center w-full tablet1:w-[290px] desktop1:w-[250px] ">
              <IconFeatureCard
                icon={content.texts.features.card3.icon}
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp className=" w-full tablet1:w-[290px] desktop1:w-[250px] flex flex-col items-center">
              <IconFeatureCard
                icon={content.texts.features.card4.icon}
                title={content.texts.features.card4.title}
                paragraph={content.texts.features.card4.subtitle}
                className="tablet1:mt-[26px] desktop1:mt-0 desktop2:mt-[46px]"
              />
              <Button
                label="Saber mais"
                size="small"
                color="bg-neutral-200"
                buttonLink="https://heyzine.com/flip-book/e3fb6731c9.html"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-plus"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
