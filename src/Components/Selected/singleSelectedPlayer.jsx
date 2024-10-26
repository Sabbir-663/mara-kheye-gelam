import { useState } from "react";


function SinglePlyer({singlePlayer,length,removePlayer}) {
                
              
                
                   
                    return (
                                        <div className="m-8 py-6 px-4 border border-stone-200 rounded-xl ">
                    
                   
                   <div className="flex justify-between items-center">

                   <div className="flex">
                   <div>
                   <img className="h[60px] w-[60px] mr-4 rounded-xl" src={singlePlayer.image}></img>
                   </div>
                   <div className="">
                    <p className="font-bold text-xl mb-4">{singlePlayer.name}</p>
                    <p className="font-semibold text-lg ">{singlePlayer.battingType}</p>
                   </div>
                   </div>
                   <div>
                   <button onClick={() => removePlayer(singlePlayer.id)} className="text-red-500">
                                           <img className="w-10" src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000" alt="" />
                                        </button>
                   </div>

                   </div>
                   
 
                                                  
                                        </div>
                    )
}

export default SinglePlyer
