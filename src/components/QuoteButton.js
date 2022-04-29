import React, {useState} from 'react';
import quotes from '../quotes.json';
import QuoteBox from './QuoteBox';
import randomColor from "randomcolor";

const QuoteButton = () => {
    const [ index, setIndex ] = useState(Math.floor(Math.random() * quotes.length));
    const [ color, setColor ] = useState(randomColor());

    document.body.style.backgroundColor = color;
    
    const randomIndex = () => {
        setIndex(Math.floor(Math.random() * quotes.length));
        setColor(randomColor());
    };

    return (
        <>
            <QuoteBox index={index} color={color}/>
            <button className="quoteButton" onClick={randomIndex} style={{background: color}}>&#8658;</button>
        </>
    );
};

export default QuoteButton;