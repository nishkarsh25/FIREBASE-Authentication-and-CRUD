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

    const updateItem = async (id, newName) => {
        await db.collection("items").doc(id).update({ name: newName });
        setItems(items.map(item => (item.id === id ? { ...item, name: newName } : item)));
        setSelectedItemId(null);
        setUpdatedItemName("");
    };

    const deleteItem = async (id) => {
        await db.collection("items").doc(id).delete();
        setItems(items.filter(item => item.id !== id));
    };

    

    

    

    

    
}


