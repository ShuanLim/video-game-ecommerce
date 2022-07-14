/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : PlatformMenu/index.js */
/* Team     : Coders of Hyrule      */
/* Date     : 07/09/2022            */
/* Modified : 07/12/2022            */
/* -------------------------------- */
// Import react module
import React, { useEffect } from 'react';
// Import apollo client
import { useQuery } from '@apollo/client';
// Import store context
import { useStoreContext } from "../../utils/GlobalState";
// Import helper to get a indexed database
import { idbPromise } from '../../utils/helpers';
// Import query to get all platforms
import { QUERY_PLATFORMS } from '../../utils/queries';
// Import actions to update platform(s)
import { UPDATE_PLATFORMS, UPDATE_CURRENT_PLATFORM } from '../../utils/actions';
// Function to show platforms
function PlatformMenu() {
  // Store query platforms result
  const [ state, dispatch ] = useStoreContext();
  const { platforms } = state;
  const { loading, data: platformData } = useQuery(QUERY_PLATFORMS);
  useEffect(() => {
    // If platformData exists or has changed from the response of useQuery, then run dispatch()
    if (platformData) {
      // Execute our dispatch function with our action object indicating the type of action and the data to set our state for platforms to
      dispatch({
        type: UPDATE_PLATFORMS,
        platforms: platformData.platforms
      });
      platformData.platforms.forEach(platform => {
        idbPromise('platforms', 'put', platform);
      });
    } else if (!loading) {
      idbPromise('platforms', 'get').then(platforms => {
        dispatch({
          type: UPDATE_PLATFORMS,
          platforms: platforms
        });
      });
    }
  }, [platformData, loading, dispatch]);
  // Handle click to get platform id
  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_PLATFORM,
      currentPlatform: id
    });
  };
  // Show platforms menu
  return (
    <div>
      <h2>Filter by Platform:</h2>
      {platforms.map((item) => (
        <button key={item._id} onClick={() => { handleClick(item._id); }} >
          {item.platformName}
        </button>
      ))}
      <button key="" onClick={() => { handleClick(""); }} >
          All games
      </button>
    </div>
  );
}
// Export platform menu
export default PlatformMenu;
