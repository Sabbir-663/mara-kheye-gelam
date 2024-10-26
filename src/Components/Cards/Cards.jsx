import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Selected from "../Selected/Selected";
import { toast } from "react-toastify";
import ("./Cards.css")




const Cards = ({coin,handleSelect,selectedPlayer,removePlayer}) => {
    const [isActive, setIsActive] = useState({
        cart:true,
        status:"Available"
        
      })

    
      const handleIsActiveState =(status)=>{
        if(status == "Available"){
          setIsActive({
            cart :true,
            status:"Available"
          })
        }
        else{
          setIsActive({
            cart:false,
            status:"Selected"
          })
        }
      }

// Data fetch
    const [cards,setCards]= useState([])
    useEffect(()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])






    return (
        <div className="mt-8 mb-[400px] mx-auto ">
            <div className="flex justify-between mb-8">
             {
              isActive.cart?   <h3 className="font-bold text-2xl">Available Players  </h3>:<h3 className="font-bold text-2xl">Selected players({`${selectedPlayer.length}`}/6)</h3>
             }
                <div>
                    <button onClick={()=>handleIsActiveState("Available")} className={`${isActive.cart?"active":"btn"}`}>Available</button>
                    <button onClick={()=>handleIsActiveState("Selected")} className={`${isActive.cart?"btn":"active"}`}>Selected</button>
                </div>
            </div>
            {/* Cards */}


            {
                isActive.cart? <div className="grid grid-cols-3 gap-4 ">
                {
                    cards.map(card => <Card key={card.id} card={card} handleSelect={handleSelect} coin={coin}></Card>)
                }
           </div>:
           <div>
          <Selected selectedPlayer={selectedPlayer} removePlayer={removePlayer}></Selected>
       </div>
            }
     



        </div>
    );
};

export default Cards;