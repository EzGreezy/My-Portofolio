import React from 'react';
import React, { useEffect, useState } from 'react';
import firebase from './fire';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

export default function CRUD(props) {
    const [foodName, setFoodName] = useState('');
    const [price, setPrice] = useState('');
    const [foodData, setFoodData] = useState([]);
    const [updateFoodName, setupdateFoodName] = useState('');
    const [updatePrice, setupdatePrice] = useState('');
    const [foodId, setFoodId] = useState('');

    useEffect(() =>{
        const firestone = firebase.database().ref('/FoodInfo');
        firestone.on('value', (response)=>{
            const data = response.val();
            let foodInfo = [];
            for(let id in data){
                foodInfo.push({
                    id:id,
                    FoodName:data[id].FoodName,
                    Price:data[id].Price,
                });
            }
            setFoodData(foodInfo);
        });
    }, []);

    const handleAddFood = () =>{
        const firestore = firebase.database().ref("/FoodInfo");
        let data = {
            FoodName:foodName,
            Price:price
        }
        firestore.push(data);
        setFoodName('');
        setPrice('');
    };
    const handleUpdateFood = () =>{
        const firestore = firebase.database().ref('/FoodInfo').child(foodId);
        firestore.update({
            FoodName:updateFoodName,
            Price:updatePrice
        });
        setupdateFoodName('');
        setupdatePrice('');
    };
    const handleUpdateClick = (data) =>{
        setupdateFoodName(data.FoodName);
        setupdatePrice(data.Price);
        setFoodId(data.id);
    };
    const handleDelete = (id) =>{
        const firestore = firebase.database().ref('/FoodInfo').child(id);
        firestore.remove()
    };

    return ( 
        <>
            <Layout >
                
            </Layout>
        </>
    );
}