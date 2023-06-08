import React from "react";
import styles from "./delivery.module.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useItemState } from "../context";

function Delivery1({ item }) {
    if (item.deli1) {
        return (
            <div className={styles.item}>
                <div className={styles.item_b}>
                    <img src={item.src} alt="" />
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.price}>{item.price}</p>
                </div>
            </div>
        )
    }
}

function Delivery2({ item }) {
    if (item.deli2) {
        return (
            <div className={styles.item}>
                <div className={styles.item_b}>
                    <img src={item.src} alt="" />
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.price}>{item.price}</p>
                </div>
            </div>
        )
    }
}

function Delivery() {
    const items = useItemState();
    return (
        <div className={styles.delivery}>
            <div className="subpath">
                <ul>
                    <li>HOME</li>
                    <li>가정배달</li>
                </ul>
            </div>
            <div className={styles.del_img_h}>
                <img src="https://shoppingcdn.namyangi.com/attach/site/2021/202111/1d77283d-eb9d-4db0-8609-cbfc6365efab.jpg?03bba6c" alt="" />
            </div>
            <div className={styles.del_img_b}>
                <ul>
                    <li>
                        <img src="https://shoppingcdn.namyangi.com/attach/site/2023/202302/453196af-77e1-4937-b825-ae7399e1300e.jpg?03bba6c" alt="" />

                    </li>
                    <li>
                        <img src="https://shoppingcdn.namyangi.com/attach/site/2021/202103/c98937de-e26c-4494-ad4b-bf32337df803.png?03bba6c" alt="" />
                    </li>
                </ul>
            </div>
            <div className={styles.deli_b}>
                <div className={styles.deli_tabmn} id="deli_tabmn">
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="가정배달 추천제품">
                            {items.map((item) => (
                                <Delivery1 item={item} key={item.id} />
                            ))}
                        </Tab>
                        <Tab eventKey="profile" title="아이를 위한 제품">
                            {items.map((item) => (
                                <Delivery2 item={item} key={item.id} />
                            ))}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Delivery;
