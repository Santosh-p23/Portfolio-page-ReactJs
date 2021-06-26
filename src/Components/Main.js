import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Typewriter from "typewriter-effect"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ModalContent from './modalContent.js';
import Content from './Content';
import './main.css';

class Main extends React.Component {
  state = {
    show: false,
    title: '',
    content: '',
  };
  handleShow = (event) => {
    this.setState({ show: true });
    if (event.target.id === 'about') {
      this.setState({
        title: ModalContent.about.title,
        content: ModalContent.about.content,
      });
    } else if (event.target.id === 'Tech Stack') {
      this.setState({
        title: ModalContent.tech.title,
        content: ModalContent.tech.content,
      });
    } else if (event.target.id === 'Portfolio') {
      this.setState({
        title: ModalContent.portfolio.title,
        content: ModalContent.portfolio.content,
      });
    } else if (event.target.id === 'Contact') {
      this.setState({
        title: ModalContent.contact.title,
        content: ModalContent.contact.content,
      });
    }
    else if (event.target.id === 'Blog') {
      this.setState({
        title: ModalContent.blog.title,
        content: ModalContent.blog.content,
      });
    }
  };
 
		

  handleHide = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div id='main'>
        <Jumbotron fluid>
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName='modal-90w'
            aria-labelledby='example-custom-modal-styling-title'
          >
            <Modal.Header closeButton>
              <Modal.Title id='example-custom-modal-styling-title'>
                {this.state.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Content data={this.state} />
            </Modal.Body>
          </Modal>
        </Jumbotron>
        <Container fluid id='header'>
          <Row>
            <Col>
              <h1>Santosh Pangeni</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
      <Typewriter
  
       onInit={(typewriter)=> {

       typewriter
       .typeString("Web Developer")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Programmer")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Student")
       .deleteAll()
       .pauseFor(10000)
       .typeString("May the force be with you")
       .start();
       }}
       />
  
			  </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='options' onClick={this.handleShow}>
                <p id='about'>About</p>
              </div>
            </Col>
            <Col>
              <div className='options' onClick={this.handleShow}>
                <p id='Portfolio'>Portfolio</p>
              </div>
            </Col>
            <Col>
              <div className='options' onClick={this.handleShow}>
                <p id='Tech Stack'>Tech Stack</p>
              </div>
            </Col>
            <Col>
              <div className='options' onClick={this.handleShow}>
                  <p id ='Blog'>Blog</p>
              </div>
            </Col>
            <Col>
              <div className='options' onClick={this.handleShow}>
                <p id='Contact'>Contact</p>
              </div>
            </Col>
          </Row>

        </Container>
       
      </div>
    );
  }
}
export default Main;
