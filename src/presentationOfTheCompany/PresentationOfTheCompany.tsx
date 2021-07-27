import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const PresentationOfTheCompany = (props: any) => {



    return (
        <>

            <Row>
                <Col lg={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} sm={{ offset: 1, span: 10 }} > 
                    <div className="presentationOfTheCompany-body">
                        <div className="presentationOfTheCompany-CompanyInformation">
                            CompanyInformation CompanyInformation CompanyInformation CompanyInformation CompanyInformation CompanyInformation
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default connect(null, null)(PresentationOfTheCompany);
