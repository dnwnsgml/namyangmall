import React from "react";
import styles from './brand.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useItemState } from '../context';

// 분류별
function BrandItem1({ item }) {
    if (item.brand1) {
        return (
            <div className={styles.items1}>
                <div className={styles.items1_b}>
                    <img src={item.src} alt="" />
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.name}>{item.name}</p>
                </div>
            </div>
        )
    }
}

function BrandItem1_1({ item }) {
    if (item.brand1_1) {
        return (
            <div className={styles.items1}>
                <div className={styles.items1_b}>
                    <img src={item.src} alt="" />
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.name}>{item.name}</p>
                </div>
            </div>
        )
    }
}

// 이름별
function BrandItem2({ item }) {
    if (item.brand2) {
        return (
            <div className={styles.items1}>
                <div className={styles.items1_b}>
                    <img src={item.src} alt="" />
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.name}>{item.name}</p>
                </div>
            </div>
        )
    }
}
function BrandItem2_2({ item }) {
    if (item.brand2_2) {
        return (
            <div className={styles.items1}>
                <div className={styles.items1_b}>
                    <img src={item.src} alt="" />
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.name}>{item.name}</p>
                </div>
            </div>
        )
    }
}

function Brand() {
    const items = useItemState();
    return (
        <div>
            <div className="subpath">
                <ul>
                    <li>HOME</li>
                    <li>브랜드</li>
                </ul>
            </div>
            <div className={styles.brand_h}>
                <div>
                    <h3>브랜드</h3>
                </div>
            </div>
            <div className={styles.brand_b} id='brand_tab'>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="분류별">
                        <div>
                            <div className={styles.brand1_ttl1}>
                                <ul>
                                    <li>분유</li>
                                    <li>아기간식/이유식</li>
                                    <li>냉장제품</li>
                                    <li>단백질보충제/영양식</li>
                                    <li>두유/우유/물/음료</li>
                                    <li>커피/차</li>
                                </ul>
                            </div>
                            <div className={styles.brand1_ttl2}>
                                <ul>
                                    <li>가정배달</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className={styles.brand1_b}>
                                <h4>분유</h4>
                                {items.map((item) => (
                                    <BrandItem1 item={item} key={item.id} />
                                ))}
                            </div>
                            <div>
                                <div className={styles.brand2_b}>
                                    <h4>아기간식/이유식</h4>
                                    {items.map((item) => (
                                        <BrandItem1_1 item={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="이름별">
                        <div>
                            <div className={styles.brand2_ttl}>
                                <ul>
                                    <li>ㄱㄴㄷ</li>
                                    <li>ㄹㅁㅂ</li>
                                    <li>ㅅㅇㅈ</li>
                                    <li>ㅊㅋㅌ</li>
                                    <li>ㅍㅎ</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div>
                                <h4>ㄱㄴㄷ</h4>
                                <div className={styles.brand2_b}>
                                    {items.map((item) => (
                                        <BrandItem2 item={item} key={item.id} />
                                    ))}
                                </div>
                                <h4>ㄹㅁㅂ</h4>
                                <div className={styles.brand2_b}>
                                    {items.map((item) => (
                                        <BrandItem2_2 item={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Brand;
