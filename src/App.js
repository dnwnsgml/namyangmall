import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { Itemprovider } from "./context";
import Main from "./main";
//컴포넌트를 라우터객체로 지정해서 화면에 마운트 합니다
//yarn add react-router-dom@5
//설정:
//특정 주소에 컴포넌트 연결하는 방법
//<Route path="주소" component={보여줄 컴포넌트}></Route>
//다른 주소로 이동시키기
//import { Route, Link } from 'react-router-dom';
//<Link to="주소">문자</Link>
import Member from "./components/member";
import product from "./components/product";
import Market from "./components/market";
import Brand from "./components/brand";
import Pop from "./components/pop";
import Event from "./components/event";
import Delivery from "./components/delivery";

// 리액트부트스트랩사용
// yarn add react-bootstrap bootstrap
// index.js -> import 'bootstrap/dist/css/bootstrap.css'
// 부트스트랩을 사용하는 컴포넌트에 사용하는 리액트 부트스트랩을 연결

function App() {
  return (
    <>
      <Itemprovider>
        <div className="header">
          <div className="header_in">
            <div className="logo">
              {/* <Link to="/"><img src={logo} alt=''></img></Link> */}
              <Link to="/">
                <img
                  src="https://shopping.namyangi.com/resources/images/common/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <Link
                    to="/components/member"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    프리미엄멤버쉽
                  </Link>
                </li>
                <li>
                  <Link
                    to="/components/product"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    냉장제품
                  </Link>
                </li>
                <li>
                  <Link
                    to="/components/market"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    시크릿마켓
                  </Link>
                </li>
                <li>
                  <Link
                    to="/components/brand"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    브랜드관
                  </Link>
                </li>
                <li>
                  <Link
                    to="/components/pop"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    기획전
                  </Link>
                </li>
                <li>
                  <Link
                    to="/components/event"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    이벤트
                  </Link>
                </li>
                <li>
                  <Link
                    to="/components/delivery"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    가정배달
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Route path="/" exact={true} component={Main}></Route>
          <Route path="/components/member" component={Member}></Route>
          <Route path="/components/product" component={product}></Route>
          <Route path="/components/market" component={Market}></Route>
          <Route path="/components/brand" component={Brand}></Route>
          <Route path="/components/pop" component={Pop}></Route>
          <Route path="/components/event" component={Event}></Route>
          <Route path="/components/delivery" component={Delivery}></Route>
        </div>
        <div className="footer">
          <div className="footer_top">
            <div className="fot_top_in">
              <ul>
                <li>
                  <h2>공지사항</h2>
                  <p>
                    남양몰 5월 연휴 배송 및 고객센터 운영 <br />
                    안내
                  </p>
                  <p>2023.04.25</p>
                </li>
                <li>
                  <h2>APP 다운로드</h2>
                  <p>
                    내 손안에 남양몰 오픈!
                    <br />
                    앱스토어, 구글플레이에서 만나요
                  </p>
                  <p>다운로드</p>
                </li>
                <li>
                  <h2>고객센터 ></h2>
                  <p>
                    {" "}
                    평일 : 오전 9시 ~ 오후 5시
                    <br />
                    (점심시간 : 11시 30분 ~ 1시)
                    <br />
                    주말, 공휴일은 1:1문의를 이용해 주세요.
                  </p>
                  <h2>1522-0130</h2>
                </li>
                <li>
                  <div>
                    <img src="/images/footimg1.png" />
                    <p>1:1문의</p>
                  </div>
                  <div>
                    <img src="/images/footimg2.png" />
                    <p>자주묻는질문</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bot">
            <div></div>
          </div>
        </div>
      </Itemprovider>
    </>
  );
}

export default App;
