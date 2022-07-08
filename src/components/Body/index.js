import React from 'react';
import { Grid } from 'semantic-ui-react';
 


function Body() {
// USE state with array 

return (
  <section>
    <h1>Checkout our super awesome games!</h1>

<div class="ui small images">
<img src="mariobro.png" alt='Mario Brother'/>
<img src="bf2042cover.png" alt='BF 2042'/>
<img src="halo4.png" alt='Halo4'/>
<img src="godsofwar.png" alt='Gods of War'/>
</div>

{/* // USe effect with fetch
// fetch API 
// setting state array value to what is rturend from the fetch */}

 {/* Use query hooks and probably need at least one mutations with appolo server */}

<div className="ui four column relaxed grid">
  {/* map function */}
  {/* <div><Image size="medium" src='../bf2042.jpg' /></div>  */}
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
  <div className="four wide column"></div>
</div>


{/* import { Grid } from 'semantic-ui-react' */}

{/* const ButtonExample = () => ( */}
  <Grid>
    <Grid.Column>
      
      <p>Content lives here</p>
      <p>Content lives here</p>
      <p>Content lives here</p>
    </Grid.Column>
  </Grid>
);
    </section>
    
  );
}

export default Body;