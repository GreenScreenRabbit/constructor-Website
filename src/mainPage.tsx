import React, { Component, useRef } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import ApartmentShowcaseMain from './apartmentShowcase/apartmentShowcaseMain';
import CalculatorApartment from './calculatorApartment/CalculatorApartment';
import HomeOwnerInformation from './apartmentInformation/ApartmentInformation';
import MainSlider from './mainSlider/mainSlider';
import PresentationOfTheCompany from './presentationOfTheCompany/PresentationOfTheCompany';
import WhatsOutside from './whatsOutside/WhatsOutside';
import CartCompanyEmployees from './cartCompanyEmployees/CartCompanyEmployees';
import Footer from './footer/Footer';
import Header from './header/Header';
import PageCallToUs from './pageCallToUs/PageCallToUs';
import { actions, ActionsTypes } from './actions and const/actions';



class MainPage extends Component<any, any, any> {
    refComponents: React.RefObject<any>;


    constructor(props: any) {
        super(props);
        this.refComponents = React.createRef();
    }










    componentDidMount() {

        console.log(this.refComponents)





        const takePositionElements = () => {

            let arrayWithRef: any = [];

            let allElementsForRender: any = []

            arrayWithRef.push(this.refComponents.current.children)

            arrayWithRef.map((childrens: any) => allElementsForRender.push(Array.prototype.slice.call(childrens)))





            allElementsForRender.map((childrensArray: any) => childrensArray.map((childrens: any) => {

                let el = childrens.getBoundingClientRect()

                this.props.setPositionOfAllComponents(el.top + window.scrollY)

                console.log(el.y)
            }));



        }


        takePositionElements()



    }



    render() {


        const componentsArray: any[] = [

            <>


                    <Header />
                    <MainSlider />
                    <PresentationOfTheCompany />
                    <ApartmentShowcaseMain />
                    <HomeOwnerInformation />
                    <WhatsOutside />
                    <CartCompanyEmployees />
                    <CalculatorApartment />
                    <PageCallToUs />
                    <Footer />

            </>

        ]








        return (
            <>
                <div ref={this.refComponents}>
                    {componentsArray.map((Item: any) => {


                        return Item.props.children.map((Comp: any) => {

                            return Comp
                        })


                    }
                    )}

                </div>
            </>
        );
    }
}



let mapStateToProps = (state: RootStateOrAny) => ({

    positionAboutAllComponents: state.generalInformationAboutTheSite.positionAboutAllComponents

})




export default connect(mapStateToProps, { setPositionOfAllComponents: actions.setPositionOfAllComponents })(MainPage);

