import React from "react"
import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Row,
    Col,
    Input,
    Form,
    Button,
    Label
} from "reactstrap"
import { Create_DocSubFolder, Get_DocFolder_LIST } from '../../../../redux/actions/document';
import { Upload, File } from "react-feather"
import { connect } from 'react-redux';

class FloatingLabels extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef();
    }
    state = {
        document: "",
        document_name: "",
        subFolder: []
    }
    componentDidMount() {
        this.props.Get_DocFolder_LIST();
    }

    imageHandler = e => {
        this.setState({ ...this.state, memberprofileImage: e.target.files[0], document: URL.createObjectURL(e.target.files[0]) });
    }

    changeHandler(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });

    }

    onsubmit(e) {
        // console.log(">>>>>>>>>>>>>>",this.state)
        e.preventDefault();
        const { document, ...rest } = this.state;
        this.props.Create_DocSubFolder({ ...rest });



    }
    componentDidUpdate(prevProps) {
        if (prevProps.folderList !== this.props.folderList) {
            this.setState({
                rowData: this.props.folderList,
                loading: false,
                subFolder: this.props.folderList[0]
            })
        }
    }
    SelectMainFolder = e => {
        this.setState({ subFolder: this.props.folderList[e.target.value] });
    }
    SelectSubFolder = e => {
        this.setState({ ...this.state, selectedSubFolder: e.target.value });
      }

    render() {
        const { rowData, subFolder } = this.state

        return (
            <Card>
                <CardHeader>
                    {/* <CardTitle>Vertical Form With Floating Labels</CardTitle> */}
                </CardHeader>
                <CardBody>
                    <Form className="mt-10" onSubmit={this.onsubmit}>
                        <Row>
                            <Col sm="12">
                                <FormGroup>
                                    <Label> Upload Document</Label>
                                    <div className="my-2">
                                        {this.state.document ?
                                            <img src={this.state.document} alt="select image" width="100" height="100" /> : <File size="32" />
                                        }
                                    </div>
                                    <input style={{ display: "none" }} type={"file"}
                                        ref={this.myRef} onChange={this.imageHandler}
                                    />
                                    <Button
                                        color="outline-primary"
                                        type="button"
                                        size="sm"
                                        onClick={() => { this.myRef.current.click() }}
                                    >
                                        <Upload size={12} style={{
                                            margin: "0 0.5em 0 0"
                                        }} />
                                            Upload
                                    </Button>
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup className="form-label-group">
                                    <Label for="nameFloating">Folder Name</Label>
                                    <Input
                                        defaultValue={this.state.document_name}
                                        onChange={this.SelectMainFolder}
                                        type="select"
                                        name="selectedFolder"
                                        id="mainfolder"
                                    >
                                        {rowData?.map((collapseItem, id) => {
                                            return (
                                                <option key={id} value={id}>{collapseItem.document_name}</option>
                                            )
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup className="form-label-group">
                                    <Label for="nameFloating">Sub Folder Name</Label>
                                    <Input
                                        defaultValue={this.state.selectedSubFolder}
                                        type="select"
                                        onChange={this.SelectSubFolder}
                                        name="selectedSubFolder"
                                        id="subfolder"
                                    >
                                        <option
                                            value={""}>Not Seleced </option>
                                        {subFolder.folder?.map((subfolder, id) => {
                                            return (
                                                <option
                                                    key={id} value={subfolder._id}>{subfolder.folderName}</option>
                                            )
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col sm="12">
                                <FormGroup className="form-label-group">
                                    <Button.Ripple
                                        color="primary"
                                        type="submit"
                                        className="mr-1 mb-1"
                                    // onClick={e => e.preventDefault()}
                                    >
                                        Save
                  </Button.Ripple>
                                    <Button.Ripple
                                        outline
                                        color="warning"
                                        type="reset"
                                        className="mb-1"
                                    >
                                        Delete
                  </Button.Ripple>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        folderList: state.documentFolderList
    };
}
export default connect(mapStateToProps, { Create_DocSubFolder, Get_DocFolder_LIST })(FloatingLabels);
