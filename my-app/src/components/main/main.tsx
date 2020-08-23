import React from 'react';
import main1 from '../../img/bg_main.jpg';
import main2 from '../../img/main_img2.jpg';
import main3 from '../../img/main_img3.jpg';
import main4 from '../../img/main_img4.jpg';

const Main = () => {
    return (
        <div className="main container">
            <div className="main_promo">
                <div className="main_promo_item">
                    <img src={main1} alt="" className="main-img" />
                    <div className="main_promo_theme bg-lifestyle">
                        LIFESTYLE
                    </div>
                    <div className="main_promo_title text-overflow-2">
                        Things To Do Before You're 30
                    </div>
                    <div className="main_promo_desc text-overflow-2">
                        For many it means that you’re no longer in the hard-partying, bad decision-making stage of your
                        life,
                        for better or for worse.
                    </div>
                    <a href="#" className="main_promo_link">READ MORE</a>
                </div>

                <div className="main_promo_item">
                    <img src={main2} alt="" className="main-img"/>
                    <div className="main_promo_theme bg-lifestyle">
                        SCIENCE
                    </div>
                    <div className="main_promo_title text-overflow-2">
                        Value-Based
                        Care‘s Data Problem
                    </div>
                    <div className="main_promo_desc text-overflow-2">
                        For many it means that you’re no longer in the hard-partying, bad decision-making stage of your
                        life,
                        for better or for worse.
                    </div>
                    <a href="#" className="main_promo_link">READ MORE</a>
                </div>

                <div className="main_promo_item">
                    <img src={main3} alt="" className="main-img"/>
                    <div className="main_promo_theme bg-lifestyle">
                        TECHNOLOGY
                    </div>
                    <div className="main_promo_title text-overflow-2">
                        How to Design for
                        Virtual Reality
                    </div>
                    <div className="main_promo_desc text-overflow-2">
                        For many it means that you’re no longer in the hard-partying, bad decision-making stage of your
                        life,
                        for better or for worse.
                    </div>
                    <a href="#" className="main_promo_link">READ MORE</a>
                </div>

                <div className="main_promo_item">
                    <img src={main4} alt="" className="main-img"/>
                    <div className="main_promo_theme bg-lifestyle">
                        EDUCATION
                    </div>
                    <div className="main_promo_title text-overflow-2">
                        What I Will Fret Over
                    </div>
                    <div className="main_promo_desc text-overflow-2">
                        For many it means that you’re no longer in the hard-partying, bad decision-making stage of your
                        life,
                        for better or for worse.
                    </div>
                    <a href="#" className="main_promo_link">READ MORE</a>
                </div>
            </div>
            <div className="main_list">
                <div className="main_list_item">
                    <div className="main_list_item-theme">
                        LIFESTYLE
                    </div>
                    <div className="main_list_item-title text-overflow-2">
                        Things To Do Before You're 30
                    </div>
                </div>
                <div className="main_list_item">
                    <div className="main_list_item-theme">
                        SCIENCE
                    </div>
                    <div className="main_list_item-title text-overflow-2">
                        Value-Based
                        Care‘s Data Problem
                    </div>
                </div>
                <div className="main_list_item">
                    <div className="main_list_item-theme">
                        TECHNOLOGY
                    </div>
                    <div className="main_list_item-title text-overflow-2">
                        How to Design for
                        Virtual Reality
                    </div>
                </div>
                <div className="main_list_item">
                    <div className="main_list_item-theme">
                        EDUCATION
                    </div>
                    <div className="main_list_item-title text-overflow-2">
                        What I Will Fret Over
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Main;