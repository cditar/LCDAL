import { useState, useEffect, useCallback } from 'react';
import { projectFirestore } from '../firebase/config';
import { getDocs, collection } from "firebase/firestore";


export const useFirestoreImages = (name) => {
    const [images, setImages] = useState([]);
    const getImagesByName = useCallback(async () => {
        let data = [];
        const querySnapshot = await getDocs(collection(projectFirestore, name));
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            data.push(doc.data().url);
        });
        setImages(data);
    }, [name]);

    useEffect(() => {
        if(name){
            getImagesByName();
        }
    }, [name, getImagesByName])

    return { images };
}
