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
import { Eye, Code, Plus } from "react-feather"
import UserCreateForm from "./createFolderForm"
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
        
            {/* <Button.Ripple
                  color="success"
                  outline
                  onClick={this.toggleModal}
                >
                 New User
            </Button.Ripple> */}
            <div onClick={this.toggleModal}><Plus size="18"/>Add Folder</div>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                  Add Folder Name
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
