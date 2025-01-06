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
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >  
        <div className="grid grid-cols-12 gap-4 mb-6">
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
