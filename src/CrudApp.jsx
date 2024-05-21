import React, { useState, useEffect } from 'react';
import { db } from './firebase';

function CrudApp() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [updatedItemName, setUpdatedItemName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection("items").get();
            setItems(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    const addItem = async () => {
        if (newItem.trim() !== "") {
            const docRef = await db.collection("items").add({ name: newItem });
            setItems([...items, { name: newItem, id: docRef.id }]);
            setNewItem("");
        }
    };

    

    

    

    

    

    

    
}


