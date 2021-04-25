import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AllMembershipList from "../shop/membership/allMembership"


export class memberShipModal extends Component {
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
            <div>
                <Button.Ripple color="success" onClick={this.toggleModal} >Add New +</Button.Ripple>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleModal}
                    className="modal-dialog-centered modal-lg"
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Add New Membership
                    </ModalHeader>
                    <ModalBody>
                        <AllMembershipList />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default memberShipModal
