import React from 'react';
import MainPromoItem from './mainPromoItem';


const MainPromo = () => {
    return (
        <div className="main_promo">
            <MainPromoItem  imgPromo = 'bg_main.jpg' 
                            promoTheme = "LIFESTYLE"
                            promoTitle = "Things To Do Before You're 30"
                            promoDesc = "For many it means that you’re no longer in the hard-partying, bad decision-making stage of your life for better or for worse."
            />
             <MainPromoItem  imgPromo = 'main_img2.jpg' 
                             promoTheme = "SCIENCE"
                             promoTitle = "Value-Based Care‘s Data Problem"
                            
                            promoDesc = "For many it means that you’re no longer in the hard-partying, bad decision-making stage of your life for better or for worse."
            />
             <MainPromoItem  imgPromo = 'main_img3.jpg' 
                             promoTheme = "TECHNOLOGY"
                             promoTitle = "How to Design for Virtual Reality"
                             promoDesc = "For many it means that you’re no longer in the hard-partying, bad decision-making stage of your life for better or for worse."
            />
             <MainPromoItem  imgPromo = 'main_img4.jpg' 
                             promoTheme = "EDUCATION"
                             promoTitle = "What I Will Fret Over"
                             promoDesc = "For many it means that you’re no longer in the hard-partying, bad decision-making stage of your life for better or for worse."
            />
            </div>
    )
   
}

export default MainPromo;