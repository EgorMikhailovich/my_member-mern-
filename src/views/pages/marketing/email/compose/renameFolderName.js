import React from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import { Plus,Edit } from "react-feather"
import UserCreateForm from "./composeCategoryForm"

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
        <Edit onClick={this.toggleModal} size="14"/>
       
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={this.toggleModal}>
            {this.props.isEditMainFolder || this.props.isEditSubFolder ? 'Rename Folder' :'Add Folder Name'}
          </ModalHeader>
          <ModalBody>
            <UserCreateForm
            showTemplate={this.props.showTemplate}
            isEditMainFolder={this.props.isEditMainFolder}
            isEditSubFolder={this.props.isEditSubFolder}
            mainFolder={this.props.mainFolder}
            subFolder={this.props.subFolder}
            isSubFolder={this.props.isSubFolder} 
              handleClose={this.toggleModal} />
          </ModalBody>

        </Modal>

      </React.Fragment>
    )
  }
}
export default ModalForm
