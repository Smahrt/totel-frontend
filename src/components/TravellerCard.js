
import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";

import styles from 'styles/TravellerCard.module.css';

import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

import iconUser from '../../public/img/icon/icon-user-alt.svg';
import iconBookmark from '../../public/img/icon/icon-rebon.svg';

const TravellerCard = ({ user_name, date, post_name, post_img, user_img, rating, date_range, amount, gender }) => {

  let gender_text = '';
  let gender_color = '#657ADC';
  
  if (gender == 'male') {
    gender_color = '#657ADC';
    gender_text = 'Male';
  } else if(gender == 'female') {
    gender_color = '#F26465';
    gender_text = 'Female';
  }else{
    gender_text = 'Male/Female';
    gender_color = 'linear-gradient(274.21deg, #F26465 -19.11%, #736FFA 110.91%)';
  }

  //console.log(rating);
  let rating_color = '';
  if (parseInt(rating) == 5) {
    rating_color = '#1A8F3A';
  } else if (parseInt(rating) == 4) {
    rating_color = '#5CAB41';
  } else if (parseInt(rating) == 3) {
    rating_color = '#B6C74F';
  } else if (parseInt(rating) == 2) {
    rating_color = '#E99D44';
  } else {
    rating_color = '#E96244';
  }

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const media = [post_img];
  const mediaByIndex = index => media[index % media.length];

  return (
    <div className={styles.travaller_col}>
      <div className={styles.travaller_content}>
        <div className={styles.travaller_header}>
          <div className={styles.travaller_user_image}>
            <Image
              src={user_img}
              alt="name"
              width={48}
              height={48}></Image>
          </div>
          <div className={styles.travaller_user_details}>
            <h4>{user_name} </h4>
            <p className={styles.textmuted} style={{ fontSize: "12px", paddingTop: "2px" }}>{date}</p>
          </div>
          <div className={styles.travaller_user_rate} >
            <Button
              style={{ "backgroundColor": rating_color }}
              startIcon={<Image src={iconUser} alt="User icon" />}>
              {rating}
            </Button>
          </div>
        </div>
        <div className={styles.travaller_image}>
          {/* <Image
            src={post_img}
            alt="name"
            width={315}
            height={200}></Image> */}

          <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
              <div className="embla__container">
                {slides.map((index) => (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__inner">
                      <img
                        className="embla__slide__img"
                        src={mediaByIndex(index)}
                        alt="."
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="embla__gender" style={{background:gender_color}}>
                {gender_text}
              </div>
              <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.travaller_body}>
          <div className={styles.travaller_body_date_row} >
            <div className={styles.travaller_body_date}>
              <Link href="#">
                {date_range}
              </Link>
            </div>
            <div className={styles.travaller_body_bookmark}>
              <Link href="#">
                <span><Image src={iconBookmark} alt="Bookmark icon" /></span>
              </Link>
            </div>
          </div>
          <div 
          className={styles.travaller_body_text}
          onClick={() => 
            window.open('/post')
              }
          >
            {post_name}
          </div>
          <div className={styles.travaller_body_text}>
            <p>{amount}
              <b className={styles.textmuted}>/ Day</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravellerCard;