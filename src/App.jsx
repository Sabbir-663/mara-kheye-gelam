
import './App.css'
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import { toast } from 'react-toastify'


function App() {

  const [available, setAvailable] = useState(0);
 
  const [coin,setCoin]= useState(0)
  const notify = () => toast(" $500 has been added to your account");
  const handleCoin = () =>{
         setCoin(coin+500)
         notify()
         
  }

  
  const [selectedPlayer,setSelectedPlayer]=useState([]);
  const notify1 = () => toast("Player choosen successfully!");
  const notify2 = () => toast("Not enought balance!");

  const handleSelect =(card)=>{
    if (selectedPlayer.length >= 6) {
      toast("You can only select up to 6 players!"); 
      return; 
    }
    if(card.biddingPrice<coin){
      const availabel=coin-card?.biddingPrice;
      setAvailable(availabel)
      setCoin(availabel)
      setSelectedPlayer((prevPlayer)=>[...prevPlayer,card])
      notify1()

 
    }else{
      notify2()
    }
 
  }

//delete operation
const removePlayer = (id) => {
  setSelectedPlayer((prevPlayers) => prevPlayers.filter(player => player.id !== id));
};

  return (
    < >

     <div className='w-4/5 mx-auto'>
    <Header handleCoin={handleCoin} coin={coin} availabel={available}></Header>
     <Cards handleSelect={handleSelect} removePlayer={removePlayer} selectedPlayer={selectedPlayer}></Cards>
     </div>
     <div className='bg-[#06091A]  relative pb-[20px]'>
      <div className='w-4/5 mx-auto '>
        <Footer></Footer>
      </div>
     </div>

     
    </>
  )
}

export default App
