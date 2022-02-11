import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FormControl, InputLabel, Select, MenuItem, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { Educations } from "../../utils/constant";
import LineForm from "./LineForm";

function FormDesign(props) {

  const { handleSubmit, handleChange, values, errors, setValues } = props;

  const pushObj = {
    message      : "",
    profileimg   : "",
}

const [userLines, setUserLines] = useState([pushObj]);

const addLineRow = () => {
    setUserLines([...userLines, pushObj]);
    setValues({
        ...values,
        user_lines: [...userLines, pushObj]
    });
}

const changeLineRow = (indx, name, val) => {
    userLines.map((useRow, ind) => {
        if(ind === indx){
            useRow[name] = val;
        }
    });
    setUserLines([...userLines]);

    setValues({
        ...values,
        user_lines: [...userLines]
    });
}

const removeLineRow = (id) => {
    const newRows = userLines.filter((ind, index) => index !== id);
    setUserLines([...newRows]);
    setValues({
        ...values,
        user_lines: [...newRows]
    });
}

    return (
        <>
            <Form onSubmit={handleSubmit} noValidate>
                <Row>
                    <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                placeholder="Enter text" 
                                type="text"
                                name=""
                            />
                            {errors.name && <small className="text-danger">{errors.name}</small>}
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                placeholder="Enter email" 
                                type="email" 
                            />
                            {errors.name && <small className="text-danger">{errors.name}</small>}
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicMobile">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control 
                            placeholder="Enter number" 
                            type="number" 
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Label>Education</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <FormControl
                            variant="outlined"
                            size="small"
                            color="secondary"
                            className="w-100"
                        >
                            <InputLabel>Education</InputLabel>
                            <Select
                                label="Education"
                                name="education"
                                onChange={handleChange}
                                value={values.education}
                            >
                                <MenuItem value="0">Education</MenuItem>
                                {Educations &&
                                    Educations.map((Educ, indx) => (
                                    <MenuItem value={Educ.val}>{Educ.label}</MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Label>Gender</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                inline
                                label="Male"
                                type="radio"
                                id=""
                            />
                            <Form.Check
                                inline
                                label="Female"
                                type="radio"
                                id=""
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Label>Hobby</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                inline
                                label="Cricket"
                                type="checkbox"
                                id=""
                            />
                            <Form.Check
                                inline
                                label="Singing"
                                type="checkbox"
                                id=""
                            />
                            <Form.Check
                                inline
                                label="Travling"
                                type="checkbox"
                                id=""
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {userLines && userLines.map((userLine, ind) =>
                        <LineForm
                            key={ind}
                            ind={ind}
                            values={values}
                            setValues={setValues}
                            errors={errors}
                            userLine={userLine}
                            userLines={userLines}
                            changeLineRow={changeLineRow}
                            removeLineRow={removeLineRow}
                            // handleSubmit={handleSubmit}
                        />
                    )}
                    <IconButton
                        color="primary"
                        aria-label="add row"
                        className="add-btn mb-4"
                        onClick={addLineRow}
                        title="Add Picture"
                        >
                        <AddIcon />
                    </IconButton>   
                </Row>
                <Row>
                    <Col md={12} className="text-end">
                        <Button variant="primary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default FormDesign;
