import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css';

import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"
import slider4 from "../assets/slider4.jpg"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <Swiper className='mb-8 lg:mb-16 z-[900]'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
            delay:5000,
            disableOnInteraction: false,
        }}
        onSlideChange={()=>console.log('slide change')}
        onSwiper={(swiper)=>console.log(swiper)}
        >

        <SwiperSlide>
            <img className='w-full h-[500px] object-cover' src={slider1} alt="first slider" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[500px] object-cover' src={slider2} alt="second slider" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[500px] object-cover' src={slider3} alt="third slider" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-[500px] object-cover' src={slider4} alt="third slider" />
        </SwiperSlide>
        </Swiper>
    );
};

export default Banner;