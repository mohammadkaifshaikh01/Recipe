import { createContext, useState } from 'react'
export const ContextProvider = createContext();
const ContextApi = ({ children }) => {
   const [isAuth, setIsAuth] = useState(localStorage.getItem("token") ? true : false)
   const [token, setToken] = useState(localStorage.getItem("token"))
   return (
      <ContextProvider value={{ isAuth, setIsAuth }}>
         {children}
      </ContextProvider>
   )
}

export default ContextApi;
