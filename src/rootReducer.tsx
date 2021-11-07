import { combineReducers, compose } from "redux"
import { actionTypes } from "redux-form"
import { ActionsTypes } from "./actions and const/actions"
import {  FETCH_TRACKS_SUCCESS, MAIN_SLIDER_POSITION, MAIN_SLIDER_SCREENS,  SET_APARTMENTS_FROM_SERVER,  SET_CART_COMPANY_EMPLOYEES_POSITION,  SET_COMPANY_EMPLOYEES,  SET_INDEX_OF_SELECTED_APARTMENT, SET_INDEX_OF_SELECTED_ROOM, SET_INFORMATION_EMPLOYEES, SET_INTERVAL_FOR_PICTURE, SET_INTERVAL_ID_FOR_PICTURE, SET_INTERVAL_ID_PICTURE_HOUSE_ITSELF, SET_MONTHLY_PAYMENT, SET_MORTGEGE_LENGTH, SET_PICTURES_OF_COMPANY_EMPLOYEES, SET_POSITION_MAIN_SLIDER, SET_POSITION_OF_ALL_COMPONENTS, SET_POSITION_OF_PICTURE, SET_POSITION_PICTURE_OF_ROOM, SET_POSITION_PUCTURE_HOUSE_ITSELF, SET_SELECTED_ROOM_ON_FOCUS, SET_SHOWCASE_BOOLEAN_ANIMATION, SET_SHOW_CASE_FROM_SETVER, SET_SYMBOL_FOR_CACL } from "./actions and const/const"


export interface mainSliderStateType {
    slider: any[],
    mainSliderPosition: number[],
    numbers: number[],
    mainSliderScreens: string[],

}


let mainSliderState = {
    slider: [],
    mainSliderPosition: [0],
    numbers: [],
    mainSliderScreens: [],
    anyArr: [1],
    anyArr1: []
}



let initialGeneralInformationAboutTheSite = {
    positionAboutAllComponents : []
}




let generalInformationAboutTheSiteReducer = (state = initialGeneralInformationAboutTheSite, action:ActionsTypes) => {
    switch(action.type){

        case SET_POSITION_OF_ALL_COMPONENTS:{
            return{...state,positionAboutAllComponents: [...state.positionAboutAllComponents ,action.position]}
        }


        default:
            return state

    }
}






let mainSliderReducer = (state = mainSliderState ,action:any) => {
    switch(action.type){



        case MAIN_SLIDER_SCREENS:{
            return{...state, mainSliderScreens: [...state.mainSliderScreens, action.screen]}
        }

        case MAIN_SLIDER_POSITION:{
            return{...state, mainSliderPosition: [action.position]}
        }


        case FETCH_TRACKS_SUCCESS: {
            return{...state,arr1: action.payload}
        }

 
        case SET_POSITION_MAIN_SLIDER: {
            return{...state,anyArr1: action.position}
        }


        default:
            return state


    }

}



let initialapartmentShowCase: InitialapartmentShowCaseType = {
    showCaseApartment: []
}

interface InitialapartmentShowCaseType {
    showCaseApartment: any[]
}



let apartmentShowCaseReducer = (state = initialapartmentShowCase, action:ActionsTypes) => {
    
    
    switch(action.type){

        case SET_SHOW_CASE_FROM_SETVER:{
            console.log(action.response)
            return{...state, showCaseApartment: action.response}
        }

        default:
            return state


    }



}


interface initialApartmentShowCaseStylesTypes {
    isSelectedRoomOnFocus:boolean,
    indexOfSelectedRoom: number,

    isAnimating: boolean
}







let initialShowcaseStylesAndIndexReducer ={
    indexOfSelectedApartment: 1,
    indexOfSelectedRoom: null,
    positionPictureOfRoom: null,
    isIntervalForPictureWorking:false,
    positionOfPicture: 0,
    intervalIdForPicture: null,
    positionPictureHouseItself: 0,
}





let showcaseStylesAndIndexReducer = ( state = initialShowcaseStylesAndIndexReducer, action:ActionsTypes ) => {
    switch (action.type){
        case SET_INDEX_OF_SELECTED_ROOM:{
            return{...state, indexOfSelectedRoom: action.index}
        }
        case SET_POSITION_PUCTURE_HOUSE_ITSELF:{
            return{...state, positionPictureHouseItself: action.position}
        }
        case SET_INTERVAL_ID_PICTURE_HOUSE_ITSELF:{
            return{...state, intervalIdPictureHouseItself: action.intId}
        }

        case SET_POSITION_PICTURE_OF_ROOM:{
            return{...state, positionPictureOfRoom: action.position }
        }
        case SET_INTERVAL_FOR_PICTURE:{
            return{...state, isIntervalForPictureWorking: action.payload}
        }
        case SET_POSITION_OF_PICTURE:{
            return{...state,positionOfPicture: action.position}
        }
        case SET_INTERVAL_ID_FOR_PICTURE:{
            return{...state, intervalIdForPicture: action.intervalId}
        }
        
        default:
            return state
    }
}





let initialApartmentsArray = {
    apartments: [],
    indexOfSelectedApartment: 0,
}



let apartmentsReducer = (state = initialApartmentsArray, action:ActionsTypes ) => {
    switch(action.type){

        case SET_APARTMENTS_FROM_SERVER:{
            return{...state, apartments: action.response}
        }
        case SET_INDEX_OF_SELECTED_APARTMENT:{
            return{...state, indexOfSelectedApartment: action.selectedApartment }
        }


        default:
            return state

    }
}


const initialCalculatorApartment = {
    symbolsForCaclСounting: [],
    annualInterestRate: 6,
    mortgegeLength: 30,
    monthlyPayment:null,
}



let calculatorApartmentReducer = ( state = initialCalculatorApartment, action: ActionsTypes) => {
    switch(action.type){
        case SET_SYMBOL_FOR_CACL: {
            return {...state, symbolsForCaclСounting: [...state.symbolsForCaclСounting, action.symbol]}
        }

        case SET_MORTGEGE_LENGTH: {
            return {...state, mortgegeLength : action.yearsOfMortgege}
        }
        case SET_MONTHLY_PAYMENT: {
            return{...state, monthlyPayment: action.payload}
        }


        default:
            return state 


    }
}

interface initialCartCompanyEmployeesType {
    cartCompanyEmployeesPosition: number[],
    companyEmployees: any[],
    info: any[],
}



let initialCartCompanyEmployees:initialCartCompanyEmployeesType = {
    cartCompanyEmployeesPosition: [],
    companyEmployees: [],
    info:[],
}




let  cartCompanyEmployeesReducer = ( state = initialCartCompanyEmployees, action: ActionsTypes) => {
    switch(action.type){
        case SET_CART_COMPANY_EMPLOYEES_POSITION: {
            return {...state, cartCompanyEmployeesPosition:  action.payload }
        }

        case SET_PICTURES_OF_COMPANY_EMPLOYEES: {
            return {...state, companyEmployees:   action.pictures  }
        }

        case SET_INFORMATION_EMPLOYEES: {
            return {...state, info: action.informationEmployees}
        }


        default:
            return state


    }
} 






export const rootReducer = combineReducers ({
    apartmentsArray: apartmentsReducer,
    mainSliderArr : mainSliderReducer,
    apartmentShowCase : apartmentShowCaseReducer,
    calculatorApartment: calculatorApartmentReducer,
    cartCompanyEmployees: cartCompanyEmployeesReducer,
    showcaseStylesAndIndex: showcaseStylesAndIndexReducer,
    generalInformationAboutTheSite: generalInformationAboutTheSiteReducer,

})
