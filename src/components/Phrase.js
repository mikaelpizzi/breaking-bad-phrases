import React from 'react'

const Phrase = ({ phrase }) => {
    return (
        <div>
            <h1>{phrase.quote}</h1>
            <p>-{phrase.author}</p>
            <p>-{phrase.series}</p>
        </div> 
    );
}
 
export default Phrase;