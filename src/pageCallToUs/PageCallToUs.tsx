import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { isElementAccessExpression } from 'typescript';

const PageCallToUs = () => {



    const emailRef: any = useRef<HTMLHeadingElement>(null);;

    const [IsEmailCorrect, setIsEmailCorrect] = useState<boolean>(true)
    const [email, setEmail] = useState("")
    const [emailPlaceholder, setEmailPlaceholder] = useState("enter your Email")


    const acceptEmail = () => {

        const regExpForEmail = "[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+";


        if (email.match(regExpForEmail) != null) {
            setIsEmailCorrect(true)
            alert("we will connect with you")

            
        } else {
            setIsEmailCorrect(false)
            setEmailPlaceholder("Email entered incorrectly")
        }



    }

    const changeEmail = (e: any) => {
        setEmail(e.target.value);
    }


    const emailInputStyle = () => {
        if (IsEmailCorrect == true)
            return ("PageCallToUs-OurEmail-container-input")
        else {
            return ("PageCallToUs-OurEmail-container-input PageCallToUs-OurEmail-container-input-placeholder-wrongEmail")
        }

    }



    return (
        <>
            <Row>
                <Col lg={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} sm={{ offset: 1, span: 10 }} >
                    <div className={'PageCallToUs-body'}>
                        <div className="PageCallToUs-content">
                            {/* <div className={'tbl'}> */}
                                <Row >
                                    <Col lg={{ offset: 2, span: 3 }} md={{ offset: 2, span: 3 }} sm={{ offset: 2, span: 3 }} xs={{ offset: 2, span: 3 }} className={'nonPading'}>
                                        <div className="PageCallToUs-inscriptionOurNumber-container" >
                                            <div className="PageCallToUs-inscriptionOurNumber-text">Our number: </div>
                                        </div>
                                    </Col>
                                    <Col lg={{ offset: 0, span: 5 }} md={{ offset: 0, span: 5 }} sm={{ offset: 0, span: 5 }} xs={{ offset: 2, span: 3 }} className={'nonPading'}>
                                        <div className="PageCallToUs-number-text">+(1)-228-1337-135</div>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={'nonPading-pageCallToUs-OurEmail'}>
                                        <div className={'PageCallToUs-OurEmail-container'}>
                                            <div className="PageCallToUs-OurEmail-containerInput">
                                                {IsEmailCorrect ? <div></div> : <div className={"PageCallToUs-OurEmail-IncorrectlyEmail"} >Incorrectly Email</div>}
                                                <input className={emailInputStyle()} type="text" placeholder={emailPlaceholder} ref={emailRef}
                                                    value={email} onChange={changeEmail} />
                                                <div className={'PageCallToUs-OurEmail-container-button'} onClick={() => acceptEmail()}>SEND</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            {/* </div> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default connect(null, null)(PageCallToUs);
