import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import { EffectCube, Pagination } from "swiper";

import "./portfolio.css";



const PortfolioPage = () => {

    return (

        <>

            <div className='carousel-area'>
                <div className='carousel-header'>
                    <h1> My Works</h1>
                </div>

                <Swiper
                    // direction={"vertical"}
                    slidesPerView={1}
                    spaceBetween={20}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>


                        <Swiper
                            effect={"cube"}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 180,
                                shadowScale: 0.94,
                            }}

                            modules={[EffectCube, Pagination]}
                            className="myCubeSwiper"
                        >

                            <SwiperSlide>
                                <div className='project-content'>Name of the project</div>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/WorkdayScheduler.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/WeatherDashboard.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/TextEditor.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/TechBlog.png" />
                            </SwiperSlide>
                        </Swiper>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Swiper
                            effect={"cube"}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 180,
                                shadowScale: 0.94,
                            }}

                            modules={[EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/NoteTaker.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/CodeQuiz.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default PortfolioPage;