import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap"
import UserCreateForm from "./createCategory"
// import Financedata from './financeForm'
// import { modalForm } from "./ModalSourceCode"

class ModalForm extends React.Component {
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
        
            <Button.Ripple
                  color="success"
                  outline
                  onClick={this.toggleModal}
                >
                 New Category
            </Button.Ripple>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                    Manage Category
                </ModalHeader>
                <ModalBody>
                   <UserCreateForm />
                </ModalBody>
              
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
