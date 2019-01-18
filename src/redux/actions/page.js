import {
    SET_MENU_SELECTED
   } from '../constants/page'
   
   export function setMenuSelected(data) {
     return {
       type: SET_MENU_SELECTED,
       payload: data,
     }
   }