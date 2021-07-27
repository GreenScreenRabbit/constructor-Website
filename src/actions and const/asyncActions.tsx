import { connect, InferableComponentEnhancerWithProps } from 'react-redux';
import { actions, ActionsTypes } from './actions'



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

    
    
    
    




