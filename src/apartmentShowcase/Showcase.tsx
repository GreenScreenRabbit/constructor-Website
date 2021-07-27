import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect, RootStateOrAny } from 'react-redux';
import { actions } from '../actions and const/actions';
import { asyncActions } from '../actions and const/asyncActions';
import { apartmentType } from '../apartmentsType/apartmentsType';

class Showcase extends Component<any> {
    changePicturePosition = (apartmentOfSelectedRoom: apartmentType, indexRoom: number) => {


        
        clearInterval(this.props.intervalIdPictureHouseItself);
        this.props.setPositionPictureOfRoom(0);
        this.props.setPositionOfPicture(0);
        this.props.setIndexOfSelectedRoom(0);

        clearInterval(this.props.intervalIdForPicture);

        this.props.setIndexOfSelectedRoom(indexRoom);

        let lengthOfPictures = apartmentOfSelectedRoom.rooms[indexRoom].pictures.length;

        const int = setInterval(() => {
            this.props.setIntervalIdForPicture(int);
            let newPosition = this.props.positionOfPicture + 1;

            if (lengthOfPictures - 1 < newPosition) this.props.setPositionOfPicture(0);
            else this.props.setPositionOfPicture(newPosition);
        }, 5000);

        this.props.setIntervalIdForPicture(int);
    };

    render() {
        const RenderShowCase = () => {
            const showcaseJSXarr: any = [];

            this.props.apartmentsArray.map((apartment: any, indexApartment: number) => {
                if (indexApartment == this.props.indexOfSelectedApartment) {
                    return apartment.rooms.map((room: any, indexRoom: number) => {
                        let residue = indexRoom % 2;

                        if (residue == 0) {
                            showcaseJSXarr.push(
                                <div className="apartmentShowcase-selectRoom" onMouseEnter={() => this.changePicturePosition(apartment, indexRoom)}>
                                    {room.name}
                                </div>,
                            );
                        } else {
                            showcaseJSXarr.push(
                                <div className="apartmentShowcase-selectRoom-alt" onMouseEnter={() => this.changePicturePosition(apartment, indexRoom)}>
                                    {room.name}
                                </div>,
                            );
                        }
                    });
                }
            });

            return showcaseJSXarr;
        };

        const RenderAll = () => {
            let showcaseArr = RenderShowCase();

            const sortedShowcaseArr: any = [];

            let showcaseLeftArr: any[] = [];
            let showcaseRightArr: any[] = [];

            showcaseArr.map((showCase: any, index: number) => {
                let result = index % 2;
                if (result == 0) {
                    showcaseLeftArr.push(showCase);

                    return (
                        <Col lg={{ span: 2, offset: 0, order: 1 }} className="colWithoutPadding">
                            {showcaseLeftArr}
                        </Col>
                    );
                } else {
                    showcaseRightArr.push(showCase);

                    return (
                        <Col lg={{ span: 2, offset: 0, order: 1 }} className="colWithoutPadding">
                            {showcaseRightArr}
                        </Col>
                    );
                }

            });

            sortedShowcaseArr.push(showcaseLeftArr, showcaseRightArr);

            return (
                <>
                    <Col lg={{ span: 2, offset: 0, order: 3 }} md={{ span: 2, offset: 0, order: 3 }} sm={{ span: 2, offset: 0, order: 3 }} className="colWithoutPadding">
                        <div className="ForRightShowcase">{showcaseRightArr}</div>
                    </Col>
                    <Col lg={{ span: 2, offset: 0, order: 1 }} md={{ span: 2, offset: 0, order: 1 }} sm={{ span: 2, offset: 0, order: 1 }} className="colWithoutPadding">
                        <div className="ForLeftShowcase">{showcaseLeftArr}</div>
                    </Col>
                </>
            );








        };

        return (
            <>

                {RenderAll()}


            </>
        );
    }
}

let mapStateToProps = (state: RootStateOrAny) => ({
    indexOfSelectedRoom: state.showcaseStylesAndIndex.indexOfSelectedRoom,
    indexOfSelectedApartment: state.apartmentsArray.indexOfSelectedApartment,
    isIntervalForPictureWorking: state.showcaseStylesAndIndex.isIntervalForPictureWorking,
    apartmentsArray: state.apartmentsArray.apartments,
    positionOfPicture: state.showcaseStylesAndIndex.positionOfPicture,
    intervalIdForPicture: state.showcaseStylesAndIndex.intervalIdForPicture,
    intervalIdPictureHouseItself: state.showcaseStylesAndIndex.intervalIdPictureHouseItself,
});

export default connect(mapStateToProps, {
    setPositionPictureOfRoom: actions.setPositionPictureOfRoom,
    setApartmentsFromState: actions.setApartmentsFromState,
    setIndexOfSelectedRoom: actions.setIndexOfSelectedRoom,
    setShowCaseOnFocus: actions.setShowCaseOnFocus,
    setIntervalForPicture: actions.setIntervalForPicture,
    setPositionOfPicture: actions.setPositionOfPicture,
    setIntervalIdForPicture: actions.setIntervalIdForPicture,
    changePositionPictureOfRoom: asyncActions.changePositionPictureOfRoom,
})(Showcase);
