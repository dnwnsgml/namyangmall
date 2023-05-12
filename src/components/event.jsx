import React from "react";
import styles from './event.module.css';
import Carousel from 'react-bootstrap/Carousel';
import NoticeList from "./NoticeLis";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Event() {
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
                        <div className={styles.sub1}></div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.sub2}>2</div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.sub3}>3</div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
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
                                <NoticeList txt='[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내' date="23.01.26" />
                                <NoticeList txt='[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내' date="23.01.26" />
                                <NoticeList txt='[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내' date="23.01.26" />
                                <NoticeList txt='[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내' date="23.01.26" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.event_tabmn} id='event-tabmn'>
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="event1" title="진행중인이벤트">
                                <div></div>
                            </Tab>
                            <Tab eventKey="event2" title="종료된이벤트">
                                <div></div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Event;
