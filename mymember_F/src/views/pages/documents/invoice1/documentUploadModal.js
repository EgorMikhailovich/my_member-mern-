import React from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,Button
} from "reactstrap"
import NewCategory from "./documentUploadForm"
import {Upload} from "react-feather"


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
                  style={{padding:"1rem",padding:"0.6rem 1rem", marginLeft:"10px"}}
                  onClick={this.toggleModal} 
                >
                  
                Upload  
            </Button.Ripple>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                  Upload Documents Management
                </ModalHeader>
                <ModalBody>
                   <NewCategory 
                   toggle={this.toggleModal} 
                   />
                </ModalBody>
               
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
// const mapStateToProps = (state) => {
//   return {
//     documentFolderList: state.document
//   }
// }
// export default connect(mapStateToProps, { Get_DocFolder_LIST })(ModalForm);

