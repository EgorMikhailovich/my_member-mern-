import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import {Edit } from "react-feather"

import NewMembership from "./NewMembershipForm"
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
    const {isEdit,userinfo} = this.props
    return (
      <React.Fragment>
        
           {isEdit ?
            <Edit size="15" color="#fff"  onClick={this.toggleModal}/>:
            <Button.Ripple
                  color="success"
                  onClick={this.toggleModal}
                >
               Add New
            </Button.Ripple>
          }
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered modal-lg"
            >
                <ModalHeader toggle={this.toggleModal}>
                 {isEdit ? 'Edit Membership' : 'Add New Membership'}
                </ModalHeader>
                <ModalBody>
                   <NewMembership toggle={this.toggleModal} isEdit={isEdit ? isEdit : false} userinfo={userinfo}/>
                </ModalBody>
              
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
