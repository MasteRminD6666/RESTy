import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 class Results extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <div className="resultsContainer">
          
              <Modal show={this.props.loading} onHide={this.props.toggleLoading} >
                <Modal.Dialog>
                  <Modal.Body>
                    <Card style={{ width: '25rem'}}>
                      <Card.Img src={'https://bestcityscape.com/wp-content/uploads/2019/03/Santorini-skyline-night-90481.jpg'} />
                      <Card.Body>
                        <Card.Title>thank you for your patience</Card.Title>
                        <Card.Text>please close the modal to see your results</Card.Text>
                      </Card.Body>
                    </Card>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" >
                      close
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal>

        </div>
      );
    }
  }
  
  export default Results;