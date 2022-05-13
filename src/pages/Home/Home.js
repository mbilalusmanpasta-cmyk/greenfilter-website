import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Gallery from "./Gallery";
import Hero from "./Hero";
import { CaretDownOutlined } from '@ant-design/icons';
import axios from "axios"

import HomeElement1 from "./HomeElement1";
import HomeElement2 from "./HomeElement2";
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

import logo from "../../assets/gflogo.png";


import { Select, Input, Button  } from 'antd';
import { async } from "@firebase/util";
const { Option } = Select;


const Home = (props) => {
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
  
  const [apiStr, setApiStr] = React.useState({
    year: '',
    make: '',
    name: '',
    engine:'' 
  });

  const [apiData, setApiData] = React.useState({});
  const stickyComponentRef = React.useRef();
  const [sticky, setSticky] = React.useState(false);

  const [searchpartNo, setSearchPartNo] = React.useState('');
  const [makes, setMakes] = React.useState([]);

  const [productDetails, setProductDetails] = React.useState([]);
const [modelsId,setModelsId]=useState([])


  useEffect(() => {
    props.handleClickIndex(-1);
  }, [props]);


  useEffect(()=>{
    console.log(apiData,"apiData")
  },[apiData])

  

  const generateYearOptions = () => {
    const arr = [];
  
    const startYear = 1959;
    const endYear = new Date().getFullYear();
  
    for (let i = endYear; i >= startYear; i--) {
      arr.push(<Option value={i}>{i}</Option>);
    }
  
    return arr;
  };





  useEffect(()=>{
    window.addEventListener('scroll',checkSticky);
    return () => window.removeEventListener('scroll',checkSticky);
  },[])


  useEffect(()=>{
    console.log(apiStr,"apiStr");
    continueFetch();
  },[apiStr])

  
  
  const checkSticky = ()=>{
    const getTop = stickyComponentRef.current.getBoundingClientRect();
    if(getTop.top <= 153) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  const continueFetch = async () =>{



    // try { 
    //   const data = await axios.get('https://us-central1-greenfilter-admin.cloudfunctions.net/models', 
    //   ).catch(error=>this._handleError(error)) 
    //   console.log(data.data,"daaaattaaaa") 
        


    const filterArray = []
 

    let url = 'https://us-central1-greenfilter-admin.cloudfunctions.net/modelssearch';
    
    const filterKeys = ['make','name','engine'];

    let index = -1;
    Object.keys(apiStr).map(key=>{
      if(apiStr[key] !== '-1' && apiStr[key] !== '') {
        const temp = {accessor:key, value:apiStr[key]}
        filterArray.push(temp)
        index++;
      }
    });
console.log(index,"innndexx")

    if(index>=1) {
      console.log(filterArray); 

    await  axios.get('https://us-central1-greenfilter-admin.cloudfunctions.net/modelssearch', {
        params:{
          filters:[...filterArray],
        }
          }).then((data)=>{
           console.log(data?.data,"bilal data") 

            if(data?.data?.length>0) {
              let filteredData = [];
              
              const getKey = filterKeys[index];
    
              let bunchOfArray = data.data;
              filteredData=[...data.data]
              
              if(getKey === 'engine' && filteredData.length) {
                let modelIds=filteredData&&filteredData.map((item)=>({objectID: item.objectID}))||[]
                setModelsId([...modelIds]) 
              }
    console.log({...apiData, [getKey]:filteredData},"kjjjj")
              setApiData({...apiData, [getKey]:filteredData});
            } 

          }).catch(error=>console.log(error))

    }else if(index==0){
      await  axios.get('https://us-central1-greenfilter-admin.cloudfunctions.net/makes', {
      params:{
        page:0,
        hitsPerPage:90
      }
          }).then((data)=>{

            if(data?.data?.hits.length>0) {
              let filteredData = [];
              
              const getKey = filterKeys[index];
    
              filteredData=[...data.data.hits]
              
          
    
              setApiData({...apiData, [getKey]:filteredData});
            } 

          }).catch(error=>console.log(error))
    }
  }


  const handleChange = (key, value) => {
    const tempArr = ['year',
    'make',
    'name',
    'engine'];

    const index = tempArr.indexOf(key);
    tempArr.splice(0, index+1);
    
    let tempData = apiData;
    let tempStr = apiStr;
    
    tempArr.map(k => {
      delete tempData[k];
      tempStr[k] = ''
    })

    setProductDetails([])
    setApiData({...tempData});
    setApiStr({...tempStr, [key]: value});
  }


  const finalSearch =async () =>{
    let filters=[];
    if(modelsId){
      filters.push({accessor:"model",value:modelsId})
    }
    if(searchpartNo){
      filters.push({accessor:"gfu_part_num",value:searchpartNo})

    }

   await axios.get(`https://us-central1-greenfilter-admin.cloudfunctions.net/productssearch?hitsPerPage=1&page=0`,{
      params:{
        filters:filters,
      }
    }).then((data)=>{
          setProductDetails(data.data.hits);
  }).catch((err)=>{
console.log(err,"error")
    })
    // fetch(`https://us-central1-greenfilter-admin.cloudfunctions.net/products?hitsPerPage=${setModelsId.length+1}&page=0&keyword=${finalSelectedId}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     if(data.hits) {
    //       setProductDetails(data.hits);
    //     }
    //   })
  }


  const reset = () =>{
    setApiData({})
    setProductDetails([])
    setApiStr({
      year: '',
      make: '',
      name: '',
      engine:'' 
    })
    setSearchPartNo('')
  }

  return (
    <>
      <div className="container-0">
        <Header
          clickedIndex={props.clickedIndex}
          handleClickIndex={props.handleClickIndex}
        />
        <Hero />
        <div ref={stickyComponentRef}></div>
        <div className={`customFilters ${(sticky || productDetails.length) ? 'sticky' : ''}`}>
          <h3><img src={logo} alt="logo" width="150" />Find a Filter</h3>

          <div className="selectController">
            <Select defaultValue="-1" suffixIcon={<CaretDownOutlined />} className="customSelects" onChange={(v)=>handleChange('year', v)}>
              <Option value="-1">Select Year</Option>
              {generateYearOptions()}
            </Select> 

            <Select defaultValue="-1" suffixIcon={<CaretDownOutlined />}  value={apiStr.make.length && apiStr.make || '-1'} className="customSelects" onChange={(v)=>handleChange('make', v)} disabled={apiStr.year === '-1' || apiStr.year === ''}>
                <Option value="-1">Select Make...</Option>
                {apiData.make && apiData.make.length && apiData.make.map((item,index)=>{
                  return <Option value={item.name}>{item.name}</Option>
                })}
{/* {makes && makes.length && makes.map(({name})=>{
                  return <Option value={name}>{name}</Option>
                })}             */}
                </Select>


            <Select defaultValue="-1" suffixIcon={<CaretDownOutlined />}  value={apiStr.name.length && apiStr.name || '-1'} className="customSelects" onChange={(v)=>handleChange('name', v)} disabled={apiStr.make === '-1' || apiStr.make === ''}>
              <Option value="-1">Select Model...</Option>
              {apiData.name && apiData.name.length && apiData.name.map(({name})=>{
                  return <Option value={name}>{name}</Option>
              })}
            </Select>

            <Select defaultValue="-1"  suffixIcon={<CaretDownOutlined />}  value={apiStr.engine.length && apiStr.engine || '-1'} className="customSelects" onChange={(v)=>{
                handleChange('engine', v);
                
              }} disabled={apiStr.name === '-1' || apiStr.name === ''}>
              <Option value="-1">Select Engine...</Option>
              {apiData.engine && apiData.engine.length && apiData.engine.map(({engine})=>{
                  return <Option value={engine}>{engine}</Option>
              })}
            </Select>

            <span>OR</span>

            <Input placeholder="Basic usage" className="customSelects" value={searchpartNo} onChange={(e)=>setSearchPartNo(e.target.value)}/>
          </div>
          <div className="selectActions">
            <Button type="link" className="customBtns" onClick={reset}>Clear</Button>
            <Button type="primary" 
            // disabled={!finalSelectedId}
             className="customBtns" onClick={finalSearch}>Search</Button>
          </div>
             
              
          {Boolean(productDetails.length) && <div className="productRenderContainer"> 
            {
              productDetails.map((product,key)=>{
                return (
                  <div key={key} className="searchedItems">
                      <h2>{product.title}</h2>
                      <div  className="searchedProductDetails">
                        <div className="searchProductLeftContainer">
                          <div className="searchProductImage">
                            <img src={(product.images && product.images.length) ? product.images[0] : 'https://via.placeholder.com/150'} alt=""/>
                          </div>
                          <div className="searchProductPrice">
                            <h5>{product?.price || '$00.00'}</h5>
                            <Button type="primary">Add To Cart</Button>
                          </div>
                        </div>
                        <div className="searchedProductRight">
                          <p>Year: 2019</p>
                          <p>Engine: ACE</p>
                          <p>Disp: 600</p>
                          <p>Intake: 600</p>
                          <p>Fitment Note: - All Models</p>
                          <p><a href="#">Click here</a> for more product information</p>
                        </div>
                      </div>
                  </div>
                )
              })
            }
          </div>}
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
    </>
  );
};

export default Home;
