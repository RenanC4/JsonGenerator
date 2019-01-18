import {
    SET_MENU_SELECTED
  } from '../constants/page'
  
  const initialState = {
    menuSelected:1,
    error: null,
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_MENU_SELECTED:
        return {
          ...state,
          menuSelected: action.payload
        }
  
      default:
        return state
    }
  }
  
  export function getSelectedMenu(state){
    return state
  }