import React from "react"
import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Row,
    Col,
    Alert,
    Input,
    Form,
    Button,
    Label, CustomInput
} from "reactstrap"
import { CREATE_FOLDER_CATEGORY } from '../../../redux/actions/mymoney';
import "../../../assets/scss/pages/users.scss"
import { connect } from "react-redux"

class FloatingLabels extends React.Component {
    constructor() {
        super();
    }

    state = {
        categoryName: ""

    }

    changeHandler = e => {
        console.log(e.target.name, e.target.value);
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    onsubmit = (e) => {
        console.log("hi");
        e.preventDefault();
        this.props.CREATE_FOLDER_CATEGORY(this.state);
        setTimeout(() => {
            this.props.toggle();
          }, 600)
    }
    render() {
        return (
            <Card>
                <CardBody>
                    <Form className="mt-10" onSubmit={this.onsubmit}>
                        <Row>

                            <Col sm="12">
                                <FormGroup className="form-label-group">
                                    <div>
                                        <Label> Category Name </Label>
                                    </div>
                                    <Input
                                        onChange={this.changeHandler}
                                        type="text"
                                        name="categoryName"
                                        id="categoryName"
                                        placeholder="Category Name"
                                    />


                                </FormGroup>
                            </Col>
                        <Col sm="12">
                                <FormGroup className="form-label-group">
                                    <Button.Ripple
                                        color="primary"
                                        type="submit"
                                        className="mr-1 mb-1"

                                    >
                                        Save
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
const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { CREATE_FOLDER_CATEGORY })(FloatingLabels)
