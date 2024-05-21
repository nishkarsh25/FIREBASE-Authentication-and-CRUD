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

    const handleUpdateClick = (id, name) => {
        setSelectedItemId(id);
        setUpdatedItemName(name); // Setting the value to display in the input field
    };

    const handleCancelClick = () => {
        setSelectedItemId(null);
        setUpdatedItemName("");
    };

    const handleAddKeyPress = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    };

    const handleUpdateKeyPress = (e, id, name) => {
        if (e.key === 'Enter') {
            updateItem(id, updatedItemName);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-yellow-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-6">CRUD App</h1>
            <div className="flex items-center">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyPress={handleAddKeyPress}
                    placeholder="Add new item"
                    className="flex-grow py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-gradient-to-br from-blue-300 to-blue-500 text-blue-800 font-bold text-lg placeholder-black"
                />
                <button onClick={addItem} className="ml-4 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add</button>
            </div>
            <ul className="mt-6">
                {items.map((item) => (
                    <li key={item.id} className="flex items-center justify-between py-2">
                        {selectedItemId === item.id ? (
                            <>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        value={updatedItemName}
                                        onChange={(e) => setUpdatedItemName(e.target.value)}
                                        onKeyPress={(e) => handleUpdateKeyPress(e, item.id, item.name)}
                                        placeholder="Update item"
                                        className="flex-grow py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-gradient-to-br from-blue-300 to-blue-500 text-white text-md placeholder-red-800" />
                                    <div className="ml-4 flex">
                                        <button onClick={() => updateItem(item.id, updatedItemName)} className="py-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Save</button>
                                        <button onClick={handleCancelClick} className="ml-2 py-2 px-6 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</button>
                                    </div>
                                </div>
                            </>

                        ) : (
                            <>
                                <span className="text-lg font-bold text-purple-700 border-2 border-purple-700 px-4 py-2 rounded-full bg-gradient-to-br from-purple-200 to-purple-400">{item.name}</span>

                                <div className="flex">
                                    <button onClick={() => handleUpdateClick(item.id, item.name)} className="mr-4 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
                                    <button onClick={() => deleteItem(item.id)} className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CrudApp;
