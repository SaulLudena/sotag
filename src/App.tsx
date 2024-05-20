import Topnav from "./components/topnav/topnav";
import FirstForm from "./components/firstForm/firstForm";
import Loading from "./components/loading/loading";
import Result from "./components/result/result";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {
  return (
    <div className="bg-[#0D0D0D] h-[calc(100vh)] font-OpenSans">
      <Topnav />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="grid items-center h-full mySwiper"
      >
        <SwiperSlide>
          <FirstForm />
        </SwiperSlide>
        <SwiperSlide>
          <Loading />
        </SwiperSlide>
        <SwiperSlide>
          <Result />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
