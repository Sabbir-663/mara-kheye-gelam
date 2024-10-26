import { useState } from "react";
import { toast } from "react-toastify";
import logo from '../../../Images/logo.png'
import bgShadow from '../../../Images/bg-shadow.png';
import bannerMainPng from '../../../Images/banner-main.png'

const Header = ({handleCoin,coin,availabel}) => {
  console.log(availabel)
    return (
        <div className="mt-9 ">
            {/* Nav Bar */}
            <div className="flex justify-between w-9/11 mx-auto items-center mb-4">
                <div>
                    <img src= {logo} />
                </div>
                <div className=" space-x-4 flex items-center">
                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>
                   <div  className="border-2 font-bold px-2 py-1 flex rounded-lg gap-1">
                   <span> ${coin} Coin</span>
                   <img className="w-5" src="https://img.icons8.com/?size=100&id=63810&format=png&color=000000" />
                   </div>
                </div>
            </div>
            {/* Banner Part */}
            
           <div
  className="flex flex-col gap-4 items-center justify-center p-6 rounded-xl bg-black"
  style={{
    backgroundImage: `url(${bgShadow})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <img className="" src={bannerMainPng} alt="" />
  <h2 className="text-xl font-bold text-center text-stone-400">
    Assemble Your Ultimate Dream 11 Cricket Team
  </h2>
  <h4 className="text-lg font-medium text-center text-stone-400">
    Beyond Boundaries, Beyond Limits
  </h4>
  <button onClick={()=>handleCoin()} className="px-6 py-2 text-black font-semibold rounded-lg shadow-lg border-2 border-black bg-gradient-to-r from-pink-500 via-yellow-400 to-yellow-500 hover:from-pink-600 hover:via-yellow-500 hover:to-yellow-600">
    Claim Free Credit
  </button>
</div>

            
        </div>
    );
};

export default Header;