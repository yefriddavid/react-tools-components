import React from 'react';
import iconPaths from './set.js';// the file exported from IcoMoon

function getPath(iconName) {
  let icon = iconPaths.icons.find(icon => icon.properties.name === iconName || icon.icon.tags[0]);

  if (icon) {
    return icon.icon.paths;
  } else {
    console.warn(`icon ${iconName} does not exist.`);
    icon = iconPaths.icons.find(icon => icon.properties.name === 'warning');
    return icon || [];
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
      {
        getPath(props.icon).map((icon_path) => {
          return <path style={styles.path} d={icon_path}></path>
        })
      }
    </svg>
  )
};

export default MicroIcon;