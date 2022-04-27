import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import VehicleElement1 from "./VehicleElement1";
import Gallery from "../Home/Gallery";
import VehicleElement2 from "./VehicleElement2";
import VehicleElement3 from "./VehicleElement3";
import VehicleElement4 from "./VehicleElement4";
import { brandDetails } from "../../data/cars";
import VehicleElement5 from "./VehicleElement5";
import HomeElement5 from "../Home/HomeElement5";
import VehicleElement12 from "./VehicleElement12";
import { collection, query, where, getDocs,startAt,endAt, collectionGroup,getDoc} from "firebase/firestore"; 
import  {db} from '../../helper/firebase';
import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";

const Vehicles = (props) => {

  const [models,setModels] = React.useState([])
  const [make,setMake] = React.useState('')

  useEffect(()=>{

    const url = window.location.pathname;
    const brand = url.split('/')[2];
    getMake(brand);
    getModels(brand);
  },[])


  const getMake = async (brand) =>
  {

    console.log('her')
    const makeRef = collection(db, "makes");
    const q = query(makeRef, where("name", 'in', [brand, brand.toLowerCase(), brand.toUpperCase(), capitalizeFirstLetter(brand)]) );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setMake(doc.data())
    });
  }

  const getModels = async (brand) =>
  {
    const productsRef = collection(db, "models");

    const q = query(productsRef, where("make", 'in', [brand, brand.toLowerCase(), brand.toUpperCase(), capitalizeFirstLetter(brand)]) );

    let modelsT = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      modelsT.push(doc.data())

    });

    console.log(modelsT);
    getProducts(modelsT)
  }

  const getProducts  = async (modelsT) =>
  {
    console.log(modelsT.length)

    let requests = modelsT.map((model) => {
        return new Promise(async (resolve) => {
          
          let name = model.name;
          const q = query(collectionGroup(db,"model"), where("name", 'in', [name, name.toLowerCase(), name.toUpperCase(), capitalizeFirstLetter(name)]) );
    
          let productsT = [];
          const querySnapshot = await getDocs(q);
    
         
          for await(const doc of querySnapshot.docs) {
            const docRef = doc.ref;   
            const parentCollectionRef = docRef.parent;   // CollectionReference
            const immediateParentDocumentRef = parentCollectionRef.parent; // DocumentReference
    
            model["id"] = doc.ref.id;
            productsT.push(getDoc(immediateParentDocumentRef).then((d)=>d.data()));
          };
    
          // querySnapshot.forEach((doc) => {
            
          // });
    
          let arrayOfParentsDocumentSnapshots = await Promise.all(productsT);
          arrayOfParentsDocumentSnapshots = arrayOfParentsDocumentSnapshots.filter((p)=>p.status===true);
          model["products"] = arrayOfParentsDocumentSnapshots
          console.log('aaa')
          resolve();
        });
    })
  
  await Promise.all(requests)


    modelsT = modelsT.filter((m)=>(m.products && m.products.length > 0));
    console.log(modelsT);

    let i =0;
    let newModelsT = [];
    while(modelsT.length > 0)
    {
      let curr = modelsT[i]
      let allSingle = modelsT.filter((m)=>(m.name === curr.name && m.make === curr.make));
      let model = { name:curr.name, make:curr.make, categories:allSingle}
      newModelsT.push(model);
      modelsT = modelsT.filter((m)=>(m.name !== curr.name || m.make !== curr.make))
    }

    setModels(newModelsT);
    console.log(newModelsT)
  }


  const vehicle = brandDetails[0].cars[0];
  return (
    <>
      <Header
        isVehicle={true}
        make={make}
        models={models}
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />

      <div className="container-0">
        <Hero categories={models} make={make} vehicle={vehicle}/>
        <VehicleElement12 vehicle={vehicle} />
        {/* <VehicleElement1 /> */}
        <Gallery gallery={vehicle.gallery} />
        {/* <VehicleElement2 vehicle={vehicle} /> */}
        <VehicleElement4 models={models} make={make} />
        <VehicleElement5 />
        <HomeElement5 />
      </div>
      <Footer />
    </>
  );
};

export default Vehicles;
