import Button from 'react-bootstrap/Button';

import React, { useState, useEffect } from 'react'





export default function Food() {





   const [menuState, setMenu] = useState();

   const options = {

     method: 'GET',

     headers: {

       'X-RapidAPI-Key': 'bbc1b4c64fmsh7dbf106dddfef9ep1e4162jsn7c4bb140dfd5',

       'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'

    }

  };







   React.useEffect(() => {



     fetch('https://the-mexican-food-db.p.rapidapi.com/', options)

      .then((response) => response.json())

      .then((json) => {

         //setMenu.apply(json);
          for(let i =0; i < 10; i++){
            setMenu.apply(json[i]);
          };
          
         console.log(json);

      });







  }, []);









   return (<div className='Food'>
     
     <li>
     {menuState[0].title}
       </li>

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



       <button href="App.css">French Fries</button>



     </div>







   </div>
   )
}