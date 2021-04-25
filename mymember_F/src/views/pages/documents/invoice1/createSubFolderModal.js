import React from "react"
import {
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap"
import {Plus} from "react-feather"
import NewCategory from "./createSubFolder"
import { connect } from 'react-redux';
import { Get_DocFolder_LIST } from '../../../../redux/actions/document';

class ModalForm extends React.Component {
  state = {
    modal: false
  }

  componentDidMount() {
    this.props.Get_DocFolder_LIST();

  }


  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>
        
            
            <li 
              style={{ 
                listStyle: "none", paddingBottom: "10px", cursor:"pointer"}} 
                onClick={this.toggleModal} 
                >

                  <Plus size="14" /> New

            </li>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                Sub Folder Management
                </ModalHeader>
                <ModalBody>
                   <NewCategory 
                   toggle={this.toggleModal} 
                   mainFolder={this.props.mainFolder}
                   isSubFolder={this.props.isSubFolder} 
                   />
                </ModalBody>
               
            </Modal>
            
        </React.Fragment>
    )
  }
}
// export default ModalForm
const mapStateToProps = (state) => {
  return {
    documentFolderList: state.documentFolderList
  }
}
export default connect(mapStateToProps, { Get_DocFolder_LIST })(ModalForm);

