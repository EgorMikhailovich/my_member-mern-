import React from "react"
import { Card, CardBody, Button, Row, Col, Form, Label, FormGroup, Input } from "reactstrap"
import { EditorState, convertToRaw,convertFromHTML,ContentState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import draftToHtml from 'draftjs-to-html';
import { Check, LogIn } from "react-feather"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "../../../../../assets/scss/plugins/extensions/editor.scss"
import Checkbox from "../../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { connect } from 'react-redux';
import { SENT_EMAIL_COMPOSE } from "../../../../../redux/actions/mymoney/index"
import SelectFolderToSave from "./SelectFolderToSave";
import { Fragment } from "react";
import SmartListModal from "./smartlistModal";

class EditorControlled extends React.Component {
  constructor() {
    super();
  }
  state = {
    selectedSmartList: [],
    editorState: EditorState.createEmpty(),
    to: "",
    from: "tekeshwar810@gmail.com",
    subject: "",
    title: "",
    template: "",
    temp: "",
    modal: false
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };
  HandleSmartListModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }


  onsubmit = () => {
    let payload = { ...this.state, to: this.state.selectedSmartList, template: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())) }
    this.props.SENT_EMAIL_COMPOSE(payload);
    this.setState({
      selectedSmartList: [],
      editorState: EditorState.createEmpty(),
      to: "",
      from: "tekeshwar810@gmail.com",
      subject: "",
      title: "",
      template: "",
      temp: ""
    })
  }
  handleSelectSmartList = (item) => {
    let data = []
    for (let obj of item) {
      data.push(obj.email)
    }
    data.filter((item) => this.setState({ selectedSmartList: [...this.state.selectedSmartList, item] }))
  }

  defaultEmailBody = ()=>{
    const sampleMarkup =
    this.props.defaultTemplateData.template;

    const blocksFromHTML = convertFromHTML(sampleMarkup);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );
    return(EditorState.createWithContent(state))
  }
  render() {
    const { editorState, selectedSmartList, subject, title, from, temp, to } = this.state
    const { editExisting, defaultTemplateData } = this.props
    return (
      <Fragment>
        <Card className="mb-0">
          <CardBody>
            <div className="d-flex justify-content-end">
              {!editExisting ? <Fragment>
                <SelectFolderToSave
                  editExisting={false}
                  showTemplate={this.props.showTemplate}
                  isSaveCompose={true}
                  data={this.state}
                  template={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
                />
                <Button.Ripple className="ml-1" color="success" onClick={this.onsubmit}>
                  Send
              </Button.Ripple>
              </Fragment> :
                <Fragment>
                  <SelectFolderToSave
                    defaultTemplateData={defaultTemplateData}
                    editExisting={true}
                    showTemplate={this.props.showTemplate}
                    isSaveCompose={true}
                    data={this.state}
                    template={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
                  />
                  <Button.Ripple className="ml-1" color="success" onClick={this.props.handleCancel}>
                    Cancel
             </Button.Ripple>
                </Fragment>
              }
            </div>
            <Row>
              <Col sm="4">
                <Label for="nameFloating">From</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="from"
                    id="from"
                    placeholder="From"
                    defaultValue={editExisting ? defaultTemplateData.from : from}
                    onChange={this.changeHandler}
                  />

                </FormGroup>
              </Col>
              <Col sm="4">
                <Label for="nameFloating">Smart List</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="to"
                    id="to"
                    placeholder="Smart List"
                    defaultValue={editExisting ? defaultTemplateData.to.join() : selectedSmartList.join()}
                    onClick={this.HandleSmartListModal}
                  />

                </FormGroup>
              </Col>
              {/* <Col sm="4">
                <Label for="nameFloating">Temp List</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="to"
                    defaultValue={to != "" ? "" : temp}
                    id="nameFloating"
                    placeholder="Please Select Contacts"

                  />

                </FormGroup>
              </Col> */}
            </Row>
            <Row>
              <Col sm="4">
                <Label for="nameFloating">Title</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    defaultValue={editExisting ? defaultTemplateData.title : title}
                    onChange={this.changeHandler}
                  />

                </FormGroup>
              </Col>
              <Col sm="4">
                <Label for="nameFloating">Subject</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    defaultValue={editExisting ? defaultTemplateData.subject : subject}
                    onChange={this.changeHandler}
                  />

                </FormGroup>
              </Col>
              <Col sm="4">
                <Checkbox
                  color="primary"
                  icon={<Check className="vx-icon" size={16} />}
                  label=" Send to Email Address once"
                  defaultChecked={true}
                />
                <p style={{ fontSize: "12px" }}>Email will be sent to recipients who have the same email address only once. Any merge field used in the email will be merged with one of the recipients.</p>
              </Col>


            </Row>template
            
            <Editor
              editorState={editExisting  ? this.defaultEmailBody() : editorState}
              // editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              spellCheck={true}
              onEditorStateChange={this.onEditorStateChange}
            />
          </CardBody>
        </Card>
        <SmartListModal
          toggleModal={this.toggleModal}
          modal={this.state.modal}
          handleSelectSmartList={this.handleSelectSmartList} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedSmartList: state.EmailComposeMarketing.selectedSmartList
  }
}
export default connect(mapStateToProps, { SENT_EMAIL_COMPOSE, })(EditorControlled)
