import React from 'react';
import iconPaths from './set.js';// the file exported from IcoMoon

function getPath(iconName) {
  const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    console.warn(`icon ${iconName} does not exist.`);
    return '';
  }
}

const MicroIcon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size || 16}`}
      height={`${props.size || 16}`}
      viewBox="0 0 1024 1024"
    >
      <path style={styles.path} d={getPath(props.icon)}></path>
    </svg>
  )
};

export default MicroIcon;