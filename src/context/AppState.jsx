import { useRef } from "react";
import { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  const courseRef = useRef()

  const courseIntoView = () => {
    courseRef.current.scrollIntoView()    
  }
  return (
    <AppContext.Provider value={{showMenu, setShowMenu, courseRef, courseIntoView}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppState