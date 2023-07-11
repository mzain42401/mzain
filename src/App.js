import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import AuthContx from "./context";
import { useState } from "react";



function App() {
  
  const get =localStorage.getItem("islogIn")==="1"
 const [auth,setAuth]=useState(get)
 const onlogIn=()=>{
  localStorage.setItem("islogIn","1")
  setAuth(true)
 }
 const onlogOut=()=>{
  localStorage.setItem("islogIn","0")

  setAuth(false)
 }
  return (
    <>
    <AuthContx.Provider value={{
      islogIn:auth,onlogIn,onlogOut
      
    }}>
    <BrowserRouter> 
    <Main />
    </BrowserRouter>
    </AuthContx.Provider>

    </>
  );
}

export default App;
