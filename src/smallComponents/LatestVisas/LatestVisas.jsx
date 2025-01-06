/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LatestVisaCard from "../../Components/LatestVisaCard";
import { Pagination } from "swiper/modules";

const LatestVisas = ({ latestVisaInfo }) => {
  return (
    <div className="mb-12">
      <Swiper
        slidesPerView={4}
        breakpoints={{
          350: {
            slidesPerView: 1
          },

          414: {
            slidesPerView: 2
          },

          640:{
            slidesPerView: 3
          },

          1024: {
            slidesPerView: 4, // For larger devices
          },
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >  
        <div className="">
            {latestVisaInfo.map((visa) => (
            <SwiperSlide  key={visa._id}>
                <LatestVisaCard key={visa._id} visa={visa}></LatestVisaCard>
            </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default LatestVisas;
