import React from "react";
import styles from "./product.module.css";
import { useItemState } from "../context";

function ProductItem({ item }) {
  if (item.product) {
    return (
      <div>
        <div>
          <span style={{ display: item.act ? "block" : "none" }}>*냉장</span>
        </div>
        <img src={item.src} alt="" />
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </div>
    );
  }
}

function Product() {
  const items = useItemState();
  return (
    <div>
      <div className="subpath">
        <ul>
          <li>HOME</li>
          <li>냉장제품</li>
        </ul>
      </div>
      <div className="subttl">
        <div>
          <h3>냉장제품</h3>
          <span>총 26개의 상품이 있습니다.</span>
          <button>상세검색 +</button>
        </div>
      </div>
      <div className="contents">
        <div className="contents_in">
          <div className={styles.list_h}>
            <ul>
              <li>인기상품</li>
              <li>신상품순</li>
              <li>낮은가격순</li>
              <li>높은가격순</li>
              <li>상품평순</li>
            </ul>
            <div>20개씩 보기</div>
          </div>
          <div className={styles.list_b}>
            {items.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.page_num}>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
