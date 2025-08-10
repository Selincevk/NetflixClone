
import ActionTypes from "../actionTypes";


const initialState = {
    isLoading: true,
  error: null,
  list: [],
}


const listReducer = (state= initialState , {type,payload}) => {
    switch (type) {
// YÜKLENME 
case ActionTypes.LIST_LOADING :
return {...state, isLoading: true}

// HATA
case ActionTypes.LIST_ERROR :
return {...state, isLoading: false, error:payload}

// VERİ GELME BAŞARILI
case ActionTypes.LIST_SUCCESS :
return { ...state, isLoading: false, error: null, list: payload };

// LİSTEYE EKLEME
case ActionTypes.ADD_TO_LIST :
    const updatedList = state.list.concat(payload);
    return { ...state, list: updatedList };

// LİSTEDEN KALDIRMA
case ActionTypes.REMOVE_FROM_LIST :
    const filtredList = state.list.filter((i) => i.id != payload.id);
    return { ...state, list: filtredList };
// VARSAYILAN
default : 
return state
    }
    }


export default listReducer;