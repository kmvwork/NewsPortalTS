import React from 'react';
import post1 from '../../img/post_1.jpg';
import post2 from '../../img/post_2.png';
import post3 from '../../img/post_3.jpg';
import post4 from '../../img/post_4.jpg';
import slide1 from '../../img/slide_1.jpg';
import slide2 from '../../img/slide_2.jpg';
import slide3 from '../../img/slide_3.jpg';
import slide4 from '../../img/slide_4.jpg';
import post7 from '../../img/post_7.jpg';


const News = () => {
    return (
        <div className="news container">

        <div className="news_item">
            <img src={post1} alt="" className="news_item-img"/>
            <div className="news_item-theme">
                <span className="news_item-theme-text bg-country">COUNTRY</span>
            </div>
            <div className="news_item-text">
                <div className="news_item-title text-overflow-2">
                    12 photos Indonesian beauty
                    in your eyes
                </div>
                <div className="news_item-desc text-overflow-2">
                    This is the reaction of many people is often asked when visiting a variety...
                </div>
            </div>
            <hr/>
            <div className="news_item-group-link">
                <a href="#" className="news_item-btn ">Read More</a>
                <a href="#" className="news_item-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M8 13.5c-.111 0-.217-.015-.327-.019l-3.896 2.435-.005-.008a.475.475 0 0 1-.117.06A.424.424 0 0 1 3.5 16a.499.499 0 0 1-.5-.5v-3.486C1.173 10.777 0 8.88 0 6.75 0 3.022 3.582 0 8 0s8 3.022 8 6.75-3.582 6.75-8 6.75zM8 1C4.134 1 1 3.574 1 6.75c0 1.703.907 3.23 2.34 4.282l.015-.003c.146.15.355.317.645.493v3.076l2.087-1.304-.016-.005 1.337-.828c.197.014.39.039.592.039 3.866 0 7-2.575 7-5.75C15 3.574 11.866 1 8 1zm3.5 5h-7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1zm-7 2h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1z" />
                            </g>
                        </g>
                    </svg>
                    12
                </a>
                <button className="news_item-like hover-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M14.828 7.081l.025.026-6.5 6.74a.49.49 0 0 1-.707 0l-6.5-6.74.025-.026A4.213 4.213 0 0 1 0 4.148h.013C.143 1.835 1.987 0 4.25 0 5.874 0 7.285.945 8 2.334 8.715.945 10.126 0 11.75 0c2.263 0 4.107 1.835 4.237 4.148H16a4.213 4.213 0 0 1-1.172 2.933zM11.75 1.037c-1.71 0-3.11 1.37-3.237 3.11H8.5a.51.51 0 0 1-.5.52.51.51 0 0 1-.5-.52h-.013c-.128-1.74-1.527-3.11-3.237-3.11-1.71 0-3.11 1.37-3.237 3.11H1c0 .708.228 1.36.611 1.883.548.747 2.183 2.258 2.08 2.25L8 12.748l4.308-4.468c-.102.008 1.292-1.38 1.836-1.957.53-.56.856-1.328.856-2.175h-.013c-.128-1.74-1.527-3.111-3.237-3.111z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div className="news_item df-big ">
            <img src={post2} alt="" className="news_item-img img-big"/>
            <div className="news_item-theme">
                <span className="news_item-theme-text bg-people">PEOPLE</span>
            </div>
            <div className="news_item-text">
                <div className="news_item-title big-title text-overflow-2">
                    Ridwan Kamil role in Success
                    Story Organizing Surabaya
                </div>
                <div className="news_item-desc big-desc text-overflow-4">
                    Bandung many people skeptical and apathetic towards revamping the city of Bandung with all tangled
                    Problems. Though if you want a little to learn from the neighboring town...
                </div>
            </div>
            <div className="news_item-group-link big-group-link">
                <a href="#" className="news_item-btn ">Read More</a>
                <a href="#" className="news_item-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M8 13.5c-.111 0-.217-.015-.327-.019l-3.896 2.435-.005-.008a.475.475 0 0 1-.117.06A.424.424 0 0 1 3.5 16a.499.499 0 0 1-.5-.5v-3.486C1.173 10.777 0 8.88 0 6.75 0 3.022 3.582 0 8 0s8 3.022 8 6.75-3.582 6.75-8 6.75zM8 1C4.134 1 1 3.574 1 6.75c0 1.703.907 3.23 2.34 4.282l.015-.003c.146.15.355.317.645.493v3.076l2.087-1.304-.016-.005 1.337-.828c.197.014.39.039.592.039 3.866 0 7-2.575 7-5.75C15 3.574 11.866 1 8 1zm3.5 5h-7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1zm-7 2h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1z" />
                            </g>
                        </g>
                    </svg>
                    12
                </a>
                <button className="news_item-like hover-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M14.828 7.081l.025.026-6.5 6.74a.49.49 0 0 1-.707 0l-6.5-6.74.025-.026A4.213 4.213 0 0 1 0 4.148h.013C.143 1.835 1.987 0 4.25 0 5.874 0 7.285.945 8 2.334 8.715.945 10.126 0 11.75 0c2.263 0 4.107 1.835 4.237 4.148H16a4.213 4.213 0 0 1-1.172 2.933zM11.75 1.037c-1.71 0-3.11 1.37-3.237 3.11H8.5a.51.51 0 0 1-.5.52.51.51 0 0 1-.5-.52h-.013c-.128-1.74-1.527-3.11-3.237-3.11-1.71 0-3.11 1.37-3.237 3.11H1c0 .708.228 1.36.611 1.883.548.747 2.183 2.258 2.08 2.25L8 12.748l4.308-4.468c-.102.008 1.292-1.38 1.836-1.957.53-.56.856-1.328.856-2.175h-.013c-.128-1.74-1.527-3.111-3.237-3.111z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div className="news_item">
            <img src={post3} alt="" className="news_item-img"/>
            <div className="news_item-theme">
                <span className="news_item-theme-text bg-travel">TRAVEL</span>
            </div>
            <div className="news_item-text">
                <div className="news_item-title text-overflow-2">
                    This 10 Country Beautiful
                    Non-Asean Free Visa
                </div>
                <div className="news_item-desc text-overflow-2">
                    When they wanted to travel but are reluctant to arrange a visa is a...
                </div>
            </div>
            <hr/>
            <div className="news_item-group-link">
                <a href="#" className="news_item-btn ">Read More</a>
                <a href="#" className="news_item-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M8 13.5c-.111 0-.217-.015-.327-.019l-3.896 2.435-.005-.008a.475.475 0 0 1-.117.06A.424.424 0 0 1 3.5 16a.499.499 0 0 1-.5-.5v-3.486C1.173 10.777 0 8.88 0 6.75 0 3.022 3.582 0 8 0s8 3.022 8 6.75-3.582 6.75-8 6.75zM8 1C4.134 1 1 3.574 1 6.75c0 1.703.907 3.23 2.34 4.282l.015-.003c.146.15.355.317.645.493v3.076l2.087-1.304-.016-.005 1.337-.828c.197.014.39.039.592.039 3.866 0 7-2.575 7-5.75C15 3.574 11.866 1 8 1zm3.5 5h-7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1zm-7 2h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1z" />
                            </g>
                        </g>
                    </svg>
                    12
                </a>
                <button className="news_item-like hover-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M14.828 7.081l.025.026-6.5 6.74a.49.49 0 0 1-.707 0l-6.5-6.74.025-.026A4.213 4.213 0 0 1 0 4.148h.013C.143 1.835 1.987 0 4.25 0 5.874 0 7.285.945 8 2.334 8.715.945 10.126 0 11.75 0c2.263 0 4.107 1.835 4.237 4.148H16a4.213 4.213 0 0 1-1.172 2.933zM11.75 1.037c-1.71 0-3.11 1.37-3.237 3.11H8.5a.51.51 0 0 1-.5.52.51.51 0 0 1-.5-.52h-.013c-.128-1.74-1.527-3.11-3.237-3.11-1.71 0-3.11 1.37-3.237 3.11H1c0 .708.228 1.36.611 1.883.548.747 2.183 2.258 2.08 2.25L8 12.748l4.308-4.468c-.102.008 1.292-1.38 1.836-1.957.53-.56.856-1.328.856-2.175h-.013c-.128-1.74-1.527-3.111-3.237-3.111z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div className="news_item">
            <img src={post4} alt="" className="news_item-img"/>
            <div className="news_item-theme">
                <span className="news_item-theme-text bg-technology">TECHNOLOGY</span>
            </div>
            <div className="news_item-text">
                <div className="news_item-title text-overflow-2">
                    Important Tips on Buying a
                    New Mobile-Based Android
                </div>
                <div className="news_item-desc text-overflow-2">
                    Newly purchased device did many advantages, especially those...
                </div>
            </div>
            <hr/>
            <div className="news_item-group-link">
                <a href="#" className="news_item-btn ">Read More</a>
                <a href="#" className="news_item-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M8 13.5c-.111 0-.217-.015-.327-.019l-3.896 2.435-.005-.008a.475.475 0 0 1-.117.06A.424.424 0 0 1 3.5 16a.499.499 0 0 1-.5-.5v-3.486C1.173 10.777 0 8.88 0 6.75 0 3.022 3.582 0 8 0s8 3.022 8 6.75-3.582 6.75-8 6.75zM8 1C4.134 1 1 3.574 1 6.75c0 1.703.907 3.23 2.34 4.282l.015-.003c.146.15.355.317.645.493v3.076l2.087-1.304-.016-.005 1.337-.828c.197.014.39.039.592.039 3.866 0 7-2.575 7-5.75C15 3.574 11.866 1 8 1zm3.5 5h-7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1zm-7 2h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1z" />
                            </g>
                        </g>
                    </svg>
                    12
                </a>
                <button className="news_item-like hover-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M14.828 7.081l.025.026-6.5 6.74a.49.49 0 0 1-.707 0l-6.5-6.74.025-.026A4.213 4.213 0 0 1 0 4.148h.013C.143 1.835 1.987 0 4.25 0 5.874 0 7.285.945 8 2.334 8.715.945 10.126 0 11.75 0c2.263 0 4.107 1.835 4.237 4.148H16a4.213 4.213 0 0 1-1.172 2.933zM11.75 1.037c-1.71 0-3.11 1.37-3.237 3.11H8.5a.51.51 0 0 1-.5.52.51.51 0 0 1-.5-.52h-.013c-.128-1.74-1.527-3.11-3.237-3.11-1.71 0-3.11 1.37-3.237 3.11H1c0 .708.228 1.36.611 1.883.548.747 2.183 2.258 2.08 2.25L8 12.748l4.308-4.468c-.102.008 1.292-1.38 1.836-1.957.53-.56.856-1.328.856-2.175h-.013c-.128-1.74-1.527-3.111-3.237-3.111z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div className="news_item df-center">
            <img src={post4} alt="" className="news_item-img hidden"/>
            <div className="news_item-theme margin-top_theme">
                <span className="news_item-theme-text bg-economy">ECONOMY</span>
            </div>
            <div className="news_item-text">
                <div className="news_item-title title-no-img text-overflow-3">
                    Four Pillars Decide
                    Fate of Economy
                    Indonesia
                </div>
                <div className="news_item-desc desc-no-img text-overflow-2">
                    The domestic economy is still faced with a number of structural challenges. To achieve sustain...
                </div>
            </div>
            <hr/>
            <div className="news_item-group-link">
                <a href="#" className="news_item-btn ">Read More</a>
                <a href="#" className="news_item-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M8 13.5c-.111 0-.217-.015-.327-.019l-3.896 2.435-.005-.008a.475.475 0 0 1-.117.06A.424.424 0 0 1 3.5 16a.499.499 0 0 1-.5-.5v-3.486C1.173 10.777 0 8.88 0 6.75 0 3.022 3.582 0 8 0s8 3.022 8 6.75-3.582 6.75-8 6.75zM8 1C4.134 1 1 3.574 1 6.75c0 1.703.907 3.23 2.34 4.282l.015-.003c.146.15.355.317.645.493v3.076l2.087-1.304-.016-.005 1.337-.828c.197.014.39.039.592.039 3.866 0 7-2.575 7-5.75C15 3.574 11.866 1 8 1zm3.5 5h-7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1zm-7 2h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1z" />
                            </g>
                        </g>
                    </svg>
                    12
                </a>
                <button className="news_item-like hover-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M14.828 7.081l.025.026-6.5 6.74a.49.49 0 0 1-.707 0l-6.5-6.74.025-.026A4.213 4.213 0 0 1 0 4.148h.013C.143 1.835 1.987 0 4.25 0 5.874 0 7.285.945 8 2.334 8.715.945 10.126 0 11.75 0c2.263 0 4.107 1.835 4.237 4.148H16a4.213 4.213 0 0 1-1.172 2.933zM11.75 1.037c-1.71 0-3.11 1.37-3.237 3.11H8.5a.51.51 0 0 1-.5.52.51.51 0 0 1-.5-.52h-.013c-.128-1.74-1.527-3.11-3.237-3.11-1.71 0-3.11 1.37-3.237 3.11H1c0 .708.228 1.36.611 1.883.548.747 2.183 2.258 2.08 2.25L8 12.748l4.308-4.468c-.102.008 1.292-1.38 1.836-1.957.53-.56.856-1.328.856-2.175h-.013c-.128-1.74-1.527-3.111-3.237-3.111z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div className="news_item news_item-slider">
            <div className="news_item-theme">
                <span className="news_item-theme-text bg-home">HOME & DECOR</span>
            </div>
            <div className="slider-desc">
                <img src={slide1} alt="" className="news_item-img img-cover"/>
                <div className="news_item-title title-slider text-overflow-2">
                    10 Caring for plants in the
                    courtyard house
                </div>
            </div>
            <div className="slider-desc">
                <img src={slide2} alt="" className="news_item-img img-cover"/>
                <div className="news_item-title title-slider text-overflow-2">
                    Guest house for movie lovers
                </div>
            </div>
            <div className="slider-desc">
                <img src={slide3} alt="" className="news_item-img img-cover"/>
                <div className="news_item-title title-slider text-overflow-2">
                    Nest house in a nature reserve in Namibia
                </div>
            </div>
            <div className="slider-desc">
                <img src={slide4} alt="" className="news_item-img img-cover"/>
                <div className="news_item-title title-slider text-overflow-2">
                    The apartment is on the ground floor in Taipei
                </div>
            </div>

            <div className="slider-dots">
                <span className="slider-dots-item"></span>
                <span className="slider-dots-item"></span>
                <span className="slider-dots-item"></span>
                <span className="slider-dots-item"></span>
            </div>

            <hr className="hidden"/>
            <div className="news_item-group-link slider-link">
                <a href="#" className="news_item-btn">Read More</a>
                <a href="#" className="news_item-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M8 13.5c-.111 0-.217-.015-.327-.019l-3.896 2.435-.005-.008a.475.475 0 0 1-.117.06A.424.424 0 0 1 3.5 16a.499.499 0 0 1-.5-.5v-3.486C1.173 10.777 0 8.88 0 6.75 0 3.022 3.582 0 8 0s8 3.022 8 6.75-3.582 6.75-8 6.75zM8 1C4.134 1 1 3.574 1 6.75c0 1.703.907 3.23 2.34 4.282l.015-.003c.146.15.355.317.645.493v3.076l2.087-1.304-.016-.005 1.337-.828c.197.014.39.039.592.039 3.866 0 7-2.575 7-5.75C15 3.574 11.866 1 8 1zm3.5 5h-7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1zm-7 2h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1z" />
                            </g>
                        </g>
                    </svg>
                    12
                </a>
                <button className="news_item-like hover-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                        <g>
                            <g opacity="1">
                                <path
                                    d="M14.828 7.081l.025.026-6.5 6.74a.49.49 0 0 1-.707 0l-6.5-6.74.025-.026A4.213 4.213 0 0 1 0 4.148h.013C.143 1.835 1.987 0 4.25 0 5.874 0 7.285.945 8 2.334 8.715.945 10.126 0 11.75 0c2.263 0 4.107 1.835 4.237 4.148H16a4.213 4.213 0 0 1-1.172 2.933zM11.75 1.037c-1.71 0-3.11 1.37-3.237 3.11H8.5a.51.51 0 0 1-.5.52.51.51 0 0 1-.5-.52h-.013c-.128-1.74-1.527-3.11-3.237-3.11-1.71 0-3.11 1.37-3.237 3.11H1c0 .708.228 1.36.611 1.883.548.747 2.183 2.258 2.08 2.25L8 12.748l4.308-4.468c-.102.008 1.292-1.38 1.836-1.957.53-.56.856-1.328.856-2.175h-.013c-.128-1.74-1.527-3.111-3.237-3.111z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div className="news_item accordion">
            <div className=" news_item-theme">
                <span className="news_item-theme-text bg-newpost">NEWEST POST</span>
            </div>

            <div className="accordion-item">
                <input className="accordion-item-input" type="radio" name="accordion" id="accordion-1" checked />
                <label className="accordion-item-trigger" htmlFor="accordion-1" >
                    <span className="accordion-theme">TRAVEL</span>
                    <p className="accordion-title overflow">Similar exist Painting Mysterious Alien in America</p>
                    <i className="arrow right"></i>
                </label>
                <div className=" accordion-item-open">
                    <p className="accordion-text text-overflow-5">Name Sego Canyon in the US has not been as popular as the Grand Canyon.</p>
                    <img src={post7} alt="" className="accordion-img"/>
                </div>
            </div>
            

            <div className="accordion-item">
                <input className="accordion-item-input" type="radio" name="accordion" id="accordion-2" />
                <label className="accordion-item-trigger" htmlFor="accordion-2">
                    <span className="accordion-theme">LIFESTYLE</span>
                    <p className="accordion-title overflow">This Secret Branded Goods Shopping Deals New York</p>
                    <i className="arrow right"></i>
                </label>
                <div className=" accordion-item-open">
                    <p className="accordion-text text-overflow-5">Name Sego Canyon in the US has not been as popular as the Grand Canyon.</p>
                    <img src={post7} alt="" className="accordion-img"/>
                </div>
            </div>

            
            <div className="accordion-item">
                <input className="accordion-item-input" type="radio" name="accordion" id="accordion-3" />
                <label className="accordion-item-trigger overflow" htmlFor="accordion-3">
                    <span className="accordion-theme">TRAVEL</span>
                    <p className="accordion-title overflow">The Three Colors Beach in Malang!</p>
                    <i className="arrow right"></i>
                </label>
                <div className=" accordion-item-open">
                    <p className="accordion-text text-overflow-5">Name Sego Canyon in the US has not been as popular as the Grand Canyon.</p>
                    <img src={post7} alt="" className="accordion-img"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default News;