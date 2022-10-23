import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                <Swiper
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
                                shadowOffset: 120,
                                shadowScale: 0.84,
                            }}

                            modules={[EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/WorkdayScheduler.png" alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>Work Day Scheduler</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href="https://github.com/Khanh-T-Tran/Workday_Scheduler" target="_blank">CODE</Button>
                                            <Button size="sm" variant="light" href="https://khanh-t-tran.github.io/Workday_Scheduler/" target="_blank">SITE</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/WeatherDashboard.png" alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>Weather Dashboard</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href='https://github.com/Khanh-T-Tran/weather_dashboard' target='_blank'>CODE</Button>
                                            <Button size="sm" variant="light" href='https://khanh-t-tran.github.io/weather_dashboard/' target='_blank'>SITE</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/TextEditor.png" alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>Text Editor</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href='https://github.com/Khanh-T-Tran/Text-Editor' target='_blank'>CODE</Button>
                                            <Button size="sm" variant="light" href='https://sheltered-chamber-83763.herokuapp.com/' target='_blank'>SITE</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/TechBlog.png" alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>The Tech Blog</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href='https://github.com/Khanh-T-Tran/Tech_Blog' target='_blank'>CODE</Button>
                                            <Button size="sm" variant="light" href='https://techtheblog.herokuapp.com/' target='_blank'>SITE</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
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
                                shadowOffset: 120,
                                shadowScale: 0.84,
                            }}

                            modules={[EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>                             
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/NoteTaker.png" alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>Note Taker</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href='https://github.com/Khanh-T-Tran/Small_business_note_taker' target='_blank'>CODE</Button>
                                            <Button size="sm" variant="light" href='https://safe-depths-54650.herokuapp.com/' target='_blank'>SITE</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/images/projects/projectImages/CodeQuiz.png" alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>Coding Quiz</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href='https://github.com/Khanh-T-Tran/Code_quiz' target='_blank'>CODE</Button>
                                            <Button size="sm" variant="light" href='https://khanh-t-tran.github.io/Code_quiz/' target='_blank'>SITE</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>Coming soon ...</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href='' target='_blank'>CODE</Button>
                                            <Button size="sm" variant="light" href='' target='_blank'>SITE</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>Coming soon ...</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href='' target='_blank'>CODE</Button>
                                            <Button size="sm" variant="light" href='' target='_blank'>SITE</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default PortfolioPage;