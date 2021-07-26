import React, { Component } from "react";
import Input from "../Input/Input"
import { Form, Button } from "react-bootstrap";
import { NoteFormErrorsType } from "../../../types/NoteForm";
import { TaskFormErrorsType } from "../../../types/TaskForm";

type DataType = {
  title: string;
};

type ErrorsType = NoteFormErrorsType | TaskFormErrorsType

type Props = {
  onFormSubmit: (attributes: {}) => void;
  onFormClose: () => void;
}

type State = {
  data: DataType | {};
  errors: ErrorsType;
}

class CommonForm extends Component<Props, State> {
  [x: string]: any;

  state: State = {
    data: {},
    errors: {},
  };

  onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const data = { ...this.state.data }
    let name = event.target.id;
    data[name as keyof typeof data] = event.target.value;

    this.setState({ data });
  };

  validate = (): ErrorsType | null => {
    const errors: ErrorsType = {};
    const data = { ...this.state.data };

    if (!data.title) {
      errors.title = "Field required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  renderInput = (controlId: string, type: string, placeholder: string) => {
    const { data, errors } = this.state;
    let name = controlId;
    return (
      <Form.Group controlId={controlId}>
        <Input
          type={type}
          placeholder={placeholder}
          value={data[name as keyof typeof data]}
          onChange={this.onInputChange}
          errors={errors[name as keyof typeof errors]}
        />
      </Form.Group>
    )
  }

  renderSubmitButton = (label: string) => {
    return (
      <Button
        disabled={this.validate() === null ? false : true}
        variant="primary"
        type="submit"
      >
        {label}
      </Button>
    )
  }

  renderCloseButton = (label: string) => {
    return (
      <Button
        variant="outline-danger"
        onClick={this.props.onFormClose}
      >
        {label}
      </Button>
    )
  };
}

export default CommonForm;