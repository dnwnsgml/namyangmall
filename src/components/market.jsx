import React from "react";
import styles from "./market.module.css";

function Market() {
    return (
        <div className={styles.market}>
            <div className="subpath">
                <ul>
                    <li>HOME</li>
                    <li>시크릿 마켓</li>
                </ul>
            </div>
            <div className={styles.market_img}>
                <img src="/images/market_img.png" alt="" />
            </div>
            <div className={styles.market_body}>
                <p>시크릿코드입력 (오놀라운특가)</p>
                <span>*필수입력 항목</span>
                <div className={styles.code}>
                    <p>*시크릿코드</p>
                    <input type="text" placeholder="시크릿코드를 입력해주세요." />
                </div>
                <div className={styles.button}>
                    <button>확인</button>
                </div>
            </div>
        </div>
    )
}

export default Market;
