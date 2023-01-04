import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore";
import { useParams} from "react-router-dom";
import ItemList from "../itemlist/ItemList";
//import arrayProductos from "./json/arrayProductos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
        });
    }, [id]);

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;