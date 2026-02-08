import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Gallery from "./Gallery";
import Hero from "./Hero";


import HomeElement1 from "./HomeElement1";
import HomeElement3 from "./HomeElement3";
import HomeElement4 from "./HomeElement4";
import HomeElement5 from "./HomeElement5";
import HomeElement6 from "./HomeElement6";
import HomeElement7 from "./HomeElement7";
import Footer from "../../components/Footer";
import img0 from "../../assets/gallery/img0.jpeg";
import img1 from "../../assets/gallery/img1.jpeg";
import img2 from "../../assets/gallery/img2.jpeg";
import img3 from "../../assets/gallery/img3.jpeg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpeg";
import img6 from "../../assets/gallery/img6.jpeg";
import img7 from "../../assets/gallery/img7.jpeg";
import img8 from "../../assets/gallery/img8.jpg";
import img9 from "../../assets/gallery/img9.jpg";
import img10 from "../../assets/gallery/img10.jpg";
import img11 from "../../assets/gallery/img11.jpeg";
import img12 from "../../assets/gallery/img12.jpg";
import img13 from "../../assets/gallery/img13.jpg";
import styled from "styled-components";



import HomeElement2 from "./HomeElement2";
import GreenSearch from "../../components/GreenSearch";
import {getPageData} from "../../helper/util/getPageData";
import { Helmet } from "react-helmet";


const Home = (props) => {

  const [pageData,setPageData] = React.useState({});
  
  const gallery = [
    { id: 0, image: img0 },
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
  ];
  
 


  useEffect(() => {
    props.handleClickIndex(-1);
  }, [props]);


  useEffect(()=>{
    _loadData();
  },[])

  const _loadData = async() => {
    let page = await getPageData(window.location.pathname);
    if(page)
    {
      setPageData(page)
    }

  }  

  const sliders = pageData?.fields?.slider || []

  return (
    <HomeWrapper>

      <Helmet>
        <title>{"Green Filter - High Performance Air Filters"} </title>
        <meta name="description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
        <meta property="og:title" content={"Green Filter - High Performance Air Filters"} />
        <meta property="og:description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/" />
      </Helmet>
      
      <div className="container-0">
        <Header
          clickedIndex={props.clickedIndex}
          handleClickIndex={props.handleClickIndex}
        />
        <Hero sliders={sliders} />

        <div className="home-green-search">
          <GreenSearch />
        </div>
        

        <HomeElement1 handleClickIndex={props.handleClickIndex} />
        <HomeElement2 />
        <HomeElement3 />
        <HomeElement4 text="It's not just about immediate gains, but the  long term ones as well." />
        <HomeElement5 />
        <HomeElement6 />
        <HomeElement7 />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </HomeWrapper>
  );
};




export default Home;



const HomeWrapper = styled.div`

`
