import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code,Plus,User} from "react-feather"
import TestTabs from "./TestTabs"
// import Financedata from './financeForm'
import AppoineyemdlForm from "./appoineyemdlForm"


class ModalForm extends React.Component {
  state = {
    modal: false
  }

  

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>
                 
                
                <button className="btn_ey"
                    onClick={this.toggleModal}>
                    <Plus 
                      size={14}
                      fontWeight="bold"
                    />
                    Add Appointment
                </button>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered modal-md"
            >
                <ModalHeader toggle={this.toggleModal}>
                
                </ModalHeader>
                <ModalBody>
               
                 <AppoineyemdlForm/>
                </ModalBody>
                {/* <ModalFooter>
                  <Button color="primary" onClick={this.toggleModal}>
                    Next
                  </Button>{" "}
                </ModalFooter> */}
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
