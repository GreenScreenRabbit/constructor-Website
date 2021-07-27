import axios from 'axios';
import React, { Component, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect, RootStateOrAny } from 'react-redux';
import { actions } from '../actions and const/actions';
import Showcase from './Showcase';
import img from '../picturesForApartment1/bathroom_1.jpg';
import { asyncActions } from '../actions and const/asyncActions';
import { apartmentsType, apartmentType, roomType } from '../apartmentsType/apartmentsType';
import { oldPictureType, picturesType, picturesWithIdType, pictureType, pictureWithIdType, } from './apartmentShowcaseMainType';

function importAll(r: any) {
    return r.keys().map(r);
}

const pictures: picturesType = importAll(require.context(`../picturesForApartments/picturesForApartment1`, false, /\.(png|jpe?g|svg)$/));






class ApartmentShowcase extends React.Component<any, any> {
    componentDidMount() {

        axios
            .get('https://my-json-server.typicode.com/GreenScreenRabbit/constructor-comp-server/apartments')
            .then((response) => this.props.setApartmentsFromState(this.takeResponseAboutApartments(response.data, pictures)))
            .then((response) => this.changePictureHouseItself())
    }


    takeResponseAboutApartments = (apartments: apartmentsType, pictures: picturesType) => {



        return apartments.map((apartment: apartmentType, indexApartment: number) => {

            let preparationApartmentToExport = (pictures: picturesType) => {



                let indexApartmentPlusOne: any = indexApartment + 1

                let RegExpForSelectedApartment = new RegExp(indexApartmentPlusOne + `_\\D`)


                const selectPicturesForApartmentRegExp: any = pictures.map((item: any) => item.default.match(RegExpForSelectedApartment)).filter((item: any) => item != null)





                const picturesWithId: picturesWithIdType = [];
                const namesRoomsArr: string[] = [];
                const rooms = apartment.rooms;

                //add all roomNames
                rooms.map((room: roomType) => {
                    namesRoomsArr.push(room.name);
                });





                const pictureHouseItselfRegExp: RegExp = new RegExp(`\d*\D*houseItself`, `gm`);
                const namesRoomsArrWithRegExp: RegExp[] = namesRoomsArr.map((name: string) => new RegExp(`\d*\D*${name}`, `gm`));



                //add images to id
                let id: number = 0;
                selectPicturesForApartmentRegExp.forEach((oldPicture: any) => {
                    ++id;

                    let picture: string = oldPicture.input;

                    let pictureWithId: pictureWithIdType = {
                        picture,
                        id,
                    };
                    picturesWithId.push(pictureWithId);
                });




                const addImagesForHouseItself = () => {
                    picturesWithId.filter((pictureWithId) => {
                        if (pictureWithId.picture.match(pictureHouseItselfRegExp)) {
                            if (!!pictureWithId) {

                                apartment.picturesHouseItself.push(pictureWithId);
                            }
                        }
                    });
                };
                addImagesForHouseItself();

                const addImagesForApartments = (room: roomType, regExpArr: RegExp[]): void => {


                    const regExpSelectedRoom = (uncertainRegExp: RegExp[]): RegExp => {


                        let filtredRegExp: RegExp | undefined = uncertainRegExp.find((regExp: RegExp): RegExp | undefined => {

                            if (!!room.name.match(regExp)) {
                                return regExp;
                            }

                        });




                        let returnRegExp = (filtredRegExp: RegExp | undefined) => {
                            let arr1: RegExp[] = []


                            if (filtredRegExp != undefined) {
                                let RegExpToReturn: RegExp = Object.assign(filtredRegExp)
                                arr1.push(RegExpToReturn)
                                return RegExpToReturn
                            }

                            return arr1[0]
                        }

                        return returnRegExp(filtredRegExp)





                    };

                    //add Images to ArrayImages
                    picturesWithId.map((pictureWithId: pictureWithIdType) => {
                        if (pictureWithId.picture.match(regExpSelectedRoom(regExpArr)) != null) {
                            room.pictures.push(pictureWithId);
                        }
                    });
                };

                //add images to apartment
                rooms.forEach((room: roomType) => {
                    addImagesForApartments(room, namesRoomsArrWithRegExp);
                });
            };

            preparationApartmentToExport(pictures);

            return apartment;

        })



    };
















    isIntWork = true;

    changePictureHouseItself = (): void => {
        const selectedApartment = this.props.apartments[this.props.indexOfSelectedApartment];

        const picturesHouseItselfLength = selectedApartment.picturesHouseItself.length;

        clearInterval(this.props.intervalIdForPicture);
        clearInterval(this.props.intervalIdPictureHouseItself);



        let newPosition: number = this.props.positionPictureHouseItself;





        if (this.props.indexOfSelectedRoom != null) {
            this.props.setPositionPictureHouseItself(0);
        }

        const int = setInterval(() => {


            this.props.setIntervalIdPictureHouseItself(int);
            this.props.setPositionPictureHouseItself(0);
            newPosition++;



            if (picturesHouseItselfLength - 1 < newPosition) {


                newPosition = 0;
                this.props.setPositionPictureHouseItself(0);
            } else {
  

                this.props.setPositionPictureHouseItself(newPosition);
            }

            this.props.setPositionPictureHouseItself(newPosition);
        }

            , 5000);

        this.props.setIntervalIdPictureHouseItself(int);


    };

    leaveFromFrame = () => {


        this.props.setIndexOfSelectedRoom(null);
        this.changePictureHouseItself();
    };

    chengeIndexOfSelectedApartment = (addOne: boolean) => {

        
        if (this.props.indexOfSelectedApartment == 0) {

            this.props.setIndexOfSelectedRoom(null)
            this.props.setIndexOfSelectedApartment(this.props.apartments.length - 1);
        } else if (this.props.indexOfSelectedApartment == this.props.apartments.length - 1) {

            this.props.setIndexOfSelectedRoom(null)
            this.props.setIndexOfSelectedApartment(0);
        } else if (addOne == true) {
            this.props.setPositionOfPicture(0)
            this.props.setIndexOfSelectedRoom(null)
            this.props.setIndexOfSelectedApartment(this.props.indexOfSelectedApartment + 1);
        } else if (addOne == false) {
            this.props.setPositionOfPicture(0)
            this.props.setIndexOfSelectedRoom(null)
            this.props.setIndexOfSelectedApartment(this.props.indexOfSelectedApartment - 1);
        }
    };

    handleUpButton = () => {
        window.scrollTo(0, 1000);
    };

    render() {


        const renderImages = () => {
            return (
                <div className="apartmentShowcase-overview" onMouseLeave={() => this.props.setIntervalForPicture(false)}>
                    {this.props.apartments.map((apartment: apartmentType, index: number) => {
                        if (index == this.props.indexOfSelectedApartment) {


                            if (this.props.indexOfSelectedRoom != null) {
                                return (
                                    <>


                                        <img
                                            src={apartment.rooms[this.props.indexOfSelectedRoom].pictures[this.props.positionOfPicture].picture}
                                            className="apartmentShowcase-overview-image"
                                        />
                                    </>

                                );
                            } else {
                                this.props.setPositionPictureHouseItself(0)
                                return (
                                    <img
                                        src={apartment.picturesHouseItself[this.props.positionPictureHouseItself].picture}
                                        className="apartmentShowcase-overview-image"
                                    />

                                );
                            }
                        }
                    })}
                </div>
            );
        };

        const renderUpbar = () => {
            if (this.props.apartments[this.props.indexOfSelectedApartment] != undefined) {
                return (
                    <>
                        <div className="apartmentShowcase-wallpaper"> 
                            <Row onMouseLeave={() => this.leaveFromFrame()}>
                                <Col lg={{ span: 8, offset: 0, order: 2 }} md={{ span: 8, offset: 0, order: 2 }} sm={{ span: 8, offset: 0, order: 2 }} className="colWithoutPadding">


                                    <div className="apartmentShowcase-frame">


                                        <div className="apartmentShowcase-upBar">
                                            <div className="apartmentShow ase-upBar-apartmentName">
                                                {this.props.apartments[this.props.indexOfSelectedApartment].name}
                                            </div>
                                            <div className="apartmentShowcase-upBar-button-back" onClick={() => this.chengeIndexOfSelectedApartment(false)}>
                                                BACK
                                            </div>
                                            <div className="apartmentShowcase-upBar-button-next" onClick={() => this.chengeIndexOfSelectedApartment(true)}>
                                                NEXT
                                            </div>
                                        </div>
                                        {renderImages()}
                                    </div>
                                </Col>

                                <Showcase />

                            </Row>
                        </div>
                    </>
                );
            }
        };

        return (
            <>

                <Row className={"apartmentShowcase-body"}>
                    <Col lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} >{renderUpbar()}</Col>
                </Row>
            </>
        );
    }
}

let mapStateToProps = (state: RootStateOrAny) => ({
    indexOfSelectedApartment: state.apartmentsArray.indexOfSelectedApartment,
    indexOfSelectedRoom: state.showcaseStylesAndIndex.indexOfSelectedRoom,
    showCaseApartment: state.apartmentShowCase.showCaseApartment,
    apartments: state.apartmentsArray.apartments,
    isIntervalForPictureWorking: state.showcaseStylesAndIndex.isIntervalForPictureWorking,
    positionOfPicture: state.showcaseStylesAndIndex.positionOfPicture,
    intervalIdPictureHouseItself: state.showcaseStylesAndIndex.intervalIdPictureHouseItself,
    positionPictureHouseItself: state.showcaseStylesAndIndex.positionPictureHouseItself,
    intervalIdForPicture: state.showcaseStylesAndIndex.intervalIdForPicture,
});

export default connect(mapStateToProps, {
    setIndexOfSelectedApartment: actions.setIndexOfSelectedApartment,
    setApartmentsFromState: actions.setApartmentsFromState,
    setIndexOfSelectedRoom: actions.setIndexOfSelectedRoom,
    changePositionPictureOfRoom: asyncActions.changePositionPictureOfRoom,
    setIntervalForPicture: actions.setIntervalForPicture,
    setIntervalIdPictureHouseItself: actions.setIntervalIdPictureHouseItself,
    setPositionPictureHouseItself: actions.setPositionPictureHouseItself,
})(ApartmentShowcase);
