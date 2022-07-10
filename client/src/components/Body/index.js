import React from 'react';
import { Grid } from 'semantic-ui-react';



function Body() {
  // USE state with array 

  return (
    <section>


      {/* // USe effect with fetch
// fetch API 
// setting state array value to what is rturend from the fetch */}

      {/* Use query hooks and probably need at least one mutations with appolo server */}


      {/* map function */}

      <div class="ui four column divided relaxed grid">
        <div class="row">
          <div class="column ui small images">
            <p><img src="farcry.png" className='small images' alt='Mario Brother' /> </p>
          </div>
          <div class="column ui small images">
            <p><img src="madden2002.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="sonicforces.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="zelda.png" className='small images' alt='Mario Brother' /></p>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Hottest Deals!</h2>
          <p style={{ textAlign: "center" }}>
            Don't wait buy now
          </p>
        </div>
        <div class="row">
          <div class="column ui small images">
            <p><img src="cod.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="xmen.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="reddead.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="ghostbusters.png" className='small images' alt='Mario Brother' /></p>
          </div>
        </div>
      </div>

    </section>



  );
}

export default Body;