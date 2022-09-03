import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from "components/EmblaCarouselButtons";
import Head from "next/head";

import WrapHeader from "components/WrapHeader";
import WrapFooter from "components/WrapFooter";
import styles from "styles/MyPost.module.css";

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MyPostCard from "components/MyPostCard";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

import iconBookmark from '../../public/img/icon/icon-rebon.svg';
import iconShare from '../../public/img/icon/icon-share.svg';
import iconStar from '../../public/img/icon/icon-star.svg';
import iconUser from '../../public/img/icon/icon-user-alt.svg';
import iconMessage from '../../public/img/icon/icon-message-white.svg';

export default function MyPost() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Totel | My Posts</title>
        <meta name='description' content='Best Spaces in the Universe.' />
      </Head>

      <WrapHeader />

      <main className={styles.homemain}>
        <TabContext value={value}>
          <div className={styles.top_tab_bar} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} className={styles.tablist} aria-label="lab API tabs example">
                <Tab label="Live" value="1" />
                <Tab label="Expired" value="2" />
              </TabList>
            </Box>
          </div>
          <div className={styles.tabdiv}>
            <TabPanel value="1">
              <div className={styles.tabrow}>
                <MyPostCard
                  post_name="Saraswati ( pure vegetarian ) - a complete family hotel"
                  date={'March 24, 2020'}
                  post_img={'/img/hotal1.png'}
                  date_range={'5 Mar - 6 March'}
                  amount={'$100'}
                  gender={'male'}    
                />
                 <MyPostCard
                  post_name="Saraswati ( pure vegetarian ) - a complete family hotel"
                  date={'March 24, 2020'}
                  post_img={'/img/image4.png'}
                  date_range={'5 Mar - 6 March'}
                  amount={'$100'}
                  gender={'female'}    
                />
              </div>
              <div className={styles.tabrow}>
                <MyPostCard
                  post_name="Saraswati ( pure vegetarian ) - a complete family hotel"
                  date={'March 24, 2020'}
                  post_img={'/img/image7.png'}
                  date_range={'5 Mar - 6 March'}
                  amount={'$100'}
                  gender={'male'}    
                />
                 <MyPostCard
                  post_name="Saraswati ( pure vegetarian ) - a complete family hotel"
                  date={'March 24, 2020'}
                  post_img={'/img/image9.png'}
                  date_range={'5 Mar - 6 March'}
                  amount={'$100'}
                  gender={'male'}    
                />
              </div>
            </TabPanel>
            <TabPanel value="2">
            <div className={styles.tabrow}>
                <MyPostCard
                  post_name="Saraswati ( pure vegetarian ) - a complete family hotel"
                  date={'March 24, 2020'}
                  post_img={'/img/hotal1.png'}
                  date_range={'5 Mar - 6 March'}
                  amount={'$100'}
                  gender={'male'}    
                />
                 <MyPostCard
                  post_name="Saraswati ( pure vegetarian ) - a complete family hotel"
                  date={'March 24, 2020'}
                  post_img={'/img/hotal2.png'}
                  date_range={'5 Mar - 6 March'}
                  amount={'$100'}
                  gender={'male'}    
                />
              </div>
            </TabPanel>
          </div>
        </TabContext>

      </main>

      <WrapFooter />
    </div>
  );
}
