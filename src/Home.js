import React from "react";
import "./Home.css";
import Product from "./Product";

// var slide = 0;
// corser();

// function corser() {
//   var p;
//   var x = document.getElementsByClassName("home__image");
//   for (p = 0; p < x.length; p++) {
//     x[p].style.display = "none";
//   }
//   slide++;
//   if (slide > x.length) {
//     slide = 1;
//   }
//   x[slide - 1].style.display = "block";
//   setTimeout(corser, 1500); // Change image every 1.5 seconds
// }

function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        {/* <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg"
          alt=""
        /> */}
        {/* <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
          alt=""
        /> */}
        <div className="home__row">
          <Product
            id="12321341"
            title="The Audacity of Hope: Thoughts on Reclaiming the American Dream"
            price={4.69}
            image="https://images-eu.ssl-images-amazon.com/images/I/51P9nP0By6L._SY346_.jpg"
            rating={5}
          />
          <Product
            id="97221341"
            title="Revlon One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary"
            price={29.39}
            image="https://images-na.ssl-images-amazon.com/images/I/71Uv3VOrCAL.jpg"
            rating={4}
          />
          <Product
            id="12355621"
            title="Philips Norelco MG3750 Multigroom All-In-One Series 3000, 13 attachment trimmer"
            price={17.59}
            image="https://pics.drugstore.com/prodimg/594619/450.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Backing , Stylish Kitchen Mixer with K-beater , Dough Hook and Whisk , 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx-g6Vc-w7UbBVe0O-9xBZnt5yu1zp4xM6vsR6iBmdA6hKFdd3U3fq2RF86_sjLXI8d6HiOvzcLRM&usqp=CAc"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Apple AirPods Pro"
            price={349.99}
            rating={5}
            image="http://static.techspot.com/images/products/2019/headphones/org/2019-10-31-product.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa , Carcoal Fabric"
            price={98.99}
            rating={5}
            image="https://tse1.mm.bing.net/th?id=OIP.4ZGZMLLry-792mCiAN1uKwAAAA&pid=Api&P=0&w=202&h=169"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)-Silver (4th Generation)"
            price={589.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61+WrV0wJsL._AC_SS350_.jpg"
          />
          <Product
            id="76854241"
            title="New Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
            price={509.0}
            image="https://www.bhphotovideo.com/images/images2500x2500/apple_mg173ll_a_watch_nike_series_6_1594551.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG40SSUXEN 49' Curved LED Gaming Monitor-Super Ultra Wide Dual WQHHD 5120x1440"
            price={1094.98}
            rating={4}
            image="https://tse3.mm.bing.net/th?id=OIP.oOTOXDb5HQepLqbT4KFQCgHaGk&pid=Api&P=0&w=174&h=155"
          />
          <Product
            id="10135741"
            title="Playboy King of The Game Eau de Toilette Spray for Men, 3.4 Ounce"
            price={13.49}
            image="https://images-na.ssl-images-amazon.com/images/I/31cSY4q9zUL._SY300_QL70_ML2_.jpg"
            rating={4}
          />
          <Product
            id="12187634"
            title="The lean startup :How Constent Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
            rating={5}
          />
          <Product
            id="78387166"
            title="DualShock 4 Wireless Controller for PlayStation 4 - Glacier White"
            price={64.99}
            image="https://tse1.mm.bing.net/th?id=OIP.b4PBnoSB6pir6WFJWuQDrQHaHa&pid=Api&P=0&w=300&h=300"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
