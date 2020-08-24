import React from "react";
import ItemAccordion from "./itemAccordion";

type NewsItemAccordionProps = {
  itemTheme: string;
};

const NewsItemAccordion = (props: NewsItemAccordionProps) => {
  return (
    <div className="news_item accordion">
      <div className=" news_item-theme">
        <span className="news_item-theme-text bg-newpost">
          {props.itemTheme}
        </span>
      </div>

      <ItemAccordion
        id={1}
        checked="true"
        accTheme="TRAVEL"
        accTitle="Similar exist Painting Mysterious Alien in America"
        accText="Name Sego Canyon in the US has not been as popular as the Grand Canyon."
        accImg="https://img11.postila.ru/data/f0/70/3a/2e/f0703a2e49c4025e608a9ac40b8e57129606cf42a08d48b4578ac02e4ef2c56d.jpg"
      />
      <ItemAccordion
        id={2}
        checked="false"
        accTheme="LIFESTYLE"
        accTitle="This Secret Branded Goods Shopping Deals New York"
        accText="Name Sego Canyon in the US has not been as popular as the Grand Canyon."
        accImg="https://get.wallhere.com/photo/new-city-travel-newzealand-sky-cloud-lake-storm-southwest-reflection-water-pool-clouds-digital-photography-bay-town-blog-vineyard-high-pond-Community-october-village-sheep-dynamic-Stuck-pacific-wine-farm-resort-winery-photoblog-zealand-valley-Software-processing-reflective-southisland-otago-centralotago-Queenstown-gorge-imaging-growing-region-range-aotearoa-wakatipu-HDR-tutorial-trey-bluff-Cromwell-travelblog-customs-2010-nevis-ratcliff-tewaipounamu-gibbston-kawaru-hdrtutorial-stuckincustoms-treyratcliff-photographyblog-stuckincustomscom-nikond3x-tewakaamaui-1045201.jpg"
      />
      <ItemAccordion
        id={3}
        checked="false"
        accTheme="TRAVEL"
        accTitle="The Three Colors Beach in Malang!"
        accText="Name Sego Canyon in the US has not been as popular as the Grand Canyon."
        accImg="https://get.wallhere.com/photo/sand-wet-waves-sea-beach-cloudy-protected-1070601.jpg"
      />
    </div>
  );
};

export default NewsItemAccordion;
