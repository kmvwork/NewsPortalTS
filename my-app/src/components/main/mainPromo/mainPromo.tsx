import React from "react";
import MainPromoItem from "./mainPromoItem";

const MainPromo = () => {

  const mainPromoItemData:any[] = [
    { 
      id : '1',
      active : "true",
      imgPromo : "https://s1.1zoom.ru/big7/547/Bicycle_Clouds_Puddle_345606.jpg",
      promoTheme : "LIFESTYLE",
      promoTitle : "Things To Do Before You're 30",
      promoDesc : "For many it means that you’re no longer in the hard-partying, bad decision-making stage of your life for better or for worse."
    },
    {
      id : '2',
      active : "false",
      imgPromo : "https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201701/science1-fb_011117032255.jpg",
      promoTheme : "SCIENCE",
      promoTitle : "Value-Based Care‘s Data Problem",
      promoDesc : "For many it means that you’re no longer in the hard-partying, bad decision-making stage of your life for better or for worse."
    },
    {
      id : '3',
      active : "false",
      imgPromo : "https://avatars.mds.yandex.net/get-pdb/1470084/448177d6-2084-48ac-98dd-5681a624380c/s1200?webp=false",
      promoTheme : "TECHNOLOGY",
      promoTitle : "How to Design for Virtual Reality",
      promoDesc: "For many it means that you’re no longer in the hard-partying, bad decision-making stage of your life for better or for worse."
    },
    {
      id : '4',
      active : "false",
      imgPromo : "https://the-steppe.com/pictures/files/yufufk/Anel/brown.jpg",
      promoTheme : "EDUCATION",
      promoTitle : "What I Will Fret Over",
      promoDesc : "For many it means that you’re no longer in the hard-partying, bad decision-making stage of your life for better or for worse."
    }

  ]


  return (
    <div className="main_promo">
      <MainPromoItem
        elements = {mainPromoItemData}
      />
    </div>
  );
};

export default MainPromo;
