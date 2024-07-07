import Topnav from "./components/topnav/topnav";
import FirstForm from "./components/firstForm/firstForm";
import Loading from "./components/loading/loading";
import Result from "./components/result/result";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  useRef, useState } from "react";
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
function App() {
  const [dataFromFirstForm, setDataFromFirstForm] = useState(null);
  const swiperRef = useRef(null);


  const handleDataFromFirstForm = (data) => {
    setDataFromFirstForm(data);
  };
  const handleMoveForward = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }

    setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(2); // Los índices de los slides empiezan en 0, por lo que el slide 3 es el índice 2
      }
    }, 2500);
  };

  return (
    <div className="bg-[#0D0D0D] h-[calc(100vh)] font-OpenSans">
      <Topnav />

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        ref={swiperRef}
        className="grid items-center h-full mySwiper"
      >
        <SwiperSlide>
          <FirstForm
    onMoveForward={handleMoveForward}
    onDataFromFirstForm={handleDataFromFirstForm}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Loading />
        </SwiperSlide>
        <SwiperSlide>
          <Result data={dataFromFirstForm}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;


