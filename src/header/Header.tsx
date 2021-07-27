import React, { Component, useState } from 'react';
import { Button, Col, Collapse, CollapseProps, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { connect, RootStateOrAny } from 'react-redux';
import ConstructorLogo from '../../src/constructorLogo.png';






const Header = (props: any) => {


    return (
        <>

            <Navbar expand="lg" className={'header-body'}>





                <Navbar.Brand href="#home">
                    <img onClick={() => window.scrollTo(0, 0)} 
                    src={ConstructorLogo} className={'header-constructorLogo'} />
                </Navbar.Brand>










                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className={'header-item'} onClick={() => window.scrollTo(0, props.positionAboutAllComponents[2] - 75)} >About our company</div>
                        <div className={'header-item'} onClick={() => window.scrollTo(0, props.positionAboutAllComponents[3] - 75)} >Screens about apartment</div>
                        <div className={'header-item'} onClick={() => window.scrollTo(0, props.positionAboutAllComponents[4] - 75)} >Information abaut apartment</div>
                        <div className={'header-item'} onClick={() => window.scrollTo(0, props.positionAboutAllComponents[5] - 75)}>Whats outside</div>
                        <div className={'header-item'} onClick={() => window.scrollTo(0, props.positionAboutAllComponents[6] - 75)}>Our professional</div>
                        <div className={'header-item'} onClick={() => window.scrollTo(0, props.positionAboutAllComponents[7] - 100)}>Calculator</div>
                        <div className={'header-item'} onClick={() => window.scrollTo(0, props.positionAboutAllComponents[8] - 75)}>Contact</div>
                    </Nav>
                </Navbar.Collapse>
                <div className={'header-item-section2'}>Our number: </div>
                <div className={'header-number'}>+(1)-228-1337-135</div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />






            </Navbar>






        </>


    );

}






let mapStateToProps = (state: RootStateOrAny) => ({

    positionAboutAllComponents: state.generalInformationAboutTheSite.positionAboutAllComponents

})






export default connect(mapStateToProps, null)(Header);
