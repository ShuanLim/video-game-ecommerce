/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : GameList/index.js     */
/* Team     : Coders of Hyrule      */
/* Date     : 07/09/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React, { useEffect } from 'react';
// Import apollo client
import { useQuery } from '@apollo/client';
// Import store context
import { useStoreContext } from '../../utils/GlobalState';
// Import to get indexed database
import { idbPromise } from '../../utils/helpers';
//Import to query games
import { QUERY_GAMES } from '../../utils/queries';
// Import to update games
import { UPDATE_GAMES } from '../../utils/actions';
// Import image when loading
import spinner from '../../assets/spinner.gif';
// Import game item
import GameItem from '../GameItem';
// Function to get game list
function GameList() {
  // Store query games result
  const [state, dispatch] = useStoreContext();
  const { currentPlatform } = state;
  const { loading, data } = useQuery(QUERY_GAMES);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_GAMES,
        games: data.games,
      });
      data.games.forEach((game) => {
        idbPromise('games', 'put', game);
      });
    } else if (!loading) {
      idbPromise('games', 'get').then((games) => {
        dispatch({
          type: UPDATE_GAMES,
          games: games,
        });
      });
    }
  }, [data, loading, dispatch]);
  function filterGames() {
    if (!currentPlatform) {
      return state.games;
    }
    return state.games.filter(game => game.platform._id === currentPlatform);
  }
  console.log(state);
  return (
    <div className="my-2">
      <h2>Our Games:</h2>
      {state.games.length ? (
        <div className="flex-row">
          {filterGames().map((game) => (
            <GameItem
              key={game._id}
              _id={game._id}
              image={game.image}
              gameName={game.gameName}
              price={game.price}
              quantity={game.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any games yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}
export default GameList;