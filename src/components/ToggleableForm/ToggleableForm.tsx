import React, { Component } from "react";
import NoteForm from "../NoteForm/NoteForm";
import TaskForm from "../TaskForm/TaskForm"
import { Button } from "react-bootstrap";

type Props = {
  onFormSubmit: ((data: {}) => void);
  formType: string;
  buttonText: string;
}

type State = {
  toggleForm: boolean;
}

class ToggleableForm extends Component<Props, State> {
  state: State = { toggleForm: false }

  handleOpenForm = (): void => {
    this.setState({ toggleForm: true });
  };

  handleCloseForm = (): void => {
    this.setState({ toggleForm: false });
  };

  handleFormSubmit = (data: {}): void => {
    this.props.onFormSubmit(data);
    this.handleCloseForm();
  };

  renderForm = (formType: string) => {
    switch (formType) {
      case "NoteForm":
        return (
          <NoteForm onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleCloseForm} />
        )

      case "TaskForm":
        return (
          <TaskForm onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleCloseForm} />
        )
    }
  }

  renderButton = (buttonText: string) => {
    return (
      <Button variant="outline-primary"
        onClick={this.handleOpenForm}>
        {buttonText}
      </Button>
    )
  }

  render() {
    const { buttonText, formType } = this.props;
    return (
      this.state.toggleForm ? this.renderForm(formType)
        : this.renderButton(buttonText)
    )
  }
}

export default ToggleableForm;