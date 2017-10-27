import React from 'react';
import ReactDOM from 'react-dom';

// Import React Modal
import Modal from 'react-modal';
var data = require('../data.json');

export default class ApplicantModal extends React.Component {
  constructor() {
    super();
    this.state = {
      contentLabel: 'Applicant Modal',
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setContentLabel = this.setContentLabel.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  setContentLabel(label) {
    this.setState({contentLabel: label});
  }

  render() {
    console.log('ApplicantModal')
    return(
      <div>
        <Modal
          contentLabel={this.state.contentLabel}
          isOpen={this.state.modalIsOpen}
        >
          <h1>Hello</h1>
          <p>World</p>
          <button onClick={this.closeModal} >
            x
          </button>
        </Modal>
      </div>
    );
  }
}