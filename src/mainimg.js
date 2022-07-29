import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	
import  './mainimg.css'

SwiperCore.use([Navigation, Pagination, Autoplay])	

function Mainimg(props){
    return(
        <div className="mainimg">
             <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={'auto'}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide><img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/164564/fca26389-20b9-4c16-9331-58cdab239fdf.gif?$ORIGIN_JPG$"></img></SwiperSlide>
        <SwiperSlide><img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/164981/9b1c712a-10d7-4d97-9c26-9cbfa62c2625.jpg?$ORIGIN_JPG$"></img></SwiperSlide>
        <SwiperSlide><img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/164981/9b1c712a-10d7-4d97-9c26-9cbfa62c2625.jpg?$ORIGIN_JPG$"></img></SwiperSlide>
        <SwiperSlide><img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/160164/d11e8cdc-49e2-44ab-96b0-c857b11d05c3.png?$ORIGIN_JPG$"></img></SwiperSlide>
        <SwiperSlide><img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/160164/d11e8cdc-49e2-44ab-96b0-c857b11d05c3.png?$ORIGIN_JPG$"></img></SwiperSlide>
        <SwiperSlide><img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/160164/d11e8cdc-49e2-44ab-96b0-c857b11d05c3.png?$ORIGIN_JPG$"></img></SwiperSlide>
        <SwiperSlide><img className='slide_item' src="https://images.samsung.com/kdp/cms_contents/160164/d11e8cdc-49e2-44ab-96b0-c857b11d05c3.png?$ORIGIN_JPG$"></img></SwiperSlide>
      </Swiper>
        </div>
    )
    
}

export default Mainimg
