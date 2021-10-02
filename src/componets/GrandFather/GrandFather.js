import React from 'react';
import Auntry from '../Auntry/Auntry';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {house} = props
    return (
        <div>
            <h2>GrandFather</h2>
             <h4>house: {house}</h4>

            <div style={{display:'flex'}}>
                <Father house={house} ></Father>
                <Uncle house={house}></Uncle>
                <Auntry house={house}></Auntry>
            </div>
        </div>
    );
};

export default GrandFather;