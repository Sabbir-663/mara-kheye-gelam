import logos from '../../../Images/logo-footer.png'

const Footer = () => {
    return (
       
        <div className="">
        <div className="border-2 border-slate-400   absolute bottom-[600px] w-4/5 bg-gradient-to-r from-blue-100 via-pink-200 to-yellow-200 p-[100px] rounded-lg">
          <div className="w-3/5 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-500 mb-4">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-4">
            <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border p-4 rounded-xl w-full " 
                />
                 <button className="bg-gradient-to-r from-pink-400 to-yellow-300 text-white py-0 px-4 rounded-xl">
                    Subscribe
                </button>
            </div>
          </div>
                

            </div>
        

            {/* Part-2 */}
                <div className=" pt-[340px]  mb-6">
                    <div className="text-center">
                    <img className="inline-block" src={logos} alt="" />
                    </div>
                    <div className="flex justify-between text-white mt-16 mb-8">
                        <div>
                            <h4 className="text-xl font-bold mb-4">About Us</h4>
                            <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                                <li>About</li>
                                <li> Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">Subscribe</h4>

                            <p className="mb-4">Subscribe to our newsletter <br /> for latest updates.</p>
                            <div className="flex gap-1">
            <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border p-2 rounded-xl w-full text-xs" 
                />
                 <button className="bg-gradient-to-r from-pink-400 to-yellow-300 text-white py-0 px-2 rounded-xl text-xs">
                    Subscribe
                </button>
            </div>
                        </div>
                    </div>
                    <hr />

                    <div>
                    <p className="mb-4 text-white text-lg mt-4 text-center">@2024 Your Company All Rights Reserved.</p>
                    </div>
                </div>

               
                
            
        </div>
    );
};

export default Footer;