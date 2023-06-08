import React from "react";
import styles from "./event.module.css";
import Carousel from "react-bootstrap/Carousel";
import NoticeList from "./NoticeLis";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useItemState } from '../context';

function EventList1({ item }) {
  if (item.event1) {
    return (
      <div className={styles.items1}>
        <div className={styles.items1_b}>
          <img src={item.src} alt="" />
          <div className={styles.items_title}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.name}>{item.name}</p>
          </div>
        </div>
      </div>
    )
  }
}

function EventList2({ item }) {
  if (item.event2) {
    return (
      <div className={styles.items1}>
        <div className={styles.items1_b}>
          <img src={item.src} alt="" />
          <div className={styles.items_title}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.name}>{item.name}</p>
          </div>
        </div>
      </div>
    )
  }
}

function Event() {
  const items = useItemState();
  return (
    <div>
      <div className="subpath">
        <ul>
          <li>HOME</li>
          <li>이벤트</li>
          <li>이벤트 홈</li>
        </ul>
      </div>
      <div id="sub_slide">
        <Carousel>
          <Carousel.Item>
            <div>
              <img
                src="https://shoppingcdn.namyangi.com/attach/site/2022/202204/9816f39e-918f-436d-a9f3-ec7cc092c7e5.png"
                alt=""
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img
                src="https://shoppingcdn.namyangi.com/attach/site/2020/202011/bf81c446-5d7d-483f-af35-35060e037325.png"
                alt=""
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img
                src="https://shoppingcdn.namyangi.com/attach/site/2020/202011/a0262bb6-6047-47ad-a608-1b8bb5604490.png"
                alt=""
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.contents}>
        <div className={styles.contents_in}>
          <div className={styles.notice_area}>
            <div className={styles.notice}>
              <div className={styles.notice_h}>
                <h3>이벤트결과</h3>
                <button>더보기</button>
              </div>
              <div className={styles.notice_b}>
                <NoticeList
                  txt="[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내"
                  date="23.01.26"
                />
                <NoticeList
                  txt="[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내"
                  date="23.01.26"
                />
                <NoticeList
                  txt="[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내"
                  date="23.01.26"
                />
                <NoticeList
                  txt="[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내"
                  date="23.01.26"
                />
              </div>
            </div>
          </div>
          <div className={styles.event_h}>
            <h2>이벤트</h2>
          </div>
          <div className={styles.event_tabmn} id="event-tabmn">
            <Tabs
              defaultActiveKey="event1"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="event1" title="진행중인이벤트">
                <div>
                  {items.map((item) => (
                    <EventList1 item={item} key={item.id} />
                  ))}
                </div>
              </Tab>
              <Tab eventKey="event2" title="종료된이벤트">
                <div>
                  {items.map((item) => (
                    <EventList2 item={item} key={item.id} />
                  ))}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
