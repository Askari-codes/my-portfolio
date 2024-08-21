import { useContext } from "react";
import AppContext from "../Components/context/AppContext";

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
