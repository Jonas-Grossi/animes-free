import './MainContent.css'

import teste1 from './../../../assets/layout-season/teste1.jpg'
import teste2 from './../../../assets/layout-season/teste2.jpg'
import teste3 from './../../../assets/layout-season/teste3.jpg'
import teste4 from './../../../assets/layout-season/teste4.jpg'
import teste5 from './../../../assets/layout-season/teste5.jpg'

import {
    Collapse,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Collapse, Ripple });

function MainContent (){


    return( 
    <main className="mainContent">
        <div className='img'>
   
<img src={teste1} alt=""  />


<img src={teste2} alt="" />

<img src={teste3} alt="" />
<img src={teste4} alt="" />
<img src={teste5} alt="" />
<img src={teste1} alt="" />
</div>
  
    
<div id="card" class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Card title
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Assistir
    </button>
  </div>
</main>
    )
    
    }
    export default MainContent