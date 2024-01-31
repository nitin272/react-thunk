import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers, selectUsers } from './Redux/Reducer'

import './App.css';

const Data = () => {
    const dispatch = useDispatch();
    const userData = useSelector(selectUsers); 

    useEffect(() => {



        dispatch(fetchUsers()); 

    }, [dispatch]);


    console.log(userData);


    return (
        <div>
            {userData.map((item, index) => (

                <div key={index}>




                    <div>{item.name}</div>


                    <div>{item.email}</div>

                    <hr />
                    
                </div>

            ))}

        </div>
    );
};

export default Data;
