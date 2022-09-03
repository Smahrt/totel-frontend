import React, { useState } from "react";
import Head from "next/head";

import WrapHeader from "components/WrapHeader";
import WrapFooter from "components/WrapFooter";
import TravelCard from "components/TravelCard";
import styles from "styles/Home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Totel | Home</title>
        <meta name='description' content='Best Spaces in the Universe.' />
      </Head>

      <WrapHeader />

      <main className={styles.homemain}>
        
        <div className={styles.section03} style={{marginTop:'80px'}}>
          <div className={styles.title_div}>
            <div className={styles.title}>
              <h3>Travel to Miami <b className={styles.textmuted} style={{ fontSize: "12px" }}>56 more</b></h3>
            </div>
            {/* <div className={styles.title_right}>
              <Link href={''}>View all</Link>
            </div> */}
          </div>
          <div className={styles.travaller_row}>
            <TravelCard
              user_name={'Sonya Clarke'}
              user_img={'/img/user5.png'}
              post_name={'Royal Galaxy Resort'}
              date_range={'4 Jun - 6 Jun'}
              rating={'1.0'}
              amount={'$90'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Winter Gilbert'}
              user_img={'/img/user7.png'}
              post_name={'Red wood hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Elsie Lindsey'}
              user_img={'/img/user8.png'}
              post_name={'Obsidian Bay Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'3.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Aliyah Bailey'}
              user_img={'/img/user9.png'}
              post_name={'Primal Covert Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'4.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />
           
          </div>
          <div className={styles.travaller_row}>
            <TravelCard
              user_name={'Sonya Clarke'}
              user_img={'/img/user5.png'}
              post_name={'Royal Galaxy Resort'}
              date_range={'4 Jun - 6 Jun'}
              rating={'5.0'}
              amount={'$90'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Winter Gilbert'}
              user_img={'/img/user7.png'}
              post_name={'Red wood hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'4.0'}
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
              rating={'1.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />
           
          </div>
          <div className={styles.travaller_row}>
            <TravelCard
              user_name={'Sonya Clarke'}
              user_img={'/img/user5.png'}
              post_name={'Royal Galaxy Resort'}
              date_range={'4 Jun - 6 Jun'}
              rating={'3.0'}
              amount={'$90'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Winter Gilbert'}
              user_img={'/img/user7.png'}
              post_name={'Red wood hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Elsie Lindsey'}
              user_img={'/img/user8.png'}
              post_name={'Obsidian Bay Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'5.0'}
              amount={'$100'}
              description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />

            <TravelCard
              user_name={'Aliyah Bailey'}
              user_img={'/img/user9.png'}
              post_name={'Primal Covert Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'5.0'}
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
