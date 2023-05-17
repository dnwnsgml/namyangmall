import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Mainimg() {
  return (
    <div className="subimg" id="mainimg">
      <Carousel>
        <Carousel.Item>
          <div>
            <img
              src="https://shoppingcdn.namyangi.com/attach/site/2023/202305/e2eedca6-7a8d-4cba-a7c5-1a51abd08df5.png?03bba6c"
              alt=""
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              src="https://shoppingcdn.namyangi.com/attach/site/2023/202305/f5b4996a-9307-4fcf-a642-2bdd70054157.png?03bba6c"
              alt=""
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              src="https://shoppingcdn.namyangi.com/attach/site/2023/202304/ccbbfa73-13a9-4c0a-ad1e-8124a0a6722f.png?03bba6c"
              alt=""
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              src="https://shoppingcdn.namyangi.com/attach/site/2023/202304/296602ac-7482-449b-a99c-2b90bd3fb38f.png?03bba6c"
              alt=""
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Mainimg;
