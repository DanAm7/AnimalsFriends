import React from 'react';
import './Card.css';

const Card = ({img , name, type, delclick }) => {
    return (
 <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='animal' src={img} width='150px' height='150px' />
    <div>
        <h2>{name}</h2>
        <h2>{type}</h2>
        <button onClick={delclick}>Bye Bye</button>
    </div>
</div>
    );

}

export default Card;