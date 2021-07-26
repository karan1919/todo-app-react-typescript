import React from "react";
import CommonForm from "../common/CommonForm/CommonForm";
import { Card, Form } from "react-bootstrap";
import { NoteFormDataType, NoteFormErrorsType } from "../../types/NoteForm"

type State = {
  data: NoteFormDataType;
  errors: NoteFormErrorsType;
}

class NoteForm extends CommonForm {
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
      <>
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
      </>
    );
  }
}

export default NoteForm;