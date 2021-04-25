import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import NewCategory from "./NewCategoryForm"
import {Edit } from "react-feather"


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
    const {isEdit,userinfo} = this.props
    return (
      <React.Fragment>
        
        {isEdit ?
            <Edit size="15"  onClick={this.toggleModal}/>:
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
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
               
                {isEdit ? 'Edit Expense Category' : 'Add New Expense Category'}
                </ModalHeader>
                <ModalBody>
                   <NewCategory toggle={this.toggleModal} isEdit={isEdit ? isEdit : false} userinfo={userinfo} />
                </ModalBody>
               
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
