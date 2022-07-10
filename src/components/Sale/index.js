import React from 'react';
import { Grid } from 'semantic-ui-react';



function Sale() {


  return (
    <section>

      <div class="ui four column divided relaxed grid">
        <div class="row">
          <div class="column ui small images">
            <p><img src="spaceinvaders.png" className='small images' alt='Mario Brother' /> </p>
          </div>
          <div class="column ui small images">
            <p><img src="pacman.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="fallout3.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="tempest.png" className='small images' alt='Mario Brother' /></p>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Gotta play 'em all!</h2>
          <p style={{ textAlign: "center" }}>
            Buy two games and get free shipping
          </p>
        </div>
        <div class="row">
          <div class="column ui small images">
            <p><img src="legostarwars.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="borderlands3.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="pikman.png" className='small images' alt='Mario Brother' /></p>
          </div>
          <div class="column ui small images">
            <p><img src="mariogalaxy.png" className='small images' alt='Mario Brother' /></p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Sale;