import React from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import NewCategory from "./studentPrintForm"
import MergeImg from "../../../../assets/img/pages/marge.png"


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
        
            <p className='btn-icon' style={{ textAlign:"center",border:"1px solid rgb(109 107 107 / 27%)",borderRadius:"4px",margin:"10px 0 0 0",cursor:"pointer"}} onClick={this.toggleModal}>
                        <img src={MergeImg} width="14px" />
                        Merge
            </p>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                    Select Student for print Documents
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
