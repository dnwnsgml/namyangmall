import React from "react";
import styles from "./pop.module.css";
import { useItemState } from "../context";

function PopItem({ item }) {
  if (item.pop) {
    return (
      <div className={styles.item}>
        <div className={styles.item_b}>
          <img src={item.src} alt="" />
          <p className={styles.title}>{item.title}</p>
          <p className={styles.name}>{item.name}</p>
        </div>
      </div>
    );
  }
}

function Pop() {
  const items = useItemState();
  return (
    <div className={styles.pop}>
      <div className="subpath">
        <ul>
          <li>HOME</li>
          <li>기획전</li>
        </ul>
      </div>
      <div className={styles.pop_img}></div>
      <div className={styles.pop_body}>
        <h2>남양 기획전</h2>
        <span>총 7건의 기획전이 있습니다.</span>
        {items.map((item) => (
          <PopItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Pop;
