import React, {useEffect} from "react"
import {useLocalStorage} from "./useLocalStorage"

const useDarkMode = () => {
    //bringing in my useLocalStorage
    const [myValue, setMyValue] = useLocalStorage("")

    //setup useEffect to add dark-mode class to body element
    useEffect(()=>{
        if(useLocalStorage === true){
            body.classList.add("dark-mode")
        }else{
            body.classList.remove("dark-mode")
        }
    })

    return;
}

export default useDarkMode