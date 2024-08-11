
import { Dispatch } from "react";
import { Theme } from "../models/enums";
import { ThemeVariant } from "../models/types";
import { setTheme } from "../store/slices/user-slice";

export const updateTheme = (dispatch : Dispatch<any>) => {
    const localTheme = localStorage.getItem("theme") as ThemeVariant | null;

    if(localTheme){
      dispatch(setTheme(localTheme));  

      if(localTheme === Theme.DARK){
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");  //for customizing the scrollbar based on theme
      }
      
      else{
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");   //for customizing the scrollbar based on theme
      }

    }
  }
