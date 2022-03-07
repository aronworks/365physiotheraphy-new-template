import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
// import InsuranceBox from "../src/components/InsuranceBox";
// import SPONSORAVIVA from "../public/assets/new/SPONSOR_AVIVA.png";
// import SPONSORCORU from "../images/SPONSOR_CORU.jpg";
// import SPONSORIRISHLIFE from "../images/SPONSOR_IRISHLIFE.png";
// import SPONSORISCP from "../images/SPONSOR_ISCP.png";
// import SPONSORLAYA from "../images/SPONSOR_LAYA.png";
// import SPONSORVHI from "../images/SPONSOR_VHI.png";

// const box1 = [
//   {
//     img: SPONSORAVIVA,
//     link: "https://www.aviva.co.uk/health/health-products/physio-essentials/",
//   },
//   {
//     img: SPONSORVHI,
//     link: "https://www1.vhi.ie/home",
//   },
//   {
//     img: SPONSORLAYA,
//     link: "https://www.layahealthcare.ie/formembers/participatingtherapists/",
//   },
//   {
//     img: SPONSORIRISHLIFE,
//     link: "https://www.irishlifehealth.ie/benefits/back-up-benefit",
//   },
//   {
//     //img: SPONSORISCP, link:"https://askthephysio.ie/"
//     img: SPONSORISCP,
//     link: "https://www.iscp.ie/find-a-physio/thirupal-ragi-2643?iframe=1",
//   },
//   {
//     img: SPONSORCORU,
//     link: "https://coru.ie/about-us/",
//   },
// ];

export default function Home() {
  return (
    <>
      <Head>
        <>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <title>Resox - HTML 5 Template Preview</title>
          {/* Fav Icon */}
          <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          {/* Stylesheets */}
          <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
          <link href="assets/css/flaticon.css" rel="stylesheet" />
          <link href="assets/css/owl.css" rel="stylesheet" />
          <link href="assets/css/bootstrap.css" rel="stylesheet" />
          <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
          <link href="assets/css/animate.css" rel="stylesheet" />
          <link href="assets/css/color.css" rel="stylesheet" />
          <link href="assets/css/global.css" rel="stylesheet" />
          <link href="assets/css/style.css" rel="stylesheet" />
          <link href="assets/css/responsive.css" rel="stylesheet" />
        </>
      </Head>
      <div className="boxed_wrapper">
        {/* preloader */}
        <div className="loader-wrap">
          <div className="preloader">
            <div className="preloader-close">Preloader Close</div>
            <div id="handle-preloader" className="handle-preloader">
              <div className="animation-preloader">
                <div className="spinner" />
                <div className="txt-loading">
                  <span data-text-preloader="R" className="letters-loading">
                    R
                  </span>
                  <span data-text-preloader="e" className="letters-loading">
                    e
                  </span>
                  <span data-text-preloader="s" className="letters-loading">
                    s
                  </span>
                  <span data-text-preloader="o" className="letters-loading">
                    o
                  </span>
                  <span data-text-preloader="x" className="letters-loading">
                    x
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* preloader end */}
        {/* main header */}
        <header className="main-header style-one">
          {/* header-top */}
          <div className="header-top">
            <div className="auto-container">
              <div className="top-inner clearfix">
                <div className="text pull-left">
                  <p>Welcome to the professional physiotherapy clinic</p>
                </div>
                <ul className="info pull-right">
                  <li>
                    <i className="flaticon-pin" />
                    256, Swords Road, Santry, Dublin 9 D09RX73
                  </li>
                  {/* <li>
                    <i className="flaticon-alarm-clock" />
                    Mon to Fri 9:00am to 6:00pm
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {/* header-upper */}
          <div className="header-upper">
            <div className="auto-container">
              <div className="upper-inner clearfix">
                <div className="logo-box pull-left">
                  <figure className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </figure>
                </div>
                <ul className="upper-info pull-right clearfix">
                  <li>
                    <i className="flaticon-telephone" />
                    <p>Call us anytime</p>
                    <h5>
                      <a href="tel:353 830985073">+353 830985073</a>
                    </h5>
                  </li>
                  <li>
                    <i className="flaticon-email" />
                    <p>Write a mail</p>
                    <h5>
                      <a href="mailto:needhelp@info.com">contact@365physiotherapy.ie</a>
                    </h5>
                  </li>
                  <li className="btn-box">
                    <a href="contact.html" className="theme-btn-one">
                      Book Appointment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* header-lower */}
          <div className="header-lower">
            <div className="auto-container">
              <div className="outer-box">
                <div className="menu-area clearfix">
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light pull-left">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix">
                        <li className="current dropdown">
                          <a href="index.html">Home</a>
                          <ul>
                            <li>
                              <a href="index.html">Home Page 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home Page 02</a>
                            </li>
                            <li>
                              <a href="index-onepage.html">OnePage Home</a>
                            </li>
                            <li>
                              <a href="index-rtl.html">RTL Home</a>
                            </li>
                            <li className="dropdown">
                              <a href="index.html">Header Style</a>
                              <ul>
                                <li>
                                  <a href="index.html">Header Style 01</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Header Style 02</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index.html">Pages</a>
                          <ul>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="therapists.html">Our Therapists</a>
                            </li>
                            <li>
                              <a href="therapists-details.html">Therapists Details</a>
                            </li>
                            <li>
                              <a href="error.html">404</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index.html">Services</a>
                          <ul>
                            <li>
                              <a href="service.html">Our Services</a>
                            </li>
                            <li>
                              <a href="service-details.html">Physiotherapy</a>
                            </li>
                            <li>
                              <a href="service-details-2.html">Massage Therapy</a>
                            </li>
                            <li>
                              <a href="service-details-3.html">Sport Injuries</a>
                            </li>
                            <li>
                              <a href="service-details-4.html">
                                Chiroptratic Therapy
                              </a>
                            </li>
                            <li>
                              <a href="service-details-5.html">Clinical Pilates</a>
                            </li>
                            <li>
                              <a href="service-details-6.html">Work Injusries</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="index.html">Elements</a>
                          <div className="megamenu">
                            <div className="row clearfix">
                              <div className="col-lg-6 column">
                                <ul>
                                  <li>
                                    <h4>Elements 1</h4>
                                  </li>
                                  <li>
                                    <a href="about-element-1.html">About Block 01</a>
                                  </li>
                                  <li>
                                    <a href="about-element-2.html">About Block 02</a>
                                  </li>
                                  <li>
                                    <a href="about-element-3.html">About Block 03</a>
                                  </li>
                                  <li>
                                    <a href="service-element-1.html">
                                      Service Block 01
                                    </a>
                                  </li>
                                  <li>
                                    <a href="service-element-2.html">
                                      Service Block 02
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-element-1.html">News Block 01</a>
                                  </li>
                                  <li>
                                    <a href="news-element-2.html">News Block 02</a>
                                  </li>
                                  <li>
                                    <a href="project-element-1.html">
                                      Project Block 01
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-6 column">
                                <ul>
                                  <li>
                                    <h4>Elements 2</h4>
                                  </li>
                                  <li>
                                    <a href="project-element-2.html">
                                      Project Block 02
                                    </a>
                                  </li>
                                  <li>
                                    <a href="team-element-1.html">Team Block 01</a>
                                  </li>
                                  <li>
                                    <a href="team-element-2.html">Team Block 02</a>
                                  </li>
                                  <li>
                                    <a href="feature-element-1.html">
                                      Feature Block 01
                                    </a>
                                  </li>
                                  <li>
                                    <a href="feature-element-2.html">
                                      Feature Block 02
                                    </a>
                                  </li>
                                  <li>
                                    <a href="testimonial-element.html">
                                      Testimonial Block
                                    </a>
                                  </li>
                                  <li>
                                    <a href="clients-element.html">Clients Block</a>
                                  </li>
                                  <li>
                                    <a href="faq-element.html">Faq Block</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdown">
                          <a href="index.html">Blog</a>
                          <ul>
                            <li>
                              <a href="blog.html">Blog Grid</a>
                            </li>
                            <li>
                              <a href="blog-2.html">Blog Standard</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <ul className="social-links pull-right clearfix">
                    <li>
                      <a rel="noreferrer noopener" target="_blank" href="https://twitter.com/365physiosantry">
                        <i className="fab fa-twitter"></i>
                      </a>

                    </li>
                    <li>
                      <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/company/77759963/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/365-Physiotherapy-in-SantryDublin-9-109199244891323">
                        <i className="fab fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a rel="noreferrer noopener" target="_blank" href="https://www.pinterest.ie/365physiotherapy/">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/365physiotherapydublin/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*sticky Header*/}
          <div className="sticky-header">
            <div className="auto-container">
              <div className="outer-box">
                <div className="menu-area clearfix">
                  <nav className="main-menu pull-left">
                    {/*Keep This Empty / Menu will come through Javascript*/}
                  </nav>
                  <ul className="social-links pull-right clearfix">
                    <li>
                      <a href="index.html">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="fab fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* main-header end */}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <i className="fas fa-times" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="assets/images/logo-2.png" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>Chicago 12, Melborne City, USA</li>
                <li>
                  <a href="tel:+8801682648101">+88 01682648101</a>
                </li>
                <li>
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="index.html">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <span className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <span className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <span className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* banner-section */}
        <section className="banner-section centred">
          <div className="banner-carousel owl-theme owl-carousel owl-dots-none nav-style-one">
            <div className="slide-item">
              <div
                className="image-layer"
                style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}
              />
              <div className="auto-container">
                <div className="content-box">
                  <h6>Welcome to physiotherapy clinic</h6>
                  <h1>We’re Restoring Health Since Years.</h1>
                  <div className="btn-box">
                    <a href="index.html" className="theme-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div
                className="image-layer"
                style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}
              />
              <div className="auto-container">
                <div className="content-box">
                  <h6>Welcome to physiotherapy clinic</h6>
                  <h1>We’re Restoring Health Since Years.</h1>
                  <div className="btn-box">
                    <a href="index.html" className="theme-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div
                className="image-layer"
                style={{ backgroundImage: "url(assets/images/banner/banner-3.jpg)" }}
              />
              <div className="auto-container">
                <div className="content-box">
                  <h6>Welcome to physiotherapy clinic</h6>
                  <h1>We’re Restoring Health Since Years.</h1>
                  <div className="btn-box">
                    <a href="index.html" className="theme-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner-section end */}
        {/* feature-section */}
        <section className="feature-section">
          <div className="outer-container clearfix">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-therapist" />
                </div>
                <div className="inner">
                  <h4>Experienced Therapists</h4>
                  <p>
                    Lorem ipsum is fre dolor sit amet cectetuer adipiscing elit, sed
                    diam nonummy nibh.
                  </p>
                  <a href="index.html">
                    <i className="fas fa-chevron-circle-right" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-24-hours" />
                </div>
                <div className="inner">
                  <h4>24/7 Emergency Services</h4>
                  <p>
                    Lorem ipsum is fre dolor sit amet cectetuer adipiscing elit, sed
                    diam nonummy nibh.
                  </p>
                  <a href="index.html">
                    <i className="fas fa-chevron-circle-right" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-consultation" />
                </div>
                <div className="inner">
                  <h4>Get Free Consultation</h4>
                  <p>
                    Lorem ipsum is fre dolor sit amet cectetuer adipiscing elit, sed
                    diam nonummy nibh.
                  </p>
                  <a href="index.html">
                    <i className="fas fa-chevron-circle-right" />
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* feature-section end */}
        {/* about-section */}
        <section
          className="about-section sec-pad"
          style={{ backgroundImage: "url(assets/images/background/about-1.jpg)" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-xl-7 col-lg-12 col-md-12 content-column">
                <div id="content_block_1">
                  <div className="content-box">
                    <div className="sec-title">
                      <p>Clinic Introduction</p>
                      <h2>Welcome to Physiotherapy &amp; Chiroparctor Clinic</h2>
                    </div>
                    <h3>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum lorem ipsum is simply free.
                    </h3>
                    <ul className="list-item clearfix">
                      <li>Refresing to get such a personal touch.</li>
                      <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
                      <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <div className="inner-box clearfix">
                      <div className="inner">
                        <div className="icon-box">
                          <i className="flaticon-foot" />
                        </div>
                        <h4>Get your lifestyle back</h4>
                      </div>
                      <div className="author">
                        <figure className="author-thumb">
                          <img src="assets/images/resource/author-1.png" alt="" />
                        </figure>
                        <figure className="signature">
                          <img src="assets/images/resource/signature-1.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}
        {/* service-section */}
        {/* <section className="service-section sec-pad border-bottom">
          <div className="auto-container">
            <div className="sec-title">
              <p>Our Services</p>
              <h2>What We’re Offering</h2>
            </div>
            <div className="four-item-carousel owl-carousel owl-theme owl-dots-none">
              <div className="service-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="service-details.html">
                        <img src="assets/images/service/service-1.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="icon-box">
                      <i className="flaticon-physical" />
                    </div>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="service-details.html">Physiotherapy</a>
                    </h4>
                    <p>Lorem is free text no used by other agencies...</p>
                    <div className="link">
                      <a href="service-details.html">
                        <i className="fas fa-chevron-circle-right" />
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="service-details-2.html">
                        <img src="assets/images/service/service-2.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="icon-box">
                      <i className="flaticon-massage" />
                    </div>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="service-details-2.html">Massage Therapy</a>
                    </h4>
                    <p>Lorem is free text no used by other agencies...</p>
                    <div className="link">
                      <a href="service-details-2.html">
                        <i className="fas fa-chevron-circle-right" />
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="service-details-3.html">
                        <img src="assets/images/service/service-3.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="icon-box">
                      <i className="flaticon-broken-bone" />
                    </div>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="service-details-3.html">Sport Injuries</a>
                    </h4>
                    <p>Lorem is free text no used by other agencies...</p>
                    <div className="link">
                      <a href="service-details-3.html">
                        <i className="fas fa-chevron-circle-right" />
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="service-details-4.html">
                        <img src="assets/images/service/service-4.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="icon-box">
                      <i className="flaticon-chiropractic" />
                    </div>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="service-details-4.html">Chiropratic Therapy</a>
                    </h4>
                    <p>Lorem is free text no used by other agencies...</p>
                    <div className="link">
                      <a href="service-details-4.html">
                        <i className="fas fa-chevron-circle-right" />
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* service-section end */}
        {/* clients-section */}
        <section className="clients-section">
          <div className="auto-container">
            <div className="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
              <figure className="clients-logo-box">
                <a href="index.html">
                  <img src="assets/images/clients/clients-logo-1.png" alt="" />
                </a>
              </figure>
              <figure className="clients-logo-box">
                <a href="index.html">
                  <img src="assets/images/clients/clients-logo-2.png" alt="" />
                </a>
              </figure>
              <figure className="clients-logo-box">
                <a href="index.html">
                  <img src="assets/images/clients/clients-logo-3.png" alt="" />
                </a>
              </figure>
              <figure className="clients-logo-box">
                <a href="index.html">
                  <img src="assets/images/clients/clients-logo-4.png" alt="" />
                </a>
              </figure>
              <figure className="clients-logo-box">
                <a href="index.html">
                  <img src="assets/images/clients/clients-logo-5.png" alt="" />
                </a>
              </figure>
            </div>
          </div>
        </section>
        {/* clients-section end */}
        {/* proudly-section */}
        {/* <section className="proudly-section bg-color-1">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/pattern-1.png)" }}
          />
          <figure className="image-layer">
            <img src="assets/images/resource/proudly-1.jpg" alt="" />
          </figure>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5 content-column">
                <div id="content_block_2">
                  <div className="content-box">
                    <div className="sec-title light">
                      <p>Solutions to your pain</p>
                      <h2>We Proudly Give Quality Treatments</h2>
                    </div>
                    <div className="text">
                      <p>
                        Donec pellentesque dapibus interdum. Mauris et tellus congue ,
                        rutrum neque a, varius felis. Phasellus nibh diam, tincidunt
                        nec risus ut, auctor gravida metus that covers the front of
                        the eye.
                      </p>
                    </div>
                    <ul className="list-item clearfix">
                      <li>24 -Hours Emergency Services</li>
                      <li>Professional and Certified Therapists</li>
                      <li>Get Free Consultation Anytime</li>
                    </ul>
                    <div className="counter-inner clearfix">
                      <div className="counter-block">
                        <div className="inner-box">
                          <div className="icon-box">
                            <i className="flaticon-doctor" />
                          </div>
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={1500}
                              data-stop={78}
                            >
                              0
                            </span>
                          </div>
                          <p>Skiled Therapist</p>
                        </div>
                      </div>
                      <div className="counter-block">
                        <div className="inner-box">
                          <div className="icon-box">
                            <i className="flaticon-physical" />
                          </div>
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={1500}
                              data-stop={880}
                            >
                              0
                            </span>
                          </div>
                          <p>Solved Cases</p>
                        </div>
                      </div>
                      <div className="counter-block">
                        <div className="inner-box">
                          <div className="icon-box">
                            <i className="flaticon-patient" />
                          </div>
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={1500}
                              data-stop={640}
                            >
                              0
                            </span>
                          </div>
                          <p>Happy Patients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* proudly-section end */}
        {/* feature-style-two */}
        {/* <section className="feature-style-two">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="feature-block-two">
                <div className="inner-box bg-color-2">
                  <div className="content-inner">
                    <h2>
                      2 Tips <br />
                      How Can <br />
                      Chiropractic Care Help You
                    </h2>
                    <a href="index.html" className="theme-btn-one">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="feature-block-two">
                <div className="inner-box centred">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: "url(assets/images/resource/feature-1.jpg)"
                    }}
                  />
                  <div className="content-box">
                    <div className="count-box">
                      <span>01</span>
                    </div>
                    <h3>Body Relexation</h3>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor.</p>
                  </div>
                </div>
              </div>
              <div className="feature-block-two">
                <div className="inner-box centred">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: "url(assets/images/resource/feature-2.jpg)"
                    }}
                  />
                  <div className="content-box">
                    <div className="count-box">
                      <span>02</span>
                    </div>
                    <h3>Body Treatment</h3>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* feature-style-two end */}
        {/* testimonial-section */}
        {/* <section className="testimonial-section sec-pad centred">
          <div className="auto-container">
            <div className="sec-title">
              <p>Our Testimonials</p>
              <h2>What Our Patients Say</h2>
            </div>
            <div className="inner-container">
              <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>David Coper</h4>
                    <p>
                      I was very impresed by the power wash resox services lorem ipsum
                      is simply free text available used by copy typing refreshing.
                      Neque porro noting est qui.
                    </p>
                    <figure className="image-box">
                      <img src="assets/images/resource/testimonial-1.png" alt="" />
                    </figure>
                    <figure className="quote-box">
                      <img src="assets/images/icons/quote-1.png" alt="" />
                    </figure>
                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>Jessica Brown</h4>
                    <p>
                      I was very impresed by the power wash resox services lorem ipsum
                      is simply free text available used by copy typing refreshing.
                      Neque porro noting est qui.
                    </p>
                    <figure className="image-box">
                      <img src="assets/images/resource/testimonial-2.png" alt="" />
                    </figure>
                    <figure className="quote-box">
                      <img src="assets/images/icons/quote-1.png" alt="" />
                    </figure>
                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>Kevin Martin</h4>
                    <p>
                      I was very impresed by the power wash resox services lorem ipsum
                      is simply free text available used by copy typing refreshing.
                      Neque porro noting est qui.
                    </p>
                    <figure className="image-box">
                      <img src="assets/images/resource/testimonial-3.png" alt="" />
                    </figure>
                    <figure className="quote-box">
                      <img src="assets/images/icons/quote-1.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* testimonial-section end */}
        {/* startup-section */}
        {/* <section
          className="startup-section"
          style={{ backgroundImage: "url(assets/images/background/startup-1.jpg)" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div id="content_block_3">
                  <div className="content-box mr-40">
                    <div className="sec-title light">
                      <p>We’re here to help you</p>
                      <h2>Start Up Your Health Care With Us</h2>
                    </div>
                    <div className="single-box">
                      <div className="inner">
                        <div className="icon-box">
                          <i className="fas fa-check" />
                        </div>
                        <h4>
                          <a href="index.html">No Charges for Consultation</a>
                        </h4>
                        <p>
                          Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                          Aenean sollicitudin, lorem is simply free text quis
                          bibendum.
                        </p>
                      </div>
                      <div className="inner">
                        <div className="icon-box">
                          <i className="fas fa-check" />
                        </div>
                        <h4>
                          <a href="index.html">Quality Equipment &amp; Tools</a>
                        </h4>
                        <p>
                          Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                          Aenean sollicitudin, lorem is simply free text quis
                          bibendum.
                        </p>
                      </div>
                    </div>
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-physiotherapy" />
                      </div>
                      <h3>
                        Resox is trust by more <br />
                        then <span>8800</span> healthy patients
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                <div id="content_block_4">
                  <div className="form-inner ml-40">
                    <h6>Fill the form</h6>
                    <p>
                      Lorem ipsum dolor sit amet, conse ctetur adipisicin elit ipmon
                      sed tempor
                    </p>
                    <form action="index.html" method="post">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group message-btn">
                        <button type="submit" className="theme-btn-one">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* startup-section end */}
        {/* news-section */}
        {/* <section className="news-section sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <p>from the blog</p>
              <h2>News &amp; Articles</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-1.jpg" alt="" />
                      </a>
                      <span className="post-date">20 June, 2020</span>
                    </figure>
                    <div className="lower-content">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="far fa-user-circle" />
                          <a href="index.html">Admin</a>
                        </li>
                        <li>
                          <i className="far fa-comments" />
                          <a href="index.html">7 Comments</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          How you can choose the best physiotherapy clinic
                        </a>
                      </h3>
                      <p>
                        Lorem ipsum is simply free text used by new pesnhl note this
                        copytyping refreshing.
                      </p>
                      <div className="link">
                        <a href="blog-details.html">
                          <i className="fas fa-chevron-circle-right" />
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-2.jpg" alt="" />
                      </a>
                      <span className="post-date">19 June, 2020</span>
                    </figure>
                    <div className="lower-content">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="far fa-user-circle" />
                          <a href="index.html">Admin</a>
                        </li>
                        <li>
                          <i className="far fa-comments" />
                          <a href="index.html">5 Comments</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Eat the right diet for your body to stay healthy
                        </a>
                      </h3>
                      <p>
                        Lorem ipsum is simply free text used by new pesnhl note this
                        copytyping refreshing.
                      </p>
                      <div className="link">
                        <a href="blog-details.html">
                          <i className="fas fa-chevron-circle-right" />
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-3.jpg" alt="" />
                      </a>
                      <span className="post-date">18 June, 2020</span>
                    </figure>
                    <div className="lower-content">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="far fa-user-circle" />
                          <a href="index.html">Admin</a>
                        </li>
                        <li>
                          <i className="far fa-comments" />
                          <a href="index.html">4 Comments</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          How can chiropractic care help your health system
                        </a>
                      </h3>
                      <p>
                        Lorem ipsum is simply free text used by new pesnhl note this
                        copytyping refreshing.
                      </p>
                      <div className="link">
                        <a href="blog-details.html">
                          <i className="fas fa-chevron-circle-right" />
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* news-section end */}
        {/* gallery-section */}
        {/* <section className="gallery-section">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 gallery-block">
                <div className="gallery-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/gallery/gallery-1.jpg" alt="" />
                    </figure>
                    <div className="link">
                      <a
                        href="assets/images/gallery/gallery-1.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-symbol" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 gallery-block">
                <div className="gallery-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/gallery/gallery-2.jpg" alt="" />
                    </figure>
                    <div className="link">
                      <a
                        href="assets/images/gallery/gallery-2.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-symbol" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 gallery-block">
                <div className="gallery-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/gallery/gallery-3.jpg" alt="" />
                    </figure>
                    <div className="link">
                      <a
                        href="assets/images/gallery/gallery-3.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-symbol" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 gallery-block">
                <div className="gallery-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/gallery/gallery-4.jpg" alt="" />
                    </figure>
                    <div className="link">
                      <a
                        href="assets/images/gallery/gallery-4.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="flaticon-plus-symbol" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* gallery-section end */}
        {/* cta-section */}
        <section className="cta-section bg-color-2">
          <div className="auto-container">
            <div className="inner-box clearfix">
              <div className="text pull-left">
                <h2>Choose the best physio therapy for youself</h2>
              </div>
              <div className="btn-box pull-right">
                <a href="index.html" className="theme-btn-one">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="home-page__footer-box">
            <InsuranceBox imgs={box1} right={true} flex=""></InsuranceBox>
          </div>
        </section> */}
        {/* cta-section end */}
        {/* main-footer */}
        <footer className="main-footer">
          <div
            className="footer-top"
            style={{ backgroundImage: "url(assets/images/background/footer-1.jpg)" }}
          >
            <figure className="icon-layer">
              <img src="assets/images/icons/icon-1.png" alt="" />
            </figure>
            <div className="auto-container">
              <div className="widget-section">
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget logo-widget">
                      <figure className="logo-box">
                        <a href="index.html">
                          <img src="assets/images/footer-logo.png" alt="" />
                        </a>
                      </figure>
                      <div className="text">
                        <p>There are many variatio of lorem ipsum available.</p>
                      </div>
                      <ul className="info clearfix">
                        <li>
                          <i className="flaticon-email" />
                          <a href="mailto:contact@365physiotherapy.ie">contact@365physiotherapy.ie</a>
                        </li>
                        <li>
                          <i className="flaticon-pin" />
                          256, Swords Road, Santry,
                          <br />
                          Dublin 9 D09RX73
                        </li>
                      </ul>
                      <div className="support-box">
                        <i className="flaticon-telephone" />
                        <p>Call us anytime</p>
                        <h5>
                          <a href="tel:353 830985073">+353 830985073</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget ml-70">
                      <div className="widget-title">
                        <h4>Links</h4>
                      </div>
                      <div className="widget-content">
                        <ul className="links-list clearfix">
                          <li title="Home" >
                            <a href="/home">Home</a>
                          </li>

                          <li>
                            <a href="/clinic">Clinic </a>
                          </li>
                          <li>
                            <a href="/homevisit">Home Visit</a>
                          </li>
                          <li>
                            <a href="/aboutus">About Us</a>
                          </li>
                          <li>
                            <a href="/testimonials">Testimonials</a>
                          </li>
                          <li>
                            <a href="/fees">Fees</a>
                          </li>
                          <li>
                            <a href="/booking">Booking</a>
                          </li>
                          <li>
                            <a href="/faq">FAQ</a>
                          </li>
                          <li>
                            <a href="/contactus">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                      <div className="widget-title">
                        <h4>Company</h4>
                      </div>
                      <div className="widget-content">
                        <ul className="links-list clearfix">
                          <li>
                            <a href="/privacypolicy">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="/termsandconditions">Terms and Conditions.</a>
                          </li>
                          {/* <li>
                            <a href="index.html">Chiroptratic Therapy</a>
                          </li>
                          <li>
                            <a href="index.html">Sport Injuries</a>
                          </li>
                          <li>
                            <a href="index.html">Clinical Pilates</a>
                          </li>
                          <li>
                            <a href="index.html">Work Injuries</a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget appointment-widget centred">
                      <div className="icon-layer">
                        <i className="flaticon-alarm-clock-1" />
                      </div>
                      <div className="widget-title">
                        <h4>Timings</h4>
                      </div>
                      <div className="widget-content">
                        <ul className="shediul-list clearfix">
                          <li>
                            <span>Mon</span>
                            <h6>9:00AM - 5:00PM</h6>
                            <h6>6:00PM - 9:00PM</h6>
                          </li>

                          <li>
                            <span>Tue & Wed</span>
                            <h6>9:00AM - 5:00PM</h6>
                            <h6>6:00PM - 9:30PM</h6>
                          </li>
                          <li>
                            <span>Thur</span>
                            <h6>9:00AM - 5:00PM</h6>
                            <h6>6:30PM - 9:00PM</h6>
                          </li>
                          <li>
                            <span>Fri</span>
                            <h6>9:00AM - 4:30PM</h6>
                            <h6>6:30PM - 9:30PM</h6>
                          </li>
                          <li>
                            <span>Sat</span>
                            <h6>10:00AM - 5:00PM</h6>
                          </li>
                          <li>
                            <span>Sun</span>
                            <h6>Work off</h6>
                          </li>
                          <li>
                            <a href="index.html" className="theme-btn-one">
                              Book Appointment
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-botton">
            <div className="auto-container clearfix">
              <div className="copyright pull-left">
                <p>
                  © Copyright 2022 by <a href="index.html"> 365 Physiotherapy</a>
                </p>
              </div>
              <ul className="social-links pull-right clearfix">
                <li>
                  <a rel="noreferrer noopener" target="_blank" href="https://twitter.com/365physiosantry">
                    <i className="fab fa-twitter"></i>
                  </a>

                </li>
                <li>
                  <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/company/77759963/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/365-Physiotherapy-in-SantryDublin-9-109199244891323">
                    <i className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a rel="noreferrer noopener" target="_blank" href="https://www.pinterest.ie/365physiotherapy/">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/365physiotherapydublin/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {/* main-footer end */}
        {/*scroll to top*/}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="far fa-arrow-up" />
        </button>
      </div>
      <Script strategy="beforeInteractive" src="assets/js/jquery.js"></Script>
      <Script src="assets/js/popper.min.js"></Script>
      <Script strategy="beforeInteractive" src="assets/js/bootstrap.min.js"></Script>
      <Script strategy="beforeInteractive" src="assets/js/owl.js"></Script>
      <Script strategy="beforeInteractive" src="assets/js/wow.js"></Script>
      <Script src="assets/js/validation.js"></Script>
      <Script strategy="beforeInteractive" src="assets/js/jquery.fancybox.js"></Script>
      <Script strategy="beforeInteractive" src="assets/js/appear.js"></Script>
      <Script strategy="beforeInteractive" src="assets/js/scrollbar.js"></Script>
      <Script src="assets/js/nav-tool.js"></Script>

      <Script src="assets/js/script.js"></Script>
    </>

  )
}
