import React from 'react';
import { Grid } from 'semantic-ui-react';
 


function Sale() {


return (
  <section>

  <div class="ui four column divided relaxed grid">
  <div class="row">
    <div class="column ui small images">
      <p><img src="halo4.png" className='small images' alt='Mario Brother'/> </p>
    </div>
    <div class="column ui small images">
      <p><img src="bf2042cover.png" className='small images' alt='Mario Brother'/></p>
    </div>
    <div class="column ui small images">
      <p><img src="godsofwar.png" className='small images' alt='Mario Brother'/></p>
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

export default Sale;