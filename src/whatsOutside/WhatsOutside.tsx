import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { connect, RootStateOrAny } from 'react-redux';

import arrowButtonJpg from './Arrow-button.jpg'

const WhatsOutside = (props: any) => {



    const apartment = props.apartments[props.indexOfSelectedApartment];

    const [positionOfImg, setPositionOfImg] = useState(0);
    const [recursiveTimeoutId, setRecursiveTimeoutId] = useState<any>();
    const [recursiveCheackTimerId, setRecursiveCheackTimerId] = useState<any>();
    

    let newPosition = positionOfImg;

    let isTimerWork = true
    let isCheackTimerWork = false
 


    useEffect(() => {
        apartment ? timer(apartment) : cheackTimer();
    }, [apartment]);








    function timer(apartment: any) {


        let timerId = setTimeout(function run() {

            setRecursiveTimeoutId(timerId);

            if (isTimerWork == true) {


                ++newPosition;


                if (apartment.whatsOutside.length - 1 < newPosition) {
                    newPosition = 0;
                    setPositionOfImg(() => 0);
                } else {
                    setPositionOfImg(() => newPosition);
                }
                timerId = setTimeout(run, 5000);

            } else {
                clearTimeout(recursiveTimeoutId)
                clearTimeout(timerId)
            }
        }, 5000);



        setRecursiveTimeoutId(timerId)

    }


    function cheackTimer() {


        isCheackTimerWork = true

        let timerIdCheck = setTimeout(function run() {
            setRecursiveCheackTimerId(timerIdCheck);


            if (isCheackTimerWork != true) {


                clearTimeout(timerIdCheck);
                clearTimeout(recursiveCheackTimerId);
            } else {
                timerIdCheck = setTimeout(cheackTimer, 5000);
            }
        }, 5000);
        setRecursiveCheackTimerId(timerIdCheck);
    }




    const changePositionImgOnClick = (isAddOne: boolean) => {


        isTimerWork = false

        const stopRecursiveTimeout = () => {
            clearTimeout(recursiveTimeoutId)

        };
        stopRecursiveTimeout();



        const imgsLength = apartment.whatsOutside.length



        if (isAddOne == true) {

            if (positionOfImg >= imgsLength - 1) {
                setPositionOfImg(0)
            } else {
                setPositionOfImg(positionOfImg + 1)
            }


        } else {


            if (positionOfImg - 1 < 0) {
                setPositionOfImg(imgsLength - 1)
            } else {
                setPositionOfImg(positionOfImg - 1)
            }
        }


    };



    const renderImg = () => {
        const imgs = apartment.whatsOutside;
        let picUrl = imgs[positionOfImg].url;

        return (
            <>
                <img className="whatsOutside-image" src={picUrl} />
            </>
        );
    };

    return (
        <>
            <Row>
                <Col lg={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} sm={{ offset: 1, span: 10 }} >
                    <div className="whatsOutside-body">
                        <div className="whatsOutside-showcase">
                            <div className="whatsOutside-swipeLeft" onClick={() => changePositionImgOnClick(false)}>
                                <img src={arrowButtonJpg} className="whatsOutside-arrowButtonJpg-left" />

                            </div>
                            {apartment ? renderImg() : <div>bad</div>}
                            <div className="whatsOutside-swipeRight" onClick={() => changePositionImgOnClick(true)}>
                                <img src={arrowButtonJpg} className="whatsOutside-arrowButtonJpg-right" />

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = (state: RootStateOrAny) => ({
    apartments: state.apartmentsArray.apartments,
    indexOfSelectedApartment: state.apartmentsArray.indexOfSelectedApartment,
});

export default connect(mapStateToProps, null)(WhatsOutside);
