import { where,query,getDoc, doc  } from "firebase/firestore";
import { db } from "../helper/firebase";
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";



export const getMakesFromCollection = async (collection) =>
{   
    let allMakes = [];
    collection?.makes?.forEach((t)=>{
      const docRef = doc(db, "makes", t.id);
      allMakes.push(getDoc(docRef).then((docSnap)=>docSnap.data()))
    })

    return await Promise.all(allMakes);
}
