import React from 'react';
import '../assets/all.scss';
import content01 from '../assets/img/home/content_01.jpg';
import content02 from '../assets/img/home/content_02.png';
import content03 from '../assets/img/home/content_03.jpg';
import content04 from '../assets/img/home/content_04.jpg';
import selectItem1 from '../assets/img/home/selected_01.png';
import selectItem2 from '../assets/img/home/selected_02.png';
import selectItem3 from '../assets/img/home/selected_03.jpg';
import recycling from '../assets/img/home/recycling.jpg';


const HomePage = ()=>{
    return(
        <main>
        {/* Banner Section */}
            <div className="banner d-flex align-items-center justify-content-center text-left" >
                <div className="bannerContainer container d-flex justify-content-end">
                <div className="banner_content text-white ">
                    <h1 className="fw-bold">Perfume your day</h1>
                    <p>
                    A perfume is like a piece of clothing, a message, a way of
                    presenting oneself a costume that according to the person who
                    wears it.
                    </p>
                    <a href="#" className="btn btn-outline-light rounded-pill px-5 py-2">
                    Shop now
                    </a>
                </div>
                </div>
            </div>
        {/* Content Section */}
      <div className="content container">
        {/* Content Item 1 */}
        <div className="row align-items-center mt-4">
          <div className="col-md-6 order-md-2 px-0">
            <img
              src={content01}
              alt="Gabrielle perfume"
              className="img-fluid"
              data-aos="fade-left"
            />
          </div>
          <div className="col-md-6">
            <div className="content_text">
              <h3 className="fw-bold">Gabrielle CHANEL</h3>
              <p>
                全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。
                極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
              </p>
              <a href="#" className="text-decoration-none text-warning">
                查看更多
              </a>
            </div>
          </div>
        </div>

        {/* Repeat Content Items (2, 3, 4) */}
        {/* Content Item 2 */}
        <div className="row align-items-center ">
          <div className="col-md-6 px-0">
            <img
              src={content02}
              alt="Five O'clock perfume"
              className="img-fluid"
              data-aos="fade-right"
            />
          </div>
          <div className="col-md-6">
            <div className="content_text">
              <h3 className="fw-bold">Five O’clock Au Gingembre</h3>
              <p>
                生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。
              </p>
              <a href="#" className="text-decoration-none text-warning">
                查看更多
              </a>
            </div>
          </div>
        </div>

        {/* Content Item 3 */}
        <div className="row align-items-center ">
          <div className="col-md-6 order-md-2 px-0">
            <img
              src={content03}
              alt="Chanel N°5 perfume"
              className="img-fluid"
              data-aos="fade-left"
            />
          </div>
          <div className="col-md-6">
            <div className="content_text">
              <h3 className="fw-bold">CHANEL N°5</h3>
              <p>
                N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
              </p>
              <a href="#" className="text-decoration-none text-warning">
                查看更多
              </a>
            </div>
          </div>
        </div>

        {/* Content Item 4 */}
        <div className="row align-items-center">
          <div className="col-md-6 px-0">
            <img
              src={content04}
              alt="Soap"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <ul className="content_4_text list-unstyled">
              <li className="mb-4">
                <h4 className="fw-bold">
                  <span>1.</span> Levels of Preventive Maintenance Compliance
                </h4>
                <p>
                  The core idea of preventative maintenance is the performance
                  of proactive actions against unscheduled downtime in order to
                  identify potential defects before they evolve into something
                  more severe.
                </p>
              </li>
              <li className="mb-4">
                <h4 className="fw-bold">
                  <span>2.</span> Percentage of Planned Maintenance
                </h4>
                <p>
                  The planned maintenance percentage is the total planned
                  maintenance time in your CMMS software over a date range over
                  the total number of hours of a service performed by the
                  technicians.
                </p>
              </li>
              <li className="mb-4">
                <h4 className="fw-bold">
                  <span>3.</span> Critical percentage of planned maintenance
                </h4>
                <p>
                  Calculating the critical percentage of planned maintenance
                  will help you prioritize the most important operations that
                  should be performed immediately.
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="btn btn-outline-dark rounded-pill px-4 py-2"
                >
                  Plan a free online training
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Select items*/}
      <div className="selected_content my-4 py-4">
      <ul className="selected_products row gy-1  ">
        <li className="cardItem  col-12 col-md-4 ">
          <a href="#">
            <div className="selected_img ">
              <img
                src={selectItem1}
                alt="discount_product"
                data-aos="fade-right"
              />
            </div>
            <div className="selected_content_text">
              <h3>Poppy & Barley</h3>
              <a href="#">Jo Malone</a>
              <div className="price">
                <p>NT$1,380</p>
                <p className="salesPrice">NT$1,580</p>
              </div>
            </div>
          </a>
        </li>

        <li className="cardItem col-12 col-md-4">
          <div className="selected_img">
            <img
              src={selectItem2}
              alt="selected_product"
              data-aos="fade-down"
            />
          </div>
          <div className="selected_content_text">
            <h3>Body Wash</h3>
            <a href="#">Curology</a>
            <div className="price">
              <p>NT$1,580</p>
            </div>
          </div>
        </li>

        <li className="cardItem col-12 col-md-4">
          <div className="selected_img">
            <img
              src={selectItem3}
              alt="sold_out_product"
              data-aos="fade-left"
            />
            <div className="soldout_tag"><span>Sold out</span></div>
          </div>
          <div className="selected_content_text">
            <h3>Apple Cider Vinegar Capsule</h3>
            <a href="#">Tonik</a>
            <div className="price">
              <p>NT$1,580</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    {/*Recycle*/}
    <div className="recycling_adv container">
      <img
        src={recycling}
        alt="recycling_photo"
        className="img-fluid"
        data-aos="fade-right"
      />
      <div className="recycling_content">
        <h3>Bottle-Recycling</h3>
        <p className="subTitle">
          Recycle your used empty bottles and be rewarded!
        </p>
        <p>
          For the past 10 years, we have collected over 800,000 bottles
          through Empty Bottle Recycling Campaign and planted more than 860
          pine trees for a better environment. For the past 10 years, we have
          collected over 800,000 bottles through Empty Bottle Recycling
          Campaign and planted more than 860 pine trees for a better
          environment.
        </p>
        <a href="#">查看更多</a>
      </div>
    </div>


   </main>
    )
}


export default HomePage;