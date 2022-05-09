import React, {useState, createContext} from 'react';

export const MarkerContext = createContext({});

const MarkerContextProvider = ({children}) => {
  const [marker, setMarker] = useState({});
  const [markerHidden, setMarkerHidden] = useState(true);
  const [navHidden, setNavHidden] = useState(false);

  const displayMarker = props => {
    if (props === true) {
      setMarkerHidden(false);
      setNavHidden(true);
    } else {
      setMarkerHidden(true);
      setNavHidden(false);
      marker.isFocused = false;
    }
  };

  const updateMarker = point => {
    marker.isFocused = false;
    setMarker(point);
    point.isFocused = true;
  };

  return (
    <MarkerContext.Provider
      value={{marker, displayMarker, updateMarker, markerHidden, navHidden}}>
      {children}
    </MarkerContext.Provider>
  );
};

export default MarkerContextProvider;
