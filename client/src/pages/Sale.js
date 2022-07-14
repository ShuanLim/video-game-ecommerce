/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Sale.js              */
/* Team     : Coders of Hyrule      */
/* Date     : 07/12/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React, { useEffect } from 'react';
// Import apollo client
import { useMutation } from '@apollo/client';
// Import Jumbotron
import Jumbotron from '../components/Jumbotron';
// Import action to add game
import { ADD_ORDER } from '../utils/mutations';
// Import indexed database
import { idbPromise } from '../utils/helpers';
// Function sale
function Sale() {
  const [addOrder] = useMutation(ADD_ORDER);
  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const games = cart.map((item) => item._id);
      if (games.length) {
        const { data } = await addOrder({ variables: { games } });
        const gameData = data.addOrder.games;
        gameData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }
    saveOrder();
  }, [addOrder]);
  // Show page like success sale
  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for purchase your games with Us!</h2>
        <h2>You will now be redirected to the games page</h2>
      </Jumbotron>
    </div>
  );
}
// Export sale
export default Sale;