import React from 'react'
import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import VerticleTextAnimation from './VerticleTextAnimation';
import Button from './Button';


const CollectionComponent = () => (
    <>
        <div className="bg-[#15181b] pb-10">
            {/* Header Logo */}
            <div className='lg:px-16 px-2'>
                <Navbar dark={true} />
            </div>
            {/* Large Text */}
            <div className="large-text absolute w-[300px] h-[650px] top-20 text-white/[20%] lg:left-12 md:text-9xl text-[5rem] font-bold break-words left-2">
                <h1>ASTRIX</h1>
                <h1 className="mt-5">COLLECTIBLE</h1>
            </div>


            <div className="w-full flex justify-between lg:flex-nowrap flex-wrap gap-6">
                <div className="lg:w-3/5 w-full">
                    {/* Image SLider */}
                    <div className="slider collections mt-10">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            autoplay={{
                                delay: 1000,
                            }}
                            centeredSlides={true}
                            className="mySwiper"
                            modules={[Autoplay]}
                        >
                            <SwiperSlide>
                                <div className='text-white collection-text'>
                                    <h3 className='text-2xl font-semibold'>Lunar Palace:</h3>
                                    <span>(ft. Kanye West)</span>
                                </div>

                                <img src="./img/collectionSlide1.png" alt="" className='lg:h-[550px] w-full h-full object-cover' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-white collection-text'>
                                    <h3 className='text-2xl font-semibold'>Lunar Palace:</h3>
                                    <span>(ft. Kanye West)</span>
                                </div>
                                <img src="./img/eventSlide2.png" alt="" className='lg:h-[550px] w-full h-full object-cover' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-white collection-text'>
                                    <h3 className='text-2xl font-semibold'>Lunar Palace:</h3>
                                    <span>(ft. Kanye West)</span>
                                </div>
                                <img src="./img/collectionSlide2.png" alt="" className='lg:h-[550px] w-full h-full object-cover' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-white collection-text'>
                                    <h3 className='text-2xl font-semibold'>Lunar Palace:</h3>
                                    <span>(ft. Kanye West)</span>
                                </div>
                                <img src="./img/eventSlide4.png" alt="" className='lg:h-[550px] w-full h-full object-cover' />
                            </SwiperSlide>
                        </Swiper>
                        <Button />
                    </div>
                </div>
                {/* Text Content */}
                <div className='lg:w-2/5 w-full'>
                    <div className="content-wrapper px-7 lg:mt-0 mt-10">
                        <h3 className='text-gray-200 font-bold text-lg'>Explore Youre First  Collectible</h3>
                        <h1 className='text-gray-100 font-bold text-4xl capitalize md:mt-16 mt-6'>Meta Lives</h1>
                        <h2 className='text-gray-200 font-semibold text-lg mt-5'>Live in Astrix</h2>
                        <p className='text-gray-300 mt-2 text-base pe-20'>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
                        <div className='flex items-center justify-between mt-8 mb-8 pe-6 text-gray-200 font-bold'>
                            <img src="./img/group.png" alt="" />
                            <p>22k people interested</p>
                        </div>
                        <h5 className='text-gray-200 font-medium mb-1'>Collections</h5>
                        <div className='flex flex-wrap items-center gap-4 md:justify-between justify-start lg::pr-6 pr-1'>
                            <img src="./img/image.png" className='rounded-md object-cover lg:h-36 h-40 md:h-60' alt="" />
                            <img src="./img/image.png" className='rounded-md object-cover lg:h-36 h-40 md:h-60' alt="" />
                            <img src="./img/image.png" className='rounded-md object-cover lg:h-36 h-40 md:h-60' alt="" />
                        </div>

                        <div className='flex justify-end mt-12 pe-6'>

                            <button className='py-1 px-4 bg-[#ffca5f] rounded-3xl font-bold capitalize text-gray-900'>join waitlist</button>
                        </div>
                    </div>
                </div>
                <VerticleTextAnimation />
            </div>
        </div>
    </>
)

export default CollectionComponent
