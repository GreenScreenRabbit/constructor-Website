import {
    MAIN_SLIDER_POSITION,
    MAIN_SLIDER_SCREENS,
    SET_APARTMENTS_FROM_SERVER,
    SET_APARTMENT_TO_STATE,
    SET_CART_COMPANY_EMPLOYEES_POSITION,
    SET_INDEX_OF_SELECTED_APARTMENT,
    SET_INDEX_OF_SELECTED_ROOM,
    SET_INFORMATION_EMPLOYEES,
    SET_INTERVAL_FOR_PICTURE,
    SET_INTERVAL_ID_FOR_PICTURE,
    SET_INTERVAL_ID_PICTURE_HOUSE_ITSELF,
    SET_MONTHLY_PAYMENT,
    SET_MORTGEGE_LENGTH,
    SET_PICTURES_OF_COMPANY_EMPLOYEES,
    SET_POSITION_MAIN_SLIDER,
    SET_POSITION_OF_ALL_COMPONENTS,
    SET_POSITION_OF_PICTURE,
    SET_POSITION_PICTURE_OF_ROOM,
    SET_POSITION_PUCTURE_HOUSE_ITSELF,
    SET_SELECTED_ROOM_ON_FOCUS,
    SET_SHOWCASE_BOOLEAN_ANIMATION,
    SET_SHOW_CASE_FROM_SETVER,
    SET_SYMBOL_FOR_CACL,
} from './const';
import React, { Component } from 'react';

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

type GetActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

// type GetActionsTypes<T> = ReturnType<PropertiesType<T>>

export const actions = {
    setMainSliderPosition: (position: number) => ({ type: MAIN_SLIDER_POSITION, position } as const),
    setMainSliderScreens: (screen: string) => ({ type: MAIN_SLIDER_SCREENS, screen } as const),
    setShowCaseFromServer: (response: object) => ({ type: SET_SHOW_CASE_FROM_SETVER, response } as const),
    setShowCaseOnFocus: (payload: boolean) => ({ type: SET_SELECTED_ROOM_ON_FOCUS, payload } as const),
    setIndexOfSelectedRoom: (index: number) => ({ type: SET_INDEX_OF_SELECTED_ROOM, index } as const),
    setSymbolForCacl: (symbol: any) => ({ type: SET_SYMBOL_FOR_CACL, symbol } as const),
    setMortgegeLength: (yearsOfMortgege: number) => ({ type: SET_MORTGEGE_LENGTH, yearsOfMortgege } as const),
    setIndexOfSelectedApartment: (selectedApartment: number) => ({ type: SET_INDEX_OF_SELECTED_APARTMENT, selectedApartment } as const),
    setApartmentsFromState: (response: any) => ({ type: SET_APARTMENTS_FROM_SERVER, response } as const),
    setCartCompanyEmployeesPosition: (payload: number) => ({ type: SET_CART_COMPANY_EMPLOYEES_POSITION, payload } as const),
    setPicturesCompanyEmployees: (pictures: any) => ({ type: SET_PICTURES_OF_COMPANY_EMPLOYEES, pictures } as const),
    setInformationEmployees: (informationEmployees: any) => ({ type: SET_INFORMATION_EMPLOYEES, informationEmployees } as const),
    setPositionPictureOfRoom: (position: number) => ({ type: SET_POSITION_PICTURE_OF_ROOM, position } as const),
    setIntervalForPicture: (payload: boolean) => ({ type: SET_INTERVAL_FOR_PICTURE, payload } as const),
    setPositionOfPicture: (position: number) => ({ type: SET_POSITION_OF_PICTURE, position } as const),
    setIntervalIdForPicture: (intervalId: number) => ({ type: SET_INTERVAL_ID_FOR_PICTURE, intervalId } as const),
    setMonthlyPayment: (payload: number) => ({ type: SET_MONTHLY_PAYMENT, payload } as const),
    setPositionPictureHouseItself: (position: number) => ({type:SET_POSITION_PUCTURE_HOUSE_ITSELF, position} as const),
    setIntervalIdPictureHouseItself: (intId:number) => ({type:SET_INTERVAL_ID_PICTURE_HOUSE_ITSELF, intId} as const),
    setPositionOfAllComponents: (position:number) => ({type:SET_POSITION_OF_ALL_COMPONENTS, position} as const),

};

export type ActionsTypes = GetActionsTypes<typeof actions>;
