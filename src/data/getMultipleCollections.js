import { where,query,getDocs, collection  } from "firebase/firestore";
import { db } from "../helper/firebase";
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";

async function getMultipleCollections (collectionCategory,collectionSlug)
{

    let q = null
    if(collectionSlug && collectionCategory)
    {
        q = query(collection(db,"collections"),
            where("category", 'in', [collectionCategory.toLowerCase(), collectionCategory.toUpperCase(), capitalizeFirstLetter(collectionCategory)]), 
            where("slug", 'in', [collectionSlug.toLowerCase(), collectionSlug.toUpperCase(), capitalizeFirstLetter(collectionSlug)])
        );

    }

    else if(collectionSlug)
    {
        q = query(collection(db,"collections"),
            where("slug", 'in', [collectionSlug, collectionSlug.toLowerCase(), collectionSlug.toUpperCase(), capitalizeFirstLetter(collectionSlug)]),

        )
    }

    else if(collectionCategory)
    {
        q = query(collection(db,"collections"),
            where("category", 'in', [collectionCategory, collectionCategory.toLowerCase(), collectionCategory.toUpperCase(), capitalizeFirstLetter(collectionCategory)]),
        );
    }

    let collections = [];


    if(q)
    {
        const querySnapshot = await getDocs(q);        
        // await querySnapshot.forEach(async (doc) => {

        //     console.log(doc.ref.id)
        //     let h = query(collection(db,`collections/${doc.ref.id}/list`));
        //     const querySnapshot = await getDocs(h);

        //     console.log('a')
        //     querySnapshot.forEach((dohc) => { collections.push(dohc.data()) })
        // })

        for await(const doc of querySnapshot.docs) {
            let collectionT = {};
            let makeT = [];
            collectionT = {...doc.data()}

            let h = query(collection(db,`collections/${doc.ref.id}/list`));
            const querySnapshot = await getDocs(h);
            querySnapshot.forEach((dohc) => { makeT.push(dohc.data()) })
            collectionT["makes"] = makeT;
            collections.push(collectionT);
        };
        
    }
    

    else
    {

    }

    return collections;
}

export default getMultipleCollections;