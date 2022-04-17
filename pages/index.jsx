import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Script from 'next/script';

export default function Home() {
    return (
        <>
            <Head>
                <>
                    <meta charSet='utf-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                    />
                    <title>Resox - HTML 5 Template Preview</title>
                    {/* Fav Icon */}
                    <link
                        rel='icon'
                        href='assets/images/favicon.ico'
                        type='image/x-icon'
                    />
                    {/* Google Fonts */}
                    <link
                        href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap'
                        rel='stylesheet'
                    />
                    {/* Stylesheets */}
                    <link
                        href='assets/css/font-awesome-all.css'
                        rel='stylesheet'
                    />
                    <link href='assets/css/flaticon.css' rel='stylesheet' />
                    <link href='assets/css/owl.css' rel='stylesheet' />
                    <link href='assets/css/bootstrap.css' rel='stylesheet' />
                    <link
                        href='assets/css/jquery.fancybox.min.css'
                        rel='stylesheet'
                    />
                    <link href='assets/css/animate.css' rel='stylesheet' />
                    <link href='assets/css/color.css' rel='stylesheet' />
                    <link href='assets/css/global.css' rel='stylesheet' />
                    <link href='assets/css/style.css' rel='stylesheet' />
                    <link href='assets/css/responsive.css' rel='stylesheet' />
                </>
            </Head>
            <div className='boxed_wrapper'>
                {/* main header */}
                <header className='main-header style-one'>
                    {/* header-top */}
                    <div className='header-top'>
                        <div className='auto-container'>
                            <div className='top-inner clearfix'>
                                <div className='text pull-left'>
                                    <p>Welcome to the 365 Physiotherapy</p>
                                </div>
                                <ul className='info pull-right'>
                                    <li>
                                        <i className='flaticon-pin' />
                                        256, Swords Road, Santry, Dublin 9
                                        D09RX73
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
                    <div className='header-upper'>
                        <div className='auto-container'>
                            <div className='upper-inner clearfix'>
                                <div className='logo-box pull-left'>
                                    <figure className='logo'>
                                        <a href='index.html'>
                                            <img
                                                src='assets/images/logo.png'
                                                alt=''
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <ul className='upper-info pull-right clearfix'>
                                    <li>
                                        <i className='flaticon-telephone' />
                                        <p>Call us</p>
                                        <h5>
                                            <a href='tel:0830985073'>
                                                0830985073
                                            </a>
                                        </h5>
                                    </li>
                                    <li>
                                        <i className='flaticon-email' />
                                        <p>Write a mail</p>
                                        <h5>
                                            <a href='mailto:needhelp@info.com'>
                                                contact@365physiotherapy.ie
                                            </a>
                                        </h5>
                                    </li>
                                    <li className='btn-box'>
                                        <a
                                            href='contact.html'
                                            className='theme-btn-one'
                                        >
                                            Book Appointment
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* header-lower */}
                    <div className='header-lower'>
                        <div className='auto-container'>
                            <div className='outer-box'>
                                <div className='menu-area clearfix'>
                                    {/*Mobile Navigation Toggler*/}
                                    <div className='mobile-nav-toggler'>
                                        <i className='icon-bar' />
                                        <i className='icon-bar' />
                                        <i className='icon-bar' />
                                    </div>
                                    <nav className='main-menu navbar-expand-md navbar-light pull-left'>
                                        <div
                                            className='collapse navbar-collapse show clearfix'
                                            id='navbarSupportedContent'
                                        >
                                            <ul className='navigation clearfix'>
                                                <li className='current dropdown'>
                                                    <a href='index.html'>
                                                        Home
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href='index.html'>
                                                                Clinic
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='index-2.html'>
                                                                Home Visit
                                                            </a>
                                                        </li>
                                                        {/* <li>
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
                            </li> */}
                                                    </ul>
                                                </li>
                                                <li className='dropdown'>
                                                    <a href='index.html'>
                                                        About Us
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href='about.html'>
                                                                Our Team
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='therapists.html'>
                                                                Service Fees
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='therapists-details.html'>
                                                                Testimonial
                                                            </a>
                                                        </li>
                                                        {/* <li>
                              <a href="error.html">404</a>
                            </li> */}
                                                    </ul>
                                                </li>
                                                <li className='dropdown'>
                                                    <a href='index.html'>
                                                        Our Services
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href='service-details.html'>
                                                                Musculoskeletal
                                                                Conditions
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='service-details-2.html'>
                                                                Post Surgery
                                                                Physio Rehab
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='service-details-3.html'>
                                                                Sports
                                                                Physiotheraphy
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='service-details-4.html'>
                                                                {' '}
                                                                Dry Needling
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='service-details-5.html'>
                                                                Children&apos;s
                                                                Physio
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='service-details-6.html'>
                                                                Home
                                                                Visit&apos;s
                                                                Physio
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='service-details-6.html'>
                                                                Vestibular Rehab
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className='dropdown'>
                                                    <a href='index.html'>
                                                        What We Treat{' '}
                                                    </a>
                                                    <div className='megamenu'>
                                                        <div className='row clearfix'>
                                                            <div className='col-lg-6 column'>
                                                                <ul>
                                                                    <li>
                                                                        <h4>
                                                                            Clinic
                                                                            Conditions
                                                                        </h4>
                                                                    </li>
                                                                    <li>
                                                                        <a href='about-element-1.html'>
                                                                            Back
                                                                            Pain
                                                                            &
                                                                            Rehab
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='about-element-2.html'>
                                                                            Neck
                                                                            Pain
                                                                            &
                                                                            Headaches
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='about-element-3.html'>
                                                                            Shoulder
                                                                            pain
                                                                            &
                                                                            Rehab
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='service-element-1.html'>
                                                                            Elbow
                                                                            pain
                                                                            &
                                                                            Rehab
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='service-element-2.html'>
                                                                            Wrist
                                                                            pain,
                                                                            Hand
                                                                            pain
                                                                            &
                                                                            Rehab
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='news-element-1.html'>
                                                                            Hip
                                                                            pain
                                                                            &
                                                                            Rehab
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='news-element-2.html'>
                                                                            Knee
                                                                            pain
                                                                            &
                                                                            Rehab
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='project-element-1.html'>
                                                                            Ankle
                                                                            pain,
                                                                            Foot
                                                                            pain
                                                                            &
                                                                            Rehab
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className='col-lg-6 column'>
                                                                <ul>
                                                                    <li>
                                                                        <h4>
                                                                            Home
                                                                            Visits
                                                                            Conditions
                                                                        </h4>
                                                                    </li>
                                                                    <li>
                                                                        <a href='project-element-2.html'>
                                                                            Pre
                                                                            &
                                                                            Post
                                                                            surgery
                                                                            Rehab
                                                                            Conditions
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='team-element-1.html'>
                                                                            Pain
                                                                            Management
                                                                            Conditions
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='team-element-2.html'>
                                                                            Aged
                                                                            Care
                                                                            Conditions
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='feature-element-1.html'>
                                                                            Neurological
                                                                            Conditions
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='feature-element-2.html'>
                                                                            Orthopaedic
                                                                            Conditions
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='testimonial-element.html'>
                                                                            Cardio
                                                                            &
                                                                            Resprioty
                                                                            Rehab
                                                                            Conditions
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='clients-element.html'>
                                                                            Sports
                                                                            injury
                                                                            Rehab
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='faq-element.html'>
                                                                            Falls
                                                                            Assesment
                                                                            &
                                                                            Treatment
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <li className="dropdown">
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
                        </li> */}
                                                {/* <li>
                          <a href="contact.html">Home</a>
                        </li>
                        <li>
                          <a href="contact.html">Clinic</a>
                        </li>
                        <li>
                          <a href="contact.html">Home Visit</a>
                        </li>
                        <li>
                          <a href="contact.html">Fees</a>
                        </li>
                        <li>
                          <a href="contact.html">Booking</a>
                        </li> */}
                                                {/* <li>
                                                    <a href='contact.html'>
                                                        Blog
                                                    </a>
                                                </li> */}
                                                <li>
                                                    <a href='contact.html'>
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <ul className='social-links pull-right clearfix'>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://twitter.com/365physiosantry'
                                            >
                                                <i className='fab fa-youtube'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://twitter.com/365physiosantry'
                                            >
                                                <i className='fab fa-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://www.linkedin.com/company/77759963/'
                                            >
                                                <i className='fab fa-linkedin'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://www.facebook.com/365-Physiotherapy-in-SantryDublin-9-109199244891323'
                                            >
                                                <i className='fab fa-facebook-square' />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://www.pinterest.ie/365physiotherapy/'
                                            >
                                                <i className='fab fa-pinterest-p' />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://www.instagram.com/365physiotherapydublin/'
                                            >
                                                <i className='fab fa-instagram' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*sticky Header*/}
                    <div className='sticky-header'>
                        <div className='auto-container'>
                            <div className='outer-box'>
                                <div className='menu-area clearfix'>
                                    <nav className='main-menu pull-left'>
                                        {/*Keep This Empty / Menu will come through Javascript*/}
                                    </nav>
                                    <ul className='social-links pull-right clearfix'>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://twitter.com/365physiosantry'
                                            >
                                                <i className='fab fa-youtube'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='index.html'>
                                                <i className='fab fa-twitter' />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://www.linkedin.com/company/77759963/'
                                            >
                                                <i className='fab fa-linkedin'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel=' noreferrer noopener'
                                                target='_blank'
                                                href='https://www.facebook.com/365-Physiotherapy-in-SantryDublin-9-109199244891323'
                                            >
                                                <i className='fab fa-facebook-square' />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://www.pinterest.ie/365physiotherapy/'
                                            >
                                                <i className='fab fa-pinterest-p' />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                rel='noreferrer noopener'
                                                target='_blank'
                                                href='https://www.instagram.com/365physiotherapydublin/'
                                            >
                                                <i className='fab fa-instagram' />
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
                <div className='mobile-menu'>
                    <div className='menu-backdrop' />
                    <div className='close-btn'>
                        <i className='fas fa-times' />
                    </div>
                    <nav className='menu-box'>
                        {/* <div className='nav-logo'>
                            <a href='index.html'>
                                <img
                                    src='assets/images/logo-2.png'
                                    alt=''
                                    title=''
                                />
                            </a>
                        </div> */}
                        <div style={{ marginTop: '60px' }}></div>
                        <div className='menu-outer'>
                            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                        </div>
                        <div className='contact-info'>
                            <h4>Contact Info</h4>
                            <ul>
                                <li>Chicago 12, Melborne City, USA</li>
                                <li>
                                    <a href='tel:+8801682648101'>
                                        +88 01682648101
                                    </a>
                                </li>
                                <li>
                                    <a href='mailto:info@example.com'>
                                        info@example.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='social-links'>
                            <ul className='clearfix'>
                                <li>
                                    <a
                                        rel=' noreferrer noopener'
                                        target='_blank'
                                        href='https://twitter.com/365physiosantry'
                                    >
                                        <span className='fab fa-twitter' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel=' noreferrer noopener'
                                        target='_blank'
                                        href='https://www.facebook.com/365-Physiotherapy-in-SantryDublin-9-109199244891323'
                                    >
                                        <span className='fab fa-facebook-square' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel=' noreferrer noopener'
                                        target='_blank'
                                        href='https://www.pinterest.ie/365physiotherapy'
                                    >
                                        <span className='fab fa-pinterest-p' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel=' noreferrer noopener'
                                        target='_blank'
                                        href='https://www.instagram.com/365physiotherapydublin/'
                                    >
                                        <span className='fab fa-instagram' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel=' noreferrer noopener'
                                        target='_blank'
                                        href='index.html'
                                    >
                                        <span className='fab fa-youtube' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* End Mobile Menu */}
                {/* banner-section */}
                <section className='banner-section centred'>
                    <div className='banner-carousel owl-theme owl-carousel owl-dots-none nav-style-one'>
                        <div className='slide-item'>
                            <div
                                className='image-layer'
                                style={{
                                    backgroundImage:
                                        'url(assets/images/banner/banner-1.jpg)',
                                }}
                            />
                            <div className='auto-container'>
                                <div className='content-box'>
                                    <h6>Welcome to 365physiotherapy</h6>
                                    <h1>
                                        Comprehensive assessment and expert
                                        advice by chartered physiotherapist.
                                    </h1>
                                    <div className='btn-box'>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide-item'>
                            <div
                                className='image-layer'
                                style={{
                                    backgroundImage:
                                        'url(assets/images/banner/banner-2.jpg)',
                                }}
                            />
                            <div className='auto-container'>
                                <div className='content-box'>
                                    <h6>Welcome to 365physiotherapy</h6>
                                    <h1>
                                        Reduce your pain, increase your mobility
                                        and promote recovery.
                                    </h1>
                                    <div className='btn-box'>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide-item'>
                            <div
                                className='image-layer'
                                style={{
                                    backgroundImage:
                                        'url(assets/images/banner/banner-3.jpg)',
                                }}
                            />
                            <div className='auto-container'>
                                <div className='content-box'>
                                    <h6>Welcome to 365physiotherapy</h6>
                                    <h1>
                                        Quality Care with a Personalised
                                        Treatment Plan to suit your specific
                                        needs
                                    </h1>
                                    <div className='btn-box'>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide-item'>
                            <div
                                className='image-layer'
                                style={{
                                    backgroundImage:
                                        'url(assets/images/banner/banner-3.jpg)',
                                }}
                            />
                            <div className='auto-container'>
                                <div className='content-box'>
                                    <h6>Welcome to 365physiotherapy</h6>
                                    <h1>
                                        Focused on Individualise home exercise
                                        program
                                    </h1>
                                    <div className='btn-box'>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide-item'>
                            <div
                                className='image-layer'
                                style={{
                                    backgroundImage:
                                        'url(assets/images/banner/banner-3.jpg)',
                                }}
                            />
                            <div className='auto-container'>
                                <div className='content-box'>
                                    <h6>Welcome to 365physiotherapy</h6>
                                    <h1>
                                        Provide both clinic and home visit
                                        services
                                    </h1>
                                    <div className='btn-box'>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Contact US
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide-item'>
                            <div
                                className='image-layer'
                                style={{
                                    backgroundImage:
                                        'url(assets/images/banner/banner-3.jpg)',
                                }}
                            />
                            <div className='auto-container'>
                                <div className='content-box'>
                                    <h6>Welcome to 365physiotherapy</h6>
                                    <h1>
                                        Open to take appointments on public
                                        holidays AND bank holidays
                                    </h1>
                                    <div className='btn-box'>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Contact us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide-item'>
                            <div
                                className='image-layer'
                                style={{
                                    backgroundImage:
                                        'url(assets/images/banner/banner-3.jpg)',
                                }}
                            />
                            <div className='auto-container'>
                                <div className='content-box'>
                                    <h6>Welcome to 365physiotherapy</h6>
                                    <h1>
                                        Support you to manage and resolve issues
                                        through treatment, advice for self-care
                                    </h1>
                                    <div className='btn-box'>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Contact US
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide-item'>
                            <div
                                className='image-layer'
                                style={{
                                    backgroundImage:
                                        'url(assets/images/banner/banner-3.jpg)',
                                }}
                            />
                            <div className='auto-container'>
                                <div className='content-box'>
                                    <h6>Welcome to 365physiotherapy</h6>
                                    <h1>
                                        Early Morning and Evening Appointments
                                        throughout the week
                                    </h1>
                                    <div className='btn-box'>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* banner-section end */}
                {/* feature-section */}
                <section className='feature-section'>
                    <div className='outer-container clearfix'>
                        <div className='feature-block-one'>
                            <div className='inner-box'>
                                <div className='icon-box'>
                                    <i className='flaticon-therapist' />
                                </div>
                                <div className='inner'>
                                    <h4>Experienced Therapists</h4>
                                    <p>
                                        Fully Qualified Senior Therapists, CORU
                                        registered Therapists, Expert Physios in
                                        Both Clinic and Home Visits
                                    </p>
                                    <a href='index.html'>
                                        <i className='fas fa-chevron-circle-right' />
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='feature-block-one'>
                            <div className='inner-box'>
                                <div className='icon-box'>
                                    <i className='flaticon-physiotherapy' />
                                </div>
                                <div className='inner'>
                                    <h4>Clinic service and Home visit</h4>
                                    <p>
                                        Emergency Home Visit Service Provided on
                                        Week-Ends and Public Holidays.
                                    </p>
                                    <a href='index.html'>
                                        <i className='fas fa-chevron-circle-right' />
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='feature-block-one'>
                            <div className='inner-box'>
                                <div className='icon-box'>
                                    <i className='flaticon-consultation' />
                                </div>
                                <div className='inner'>
                                    <h4>Any Time Consultation</h4>
                                    <p>
                                        Get Free Consultation 365
                                        Physiotherapapy offers 15 mins free
                                        consultation - Book your appointment
                                    </p>
                                    <a href='index.html'>
                                        <i className='fas fa-chevron-circle-right' />
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-section end */}
                {/* about-section */}
                {/* <section
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
        </section> */}

                {/* <section className="about-style-three">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image mb-30">
                        <img src="assets/images/resource/about-3.jpg" alt="" />
                      </figure>
                      <figure className="image">
                        <img src="assets/images/resource/about-4.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <img src="assets/images/resource/about-5.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div id="content_block_8">
                  <div className="content-box ml-70">
                    <div className="sec-title">
                      <p>Get to know us</p>
                      <h2>
                        We're a Recognized &amp; Quality Leader in Physiotherapy
                      </h2>
                    </div>
                    <div className="text">
                      <p>
                        There are many variations of passages of available but the
                        majority have suffered alteration in some form, by injected
                        humou or words even slightly believable.
                      </p>
                    </div>
                    <div className="inner-box clearfix">
                      <div className="single-item">
                        <h5>Magnis Dis Nascet</h5>
                        <p>Lorem ipsum is free do sit</p>
                      </div>
                      <div className="single-item">
                        <h5>Libero id Ege</h5>
                        <p>Lorem ipsum is free do sit</p>
                      </div>
                    </div>
                    <div className="author-box">
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
        </section> */}

                {/* <!-- about-style-three end --> */}
                <section className='about-style-two'>
                    <div className='auto-container'>
                        <div className='row clearfix'>
                            <div className='col-lg-6 col-md-12 col-sm-12 image-column'>
                                <div id='image_block_1'>
                                    <div className='image-box mr-30'>
                                        <figure className='image image-1'>
                                            <img
                                                src='assets/images/resource/about-1.jpg'
                                                alt=''
                                            />
                                        </figure>
                                        {/* <figure className='image image-2'>
                                            <img
                                                src='assets/images/resource/about-2.jpg'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='icon-box rotate-me'>
                                            <img
                                                src='assets/images/icons/icon-2.png'
                                                alt=''
                                            />
                                        </figure> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
                                <div id='content_block_7'>
                                    <div className='content-box ml-40'>
                                        <div className='sec-title'>
                                            <p>About 365 Physiotherapy</p>
                                        </div>
                                        <div className='text'>
                                            <p>
                                                365 Physiotherapy Dublin treats
                                                Back Pain, Neck Pain, Shoulder
                                                Pain, Knee Pain, Hip Pain, Foot
                                                Pain, Sports Injuries Like
                                                Gaelic Athletic, Tennis, Runner,
                                                Rugby and Golf. 365
                                                Physiotherapy Private Practice
                                                is a client-centred care,
                                                designed to meet the needs of
                                                all-aged individuals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id='content_block_1'>
                                    <div className='content-box ml-40'>
                                        <ul className='list-item clearfix'>
                                            <li>
                                                Provide the highest quality of
                                                physiotherapy based on your
                                                individual assessment results.
                                            </li>
                                            <li>
                                                {' '}
                                                Offer excellent care with a
                                                personalized treatment plan to
                                                suit your specific needs.
                                            </li>
                                            <li>
                                                Ensure you get back to the
                                                activities you enjoy and love in
                                                an efficient and effective time.
                                            </li>
                                        </ul>
                                        <div className='inner-box clearfix'>
                                            <div className='inner'>
                                                <div className='icon-box'>
                                                    <i className='flaticon-foot' />
                                                </div>
                                                <h4>Get your lifestyle back</h4>
                                            </div>
                                            <div className='author'>
                                                <figure className='author-thumb'>
                                                    <img
                                                        src='assets/images/Emp-thirupal.png'
                                                        alt=''
                                                    />
                                                </figure>
                                                {/* <figure className="signature">
                          <img src="assets/images/resource/signature-1.png" alt="" />
                        </figure> */}
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
                <section className='service-section sec-pad border-bottom'>
                    <div className='auto-container'>
                        <div className='sec-title'>
                            <p>Our Services</p>
                            <h2>What We’re Offering</h2>
                        </div>
                        <div className='four-item-carousel owl-carousel owl-theme owl-dots-none'>
                            <div className='service-block-one'>
                                <div className='inner-box'>
                                    <div className='image-box'>
                                        <figure className='image'>
                                            <a href='service-details.html'>
                                                <img
                                                    src='assets/images/service/service-1.jpg'
                                                    alt=''
                                                />
                                            </a>
                                        </figure>
                                        <div className='icon-box'>
                                            <i className='flaticon-physical' />
                                        </div>
                                    </div>
                                    <div className='lower-content'>
                                        <h4>
                                            <a href='service-details.html'>
                                                Physiotherapy
                                            </a>
                                        </h4>
                                        <p>
                                            Lorem is free text no used by other
                                            agencies...
                                        </p>
                                        <div className='link'>
                                            <a href='service-details.html'>
                                                <i className='fas fa-chevron-circle-right' />
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='service-block-one'>
                                <div className='inner-box'>
                                    <div className='image-box'>
                                        <figure className='image'>
                                            <a href='service-details-2.html'>
                                                <img
                                                    src='assets/images/service/service-2.jpg'
                                                    alt=''
                                                />
                                            </a>
                                        </figure>
                                        <div className='icon-box'>
                                            <i className='flaticon-massage' />
                                        </div>
                                    </div>
                                    <div className='lower-content'>
                                        <h4>
                                            <a href='service-details-2.html'>
                                                Massage Therapy
                                            </a>
                                        </h4>
                                        <p>
                                            Lorem is free text no used by other
                                            agencies...
                                        </p>
                                        <div className='link'>
                                            <a href='service-details-2.html'>
                                                <i className='fas fa-chevron-circle-right' />
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='service-block-one'>
                                <div className='inner-box'>
                                    <div className='image-box'>
                                        <figure className='image'>
                                            <a href='service-details-3.html'>
                                                <img
                                                    src='assets/images/service/service-3.jpg'
                                                    alt=''
                                                />
                                            </a>
                                        </figure>
                                        <div className='icon-box'>
                                            <i className='flaticon-broken-bone' />
                                        </div>
                                    </div>
                                    <div className='lower-content'>
                                        <h4>
                                            <a href='service-details-3.html'>
                                                Sport Injuries
                                            </a>
                                        </h4>
                                        <p>
                                            Lorem is free text no used by other
                                            agencies...
                                        </p>
                                        <div className='link'>
                                            <a href='service-details-3.html'>
                                                <i className='fas fa-chevron-circle-right' />
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='service-block-one'>
                                <div className='inner-box'>
                                    <div className='image-box'>
                                        <figure className='image'>
                                            <a href='service-details-4.html'>
                                                <img
                                                    src='assets/images/service/service-4.jpg'
                                                    alt=''
                                                />
                                            </a>
                                        </figure>
                                        <div className='icon-box'>
                                            <i className='flaticon-chiropractic' />
                                        </div>
                                    </div>
                                    <div className='lower-content'>
                                        <h4>
                                            <a href='service-details-4.html'>
                                                Chiropratic Therapy
                                            </a>
                                        </h4>
                                        <p>
                                            Lorem is free text no used by other
                                            agencies...
                                        </p>
                                        <div className='link'>
                                            <a href='service-details-4.html'>
                                                <i className='fas fa-chevron-circle-right' />
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* service-section end */}
                {/* clients-section */}

                <section className='clients-section'>
                    <div className='auto-container'>
                        <div className='clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none'>
                            <figure className='clients-logo-box'>
                                <a href='index.html'>
                                    <img
                                        src='assets/images/clients/aviva.png'
                                        alt=''
                                    />
                                </a>
                            </figure>
                            <figure className='clients-logo-box'>
                                <a href='index.html'>
                                    <img
                                        src='assets/images/clients/vhi.png'
                                        alt=''
                                    />
                                </a>
                            </figure>
                            <figure className='clients-logo-box'>
                                <a href='index.html'>
                                    <img
                                        src='assets/images/clients/laya.png'
                                        alt=''
                                    />
                                </a>
                            </figure>
                            <figure className='clients-logo-box'>
                                <a href='index.html'>
                                    <img
                                        src='assets/images/clients/irish-life.png'
                                        alt=''
                                    />
                                </a>
                            </figure>
                            <figure className='clients-logo-box'>
                                <a href='index.html'>
                                    <img
                                        src='assets/images/clients/iscp.png'
                                        alt=''
                                    />
                                </a>
                            </figure>
                            <figure className='clients-logo-box'>
                                <a href='index.html'>
                                    <img
                                        src='assets/images/clients/coru.png'
                                        alt=''
                                    />
                                </a>
                            </figure>
                        </div>
                    </div>
                </section>
                {/* clients-section end */}
                {/* proudly-section */}
                <section className='proudly-section bg-color-1'>
                    <div
                        className='pattern-layer'
                        style={{
                            backgroundImage:
                                'url(assets/images/shape/pattern-1.png)',
                        }}
                    />
                    <figure className='image-layer'>
                        <img
                            src='assets/images/resource/proudly-1.jpg'
                            alt=''
                        />
                    </figure>
                    <div className='auto-container'>
                        <div className='row clearfix'>
                            <div className='col-xl-7 col-lg-12 col-md-12 offset-xl-5 content-column'>
                                <div id='content_block_2'>
                                    <div className='content-box'>
                                        <div className='sec-title light'>
                                            <p>Solutions to your pain</p>
                                            <h2>
                                                We Proudly Give Quality
                                                Treatments
                                            </h2>
                                        </div>
                                        <div className='text'>
                                            <p>
                                                Reduce your pain, increase your
                                                mobility, and promote recovery
                                                in the most comfortable and
                                                relaxing environment.
                                            </p>
                                        </div>
                                        <ul className='list-item clearfix'>
                                            <li>Emergency Home Visit</li>
                                            <li>Service -Professional and</li>
                                            <li>
                                                Certified Therapists Get Free
                                                Consultation
                                            </li>
                                        </ul>
                                        <div className='counter-inner clearfix'>
                                            <div className='counter-block'>
                                                <div className='inner-box'>
                                                    <div className='icon-box'>
                                                        <i className='flaticon-doctor' />
                                                    </div>
                                                    <div className='count-outer count-box'>
                                                        <span
                                                            className='count-text'
                                                            data-speed={1500}
                                                            data-stop={78}
                                                        >
                                                            0
                                                        </span>
                                                    </div>
                                                    <p>Skiled Therapist</p>
                                                </div>
                                            </div>
                                            <div className='counter-block'>
                                                <div className='inner-box'>
                                                    <div className='icon-box'>
                                                        <i className='flaticon-physical' />
                                                    </div>
                                                    <div className='count-outer count-box'>
                                                        <span
                                                            className='count-text'
                                                            data-speed={1500}
                                                            data-stop={880}
                                                        >
                                                            0
                                                        </span>
                                                    </div>
                                                    <p>Solved Cases</p>
                                                </div>
                                            </div>
                                            <div className='counter-block'>
                                                <div className='inner-box'>
                                                    <div className='icon-box'>
                                                        <i className='flaticon-patient' />
                                                    </div>
                                                    <div className='count-outer count-box'>
                                                        <span
                                                            className='count-text'
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
                </section>
                {/* proudly-section end */}
                {/* feature-style-two */}
                <section className='feature-style-two'>
                    <div className='auto-container'>
                        <div className='inner-container clearfix'>
                            <div className='feature-block-two'>
                                <div className='inner-box bg-color-2'>
                                    <div className='content-inner'>
                                        <h2>
                                            2 Tips <br />
                                            How Can <br />
                                            Chiropractic Care Help You
                                        </h2>
                                        <a
                                            href='index.html'
                                            className='theme-btn-one'
                                        >
                                            Book Appointment
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='feature-block-two'>
                                <div className='inner-box centred'>
                                    <div
                                        className='image-layer'
                                        style={{
                                            backgroundImage:
                                                'url(assets/images/resource/feature-1.jpg)',
                                        }}
                                    />
                                    <div className='content-box'>
                                        <div className='count-box'>
                                            <span>01</span>
                                        </div>
                                        <h3>Body Relexation</h3>
                                        <p>
                                            Neque porro quisquam est, qui
                                            dolorem ipsum quia dolor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='feature-block-two'>
                                <div className='inner-box centred'>
                                    <div
                                        className='image-layer'
                                        style={{
                                            backgroundImage:
                                                'url(assets/images/resource/feature-2.jpg)',
                                        }}
                                    />
                                    <div className='content-box'>
                                        <div className='count-box'>
                                            <span>02</span>
                                        </div>
                                        <h3>Body Treatment</h3>
                                        <p>
                                            Neque porro quisquam est, qui
                                            dolorem ipsum quia dolor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-style-two end */}
                {/* testimonial-section */}
                <section className='testimonial-section sec-pad centred'>
                    <div className='auto-container'>
                        <div className='sec-title'>
                            <p>Our Testimonials</p>
                            <h2>What Our Clients Say</h2>
                        </div>
                        <div className='inner-container'>
                            <div className='three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none'>
                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Mick Shaw</h4>
                                        <p>
                                            He is a miracle worker, he fixed my
                                            neck and shoulder blades problem,
                                            highly recommend.
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-3.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Vladimir Kopychev</h4>
                                        <p>
                                            I can definitely recommend the
                                            therapist. I am currently in
                                            progress of my shoulder treatment,
                                            injured quite a while ago on a
                                            kickboxing training. I can already
                                            see a great improvement and can
                                            train again. The therapist is very
                                            skilled and experienced, definitely
                                            knows what he&apos;s doing. The
                                            treatment includes mostly
                                            stretching, massage, dry needling
                                            and exercises. Prices are very
                                            reasonable for Dublin, time slots
                                            are usually available. Definitely
                                            great specialist for sports
                                            injuries.
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-1.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Santosh Pallae</h4>
                                        <p>
                                            The treatment I got here was
                                            brilliant .it saved me from a lot of
                                            pain.Tirupal Ragi is the person who
                                            treated me with his experience he
                                            was able to diagnose my problem
                                            correctly and treat it in no time.
                                            Really grateful and appreciate
                                            everything.
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-1.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Radhika Alle</h4>
                                        <p>
                                            I recently had my physio sessions
                                            for Tennis Elbow Pain & difficult to
                                            do day to day work activities with
                                            Thirupal who took his time to truly
                                            listen and understand my problem.
                                            Very knowledgeable, professional and
                                            approachable. He clearly explained
                                            do&apos;s and don&apos;t and also
                                            all the exercises to me. His hands
                                            on approach with incorporating dry
                                            needling treatment fixed my problem
                                            with no pain and able to do all my
                                            activites with out any problem ,
                                            Thanks Thirupal ! Overall, a very
                                            positive experience. I highly
                                            recommend!.
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-2.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>P Terry</h4>
                                        <p>
                                            My long-term back problem is finally
                                            fixed and I&apos;m already back to
                                            routine activities. Truly is a
                                            wonderful physio! Thanks, Thirupal
                                            :).
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-2.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>

                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Trent Williams</h4>
                                        <p>
                                            Shoulder muscles were a painful
                                            spaghetti junction.3 visitst o
                                            Thirupal and I am on the road to
                                            recovery! Thanks again!.
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-3.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>

                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Caroline</h4>
                                        <p>
                                            Following my shoulder pain and
                                            limited movements 365 physiotherapy
                                            treated my pain with an individual
                                            and comprehensive rehablitation
                                            plan. I received a professional and
                                            friendly service from Thirupal. He
                                            was excellent at demonstrating the
                                            exercises and techniques which made
                                            the treatment much easier. If I or
                                            anybody require further or any
                                            treatment in future, I would highly
                                            recommend 365physiotherapy, 100
                                            percent guaranteed.
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-3.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Jack</h4>
                                        <p>
                                            Had a long-term issue with my back
                                            and finally got it seen to by
                                            Thirupal (Paul). He was very
                                            friendly and knowledgeable; my
                                            injury was sorted out professionally
                                            and at a very reasonable price.
                                            Would highly recommend anyone to go
                                            see him.
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-3.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Martin Mc Nutt</h4>
                                        <p>
                                            He is very good. Excellent to
                                            sorting out any issues I ever had…
                                            he recently fixed my knee problem ,
                                            he is the best I ever had.
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-3.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className='testimonial-block-one'>
                                    <div className='inner-box'>
                                        <h4>Caroline</h4>
                                        <p>
                                            Following my shoulder pain and
                                            limited movements 365 physiotherapy
                                            treated my pain with an individual
                                            and comprehensive rehablitation
                                            plan. I received a professional and
                                            friendly service from Thirupal. He
                                            was excellent at demonstrating the
                                            exercises and techniques which made
                                            the treatment much easier. If I or
                                            anybody require further or any
                                            treatment in future, I would highly
                                            recommend 365physiotherapy, 100
                                            percent guaranteed.,
                                        </p>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/resource/testimonial-3.png'
                                                alt=''
                                            />
                                        </figure>
                                        <figure className='quote-box'>
                                            <img
                                                src='assets/images/icons/quote-1.png'
                                                alt=''
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* startup-section */}
                <section
                    className='startup-section'
                    style={{
                        backgroundImage:
                            'url(assets/images/background/startup-1.jpg)',
                    }}
                >
                    <div className='auto-container'>
                        <div className='row clearfix'>
                            <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
                                <div id='content_block_3'>
                                    <div className='content-box mr-40'>
                                        <div className='sec-title light'>
                                            <p>We’re here to help you</p>
                                            <h2>
                                                Start Up Your Physio Care With
                                                Us
                                            </h2>
                                        </div>
                                        <div className='single-box'>
                                            <div className='inner'>
                                                <div className='icon-box'>
                                                    <i className='fas fa-check' />
                                                </div>
                                                <h4>
                                                    <a href='index.html'>
                                                        No Charges for
                                                        Consultation
                                                    </a>
                                                </h4>
                                                <p>
                                                    Get Free Consultation 365
                                                    Physiotherapapy offers 15
                                                    mins free consultation.
                                                </p>
                                            </div>
                                            <div className='inner'>
                                                <div className='icon-box'>
                                                    <i className='fas fa-check' />
                                                </div>
                                                <h4>
                                                    <a href='index.html'>
                                                        Senior Chartered
                                                        Physiotherapists
                                                    </a>
                                                </h4>
                                                <p>
                                                    Reduce your pain, increase
                                                    your mobility, and promote
                                                    recovery in the most
                                                    comfortable and relaxing
                                                    environment a healthcare
                                                    practice can offer.
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href='https://goo.gl/maps/MfvAaB7v6WiZ4WHB6'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <div className='inner-box'>
                                                <div className='icon-box'>
                                                    <i className='flaticon-physiotherapy' />
                                                </div>
                                                <h3>
                                                    Click here to Check our
                                                    Google
                                                    <span> 5 Stars </span>
                                                    ratings and reviews
                                                </h3>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 form-column'>
                                <div id='content_block_4'>
                                    <div className='form-inner ml-40'>
                                        <h6>Fill the form</h6>
                                        {/* <p>
                                            Lorem ipsum dolor sit amet, conse
                                            ctetur adipisicin elit ipmon sed
                                            tempor
                                        </p> */}
                                        <form action='index.html' method='post'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    placeholder='Your Name'
                                                    required=''
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    placeholder='Email Address'
                                                    required=''
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    placeholder='Phone Number'
                                                    required=''
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <textarea
                                                    name='message'
                                                    placeholder='Message'
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className='form-group message-btn'>
                                                <button
                                                    type='submit'
                                                    className='theme-btn-one'
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* startup-section end */}
                {/* news-section */}
                {/* <section className='news-section sec-pad'>
                    <div className='auto-container'>
                        <div className='sec-title centred'>
                            <p>from the blog</p>
                            <h2>News &amp; Articles</h2>
                        </div>
                        <div className='row clearfix'>
                            <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
                                <div
                                    className='news-block-one wow fadeInUp animated animated'
                                    data-wow-delay='00ms'
                                    data-wow-duration='1500ms'
                                >
                                    <div className='inner-box'>
                                        <figure className='image-box'>
                                            <a href='blog-details.html'>
                                                <img
                                                    src='assets/images/news/news-1.jpg'
                                                    alt=''
                                                />
                                            </a>
                                            <span className='post-date'>
                                                20 June, 2020
                                            </span>
                                        </figure>
                                        <div className='lower-content'>
                                            <ul className='post-info clearfix'>
                                                <li>
                                                    <i className='far fa-user-circle' />
                                                    <a href='index.html'>
                                                        Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className='far fa-comments' />
                                                    <a href='index.html'>
                                                        7 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href='blog-details.html'>
                                                    How you can choose the best
                                                    physiotherapy clinic
                                                </a>
                                            </h3>
                                            <p>
                                                Lorem ipsum is simply free text
                                                used by new pesnhl note this
                                                copytyping refreshing.
                                            </p>
                                            <div className='link'>
                                                <a href='blog-details.html'>
                                                    <i className='fas fa-chevron-circle-right' />
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
                                <div
                                    className='news-block-one wow fadeInUp animated animated'
                                    data-wow-delay='300ms'
                                    data-wow-duration='1500ms'
                                >
                                    <div className='inner-box'>
                                        <figure className='image-box'>
                                            <a href='blog-details.html'>
                                                <img
                                                    src='assets/images/news/news-2.jpg'
                                                    alt=''
                                                />
                                            </a>
                                            <span className='post-date'>
                                                19 June, 2020
                                            </span>
                                        </figure>
                                        <div className='lower-content'>
                                            <ul className='post-info clearfix'>
                                                <li>
                                                    <i className='far fa-user-circle' />
                                                    <a href='index.html'>
                                                        Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className='far fa-comments' />
                                                    <a href='index.html'>
                                                        5 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href='blog-details.html'>
                                                    Eat the right diet for your
                                                    body to stay healthy
                                                </a>
                                            </h3>
                                            <p>
                                                Lorem ipsum is simply free text
                                                used by new pesnhl note this
                                                copytyping refreshing.
                                            </p>
                                            <div className='link'>
                                                <a href='blog-details.html'>
                                                    <i className='fas fa-chevron-circle-right' />
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
                                <div
                                    className='news-block-one wow fadeInUp animated animated'
                                    data-wow-delay='600ms'
                                    data-wow-duration='1500ms'
                                >
                                    <div className='inner-box'>
                                        <figure className='image-box'>
                                            <a href='blog-details.html'>
                                                <img
                                                    src='assets/images/news/news-3.jpg'
                                                    alt=''
                                                />
                                            </a>
                                            <span className='post-date'>
                                                18 June, 2020
                                            </span>
                                        </figure>
                                        <div className='lower-content'>
                                            <ul className='post-info clearfix'>
                                                <li>
                                                    <i className='far fa-user-circle' />
                                                    <a href='index.html'>
                                                        Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className='far fa-comments' />
                                                    <a href='index.html'>
                                                        4 Comments
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href='blog-details.html'>
                                                    How can chiropractic care
                                                    help your health system
                                                </a>
                                            </h3>
                                            <p>
                                                Lorem ipsum is simply free text
                                                used by new pesnhl note this
                                                copytyping refreshing.
                                            </p>
                                            <div className='link'>
                                                <a href='blog-details.html'>
                                                    <i className='fas fa-chevron-circle-right' />
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
                {/* <section
                    className='gallery-section'
                    style={{ paddingTop: '113px' }}
                >
                    <div className='container-fluid'>
                        <div className='row clearfix'>
                            <div className='col-lg-3 col-md-6 col-sm-12 gallery-block'>
                                <div className='gallery-block-one'>
                                    <div className='inner-box'>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/gallery/gallery-1.jpg'
                                                alt=''
                                            />
                                        </figure>
                                        <div className='link'>
                                            <a
                                                href='assets/images/gallery/gallery-1.jpg'
                                                className='lightbox-image'
                                                data-fancybox='gallery'
                                            >
                                                <i className='flaticon-plus-symbol' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 gallery-block'>
                                <div className='gallery-block-one'>
                                    <div className='inner-box'>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/gallery/gallery-2.jpg'
                                                alt=''
                                            />
                                        </figure>
                                        <div className='link'>
                                            <a
                                                href='assets/images/gallery/gallery-2.jpg'
                                                className='lightbox-image'
                                                data-fancybox='gallery'
                                            >
                                                <i className='flaticon-plus-symbol' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 gallery-block'>
                                <div className='gallery-block-one'>
                                    <div className='inner-box'>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/gallery/gallery-3.jpg'
                                                alt=''
                                            />
                                        </figure>
                                        <div className='link'>
                                            <a
                                                href='assets/images/gallery/gallery-3.jpg'
                                                className='lightbox-image'
                                                data-fancybox='gallery'
                                            >
                                                <i className='flaticon-plus-symbol' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 gallery-block'>
                                <div className='gallery-block-one'>
                                    <div className='inner-box'>
                                        <figure className='image-box'>
                                            <img
                                                src='assets/images/gallery/gallery-4.jpg'
                                                alt=''
                                            />
                                        </figure>
                                        <div className='link'>
                                            <a
                                                href='assets/images/gallery/gallery-4.jpg'
                                                className='lightbox-image'
                                                data-fancybox='gallery'
                                            >
                                                <i className='flaticon-plus-symbol' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* gallery-section end */}

                {/* <!-- faq-section --> */}
                <section className='faq-section sec-pad bg-color-4'>
                    <div className='auto-container'>
                        <div className='row clearfix'>
                            <div className='col-lg-12 col-md-12 col-sm-12 content-column'>
                                <div id='content_block_8'>
                                    <div className='content-box'>
                                        <div className='sec-title'>
                                            <p>Your Quesiton</p>
                                            <h2>Have any Quesiton</h2>
                                        </div>
                                        <ul className='accordion-box'>
                                            <li className='accordion block active-block'>
                                                <div className='acc-btn active'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        Do I need a referral
                                                        from my doctor or GP?
                                                    </h5>
                                                </div>
                                                <div className='acc-content current'>
                                                    <div className='text'>
                                                        <p>
                                                            No, GP referrals are
                                                            not necessary for
                                                            physiotherapy.{' '}
                                                            <br />
                                                            If you do have any
                                                            GP referral letters,
                                                            or reports from
                                                            scans such as an MRI
                                                            or an x-ray, please
                                                            bring a copy for
                                                            inclusion on your
                                                            file.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        I have an injury- how
                                                        soon should I come and
                                                        see you for assessment
                                                        and treatment?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            This is up to you,
                                                            but generally we
                                                            would try and see
                                                            you as soon as
                                                            possible after your
                                                            injury to advise you
                                                            and start treatment.
                                                            If you have recently
                                                            had surgery, your
                                                            consultant should
                                                            advise you on when
                                                            it is best to start
                                                            your physiotherapy.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        I&apos;ve got a problem;
                                                        do I see a
                                                        physiotherapist or
                                                        massage therapist?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            We get this query a
                                                            lot especially from
                                                            people who are just
                                                            passing by the
                                                            clinic and haven’t
                                                            received a specific
                                                            recommendation.{' '}
                                                            <br />
                                                            We generally advise
                                                            people that if they
                                                            have a specific pain
                                                            or injury, they
                                                            might benefit from
                                                            seeing a
                                                            physiotherapist
                                                            first for a full
                                                            assessment,
                                                            diagnosis, and
                                                            treatment. The
                                                            physiotherapist will
                                                            then refer on to the
                                                            massage therapist if
                                                            they think that this
                                                            is appropriate.
                                                            <br />
                                                            If the problem is
                                                            tired/tense muscles
                                                            (fairly generalised
                                                            without a specific
                                                            pain feature), often
                                                            the massage
                                                            therapist may be the
                                                            most appropriate
                                                            therapist to see in
                                                            the first instance.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        When should I see a
                                                        physiotherapist?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            There are many
                                                            circumstances that
                                                            you should see a
                                                            physiotherapist for,
                                                            some of the most
                                                            common include:
                                                            <br />
                                                            If you have any
                                                            bruising, swelling,
                                                            stiffness or a
                                                            deformity
                                                            <br />
                                                            If you have
                                                            sustained an injury
                                                            (at work, in a car
                                                            accident or playing
                                                            sport)
                                                            <br />
                                                            If you’re
                                                            experiencing muscle
                                                            or joint aches or
                                                            pains
                                                            <br />
                                                            If you have pins and
                                                            needles or numbness
                                                            <br />
                                                            If you would like
                                                            advice on weight
                                                            loss and exercise
                                                            programmes
                                                            <br />
                                                            If you experience
                                                            muscle weakness or
                                                            joints giving way
                                                            <br />
                                                            If you have problems
                                                            with your balance or
                                                            falling
                                                            <br />
                                                            If you need advice
                                                            on exercise or
                                                            improving strength,
                                                            fitness, or
                                                            flexibility
                                                            <br />
                                                            If you are returning
                                                            to work or sport
                                                            from an injury or
                                                            surgery
                                                            <br />
                                                            If you want to
                                                            improve your
                                                            sporting performance
                                                            <br />
                                                            If you’ve recently
                                                            had a baby, and are
                                                            experiencing pain
                                                            <br />
                                                            If you have a
                                                            gradual niggling
                                                            ache that gets worse
                                                            with exercise
                                                            <br />
                                                            If you have a
                                                            niggling ache that
                                                            eases as you
                                                            exercise, only to
                                                            come back once you
                                                            have stopped your
                                                            activity, or the
                                                            next morning
                                                            <br />
                                                            If your pain has
                                                            lasted longer than 1
                                                            week
                                                            <br />
                                                            If you have pain
                                                            that restricts your
                                                            normal activities of
                                                            daily living
                                                            <br />
                                                            If you have pain
                                                            that wakes you up
                                                            from your sleep
                                                            every night
                                                            <br />
                                                            If you have pain
                                                            that is getting
                                                            worse, causing
                                                            numbness or pins and
                                                            needles or limb
                                                            weakness
                                                            <br />
                                                            Feel free to contact
                                                            us if you have any
                                                            questions, or if
                                                            you’re not sure if
                                                            we can help.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        How long does initial
                                                        consultation and
                                                        treatment take?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            The length of
                                                            treatment depends on
                                                            a few factors
                                                            including:
                                                            <br />
                                                            The area of injury,
                                                            <br />
                                                            The type of injury,
                                                            <br />
                                                            Your stage of
                                                            recovery,
                                                            <br />
                                                            How much pain you
                                                            are in, <br />
                                                            How irritable your
                                                            symptoms are.
                                                            <br />
                                                            Initial
                                                            consultations often
                                                            take longer than
                                                            follow-up sessions
                                                            as your
                                                            physiotherapist will
                                                            want to perform a
                                                            few extra assessment
                                                            techniques and ask a
                                                            few extra questions
                                                            to ensure they make
                                                            the most accurate
                                                            diagnosis of your
                                                            problem.
                                                            <br />
                                                            Generally, initial
                                                            consults will take
                                                            between 20-40
                                                            minutes. One of our
                                                            physiotherapists can
                                                            give you a more
                                                            accurate estimation
                                                            of consultation time
                                                            by asking you these
                                                            questions over the
                                                            phone.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        How many appointments
                                                        will I need?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            The number of
                                                            appointments you
                                                            will need depends on
                                                            your condition and
                                                            diagnosis. Some
                                                            acute conditions may
                                                            resolve quickly over
                                                            a couple of
                                                            appointments. Other
                                                            conditions, which
                                                            may be as a result
                                                            of your job, sport,
                                                            or lifestyle, may
                                                            require regular
                                                            treatment to help
                                                            you make the best of
                                                            your life.
                                                            <br />
                                                            As we know each
                                                            patient, each
                                                            condition, each
                                                            mechanism of injury
                                                            and each injury
                                                            history is
                                                            different, these can
                                                            all affect the
                                                            prognosis of your
                                                            condition.
                                                            <br />
                                                            Based on your
                                                            assessment, your
                                                            physiotherapist will
                                                            discuss the expected
                                                            number of treatments
                                                            and how you can
                                                            expect your symptoms
                                                            to resolve. We will
                                                            fully explain all
                                                            options to you as
                                                            progress is made, as
                                                            this is a team
                                                            effort. You will be
                                                            reassessed on each
                                                            visit to check your
                                                            progress.
                                                            <br />
                                                            Please note that
                                                            your therapist is
                                                            genuinely interested
                                                            in helping you
                                                            resolve or manage
                                                            your condition.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        Should I bring anything
                                                        to my treatment session?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            If you have a
                                                            referral, any scans
                                                            (X-rays, MRI’s,
                                                            ultrasounds etc.) or
                                                            any important
                                                            information related
                                                            to your
                                                            complaint/injury,
                                                            bring them, and give
                                                            it to your Physio.
                                                            <br />
                                                            Try to think about
                                                            what caused your
                                                            injury, when it
                                                            started, how it is
                                                            progressing (better
                                                            or worse), and
                                                            comfort levels in
                                                            different
                                                            activities.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        Do you treat children?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            Yes, our
                                                            physiotherapist
                                                            treats children.
                                                            Parents are required
                                                            to be present in the
                                                            treatment room to
                                                            ensure the diagnosis
                                                            and treatment is
                                                            understood and
                                                            agreed to. And of
                                                            course, for the
                                                            child&apos;s
                                                            comfort.&quot;
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        Do you do home visits?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            Yes. We do provide a
                                                            home visiting
                                                            service in Dublin 9
                                                            and the surrounding
                                                            area of our clinic
                                                            location. Please
                                                            contact us for more
                                                            information.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        Is the cost of
                                                        physiotherapy covered by
                                                        medical insurance or
                                                        private medical
                                                        insurance – am I covered
                                                        with you?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            A. Yes, our
                                                            physiotherapist is
                                                            chartered and
                                                            registered with the
                                                            Irish Chartered
                                                            Physiotherapists and
                                                            is CORU registered.
                                                            <br />
                                                            All major Irish
                                                            Health Insurance
                                                            providers offer
                                                            refunds for
                                                            treatment by a
                                                            Chartered
                                                            Physiotherapist.{' '}
                                                            <br />
                                                            To check your level
                                                            of cover, please
                                                            refer to your own
                                                            policy for its terms
                                                            and conditions.
                                                            <br />
                                                            It is recommended to
                                                            check with your
                                                            insurance company
                                                            before starting
                                                            treatment as they
                                                            may need to
                                                            pre-authorise it.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        Is there a parking slot
                                                        available for your
                                                        client?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            Yes. We have a
                                                            parking slot in
                                                            front of the clinic
                                                            for our clients.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='accordion block'>
                                                <div className='acc-btn'>
                                                    <div className='icon-outer'>
                                                        <i className='far fa-angle-up' />
                                                    </div>
                                                    <h5>
                                                        What about payment? What
                                                        forms of payment do you
                                                        accept?
                                                    </h5>
                                                </div>
                                                <div className='acc-content'>
                                                    <div className='text'>
                                                        <p>
                                                            We accept cash and
                                                            card. You must pay
                                                            after each
                                                            appointment by cash
                                                            or card unless you
                                                            have made other
                                                            arrangements with
                                                            your treating
                                                            physiotherapist. You
                                                            will get a receipt
                                                            at the end of each
                                                            session which can be
                                                            used for tax or
                                                            health insurance
                                                            companies.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- faq-section end --> */}

                <section className='cta-section bg-color-2'>
                    <div className='auto-container'>
                        <div className='inner-box clearfix'>
                            <div className='text pull-left'>
                                <h2>
                                    Choose the best physio therapy for youself
                                </h2>
                            </div>
                            <div className='btn-box pull-right'>
                                <a href='index.html' className='theme-btn-one'>
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* cta-section end */}
                {/* main-footer */}
                <footer className='main-footer'>
                    <div
                        className='footer-top'
                        style={{
                            backgroundImage:
                                'url(assets/images/background/footer-1.jpg)',
                        }}
                    >
                        <figure className='icon-layer'>
                            <img src='assets/images/icons/icon-1.png' alt='' />
                        </figure>
                        <div className='auto-container'>
                            <div className='widget-section'>
                                <div className='row clearfix'>
                                    <div className='col-lg-3 col-md-6 col-sm-12 footer-column'>
                                        <div className='footer-widget logo-widget'>
                                            <figure className='logo-box'>
                                                <a href='index.html'>
                                                    <img
                                                        src='assets/images/footer-logo.png'
                                                        alt=''
                                                    />
                                                </a>
                                            </figure>
                                            <div className='text'>
                                                <p>
                                                    Ensure you get back to the
                                                    activities
                                                </p>
                                            </div>
                                            <ul className='info clearfix'>
                                                <li>
                                                    <i className='flaticon-email' />
                                                    <a href='mailto:contact@365physiotherapy.ie'>
                                                        contact@365physiotherapy.ie
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className='flaticon-pin' />
                                                    256, Swords Road, Santry,
                                                    <br />
                                                    Dublin 9 D09RX73
                                                </li>
                                            </ul>
                                            <div className='support-box'>
                                                <i className='flaticon-telephone' />
                                                <p>Call us</p>
                                                <h5>
                                                    <a href='tel:0830985073'>
                                                        0830985073
                                                    </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12 footer-column'>
                                        <div className='footer-widget links-widget ml-70'>
                                            <div className='widget-title'>
                                                <h4>Links</h4>
                                            </div>
                                            <div className='widget-content'>
                                                <ul className='links-list clearfix'>
                                                    <li title='Home'>
                                                        <a href='index.html'>
                                                            About
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href='index.html'>
                                                            Make Appoinment
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            Our Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            Home Visit
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            Physio
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            What We Treat
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href='index.html'>
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12 footer-column'>
                                        <div className='footer-widget links-widget'>
                                            <div className='widget-title'>
                                                <h4>Services</h4>
                                            </div>
                                            <div className='widget-content'>
                                                <ul className='links-list clearfix'>
                                                    <li>
                                                        <a href='index.html'>
                                                            Musculoskeletal
                                                            Physio
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            Sports Physiotherapy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            Post Surgery Physio
                                                            Rehab
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            Vestibular Rehab
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            Dry Needling
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='index.html'>
                                                            Children&apos;s
                                                            Physio
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12 footer-column'>
                                        <div className='footer-widget appointment-widget centred'>
                                            <div className='icon-layer'>
                                                <i className='flaticon-alarm-clock-1' />
                                            </div>
                                            <div className='widget-title'>
                                                <h4>Timings</h4>
                                            </div>
                                            <div className='widget-content'>
                                                <ul className='shediul-list clearfix'>
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
                                                        <h6>
                                                            10:00AM - 5:00PM
                                                        </h6>
                                                    </li>
                                                    <li>
                                                        <span>Sun</span>
                                                        <h6>Work off</h6>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href='index.html'
                                                            className='theme-btn-one'
                                                        >
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
                    <div className='footer-botton'>
                        <div className='auto-container clearfix'>
                            <div className='copyright pull-left'>
                                <p>
                                    © Copyright 2022 by{' '}
                                    <a href='index.html'> 365 Physiotherapy</a>
                                </p>
                            </div>
                            <ul className='social-links pull-right clearfix'>
                                <li>
                                    <a
                                        rel='noreferrer noopener'
                                        target='_blank'
                                        href='https://twitter.com/365physiosantry'
                                    >
                                        <i className='fab fa-youtube'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel='noreferrer noopener'
                                        target='_blank'
                                        href='https://twitter.com/365physiosantry'
                                    >
                                        <i className='fab fa-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel='noreferrer noopener'
                                        target='_blank'
                                        href='https://www.linkedin.com/company/77759963/'
                                    >
                                        <i className='fab fa-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel='noreferrer noopener'
                                        target='_blank'
                                        href='https://www.facebook.com/365-Physiotherapy-in-SantryDublin-9-109199244891323'
                                    >
                                        <i className='fab fa-facebook-square' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel='noreferrer noopener'
                                        target='_blank'
                                        href='https://www.pinterest.ie/365physiotherapy/'
                                    >
                                        <i className='fab fa-pinterest-p' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        rel='noreferrer noopener'
                                        target='_blank'
                                        href='https://www.instagram.com/365physiotherapydublin/'
                                    >
                                        <i className='fab fa-instagram' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                {/* main-footer end */}

                {/*scroll to top*/}
                <button
                    className='scroll-top scroll-to-target'
                    data-target='html'
                >
                    <span className='far fa-arrow-up' />
                </button>
            </div>
            <Script
                strategy='beforeInteractive'
                src='assets/js/jquery.js'
            ></Script>
            <Script src='assets/js/popper.min.js'></Script>
            <Script
                strategy='beforeInteractive'
                src='assets/js/bootstrap.min.js'
            ></Script>
            <Script
                strategy='beforeInteractive'
                src='assets/js/owl.js'
            ></Script>
            <Script
                strategy='beforeInteractive'
                src='assets/js/wow.js'
            ></Script>
            <Script src='assets/js/validation.js'></Script>
            <Script
                strategy='beforeInteractive'
                src='assets/js/jquery.fancybox.js'
            ></Script>
            <Script
                strategy='beforeInteractive'
                src='assets/js/appear.js'
            ></Script>
            <Script
                strategy='beforeInteractive'
                src='assets/js/scrollbar.js'
            ></Script>
            <Script src='assets/js/nav-tool.js'></Script>

            <Script src='assets/js/script.js'></Script>
        </>
    );
}
