import React from 'react';
import styles from './Fotter.module.css';

function Fotter() {
  return (
   <>
   <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <ul className={styles.footer_content_box}>
          <li className={styles.footer_logo}>
            <a href="#">
              <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt="" />
            </a>
          </li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">SMB</a></li>
          <li><a href="#">Enterprise</a></li>
          <li><a href="#">Apps marketplace</a></li>
          <li><a href="#">24/7 support</a></li>
        </ul>
        <ul className={styles.footer_content_box}>
          <li className={styles.link_name}>Features</li>
          <li><a href="#">Automations</a></li>
          <li><a href="#">Files</a></li>
          <li><a href="#">Dashboards</a></li>
          <li><a href="#">Kanban</a></li>
          <li><a href="#">Gantt</a></li>
        </ul>
        {/* Add other sections using the CSS class names defined in your CSS module */}

        <ul className={styles.footer_content_box}>
            <li className={styles.link_name}>monday project</li>
            <li><a href="#">monday work management</a></li>
            <li><a href="#">monday sales CRM</a></li>
            <li><a href="#">monday marketer</a></li>
            <li><a href="#">monday projects</a></li>
            <li><a href="#">mondey dev</a></li>
        </ul>
        <ul className={styles.footer_content_box}>
            <li className={styles.link_name}>Use cases</li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Project management</a></li>
            <li><a href="#">sales</a></li>
            <li><a href="#">Devloper</a></li>
            <li><a href="#">HR</a></li>
            <li><a href="#">IT</a></li>
            <li><a href="#">Operation</a></li>
            <li><a href="#">Construction</a></li>
            <li><a href="#">Education</a></li>
          </ul>
        <ul className={styles.footer_content_box}>
            <li className={styles.link_name}>Company</li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers-We're hiring</a></li>
            <li><a href="#">monday-U</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Customer stories</a></li>
            <li><a href="#">Become a partner</a></li>
            <li><a href="#">Affilates</a></li>
            <li><a href="#">Digital Lift</a></li>
            <li><a href="#">Investor relations</a></li>
          </ul>
        <ul className={styles.footer_content_box}>
            <li className={styles.link_name}>Resouces</li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Startup for startup</a></li>
            <li><a href="#">Global events</a></li>
            <li><a href="#">App development</a></li>
            <li><a href="#">Find a partnert</a></li>
            <li><a href="#">Compare</a></li>
          </ul>


      </div>
      <div className={styles.footer_content_last}>
        <div className={styles.footer_content_last_first}>
          <div className={styles.footer_content_last_first_1}>
           
          </div>
          <div className={styles.footer_content_last_first_2}>
            <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/gdpr-logo.png" alt="" />
            <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/iso-logo1.png" alt="" />
            <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/soc-logo.png" alt="" />
            <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/hipaa-logo.png" alt="" />
          </div>
        </div>
        <div className={styles.footer_content_last_first_second}>
          <div className={styles.social_link}>
            <i className={`fa-brands fa-reddit ${styles.icon}`}></i>
            <i className={`fa-brands fa-linkedin-in ${styles.icon}`}></i>
            <i className={`fa-brands fa-facebook ${styles.icon}`}></i>
            <i className={`fa-brands fa-youtube ${styles.icon}`}></i>
            <i className={`fa-brands fa-twitter ${styles.icon}`}></i>
            <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
            <i className={`fa-brands fa-tiktok ${styles.icon}`}></i>
          </div>
          <div className={styles.footer_allright}>
            <p>
              <span>Security</span> | <span>Terms and privacy</span> | <span>Privacy policy</span> | <span>Status</span>
            </p>
          </div>
          <div className={styles.footer_allright_2}>
            <p>All Rights Reserved © Team_Sunday</p>
          </div>
        </div>
        <div className={styles.footer_content_last_first_third}>
          <div className={styles.playstore_apple}>
            <div className={styles.playstore_pic}>
              <img src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png" alt="" />
            </div>
            <div className={styles.playstore_pic}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
            </div>
          </div>
          <div className={styles.accessibility}>
            <i className={`fa-brands fa-accessible-icon ${styles.icon}`}></i>
            <p>Accessibility statement</p>
          </div>
        </div>
      </div>
    </footer>
   </>

  )};

export default Fotter;
