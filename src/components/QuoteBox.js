import React from 'react';
import quotes from '../quotes.json';

const QuoteBox = ({index, color}) => {
    return (
        <>
            <div className="quote-text-container">
                <i className="fa-solid fa-quote-left quote-left" style={{color: color}}></i>
                <p className="quote-text" style={{color: color}}>{quotes[index].quote}</p>
            </div>
            <i className="quote-author" style={{color: color}}>{quotes[index].author}</i>
        </>
    );
};

export default QuoteBox;