import { useState, useEffect, useCallback } from 'react';
import { projectFirestore } from '../firebase/config';
import { getDocs, collection } from "firebase/firestore";


export const useFirestoreVideos = (name) => {
    const [videos, setVideos] = useState([]);
    const [stills, setStills] = useState([]);

    const getStills = useCallback(async () => {
        let data = [];
        const querySnapshot = await getDocs(collection(projectFirestore, 'stills'));
        querySnapshot.forEach((doc) => {
            data.push(doc.data().url);
        });
        setStills(data);
    }, []);

    const getVideosByDirector = useCallback(async () => {
        let data = [];
        const querySnapshot = await getDocs(collection(projectFirestore, 'videos'));
        querySnapshot.forEach((doc) => {
            const response = doc.data();
            const isTheDirector = response.director.filter((item) => item === name);
            console.log("isTheDirector: ", isTheDirector);
            if (isTheDirector.length) {
                data.push(doc.data());
            }
        });
        setVideos(data);
    }, [name]);

    useEffect(() => {
        getStills();
        if (name) {
            getVideosByDirector();
        }
    }, [getStills, getVideosByDirector, name])

    return { videos, stills };
}
