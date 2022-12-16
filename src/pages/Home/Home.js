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
import { statics } from "../../data/store";
import AddToCart from "../../components/AddToCart";
import { Link } from "react-router-dom";
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
    make_id: '',
    model_name: '',
    engine:'' 
  });

  const [apiData, setApiData] = React.useState({});
  const stickyComponentRef = React.useRef();
  const [sticky, setSticky] = React.useState(false);
  const [finalSelectedId, setFinalSelectedId] = React.useState(null);

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

  // useEffect(()=>{
  //   getAllMakes();
  // },[])

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
 

    let url = statics.BaseUrl+'/product-search';
    
    const filterKeys = ['make','name','engine'];

    console.log('apiStr',apiStr)

    let index = -1;
    Object.keys(apiStr).map(key=>{
      if(apiStr[key] !== '-1' && apiStr[key] !== '') {
        const temp = {accessor:key, value:apiStr[key]}
        filterArray.push(temp)
        index++;
      }
    });

    console.log('index',index)

    await  axios.get(url, {
            params:apiStr
          }).then((data)=>{

            let response = data.data;

            if(response?.data?.length>0) {
              let filteredData = [];
              
              const getKey = filterKeys[index];
              let objectKey = getKey;

              
            
    
              let bunchOfArray = response.data;
              filteredData=response.data;
              console.log("data",data);
              console.log("filteredData",filteredData);

              if(!getKey && (apiData.make && apiData.name && apiData.engine))
              {
                setProductDetails(filteredData)

              }

              else
              {
                if(getKey === 'engine' && filteredData.length) {
                  setFinalSelectedId(filteredData[0].id);
                  const modelIds=filteredData.map((item)=>({objectID: item.id}))
                  setModelsId([...modelIds]) 
                  // setProductDetails(filteredData)
                }
      
                setApiData({...apiData, [objectKey]:filteredData});
              }
              
              
            } 

          }).catch(error=>console.log(error))



          // else if(index>=0){
          //   await  axios.get('https://us-central1-greenfilter-admin.cloudfunctions.net/makes', {
          //   params:{
          //     page:0,
          //     hitsPerPage:90
          //   }
          //       }).then((data)=>{
      
          //         if(data?.data?.hits.length>0) {
          //           let filteredData = [];
                    
          //           const getKey = filterKeys[index];
          
          //           filteredData=[...data.data.hits]
                    
                
          
          //           setApiData({...apiData, [getKey]:filteredData});
          //         } 
      
          //       }).catch(error=>console.log(error))
          // }

    }
    


  const handleChange = (key, value) => {
    const tempArr = ['year',
    'make_id',
    'model_name',
    'engine'];

    const index = tempArr.indexOf(key);
    tempArr.splice(0, index+1);

    console.log(tempArr)
    
    let tempData = apiData;
    let tempStr = apiStr;
    
    tempArr.map(k => {
      delete tempData[k];
      tempStr[k] = ''
    })
    console.log(tempData)

    setProductDetails([])
    setFinalSelectedId(null)
    setApiData({...tempData});
    setApiStr({...tempStr, [key]: value});
  }


  const finalSearch =async () =>{

    setApiData({})
    setProductDetails([])
    setFinalSelectedId(null)
    setApiStr({
      year: '',
      make_id: '',
      model_name: '',
      engine:'' 
    })

    let filters={};
    // if(modelsId){
    //   filters.push({accessor:"model",value:modelsId})
    // }
    if(searchpartNo){
      filters["gfu_part_num"] = searchpartNo;

    }

   await axios.get(statics.BaseUrl+`/product-search`,{
      params:filters
    }).then((data)=>{

          console.log(data?.data?.data)
          setProductDetails(data?.data?.data);
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
    setFinalSelectedId(null)
    setApiStr({
      year: '',
      make_id: '',
      model_name: '',
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
        {
          console.log(productDetails.length)
        }
        <div className={`customFilters ${(sticky || productDetails.length) ? 'sticky' : ''}`}>
          <h3><img src={logo} alt="logo" width="150" />Find a Filter</h3>

          <div className="selectController">
            <Select defaultValue="-1" value={apiStr.year.toString().length && apiStr.year || '-1'} suffixIcon={<CaretDownOutlined />} className="customSelects" onChange={(v)=>handleChange('year', v)}>
              <Option value="-1">Select Year</Option>
              {generateYearOptions()}
            </Select> 

            <Select defaultValue="-1" suffixIcon={<CaretDownOutlined />}  value={apiStr.make_id.length && apiStr.make_id || '-1'} className="customSelects" onChange={(v)=>handleChange('make_id', v)} disabled={apiStr.year === '-1' || apiStr.year === ''}>
                <Option value="-1">Select Make...</Option>
                {apiData.make && apiData.make.length && apiData.make.map((item,index)=>{
                  return <Option value={item.id.toString()}>{item.title}</Option>
                })}
{/* {makes && makes.length && makes.map(({name})=>{
                  return <Option value={name}>{name}</Option>
                })}             */}
                </Select>


            <Select defaultValue="-1" suffixIcon={<CaretDownOutlined />}  value={apiStr.model_name.length && apiStr.model_name || '-1'} className="customSelects" onChange={(v)=>handleChange('model_name', v)} disabled={apiStr.make_id === '-1' || apiStr.make_id === ''}>
              <Option value="-1">Select Model...</Option>
              {apiData.name && apiData.name.length && apiData.name.map(({name,title})=>{
                  return <Option value={name}>{title}</Option>
              })}
            </Select>

            <Select defaultValue="-1"  suffixIcon={<CaretDownOutlined />}  value={apiStr.engine.length && apiStr.engine || '-1'} className="customSelects" onChange={(v)=>{
                handleChange('engine', v); }} disabled={apiStr.model_name === '-1' || apiStr.model_name === ''}>
              <Option value="-1">Select Engine...</Option>
              {apiData.engine && apiData.engine.length && apiData.engine.map((engine)=>{
                  return <Option value={engine.displacement}>{engine.displacement}</Option>
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
                              {console.log(product)} 

                      <h2>{product.title}</h2>
                      <div  className="searchedProductDetails">
                        <div className="searchProductLeftContainer">
                          {/* <div className="searchProductImage">
                            <img src={(product.images && product.images.length) ? product?.images[0]?.link : 'https://via.placeholder.com/150'} alt=""/>
                          </div> */}
                          <div className="searchProductPrice">
                            {/* <h5>{product?.price || '$00.00'}</h5> */}
                            <AddToCart text="ADD TO CART" buyButtonId={product?.buy_url}  id={product?.id?.toString() + key.toString()} background="white" color="#00ad23" />

                            {/* <Button type="primary">Add To Cart</Button> */}
                          </div>
                        </div>
                        <div className="searchedProductRight">
                          {
                            apiStr?.year && <p>Year: {apiStr?.year} </p>
                          }
                          {
                            apiStr?.engine &&  <p>Engine: {apiData?.engine?.[0]?.engine}</p>
                          }
                          {
                            apiStr?.engine && <p>Disp: {apiData?.engine?.[0]?.displacement}</p>
                          }
                          {
                            apiStr?.engine && <p>Intake: {apiData?.engine?.[0]?.intake}</p>
                          }
                          {
                            apiStr?.engine && <p>Fitment Note: - {apiData?.engine?.[0]?.description} Models</p>
                          }
                          
                          <p><Link to={`/store?product_id=${product.id}`}>Click here for more product information </Link> </p>
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
