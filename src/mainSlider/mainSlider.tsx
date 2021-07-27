import React, { Component, MouseEventHandler, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { actions } from "../actions and const/actions"
import { asyncActions } from "../actions and const/asyncActions";
import { mainScreenType } from "./mainSliderTypes";


//images mainSlider
const images = [
    require('../mainSlider/mainSliderScreens/1.jpg'),
    require('../mainSlider/mainSliderScreens/2.jpg'),
    require('../mainSlider/mainSliderScreens/3.jpg'),
];



class MainSlider extends Component<any> {

    componentDidMount() {


        setInterval(() => {
            if (this.props.mainSliderPosition <= this.props.mainSliderScreens.length - 2) {
                this.props.mainPageCycleChangePositionMainSlider(+this.props.mainSliderPosition + 1)
            } else {
                this.props.mainPageCycleChangePositionMainSlider(0)
            }
        }, 5000)

    }

    constructor(props: any) {
        super(props)
        images.map((item: string) => this.props.setMainSliderScreens(item))
    }



    render() {


        return (
            <>

                <Row className="row-main-slider-frame">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="main-slider-frame">
                            {/* <div className="main-slider-img"> */}

                                {this.props.mainSliderScreens.filter((mainScreen: mainScreenType) => mainScreen != null).map((mainScreen: mainScreenType, index: number) => {
                                    if (index == this.props.mainSliderPosition) {


                                        return <img className="main-slider-img"
                                            src={mainScreen.default} />


                                    }
                                }
                                )}




                            {/* </div> */}
                        </div>


                    </Col>
                </Row>


            </>
        )
    }

}


let mapStateToProps = (state: any) => ({
    mainSliderScreens: state.mainSliderArr.mainSliderScreens,
    mainSliderPosition: state.mainSliderArr.mainSliderPosition
})


export default connect(mapStateToProps, {
    setMainSliderPosition: actions.setMainSliderPosition,
    setMainSliderScreens: actions.setMainSliderScreens, mainPageCycleChangePositionMainSlider: asyncActions.mainPageCycleChangePositionMainSlider,



})(MainSlider)

