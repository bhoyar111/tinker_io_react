import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import { Button } from "react-bootstrap";
import axios from 'axios';

function List(props) {

    const [userDatas, setUserDatas] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.post(`http://dev.nyusoft.in/nyusoft-practical/backend/api/getRecord`)
            setUserDatas(response.data.data);
        }
        getData();
    },[])

    const deleteData = async (id) => {
        try {
            const deleteResponse = await axios.delete(`http://dev.nyusoft.in/nyusoft-practical/backend/api/deleteData`);
            const { status, data } = deleteResponse;
            if( status === 200 && data.data !== undefined ){
                // getData();
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    return (
        <div className="mt-5">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i>
                    <strong>User Listing Show</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Name </th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Education</th>
                                <th scope="col">Action</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDatas.map((usData, ind) => (
                            <tr key={usData.id}>
                                <td>{ind+1}</td>
                                <td>{usData.name}</td>
                                <td>{usData.email}</td>
                                <td>{usData.phone}</td>
                                <td>{usData.education}</td>
                                <td>
                                    <Button variant="success">Edit</Button>{" "}
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
}

export default List;
