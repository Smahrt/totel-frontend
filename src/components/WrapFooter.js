import Link from 'next/link';
import Image from "next/image";

import styles from 'styles/WrapFooter.module.css'
import HomeCurrencyLang from './HomeCurrencyLang';

import iconFacebook from '../../public/img/icon/icon-facebook-n.svg';
import iconInsta from '../../public/img/icon/icon-insta-n.svg';
import iconTwitter from '../../public/img/icon/icon-twitter-n.svg';
import iconLinkedin from '../../public/img/icon/icon-linkedin-n.svg';
import iconYoutube from '../../public/img/icon/icon-youtube-n.svg';

const WrapFooter = () => {
  const dateFoot = new Date();
  const dateYear = dateFoot.getFullYear();
  return (
    <div className={styles.wrapfooter}>
      <div className={styles.footerlinkbox}>
        <div className={styles.footerlogocol}>
          <div className={styles.footerlogo}>
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div className={styles.footerlogotext}>
            <h2>Social links</h2>
            <div className={styles.footersocial}>
              <div>
                <Image src={iconInsta} alt="Insta icon" />
              </div>
              <div>
                <Image src={iconTwitter} alt="Twitter icon" />
              </div>
              <div>
                <Image src={iconYoutube} alt="Youtube icon" />
              </div>
              <div>
                <Image src={iconFacebook} alt="iconFacebook icon" />
              </div>
              <div>
                <Image src={iconLinkedin} alt="Linkedin icon" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerlinkcol}>
          <h2>Help</h2>
          <Link href='/who-we-are'>Who We Are</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/work-with-us'>Work With Us</Link>
          <Link href='/team'>Team</Link>
        </div>
        <div className={styles.footerlinkcol}>
          <h2>Learn More</h2>
          <Link href='/privacy'>Privacy</Link>
          <Link href='/security'>Security</Link>
          <Link href='/terms'>Terms</Link>
          <Link href='/sitemap'>Sitemap</Link>
        </div>
        <div className={styles.footerlinkcol}>
          <h2>Populer Locations</h2>
          <Link href='/'>Miami</Link>
          <Link href='/'>DC</Link>
          <Link href='/'>LA</Link>
        </div>
        <div className={styles.footericoncol}>
          <div className={styles.footericoncol_content_app_icons_img}>
            <Image src={'/img/apple_store_color.png'} alt="Ios icon" width={204}
              height={59} />
          </div>
          <div>
            <Image src={'/img/google_play_color.png'} alt=" icon" width={204}
              height={59} />

          </div>
        </div>
      </div>
      <div className={styles.footerblackbox}>
        <div className={styles.footercopyright}>
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. {dateYear} © Totel™ Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default WrapFooter;