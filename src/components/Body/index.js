import React from 'react';
import { Grid } from 'semantic-ui-react';
 


function Body() {
// USE state with array 

return (
  <section>
    {/* <h1>Checkout our super awesome games!</h1>

<div class="ui small images">
<img src="mariobro.png" alt='Mario Brother'/>
<img src="bf2042cover.png" alt='BF 2042'/>
<img src="halo4.png" alt='Halo4'/>
<img src="godsofwar.png" alt='Gods of War'/>
</div> */}



 

{/* // USe effect with fetch
// fetch API 
// setting state array value to what is rturend from the fetch */}

 {/* Use query hooks and probably need at least one mutations with appolo server */}


  {/* map function */}
 
  <div class="ui four column divided relaxed grid">
  <div class="row">
    <div class="column ui small images">
      <p><img src="mariobro.png" className='small images' alt='Mario Brother'/> </p>
    </div>
    <div class="column ui small images">
      <p><img src="mariobro.png" className='small images' alt='Mario Brother'/></p>
    </div>
    <div class="column ui small images">
      <p><img src="mariobro.png" className='small images' alt='Mario Brother'/></p>
    </div>
    <div class="column ui small images">
      <p><img src="mariobro.png" className='small images' alt='Mario Brother'/></p>
    </div>
  </div>
  <div>
        <h2 style={{textAlign: "center"}}>Best Deals!</h2>
        <p style={{textAlign: "center"}}>
       Don't wait Buy now!
        </p>
      </div>
  <div class="row">
    <div class="column ui small images">
      <p><img src="mariobro.png" className='small images' alt='Mario Brother'/></p>
    </div>
    <div class="column ui small images">
      <p><img src="mariobro.png" className='small images' alt='Mario Brother'/></p>
    </div>
    <div class="column ui small images">
      <p><img src="mariobro.png" className='small images' alt='Mario Brother'/></p>
    </div>
    <div class="column ui small images">
      <p><img src="mariobro.png" className='small images' alt='Mario Brother'/></p>
    </div>
  </div>
</div>

    </section>

    
    
  );
}

export default Body;