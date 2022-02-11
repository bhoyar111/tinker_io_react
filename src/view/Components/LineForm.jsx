import React, { useState } from 'react';
import { Form, Col } from "react-bootstrap";
import { IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function LineForm(props) {

    const { ind, userLine, userLines, changeLineRow, errors, removeLineRow, handleSubmit } = props;
    const { user_lines } = errors || {};
    const { message, profileimg } = userLine || {};

    const [fileDisplayImg, setFileDisplayImg] = useState('');


    const handleLineChange = (event) => {
        const { value, name } = event.target;
        // call set value function here for ind
        changeLineRow(ind, name, value);
    }

    const handleFileChange = (event) => {
        const { files, name } = event.target;
        setFileDisplayImg('');
        let newUrl = ''
        let newSelectedFile = '';
        if (files && files.length) {
            const selectedFile = files[0];
            newSelectedFile = selectedFile;
        }
        setFileDisplayImg(newUrl);
        // call set values function here for ind
        changeLineRow(ind, name, newSelectedFile);
    }

    return (
        <>
           <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        placeholder="Enter Message" 
                        type="textarea" 
                        name="message"
                        value={message}
                        onChange={handleLineChange}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Col>
            <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control 
                        placeholder="Enter Message" 
                        type="file" 
                        name="profileimg"
                        value={profileimg}
                        onChange={handleFileChange}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Col>
            <Col md={6}>
                {(userLines.length !== 1) ? <IconButton onClick={() => removeLineRow(ind)} color="primary" aria-label="add row" className="add-btn">
                        <DeleteIcon />
                    </IconButton> : ''}
            </Col>
        </>
    );
}

export default LineForm;