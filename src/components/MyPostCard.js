
import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";

import styles from 'styles/MyPostCard.module.css';

import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

import iconUser from '../../public/img/icon/icon-user-alt.svg';
import iconDots from '../../public/img/icon/icon-dot-3.svg';

const MypostCard = ({ date, post_name, post_img, date_range, amount, gender }) => {

  let gender_text = '';
  let gender_color = '#657ADC';

  if (gender == 'male') {
    gender_color = '#657ADC';
    gender_text = 'Male';
  } else if (gender == 'female') {
    gender_color = '#F26465';
    gender_text = 'Female';
  } else {
    gender_text = 'Male/Female';
    gender_color = 'linear-gradient(274.21deg, #F26465 -19.11%, #736FFA 110.91%)';
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

    <div className={styles.post}>
      <div className={styles.post_image}>
        <div className="embla">
          <div className="embla__viewport" style={{ borderRadius: "12px" }} ref={viewportRef}>
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
      <div className={styles.post_details}>
        <div className={styles.post_details_header}>
          <div className={styles.post_date}>
            {date}
          </div>
          <div className={styles.travaller_body_bookmark}>
            <Link href={''}>
              <span><Image src={iconDots} alt="iconDots icon" /></span>
            </Link>
          </div>
        </div>
        <div className={styles.post_name}>
          {post_name}
        </div>
        <div className={styles.post_details_info}>
          
        <div className={styles.post_gender} style={{ background: gender_color }}>
              {gender_text}
            </div>
          <div className={styles.travaller_body_date}>
            <Link href={''}>
              {date_range}
            </Link>
          </div>
          
        </div>
        <div className={styles.post_amount}>
          <p>{amount}
            <b className={styles.textmuted}>/ Day</b>
          </p>
        </div>
      </div>
    </div>

  );
};

export default MypostCard;