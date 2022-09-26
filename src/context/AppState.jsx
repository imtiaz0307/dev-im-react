import { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <AppContext.Provider value={{showMenu, setShowMenu}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppState