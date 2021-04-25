import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import NewCategory from "./addExpenseForm"


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
                  color="success" 
                  onClick={this.toggleModal}
                  style={{padding:"0.2rem 1rem", marginLeft:"10px"}}
                >
                Add Expense  
            </Button.Ripple>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                Expense Mangement
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
