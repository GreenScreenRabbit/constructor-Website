import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect, RootStateOrAny } from 'react-redux';

class ApartmentInformation extends Component<any> {
    render() {
        return (
            <>
                <Row>
                    <Col lg={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} sm={{ offset: 1, span: 10 }} >
                        <div className="apartmentInformation-body">
                            Information abaut apartment:
                            <div className="apartmentInformation-window">
                                {this.props.apartments.map((item: any) => (
                                    <div>{item.homeInformation}</div>
                                ))}
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

const mapStateToProps = (state: RootStateOrAny) => ({
    apartments: state.apartmentsArray.apartments,
});

export default connect(mapStateToProps, null)(ApartmentInformation);
