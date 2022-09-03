import React, { useState } from 'react';
import styles from 'styles/Collapsible.module.css';

import Image from "next/image";
import Button from "@mui/material/Button";

import iconUser from '../../public/img/icon/icon-user-alt.svg';

const Collapsible = ({ children, name, occupation, image, rating }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (

    <div className={styles.container}>
      <div className={styles.requests} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.request_body}>
          <div className={styles.usericon}>
            <Image
              src={image}
              alt="name"
              width={64}
              height={64}></Image>
          </div>
          <div className={styles.request_name}>
            <p className={styles.text_name}>{name}</p>
            <p className={styles.textmuted}>{occupation}</p>
          </div>
          <div className={styles.request_rate}>
            <Button
              startIcon={<Image src={iconUser} alt="User icon" />}>
              {rating}
            </Button>
          </div>
        </div>
        <div className={isOpen ? styles.show : styles.content}>{children}</div>
      </div>



    </div>
  );
};

export default Collapsible;