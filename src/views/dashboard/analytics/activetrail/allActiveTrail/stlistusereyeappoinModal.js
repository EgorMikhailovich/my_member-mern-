import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code,Plus,User} from "react-feather"
import AppoineyemdlForm from "./appoineyemdlForm.js"


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
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
