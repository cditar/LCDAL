/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { projectFirestore } from '../firebase/config';

export const FirebaseContext = React.createContext({
    stills: [],
    videos: [],
    changeName: () => { },
    getVideosByCategory: () => { },
    getVideosByDirector: () => { },
    getImagesByName: () => { },
});

export default function FirebaseContextProvider({ children }) {
    const [stills, setStills] = useState([]);
    const [videos, setVideos] = useState([]);

    const getStills = useCallback(async () => {
        let data = [];
        const querySnapshot = await getDocs(collection(projectFirestore, 'stills'));
        querySnapshot.forEach((doc) => {
            data.push(doc.data().url);
        });
        setStills(data);
    }, []);

    const getVideos = useCallback(async () => {
        let data = [];
        const querySnapshot = await getDocs(collection(projectFirestore, 'videos'));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        setVideos(data);
    }, []);

    useEffect(() => {
        if (!stills.length && !videos.length) {
            getStills();
            getVideos();
        }
    }, [videos, stills, getStills, getVideos]);


    const getVideosByCategory = (category) => {
        const filteredVideos = videos.filter((item) => item.category === category);
        return filteredVideos;
    };

    const getVideosByDirector = (director) => {
        console.log("director: ", director);
        const data = [];
        // eslint-disable-next-line array-callback-return
        videos.filter((video) => {
            const isTheDirector = video.director.filter((item) => {
                return item === director
            });
            if (isTheDirector.length) {
                data.push(video);
            }
            console.log("DATA: ", data);
        });
        return data;
    };

    const getImagesByName = async(name) => {
        let data = [];
        const querySnapshot = await getDocs(collection(projectFirestore, name));
        querySnapshot.forEach((doc) => {
            data.push(doc.data().url);
        });
        return data;
    };

    const contextValue = {
        videos,
        stills,
        getVideosByCategory: useCallback((category) => getVideosByCategory(category), [getVideosByCategory]),
        getVideosByDirector: useCallback((director) => getVideosByDirector(director), [getVideosByDirector]),
        getImagesByName: useCallback((name) => getImagesByName(name), []),
    };

    return (
        <FirebaseContext.Provider value={contextValue}>
            {children}
        </FirebaseContext.Provider>
    )
}