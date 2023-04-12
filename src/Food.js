import { Button } from "bootstrap"
import React,{useState, useEffect} from 'react'
import ReactDom from 'react-dom'

export default function Food(){
    return<div>
        <div>Food page
        </div>
    <div>
    <button>Fried Chicken</button>
   </div>
   <div>
    <button >Salad</button>
    </div>
    <div>
    <button>Pizza</button>
    </div>
    <div>
    <button href = "App.css">French Fries</button>
    </div>
        
    </div>
    

}
// API Link for future reference
//get category: https://any-api.com/je_apis_com/je_apis_com/docs/menus/GetCategoriesForMenu
//get products: https://public.je-apis.com/menus/{menuId}/productcategories/{categoryId}/products
const MenuCard = (props)=>{
    const [menuState, setMenu] = useState('');
    
    useEffect(()=>{
        
        
    },[]
    )
    
}

function listFood(){
    let foods = [
        {"Name": "3 Piece Fried Chicken", 
        "Price": 5.99,
        "Spice Level": 0,
        "Description": "Fried Chicken with chickens from the Miyagi prefecture"
        },
        ]
}