/* eslint-disable react/prop-types */
import PropTypes from "prop-types";


const Card = ({card,handleSelect,coin}) => {

const {name,country,image,biddingPrice,bowlingType,role,battingType} = card

    return (
        <div className="mx-auto border-2 border-black-100 p-4 space-y-4 rounded-xl">
            
        <img className="w-[400px] h-[350px] rounded-lg" src={image} alt="" />
       <div className="flex gap-2">
        <img className="w-8" src="https://img.icons8.com/?size=100&id=11781&format=png&color=000000" alt="" />
       <p className="font-bold text-xl">{name}</p>
       </div>
        <div className="flex justify-between">
            <div className="flex gap-2">
            <img className="w-5" src="https://img.icons8.com/?size=100&id=2755&format=png&color=000000" alt="" />
            <p className="font-semibold text-lg text-stone-600">{country}</p>
            </div>
           <p className="font-semibold text-lg text-stone-600">{role}</p>

           
        </div>
        <hr />
        <div className="flex justify-between">
            <p className="font-semibold text-lg text-stone-600">{battingType}</p>
            <p className="font-semibold text-lg text-stone-600">{bowlingType}</p>
        </div>
        <div className="flex justify-between align-center">
           <p className="font-semibold text-lg"> ${biddingPrice}</p> 
        <button className="px-3 py-2 bg-stone-200 rounded-xl font-semibold text-lg" onClick={()=>handleSelect(card)}>Choose Player</button>

        </div>
    </div>
    );
};
Card.PropTypes ={
    card:PropTypes.object.isRequired
}

export default Card;


// "id": 2,
// "name": "Shakib Al Hasan",
// "country": "Bangladesh",
// "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWhe-KJUIo5bnF4avTW6KvyuV6iuB62NrCQ&s",
// "role": "All-Rounder",
// "battingType": "Left-hand bat",
// "bowlingType": "Left-arm orthodox",
// "biddingPrice": 10000000
// },