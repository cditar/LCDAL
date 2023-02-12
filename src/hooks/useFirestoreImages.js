import { useState, useEffect, useCallback } from 'react';
import { projectFirestore } from '../firebase/config';
import { getDocs, collection } from "firebase/firestore";


export const useFirestoreImages = (name) => {
    const [images, setImages] = useState([]);

    const getImages = useCallback(async () => {
        let data = [];
        const querySnapshot = await getDocs(collection(projectFirestore, name));
        querySnapshot.forEach((doc) => {
            data.push(doc.data().url);
        });
        setImages(data);
    }, [name]);

    useEffect(() => {
        if(name){
            getImages();
        }
    }, [name, getImages])

    return { images };
}
