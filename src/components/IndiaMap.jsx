import React, { useMemo } from 'react';
import India from '@react-map/india';

const IndiaMap = ({ className = '', highlightedStates = [], statesData = [] }) => {
  // Build state code map from statesData prop
  const stateCodeMap = useMemo(() => {
    const mapping = {};
    statesData.forEach(state => {
      mapping[state.state_code] = state.state_name;
    });
    return mapping;
  }, [statesData]);

  // Prepare cityColors for @react-map/india
  const cityColors = useMemo(() => {
    const colors = {};
    // Default color for all states
    // Note: @react-map/india uses full state names as keys.
    highlightedStates.forEach(code => {
      const name = stateCodeMap[code] || code;
      colors[name] = '#10b981'; // Highlight color
    });
    return colors;
  }, [highlightedStates, stateCodeMap]);

  return (
    <div className={`india-map-wrapper ${className}`} style={{ width: '100%', overflow: 'hidden' }}>
      <India
        type="select-multiple" // Allow multiple if needed, though we control via props
        cityColors={cityColors}
        mapColor="#e6eff7"
        hoverColor="#d1e2f0"
        strokeColor="#b5c7da"
        strokeWidth={0.5}
        hints={true}
        size={{ width: '100%', height: '100%' }} // Adjust size as needed to prevent cutting
      />
    </div>
  );
};

export default IndiaMap;


