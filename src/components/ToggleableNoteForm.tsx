import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ExtendedForm from './ExtendedForm';

type Props = {
  onFormSubmit: (note: {}) => void;
}

type State = {
  toggleForm: boolean;
}

class ToggleableNoteForm extends Component<Props, State> {
  state: State = { toggleForm: false }

  closeForm = (): void => {
    this.setState({ toggleForm: false });
  };

  openForm = (): void => {
    this.setState({ toggleForm: true });
  };

  handleCloseForm = (): void => {
    this.closeForm();
  };

  handleOpenForm = (): void => {
    this.openForm();
  };

  handleFormSubmit = (note: {}): void => {
    this.props.onFormSubmit(note);
    this.handleCloseForm();
  };

  render() {
    if (this.state.toggleForm) {
      return (
        <>
          <ExtendedForm
            onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleCloseForm}
          />
        </>
      );
    } else {
      return (
        <>
          <Button onClick={this.handleOpenForm}>Create Note</Button>
        </>
      );
    }
  }
}

export default ToggleableNoteForm;
