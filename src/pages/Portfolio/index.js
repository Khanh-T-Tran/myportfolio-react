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

// import project images
import codeQuiz from '../../assets/images/projects/CodeQuiz.png';
import NoteTaker from '../../assets/images/projects/NoteTaker.png';
import TechBlog from '../../assets/images/projects/TechBlog.png';
import TextEditor from '../../assets/images/projects/TextEditor.png';
import WeatherDashboard from '../../assets/images/projects/WeatherDashboard.png';
import WorkdayScheduler from '../../assets/images/projects/WorkdayScheduler.png';
import PasswordGenerator from '../../assets/images/projects/passwordGenerator.png';

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
                                <img src={WorkdayScheduler} alt='projectImages' />
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
                                <img src={WeatherDashboard} alt='projectImages' />
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
                                <img src={TextEditor} alt='projectImages' />
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
                                <img src={TechBlog} alt='projectImages' />
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
                                <img src={NoteTaker} alt='projectImages' />
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
                                <img src={codeQuiz} alt='projectImages' />
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
                                <img src={PasswordGenerator} alt='projectImages' />
                                <div className='project-content' >
                                    <Card.Body>
                                        <Card.Title>Password Generator</Card.Title>
                                        <Card.Text>
                                            <Button size="sm" variant="light" href='https://github.com/Khanh-T-Tran/Password_generator' target='_blank'>CODE</Button>
                                            <Button size="sm" variant="light" href='https://khanh-t-tran.github.io/Password_generator/' target='_blank'>SITE</Button>
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