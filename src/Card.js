import React from 'react';
import './Card.css'


const Card = ( {} ) => {
    return (
    <div className='tc bg-white dib br3 pd3 ma2 grow bw2 shadow-5'>
        <img 
        src={img} width='300px' height='300px' alt='loading failed' className='br3 pointer' 
        onClick={() => console.log('working!')}/>
        <div>
            <h2>상품명</h2>
        </div>
     </div>
    );
};  

export default Card;