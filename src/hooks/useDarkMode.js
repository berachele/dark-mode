import React, {useEffect} from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    //bringing in my useLocalStorage
    const [myValue, setMyValue] = useLocalStorage(false)

    //setup useEffect to add dark-mode class to body element
    useEffect(() => {
        if(myValue === true){
            document.body.classList.add("dark-mode")
        }else{
            document.body.classList.remove("dark-mode")
        }
        console.log("Is DarkMode on??", myValue)

    }, [myValue]) //add something here
    return [myValue, setMyValue]
}

export default useDarkMode