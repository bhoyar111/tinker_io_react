import React from 'react';
import HeaderForm from './HeaderForm';
import Add from './Add'
import List from './List';

function User(props) {
    return (
        <div className="container mt-10">
        <div className="row">
            <HeaderForm />
            <Add />
            <List />
        </div>
    </div>
    );
}

export default User;