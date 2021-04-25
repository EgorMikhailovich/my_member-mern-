import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import NewCategory from "./createFolderForm"


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
        
            <Button.Ripple
                  color='relief-secondary' 
                  onClick={this.toggleModal}
                  style={{padding:"0.6rem 1rem", marginLeft:"10px"}}
                >
                Add Folder
            </Button.Ripple>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                Folder Management
                </ModalHeader>
                <ModalBody>
                   <NewCategory toggle={this.toggleModal} />
                </ModalBody>
               
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
