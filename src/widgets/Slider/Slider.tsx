import { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { type Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { Thumbs } from 'swiper/modules';
import { API_BASE_URL } from '@/shared/api/config';
import { useAppSelector } from '@/app/store/hook';
import styles from './Slider.module.scss';

export const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const AnnouncementChatImg = useAppSelector((state) => state.AnnouncementChatItem.preview);
  console.log('AnnouncementChatImg', AnnouncementChatImg);

  if (!AnnouncementChatImg) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Thumbs]}
      >
        {AnnouncementChatImg.map((item: any) => (
          <SwiperSlide key={item.id}>
            <img className={styles.slider__img} src={API_BASE_URL + item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={6.5}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}
      >
        {AnnouncementChatImg.map((item: any, i) => (
          <SwiperSlide key={item.id}>
            <img className={styles.slider__img__min} src={API_BASE_URL + item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
