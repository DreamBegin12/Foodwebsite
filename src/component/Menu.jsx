import React from 'react';

const Menu = () => {
  return (
    <div className='about'>
         <div className="container">        
           <div className="row">
           
            <div className="col-6">
                <div className="about__img">
                    <img src="img/pizza.jpg" alt="pizza" />
                </div>

           </div>
           <div className="col-6 p-5">
            <h3>The Pizza Menu</h3>
            <h1>INDIAN THIN CRUST</h1>
            <p> Deserunt dolor temporibus eum enim excepturi facilis expedita repellat iste ex officia dolorum nisi pariatur harum perferendis saepe, esse accusantium nam sint! Officiis accusantium quia minus suscipit amet non ratione culpa assumenda fugiat doloribus.</p>
            <div className="about__btn">
                <a href="btn" className='btn bn-smart'>VIEW MORE</a>
            </div>
            
            </div>
            </div>
        </div>



    </div>
  )
}

export default Menu;