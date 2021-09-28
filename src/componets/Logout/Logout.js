import React, {useContext, useEffect} from 'react'
import AuthContext from "../../context/auth/authContext";

function Logout() {
  const {logout} = useContext(AuthContext)

  useEffect(() => {
    logout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(<></>)
}

export default Logout