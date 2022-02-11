import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import useForm from '../../useForm';
import validate from '../../validate/validateUser';
import FormDesign from './FormDesign';


function Add(props) {
    
    const submit = async () => {
        try {
            const saveResponse = await axios.post(`https://api.pokemontcg.io/v2/cards?page=1&pageSize=10`, values)
            const { status, data } = saveResponse;
            if( status === 201 && data.data !== undefined ){
                props.history.push('/');
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
            // setErrors
            const { response } = e;
            if(response !== undefined && Object.keys(response.data).length && response.data.error !== undefined ){
                setErrors(response.data.error); // if error from server side
            }
        }
    }

    const formInputObj = {
        name    : "",
        email   : "",
        hobby   : "",
        phone   : "",
        message : ""
    };

    const { handleChange, handleSubmit, values, errors, setErrors, setValues } = useForm(
        submit,
        validate,
        formInputObj
    )
    return (
        <div>
            <FormDesign
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setValues={setValues}
                values={values}
                errors={errors}
            />
        </div>
    );
}

export default Add;