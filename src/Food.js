import { Button } from "bootstrap"

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

function listFood(){
    let foods = [
        {"Name": "3 Piece Fried Chicken", 
        "Price": 5.99,
        "Spice Level": 0,
        "Description": "Fried Chicken with chickens from the Miyagi prefecture"
        },
        ]
}