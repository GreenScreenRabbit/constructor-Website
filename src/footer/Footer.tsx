import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

class Footer extends Component {
    render(){
        return(
            <Row>
                <Col>
                <div className="footer">
                    footer
                </div>
                </Col>
            </Row>
        )
    }
}




export default connect(null,null)(Footer)