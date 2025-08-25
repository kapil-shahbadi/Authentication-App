// import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const RefrshHandler = ({setIsAuthenticated}) => {
//     const location=useLocation();
//     const navigate=useNavigate();
//     useEffect(()=>{
//         if(localStorage.getItem("token"));
//         setIsAuthenticated(true);
//         if(location.pathname=== "/"||
//             location.pathname==="/login" ||
//             location.pathname==="/signup"
//         ){
//             navigate("/home",{replace:false});
//         }
//     },[location,navigate,setIsAuthenticated])
//   return (
//     null
//   )
// }

// export default RefrshHandler



import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RefrshHandler = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);

      // agar already login/signup pe hai to home bhej do
      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
      ) {
        navigate("/home", { replace: true });
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};

export default RefrshHandler;
