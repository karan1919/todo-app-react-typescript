import React from "react";
import CommonForm from "./common/CommonForm";
import { Card, Form } from "react-bootstrap";

type Data = {
  title: string;
}

type Errors = {
  title?: string;
};

type Props = {
  onFormSubmit: (attributes: {}) => void;
  onFormClose: () => void;
}

type State = {
  data: Data;
  errors: Errors;
}

class ExtendedForm extends CommonForm {
  state: State = {
    data: { title: "" },
    errors: {}
  }

  doSubmit = () => {
    const data = { ...this.state.data };
    const title = data.title;
    this.props.onFormSubmit({ title });
  }

  render() {
    return (
      <div>
        <Card style={{ width: "15rem" }}>
          <Form onSubmit={this.handleSubmit}>
            <div className="pt-3 pl-3 pr-3">
              {this.renderInput('title', 'text', 'Enter title')}
              <div className="pb-3 d-flex justify-content-around">
                {this.renderSubmitButton("Create")}
                {this.renderCloseButton("Cancel")}
              </div>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default ExtendedForm;