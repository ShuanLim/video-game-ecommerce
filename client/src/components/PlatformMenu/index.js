import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLATFORMS } from '../../utils/queries';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PLATFORMS, UPDATE_CURRENT_PLATFORM } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
function PlatformMenu() {
  const [ state, dispatch ] = useStoreContext();
  const { platforms } = state;
  const { loading, data: platformData } = useQuery(QUERY_PLATFORMS);
  useEffect(() => {
    // if platformData exists or has changed from the response of useQuery, then run dispatch()
    if (platformData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for platforms to
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
  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_PLATFORM,
      currentPlatform: id
    });
  };
  return (
    <div>
      <h2>Choose a Platform:</h2>
      {platforms.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.platformName}
        </button>
      ))}
    </div>
  );
}
export default PlatformMenu;