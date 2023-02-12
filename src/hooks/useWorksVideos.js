import { useState, useEffect, useCallback } from 'react';
import { projectFirestore } from '../firebase/config';
import { getDocs, collection } from "firebase/firestore";


export const useWorksVideos = (category) => {
    const [videos, setVideos] = useState([]);

    const getVideosByCategory = useCallback(async () => {
        let data = [];
        const querySnapshot = await getDocs(collection(projectFirestore, 'videos'));
        querySnapshot.forEach((doc) => {
            const response = doc.data();
            const isTheDirector = response.category === category;
            console.log("isTheDirector: ", isTheDirector);
            if (isTheDirector) {
                data.push(doc.data());
            }
        });
        console.log("Data: ", data);
        setVideos(data);
    }, [category]);

    useEffect(() => {
        if (category) {
            getVideosByCategory();
        }
    }, [category, getVideosByCategory])

    return { videos };
}
