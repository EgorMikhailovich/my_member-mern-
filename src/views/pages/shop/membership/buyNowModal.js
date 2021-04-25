import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap"
import BuyNowForm from './buyNowForm'


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
          size="sm"
          onClick={this.toggleModal}
          style={{ padding: "8px 10px" }}
        >
          Buy Now
            </Button.Ripple>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className="modal-dialog-centered modal-lg"
        >
          <ModalHeader toggle={this.toggleModal}>
            Buy Membership
                </ModalHeader>
          <ModalBody>
            <BuyNowForm memberShipDetail={this.props.memberShipDetail} studentList={this.props.studentList} type={this.props.type} info={this.props.info} />
          </ModalBody>

        </Modal>

      </React.Fragment>
    )
  }
}

export default ModalForm
