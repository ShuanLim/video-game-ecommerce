import React, {useEffect, useState} from 'react';
import { Grid } from 'semantic-ui-react';



function Body() {
  const [games, setGames] = useState ([]) 
    // USE state with array 
  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=d0d0cd073e5646b799a3f88ec3baee61&page=2&search=call-of-duty')
    .then(response => response.json()) 
    .then (data =>       
      {
        console.log(data);
        setGames(data.results)
      });
  }, [])
  return (
    <section>




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