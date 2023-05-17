import React from "react";
import styles from "./member.module.css";
import Item02 from "./member_item02";

function Item({ item }) {
  return (
    <div className={styles.benefit01_item}>
      <img src={item.src} alt={item.ttl} />
      <h4>{item.ttl}</h4>
    </div>
  );
}

function Member() {
  // 혜택1 배열선언
  const benefit01 = [
    {
      id: 1,
      src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/a4bd0376-6ee9-4f5b-8362-0e861b658e32.png?63cc85d",
      ttl: "아이엠마더",
    },
    {
      id: 2,
      src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/d37c5c9a-0a64-4134-b664-96dc033a1711.png?63cc85d",
      ttl: "임페리얼드림XO",
    },
    {
      id: 3,
      src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/9a5e35d2-bbdc-489a-a8a5-1b76e9d476f1.png?63cc85d",
      ttl: "컴포트케어",
    },
    {
      id: 4,
      src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/86f359b4-b022-4b08-a65d-88acf3666940.png?63cc85d",
      ttl: "유기농 산양유아식",
    },
  ];

  return (
    <div>
      <div className="subpath">
        <ul>
          <li>HOME</li>
          <li>프리미엄멤버십</li>
          <li>프리미엄멤버십 안내</li>
          <li>소개</li>
        </ul>
      </div>
      <div className={styles.subimg}>
        <div className={styles.brand_img}>
          <img src="../images/brand_img.png" alt="" />
        </div>
      </div>
      <div className="contents">
        <div className="contents_in">
          <div className={styles.benefit01}>
            <div className={styles.benefit01_h}>
              <div className={styles.txt_box}>혜택1</div>
              <h3>웰컴 기프트로 가입비 돌려받자 !</h3>
              <p>가입비 내신 만큼 돌려드립니다 (택 1)</p>
            </div>
            <div className={styles.benefit01_b}>
              {benefit01.map((item) => (
                <Item item={item} key={item.id} />
              ))}
            </div>
            <div className={styles.benefit01_f}>
              <p>
                가입선물은 유료 가입자에 한하여 지급되며 선택한 사은품은 변경 및
                교환이 불가합니다
              </p>
            </div>
          </div>

          <div className={styles.benefit02}>
            <div className={styles.benefit02_h}>
              <div className={styles.txt_box}>혜택2</div>
              <h3>웰컴 기프트로 가입비 돌려받자 !</h3>
              <p>가입비 내신 만큼 돌려드립니다 (택 1)</p>
            </div>
            <div className={styles.benefit02_b}>
              <Item02
                src="https://shopping.namyangi.com/resources/images/common/img_benefit_step1.png"
                txt="첫 구매부터 15% 할인"
              />
              <Item02
                src="https://shopping.namyangi.com/resources/images/common/img_benefit_step2.png"
                txt="구매 구간별 할인폭 증가"
              />
              <Item02
                src="https://shopping.namyangi.com/resources/images/common/img_benefit_step3.png"
                txt="5회 구매확정 시 마다 사은품 증정"
              />
            </div>
            <div className={styles.benefit02_f}>
              <p>
                단계별 한 사람이 구매할 수 있는 구매 총량은 한정되어 있으며,
                구매량에 관계없이 구매 횟수로 사은품제공 및 할인율이 차등
                적용됩니다.
              </p>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Member;
