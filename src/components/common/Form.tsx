import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";

type Errors = {
  title?: string;
};

type Props = {
  onFormSubmit: (attributes: {}) => void;
  onFormClose: () => void;
}

type State = {
  title: string;
  errors: Errors;
}

class CommonForm extends Component<Props, State> {
  state: State = {
    title: "",
    errors: {},
  };

  onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.currentTarget.value });
  };

  validate = (title: string): boolean => {
    const errors: Errors = {};

    if (!title) {
      errors.title = "Field required";
      this.setState({ errors });
      return true;
    }

    return false;
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    const title = this.state.title;

    event.preventDefault();

    if (this.validate(title)) return;

    this.props.onFormSubmit({
      title: this.state.title,
    });

    this.setState({ title: "", errors: {} });
  };

  render() {
    const { onFormClose } = this.props;
    const { title, errors } = this.state;
    return (
      <div>
        <Card style={{ width: "15rem" }}>
          <Form>
            <Form.Group className="pt-3 pl-3 pr-3" controlId="title">
              <Form.Control
                name="Title"
                placeholder="Enter title"
                value={title}
                onChange={this.onInputChange}
              />
              <span style={{ color: "red" }}>{errors ? errors.title : null}</span>
              <div className="pt-3 d-flex justify-content-around">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Create
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={onFormClose}
                >
                  Cancel
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Card>
      </div>
    );
  }
}

export default CommonForm;
