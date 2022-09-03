import React, { useState } from 'react';
import styles from 'styles/TravelCard.module.css';

import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

import iconUser from '../../public/img/icon/icon-user-alt.svg';
import iconBookmark from '../../public/img/icon/icon-rebon.svg';

const TravelCard = ({ user_name, post_name,user_img, rating, date_range, amount,description }) => {
  
  let rating_color = '';
  if(parseInt(rating) == 5){
    rating_color = '#1A8F3A';
  }else if(parseInt(rating) == 4){
    rating_color = '#5CAB41';
  }else if(parseInt(rating) == 3){
    rating_color = '#B6C74F';
  }else if(parseInt(rating) == 2){
    rating_color = '#E99D44';
  }else{
    rating_color = '#E96244';
  }
  
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
            <p className={styles.textmuted} style={{ fontSize: "12px", paddingTop: "2px" }}>March 24, 2020</p>
          </div>
          <div className={styles.travaller_user_rate}>
            <Button
              style={{"backgroundColor":rating_color}}
              startIcon={<Image src={iconUser} alt="User icon" />}>
              {rating}
            </Button>
          </div>
        </div>
        <div className={styles.traval_content}>
          <div className={styles.traval_content_col} >
            <div className={styles.travaller_body_text}
            onClick={() => 
              window.open('/post-travel')
                }
            >
              {post_name}
            </div>
            <div className={styles.travel_finding_partner}>
              Finding Partner
            </div>
            <div className={styles.travel_desc} >
              {description}
            </div>
            <div className={styles.travaller_body_text}>
              <p>{amount}
                <b className={styles.textmuted}>/ Day</b>
              </p>
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
              <Image src={iconBookmark} alt="Bookmark icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;