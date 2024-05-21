import React, { useState } from 'react';
import './Menu.css';
import imageSrc from './menu.png';
import imageSrc1 from './foodtag green.png'
import img1 from './Dosa.avif'
import img2 from './Icecream.avif'
import img3 from './Noodles.avif'
import img4 from './Pureveg.avif'
import img5 from './southIndia.avif'
import img6 from './Pizza.avif'
import img7 from './Cakes.avif'
import img8 from './Burger.avif'
import food1 from './Dosa2.avif'
import food2 from './puttu.avif'
import food3 from './eggbiriyani.avif'
import food4 from  './Biriyani.avif'
import food5 from  './muttonbiriyani.avif'
import food6 from './muttonbiriyani.avif'
import food7 from './pavbaji.avif'
import food8 from './sandwitch.avif'
import Header from './components/Header';


const Menu = () => {
  const [counts, setCounts] = useState({
    product1: 0,
    product2: 0,
    product3: 0,
  });

  const handleIncrement = (product) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [product]: prevCounts[product] + 1,
    }));
  };

  const handleDecrement = (product) => {
    if (counts[product] > 0) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [product]: prevCounts[product] - 1,
      }));
    }
  };

  return (
    <>
    <Header/>
     <div id='backgroundmenu'>
        <img src={imageSrc} alt="Your Image"  />
      </div>
      <div id='menulist1'>
        {/* Your menu items */}
        <img src={img1} alt="" />
        <a href="#vegies"><img src={img2} alt="" /></a>
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        </div>
      <div id='categoryname'><p>CATEGORIES</p></div>
      <div id='categorybody'>
        <div id='cbodyleft'>
            <div className='cleftnames'><a href=""><h1>BreakFast</h1></a></div>
            <div className='cleftnames'> <a href=""><h1>Biriyani</h1></a></div>
            <div className='cleftnames'><a href="#vegies" ><h1>Veg Items</h1></a></div>
            <div className='cleftnames'><a href=""><h1>Chicken Items</h1></a></div>
            <div className='cleftnames'><a href=""><h1>Ice Creams</h1></a></div>
            <div className='cleftnames'><a href=""><h1>Bowls</h1></a></div>
            <div className='cleftnames'><a href=""><h1>North Indian</h1></a></div>
        </div>
        <div id='cbodyright'>
         <div className='categorynames' ><p>BREAKFAST</p></div>


          {/* 1st row of the food menu */}
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b967e49b2cd70bf6f4733588a6a178e8" alt="" />
                </div>
                
                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product1 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product1')}>ADD</button>
                ) : (
                  <div className='addcontrols'>
                    <button className='decrement-btn' onClick={() => handleDecrement('product1')}>-</button>
                    <span>  <b>{counts.product1}</b></span>
                    <button className='increment-btn' onClick={() => handleIncrement('product1')}>+</button>
                  </div>
                )}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food1} alt="" />
                </div>
                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product2 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product2')}>ADD</button>
                ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product2')}>+</button>
                    <span>{counts.product2}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product2')}>-</button>
                  </div>
                )}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src={food2} alt="" />
                </div>                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product3 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product3')}>ADD</button>
                  ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product3')}>+</button>
                    <span>{counts.product3}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product3')}>-</button>
                  </div>
                )}
              </div>
           
            </div>



           {/* second row */}
           <div className='categorynames'><p>BIRIYANI</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food3} alt="" />
                </div>
                
                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4 id='vegies'>50% OFF</h4>
                {counts.product1 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product1')}>ADD</button>
                ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product1')}>+</button>
                    <span>{counts.product1}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product1')}>-</button>
                  </div>
                )}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food4} alt="" />
                </div>
                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product2 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product2')}>ADD</button>
                ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product2')}>+</button>
                    <span>{counts.product2}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product2')}>-</button>
                  </div>
                )}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src={food6} alt="" />
                </div>                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product3 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product3')}>ADD</button>
                  ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product3')}>+</button>
                    <span>{counts.product3}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product3')}>-</button>
                  </div>
                )}
              </div>
           </div> 


           {/* third row */}
            <div className='categorynames' ><p>VEG ITEMS</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food7} alt="" />
                </div>
                
                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product1 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product1')}>ADD</button>
                ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product1')}>+</button>
                    <span>{counts.product1}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product1')}>-</button>
                  </div>
                )}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food8} alt="" />
                </div>
                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product2 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product2')}>ADD</button>
                ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product2')}>+</button>
                    <span>{counts.product2}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product2')}>-</button>
                  </div>
                )}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src={food2} alt="" />
                </div>                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product3 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product3')}>ADD</button>
                  ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product3')}>+</button>
                    <span>{counts.product3}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product3')}>-</button>
                  </div>
                )}
              </div>
           
            </div>


            {/* fourth row */}
            <div className='categorynames'><p>CHICKEN ITEMS</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b967e49b2cd70bf6f4733588a6a178e8" alt="" />
                </div>
                
                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product1 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product1')}>ADD</button>
                ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product1')}>+</button>
                    <span>{counts.product1}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product1')}>-</button>
                  </div>
                )}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food1} alt="" />
                </div>
                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product2 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product2')}>ADD</button>
                ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product2')}>+</button>
                    <span>{counts.product2}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product2')}>-</button>
                  </div>
                )}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src={food2} alt="" />
                </div>                <h2>Chicken Maryland</h2> 
                <h3><del>₹149</del> ₹299</h3>
                <h4>50% OFF</h4>
                {counts.product3 === 0 ? (
                  <button className='addfoodbtn' onClick={() => handleIncrement('product3')}>ADD</button>
                  ) : (
                  <div className='addcontrols'>
                    <button className='increment-btn' onClick={() => handleIncrement('product3')}>+</button>
                    <span>{counts.product3}</span>
                    <button className='decrement-btn' onClick={() => handleDecrement('product3')}>-</button>
                  </div>
                )}
              </div>
           
            </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
