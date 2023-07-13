import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { v4 as uuidv4 } from 'uuid';

export default function FoodList(){
    const [foodList, setFoodList] = useState([...foodsJson]);
    const [search, setSearch] = useState('');

    const handleAddFood = (e, newFood) => {
        e.preventDefault();
        setFoodList([...foodList, {id:uuidv4,...newFood}]);
    }
    const handleSearch = (keyword) => {
        setSearch(keyword);
        setFoodList( foodsJson.filter(food => new RegExp(keyword, 'i').test(food.name)));
    }
    const handleDelete = ( id ) => {
        setFoodList( foodList.filter( food => food.id !== id ) )
    }
 

    return(
        <>
        <Search onSearch={ value => handleSearch(value) } search={search}/>
        <AddFoodForm onSubmit={handleAddFood}/>
        {foodList.map((food) => (<FoodBox key={food.id} food={food} onDeleteFood={handleDelete} />) )}
        </>
    );
}