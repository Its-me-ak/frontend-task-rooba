import React from 'react'
import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import VerticleTextAnimation from './VerticleTextAnimation';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdAlarm } from "react-icons/io";
import Button from './Button';
;


const EventComponent = () => {
    return (
        <>
            <div className="bg-[#15181b] pb-10">
                {/* Header Logo */}
                <div className='lg:px-16 px-2'>
                    <Navbar dark={true} />
                </div>
                {/* Large Text */}
                <div className="large-text absolute w-[300px] h-[650px] top-20 text-white/[20%] lg:left-12 md:text-9xl text-7xl font-bold break-words left-2">
                    <h1>ASTRIX</h1>
                    <h1 className="lg:mt-16 mt-14">EVENTS</h1>
                </div>
                <div className="w-full flex justify-between lg:flex-nowrap flex-wrap gap-6">
                    <div className="lg:w-3/5 w-full">
                {/* Image Slider */}

                        <div className="slider mt-20">
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
                                    <div className='absolute bottom-3 left-2 text-white z-10 event-text'>
                                        <h3 className='text-2xl font-semibold'>Event Name</h3>
                                        <span className='flex gap-1 items-center'>   <FaLocationDot />Location</span>
                                    </div>
                                    <img src="./img/eventSlide1.png" alt="" className='lg:h-[550px] w-full h-full object-cover' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='absolute bottom-3 left-3 text-white z-10 event-text'>
                                        <h3 className='text-2xl font-semibold'>Event Name</h3>
                                        <span className='flex gap-1 items-center'>   <FaLocationDot />Location</span>
                                    </div>
                                    <img src="./img/eventSlide2.png" alt="" className='lg:h-[550px] w-full h-full object-cover' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='absolute bottom-3 left-3 text-white z-10 event-text'>
                                        <h3 className='text-2xl font-semibold'>Event Name</h3>
                                        <span className='flex gap-1 items-center'>   <FaLocationDot />Location</span>
                                    </div>
                                    <img src="./img/eventSlide3.png" alt="" className='lg:h-[550px] w-full h-full object-cover' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='absolute bottom-3 left-3 text-white z-10 event-text'>
                                        <h3 className='text-2xl font-semibold'>Event Name</h3>
                                        <span className='flex gap-1 items-center'>   <FaLocationDot />Location</span>
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
                            <h3 className='text-gray-200 font-bold text-lg'>Explore Youre First  Event</h3>
                            <h1 className='text-gray-100 font-bold text-4xl capitalize lg:mt-16 mt-6'>event name</h1>
                            <div className="flex text-gray-200 text-sm gap-6 items-center mt-6">
                                <div className='flex items-center gap-2'>
                                    <FaLocationDot />
                                    <span>Venue</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoMdAlarm />
                                    <span>04/3/2024 @19:00</span>
                                </div>
                            </div>
                            <p className='text-gray-300 mt-5 text-base pe-20'>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
                            <h3 className='text-xl font-semibold text-gray-200 mt-6 capitalize'>artist lineup</h3>
                            <div className='flex mt-4 items-center lg:justify-start justify-center'>
                                <img src="./img/artist1.png" className='rounded-md object-cover lg:h-28 md:h-52 h-24' alt="" />
                                <img src="./img/artist2.png" className='rounded-md object-cover lg:h-36 md:h-64 h-32' alt="" />
                                <img src="./img/artist3.png" className='rounded-md object-cover lg:h-28 md:h-52 h-24' alt="" />
                            </div>

                            <div className='flex justify-between mt-12 items-end lg:pe-12 pe-0'>
                                <img src="./img/barcode.png" className='h-20' alt="" />
                                <button className='py-1 px-4 bg-[#ffca5f] rounded-3xl font-bold capitalize text-gray-900'>join waitlist</button>
                            </div>
                        </div>
                    </div>
                    <VerticleTextAnimation />
                </div>
            </div>
        </>
    )
}

export default EventComponent
