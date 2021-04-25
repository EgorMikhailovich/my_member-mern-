import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Row,
  CustomInput
} from "reactstrap"
import { Eye, Code, DollarSign,Plus } from "react-feather"
import "../../../assets/scss/pages/users.scss"
class CreateNewLocation extends React.Component {
  state = {
    activeTab: "1",
    modal: false
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>
             <Button 
                color="primary"
                //  className="btn-lg fides4 btn waves-effect waves-light"
                 onClick={this.toggleModal}
                 >
                  <Plus size={20} />
                  <span>  Location </span>
            </Button>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                      My Location
                </ModalHeader>
                <ModalBody>
                   <Row>
                      <Col sm="6" className="dv_1">
                          <h3>My Location</h3>
                      </Col>
                      <Col sm="6" className="dv_2">
                         <Button className="dv_button">Change Location</Button>
                      </Col>
                      <Col sm="12"> 
                         <h5>Harlem [93]</h5>
                      </Col>
                      <Col sm="12">
                         <form>
                           <Row>
                              <Col sm="3">
                                 <label>Location:</label>
                              </Col>
                              <Col sm="9">
                                  <CustomInput 
                                        type="select"
                                        Placeholder="Location"
                                      >
                                      <option>Location</option>
                                      <option>Harlem [93]</option>
                                  </CustomInput>
                              </Col>
                              <Col sm="12">
                              <Button className="dv_button">Submit</Button>
                              </Col>
                           </Row>
                         </form>
                      </Col>
                   </Row>
                </ModalBody>
              
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default CreateNewLocation
