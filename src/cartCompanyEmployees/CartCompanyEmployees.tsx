import axios from "axios";
import { Component } from "react";
import { Row, Col } from "react-bootstrap"
import { connect, RootStateOrAny } from "react-redux"
import { actions } from "../actions and const/actions";




function importAll(r: any) {
    return r.keys().map(r);
}

const images = importAll(require.context('../picturesForCompanyEmployees/', false, /\.(png|jpe?g|svg)$/));






let takeResponseAboutInformationEmployees = (informationEmployees: any, images: any) => {

    let addIdForImages = (images: any) => {

        let id = 0
        let imagesWithId: any = [];

        images.map((image: any) => {

            id = 1 + id;

            image = image.default

            let picture = {
                image,
                id
            }
            imagesWithId.push(picture)
        }

        )

        return imagesWithId
    }





    let informationEmployeesWutchImages = informationEmployees.map((info: any) => Object.assign({}, info, addIdForImages(images).find((pictureWithId: any) => {
        if (info.id == pictureWithId.id) { return pictureWithId.image }

    })))

    return informationEmployeesWutchImages




}













class CartCompanyEmployees extends Component<any>{


    async componentDidMount() {
        axios.get('https://my-json-server.typicode.com/GreenScreenRabbit/constructor-comp-server/informationEmployees')
            .then(response => this.props.setPicturesCompanyEmployees(takeResponseAboutInformationEmployees(response.data, images)))
            .then(response => this.props.setCartCompanyEmployeesPosition([0, 1, 2]))
    }





    CompanyEmployeesShowcaseChangePosition = (isAddOne: boolean) => {
        if (isAddOne == true) {

            this.props.setCartCompanyEmployeesPosition(this.props.cartCompanyEmployeesPosition.map((position: number) => {
                if (position == this.props.companyEmployees.length - 1) {
                    return 0
                } else {
                    return position += + 1
                }


            }))

        } else {
            this.props.setCartCompanyEmployeesPosition(this.props.cartCompanyEmployeesPosition.map((position: number) => {
                if (position == 0) {

                    return this.props.companyEmployees.length - 1
                } else {
                    return position += - 1
                }


            }))
        }
    }








    render() {
        return (

            <Row>
                <Col lg={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} sm={{ offset: 1, span: 10 }} >



                    <div className="cartCompanyEmployees-body">

                        <div className="cartCompanyEmployees-positionForCart">

                            <div className="cartCompanyEmployees-containerForButton">
                                <div className="cartCompanyEmployees-buttonNext"
                                    onClick={() => this.CompanyEmployeesShowcaseChangePosition(true)}
                                >buttonNext</div>
                                <div className="cartCompanyEmployees-buttonPrev"
                                    onClick={() => this.CompanyEmployeesShowcaseChangePosition(false)}
                                >buttonPrev</div>
                            </div>






                            <div className="cartCompanyEmployees-contaiterForCart"> 

                                <Row className="red-row">

                                    {this.props.cartCompanyEmployeesPosition.map((position: number) => {

                                        let employees = this.props.companyEmployees[position]

                                        return (

                                            <Col>



                                                <div className="cartCompanyEmployees-showcaseCatr1">


                                                    <div className="cartCompanyEmployees-showcaseCatr-circleForImg">

                                                        <img  className="cartCompanyEmployees-showcaseCatr-img"  src={employees.image} />
                                                    </div>

                                                    <div className="cartCompanyEmployees-showcaseCatr-name">{employees.name}</div>


                                                    <div className="cartCompanyEmployees-showcaseCatr-information">


                                                        {employees.information}



                                                    </div>


                                                </div>
                                            </Col>

                                        )

                                    })}

                                </Row>
                            </div>

                        </div>

                    </div>
                </Col>
            </Row>
        )
    }
}

let mapStateToProps = (state: RootStateOrAny) => ({
    cartCompanyEmployeesPosition: state.cartCompanyEmployees.cartCompanyEmployeesPosition,
    companyEmployees: state.cartCompanyEmployees.companyEmployees
})



export default connect(mapStateToProps, {
    setPicturesCompanyEmployees: actions.setPicturesCompanyEmployees, setCartCompanyEmployeesPosition: actions.setCartCompanyEmployeesPosition,
    setInformationEmployees: actions.setInformationEmployees,


})(CartCompanyEmployees)