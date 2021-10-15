import { useContext } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
