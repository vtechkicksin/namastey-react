import { useState,useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState([]);
    useEffect(() => {
        fetchMenu();
      }, []);
      const fetchMenu = async () => {
        const response = await fetch(
          MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await response.json();
        setResInfo(json);
      };
    return resInfo;
}

export default useRestaurantMenu;