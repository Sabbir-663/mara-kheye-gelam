import { useState } from "react";
import SinglePlyer from "./singleSelectedPlayer";


const Selected = ({selectedPlayer,removePlayer}) => {
  
  


 
  
    return (
        <div>
       {
        selectedPlayer?.slice(0,6).map((singlePlayer)=>(
         
<SinglePlyer
                    key={singlePlayer?.id}
                    singlePlayer={singlePlayer}
                    removePlayer={removePlayer}
                />        
        ))
       }
      
        </div>
    );
};

export default Selected;