import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Show()
{
    const [products, setProducts] = useState([]);
    const [addedProducts, setAddedProducts] = useState([]); // To store products in the cart
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((response) => response.json())
            .then((data) => { 
                console.log(data[6]);
                setProducts(data);
    })
    }, []);


    return (
        <div className="curr">
            {products.map((crypto, index) => (
                <div key={index} className="crypto-item">
                    <div className="crypto-image"><img src={crypto.image} alt=""></img></div>
                    <div>{crypto.name}</div>
                    <div>{crypto.symbol}</div>
                    <div><span id='dollar'>$</span>{crypto.current_price}</div>
                    <div><span id='dollar'>$</span>{crypto.total_volume}</div>
                </div>
            ))}
        </div>
    );
}

ReactDOM.render(<Show/>,document.getElementById('appl'));