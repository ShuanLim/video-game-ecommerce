/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : OrderHistory.js       */
/* Team     : Coders of Hyrule      */
/* Date     : 07/13/2022            */
/* Modified : 07/13/2022            */
/* -------------------------------- */
// Import react module
import React from 'react';
// Import react dom
import { Link } from 'react-router-dom';
// Import apollo client
import { useQuery } from '@apollo/client';
// Import user query
import { QUERY_USER } from '../utils/queries';
// Function to show order history
function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Games</Link>
        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.carts.map((cart) => (
              <div key={cart._id} className="my-2">
                <h3>
                  {new Date(parseInt(cart.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {cart.games.map(({ _id, image, gameName, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/games/${_id}`}>
                        <img alt={gameName} src={`/images/${image}`} />
                        <p>{gameName}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}
// Export order history
export default OrderHistory;