import React, { useState, useEffect } from 'react';
import './App.css';

function Shop() {

    useEffect(() => {
        shopCombined();
    }, []);

    const [Items, setItems] = useState([]);

    const shopCombined = async () => {
        const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');

        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    };
    return (
        <div>
            {Items.map(item => (
                <h1>key={item.itemid}{item.name}</h1>
            ))}

        </div>
    );
}

export default Shop;