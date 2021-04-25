import React from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from "reactstrap"
import UserCreateForm from "./libraryCategoryForm"

class SelectFolderToSave extends React.Component {
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
    const {defaultTemplateData} = this.props
    return (
      <React.Fragment>
          <Button.Ripple color="primary" onClick={this.toggleModal}>
             {!this.props.editExisting ? 'Save':'Update'}
            </Button.Ripple>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                  Select Folder 
                </ModalHeader>
                <ModalBody>
                   <UserCreateForm
                   defaultTemplateData={defaultTemplateData} 
                   editExisting={this.props.editExisting}
                   showTemplate={this.props.showTemplate}
                   dataToSave={this.props.data}
                   template={this.props.template}
                   changeHandler={this.changeHandler}
                   folder={this.props.folder}
                   isSaveCompose={this.props.isSaveCompose} 
                   handleClose={this.toggleModal} />
                </ModalBody>
              
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default SelectFolderToSave
