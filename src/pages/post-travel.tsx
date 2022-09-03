import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from "../components/EmblaCarouselButtons";
import Head from "next/head";

import WrapHeader from "components/WrapHeader";
import WrapFooter from "components/WrapFooter";
import styles from "styles/Postdetails.module.css";
import TravelCard from "components/TravelCard";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

import iconBookmark from '../../public/img/icon/icon-rebon.svg';
import iconShare from '../../public/img/icon/icon-share.svg';
import iconStar from '../../public/img/icon/icon-star.svg';
import iconUser from '../../public/img/icon/icon-user-alt.svg';
import iconMessage from '../../public/img/icon/icon-message-white.svg';

export default function Travel() {

  //date
  const media = ['img/hotal1.png', 'img/hotal1.png', 'img/hotal1.png'];
  const date = 'March 24, 2020';
  const post_name = 'The Zuri White Sands Goa Resort and Casino';
  const post_rating = '4.0';
  const rating = '4.0';

  const user_name = 'Albert Flores';
  const user_image = '/img/user14.png';
  const occupation = 'Doctor';

  const [viewportRef, embla] = useEmblaCarousel({
    startIndex: 1,
    loop: true,
    skipSnaps: false
  });

  // const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });

  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const mediaByIndex = index => media[index % media.length];

  return (
    <div className={styles.container}>
      <Head>
        <title>Totel | Travel</title>
        <meta name='description' content='Best Spaces in the Universe.' />
      </Head>

      <WrapHeader />

      <main className={styles.homemain}>
        <div className={styles.slider_section} style={{ marginTop: '100px' }}>
          
        </div>
        <div className={styles.section02} >
          <div className={styles.title_tools_div}>
            <div className={styles.title_tools_date}>
              {date}
            </div>
            <div className={styles.title_tools_btn}>
              <div className={styles.title_tools_bookmark}>
                <Link href={''}>
                  <span><Image src={iconBookmark} alt="Bookmark icon" /></span>
                </Link>
              </div>
              <div className={styles.title_tools_share}>
                <Link href={''}>
                  <span><Image src={iconShare} alt="Share icon" /></span>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.title_div}>
            <div className={styles.title_div_section1}>
              <div className={styles.title_row}>
                <div className={styles.title}>
                  {post_name}
                </div>
                <div>
                  <Button
                    className={styles.title_rating_btn}
                    startIcon={<Image src={iconStar}
                      style={{ "color": '#F26465' }} alt="Star icon" />}>
                    {post_rating}
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.title_div_section2}>
              <div className={styles.request_body}>
                <div className={styles.usericon}>
                  <Image
                    src={user_image}
                    alt="name"
                    width={64}
                    height={64}></Image>
                </div>
                <div className={styles.request_name}>
                  <p className={styles.text_name}>{user_name}</p>
                  <p className={styles.textmuted}>{occupation}</p>
                </div>
                <div className={styles.request_rate}>
                  <Button
                    startIcon={<Image src={iconUser} alt="User icon" />}>
                    {rating}
                  </Button>
                </div>
              </div>
              <div className={styles.user_btn_div}>
                <div className={styles.user_btn_requiest} >
                  <Button>
                    Requiest
                  </Button>
                </div>
                <div className={styles.user_btn_send}>
                  <Button
                    startIcon={<Image src={iconMessage} style={{ color: 'white' }} alt="Message icon" />}>
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section02}>
          <div className={styles.title_div_foru}>
            <div className={styles.title_foru}>
              <h3>Details </h3>
            </div>
            <div className={styles.title_foru_body}>
                  <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  
            </div>
          </div>
        </div>
        <div className={styles.section02}>
          <div className={styles.title_div_foru}>
            <div className={styles.title_foru}>
              <h3>Similar Posts </h3>
            </div>
          </div>
          <div className={styles.travaller_row}>
            <TravelCard
              user_name={'Winter Gilbert'}
              user_img={'/img/user7.png'}
              post_name={'Red wood hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'1.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Elsie Lindsey'}
              user_img={'/img/user8.png'}
              post_name={'Obsidian Bay Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Aliyah Bailey'}
              user_img={'/img/user9.png'}
              post_name={'Primal Covert Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />


          </div>
        </div>
      </main>

      <WrapFooter />
    </div>
  );
}
