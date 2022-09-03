import React, { useState } from "react";
import Head from "next/head";

import WrapHeader from "components/WrapHeader";
import WrapFooter from "components/WrapFooter";
import TravellerCard from "components/TravellerCard";
import styles from "styles/Home.module.css";


export default function Traveller() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Totel | Traveller</title>
        <meta name='description' content='Best Spaces in the Universe.' />
      </Head>

      <WrapHeader />

      <main className={styles.homemain}>
      
        {/* Section 2 */}
        <div className={styles.section02} style={{marginTop:'80px'}}>
          <div className={styles.title_div}>
            <div className={styles.title}>
              <h3>Traveller in Miami <b className={styles.textmuted} style={{ fontSize: "12px" }}>56 more</b></h3>
            </div>
            {/* <div className={styles.title_right}>
              <Link href={''}>View all</Link>
            </div> */}
          </div>
          <div className={styles.travaller_row}>
            <TravellerCard
              user_name={'Sonya Clarke'}
              user_img={'/img/user1.png'}
              date={'March 24, 2020'}
              post_img={'/img/image4.png'}
              post_name={'Hilton Miami Downtowss'}
              date_range={'4 Jun - 6 Jun'}
              rating={'1.0'}
              amount={'$90'}
              gender={'male'}
            />

            <TravellerCard
              user_name={'Emilio Tran'}
              user_img={'/img/user2.png'}
              date={'March 24, 2020'}
              post_img={'/img/image5.png'}
              post_name={'Vagabond Cabin'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$90'}
              gender={'female'}
            />

            <TravellerCard
              user_name={'Dale Hanson'}
              user_img={'/img/user3.png'}
              date={'March 24, 2020'}
              post_img={'/img/image7.png'}
              post_name={'Celeste Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'3.0'}
              amount={'$90'}
              gender={'male/female'}
            />

            <TravellerCard
              user_name={'Vanessa Hamilton'}
              user_img={'/img/user4.png'}
              date={'March 24, 2020'}
              post_img={'/img/image9.png'}
              post_name={'Slumber Cottage'}
              date_range={'4 Jun - 6 Jun'}
              rating={'4.0'}
              amount={'$90'}
              gender={'female'}
            />
           
          </div>
          <div className={styles.travaller_row}>
            <TravellerCard
              user_name={'Sonya Clarke'}
              user_img={'/img/user1.png'}
              date={'March 24, 2020'}
              post_img={'/img/image4.png'}
              post_name={'Hilton Miami Downtowss'}
              date_range={'4 Jun - 6 Jun'}
              rating={'5.0'}
              amount={'$90'}
              gender={'female'}
            />

            <TravellerCard
              user_name={'Emilio Tran'}
              user_img={'/img/user2.png'}
              date={'March 24, 2020'}
              post_img={'/img/image5.png'}
              post_name={'Vagabond Cabin'}
              date_range={'4 Jun - 6 Jun'}
              rating={'3.0'}
              amount={'$90'}
              gender={'female'}
            />

            <TravellerCard
              user_name={'Dale Hanson'}
              user_img={'/img/user3.png'}
              date={'March 24, 2020'}
              post_img={'/img/image7.png'}
              post_name={'Celeste Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$90'}
              gender={'female'}
            />

            <TravellerCard
              user_name={'Vanessa Hamilton'}
              user_img={'/img/user4.png'}
              date={'March 24, 2020'}
              post_img={'/img/image9.png'}
              post_name={'Slumber Cottage'}
              date_range={'4 Jun - 6 Jun'}
              rating={'1.0'}
              amount={'$90'}
              gender={'male'}
            />
           
          </div>
          <div className={styles.travaller_row}>
            <TravellerCard
              user_name={'Sonya Clarke'}
              user_img={'/img/user1.png'}
              date={'March 24, 2020'}
              post_img={'/img/image4.png'}
              post_name={'Hilton Miami Downtowss'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$90'}
              gender={'male'}
            />

            <TravellerCard
              user_name={'Emilio Tran'}
              user_img={'/img/user2.png'}
              date={'March 24, 2020'}
              post_img={'/img/image5.png'}
              post_name={'Vagabond Cabin'}
              date_range={'4 Jun - 6 Jun'}
              rating={'3.0'}
              amount={'$90'}
              gender={'male'}
            />

            <TravellerCard
              user_name={'Dale Hanson'}
              user_img={'/img/user3.png'}
              date={'March 24, 2020'}
              post_img={'/img/image7.png'}
              post_name={'Celeste Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'4.0'}
              amount={'$90'}
              gender={'male/female'}
            />

            <TravellerCard
              user_name={'Vanessa Hamilton'}
              user_img={'/img/user4.png'}
              date={'March 24, 2020'}
              post_img={'/img/image9.png'}
              post_name={'Slumber Cottage'}
              date_range={'4 Jun - 6 Jun'}
              rating={'5.0'}
              amount={'$90'}             
              gender={'male'}
            />
           
          </div>
          
        </div>
       

      </main>

      <WrapFooter />
    </div>
  );
}
