import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Auntry = () => {

    const [ornaments,house]= useContext(RingContext)
    return (
        <div>
            <h2>Auntry</h2>
            <h4>house: {house}</h4>
            <p>{ornaments}</p>
        </div>
    );
};

export default Auntry;