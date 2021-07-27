import { connect, InferableComponentEnhancerWithProps } from 'react-redux';
import { actions, ActionsTypes } from './actions'
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk';
import { mainSliderStateType } from '../rootReducer';
import { Action } from 'redux'
import { SET_POSITION_MAIN_SLIDER } from './const';
import React, { Component }  from 'react';



type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _>
  ? Props
  : never
  ;


type Promese = {
  post: any
}


function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export const asyncActions = {

  mainPageCycleChangePositionMainSlider(position: number): (dispatch: any) => any {
    return async function (dispatch: any): Promise<any> {
      dispatch(actions.setMainSliderPosition( position ))
    }
  },
      
  changePositionPictureOfRoom(position:number): (dispatch:any) => any {
    return async function(dispatch:any): Promise<any>{
      dispatch(actions.setPositionPictureOfRoom(position))
    }
  }
}

    
    
    
    




