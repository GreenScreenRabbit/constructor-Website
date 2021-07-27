import { Component, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { connect, RootStateOrAny } from 'react-redux';
import { actions } from '../actions and const/actions';

// numbers its years
const symbolsForMortgegeLength: number[] = [10, 15, 20, 25, 30];

const CalculatorApartment = (props: any) => {

    const apartment = props.apartments[props.indexOfSelectedApartment];

    const calculationMounthlyPayment = () => {
        if (apartment) {
            const takePrice = (apartment: any) => {
                return apartment.price;
            };

            const everyMounth = props.annualInterestRate / 12 / 100;
            const everyMounthPlusOne = 1 + everyMounth;
            const mortgegeLengthInMouth = props.mortgegeLength * 12;
            const generalRate = Math.pow(everyMounthPlusOne, mortgegeLengthInMouth);
            const mounthlyPayment = (takePrice(apartment) * everyMounth * generalRate) / (generalRate - 1);
            const mounthlyPaymentFixed = mounthlyPayment.toFixed(0);
            props.setMonthlyPayment(mounthlyPaymentFixed);
        }
    };
    calculationMounthlyPayment();

    const renderComponents = () => {
        return (
            <div className="calculatorApartment-body">
                <div className="calculatorApartment-container-monthlyAndMortgage">
                    <div className="calculatorApartment-apartmentPrice">{apartment.price}</div>

                    <div className="calculatorApartment-mortgagePercentage">
                        Mortgage percentage
                        <div className="calculatorApartment-mortgagePercentage-procent">{props.annualInterestRate}%</div>
                    </div>
                </div>

                <div className="calculatorApartment-monthlyPayment">{props.monthlyPayment}$ per month</div>

                <div className="calculatorApartment-selectDistantOfMortgage ">
                    <div className="calculatorApartment-selectDistantOfMortgage-output">select length (in years): {props.mortgegeLength}</div>


                    <Row className="calculatorApartment-selectDistantOfMortgage-container">
                        {symbolsForMortgegeLength.map((symbol: number) => (
                            <Col>
                                <div className="calculatorApartment-selectDistantOfMortgage-symbols" onClick={() => props.setMortgegeLength(symbol)}>
                                    {symbol}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

        )
    }

    return (
        <Row>
            <Col lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>

                {apartment ? renderComponents() : <div className="calculatorApartment-body">Error</div>}

            </Col>
        </Row>
    );
};

let mapStateToProps = (state: RootStateOrAny) => ({
    apartments: state.apartmentsArray.apartments,
    indexOfSelectedApartment: state.apartmentsArray.indexOfSelectedApartment,
    symbolsForCaclСounting: state.calculatorApartment.symbolsForCaclСounting,
    mortgegeLength: state.calculatorApartment.mortgegeLength,
    annualInterestRate: state.calculatorApartment.annualInterestRate,
    monthlyPayment: state.calculatorApartment.monthlyPayment,
});

export default connect(mapStateToProps, {
    setSymbolForCacl: actions.setSymbolForCacl,
    setMortgegeLength: actions.setMortgegeLength,
    setMonthlyPayment: actions.setMonthlyPayment,
})(CalculatorApartment);
