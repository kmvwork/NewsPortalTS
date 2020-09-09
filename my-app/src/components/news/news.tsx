import React from "react";
import NewsItem from "./newsItem/newsItem";
import NewsItemSlider from "./newsItem/newsSlider/newsSlider";
import NewsItemAccordion from "./newsItem/newsAccordion/newsAccordion";

const News = () => {


  

  return (
    <div className="news container">
      <NewsItem
        itemImg="https://www.nastol.com.ua/download.php?img=201702/1600x1200/nastol.com.ua-207177.jpg"
        itemTheme="COUNTRY"
        itemTitle="Ridwan Kamil role in Success Story Organizing Surabaya"
        itemDesc="This is the reaction of many people is often asked when visiting a variety..."
      />
      <NewsItem
        itemImg="http://img.crazys.info/files/pics/2016.02/1456539448_luxfon.com-18433-1.jpg"
        itemTheme="PEOPLE"
        itemTitle="12 photos Indonesian beauty in your eyes"
        itemDesc="Bandung many people skeptical and apathetic towards revamping the city of Bandung with all tangled Problems. Though if you want a little to learn from the neighboring town..."
      />
      <NewsItem
        itemImg="https://img1.akspic.ru/image/146242-gora-gornyj_hrebet-banff-prirodnyj_landshaft-otrazhenie-3840x2160.jpg"
        itemTheme="TRAVEL"
        itemTitle="This 10 Country Beautiful Non-Asean Free Visa"
        itemDesc="When they wanted to travel but are reluctant to arrange a visa is a..."
      />
      <NewsItem
        itemImg="https://avatars.mds.yandex.net/get-pdb/2390681/4f240a37-a7a5-4cca-aace-b0300c0ad930/s1200?webp=false"
        itemTheme="TECHNOLOGY"
        itemTitle="Important Tips on Buying a New Mobile-Based Android"
        itemDesc="Newly purchased device did many advantages, especially those..."
      />
      <NewsItem
        itemImg="https://www.nastol.com.ua/download.php?img=201905/2560x1600/nastol.com.ua-340807.jpg"
        itemTheme="ECONOMY"
        itemTitle="Four Pillars Decide Fate of Economy Indonesia"
        itemDesc="The domestic economy is still faced with a number of structural challenges. To achieve sustain..."
      />
      <NewsItemSlider itemTheme="ECONOMY" />
      <NewsItemAccordion itemTheme="NEWEST POST" />
    </div>
  );
};

export default News;
