import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Switch from 'react-switch';
import { ThemeContext } from 'utils/context';

import { DarkIcon, LightIcon } from './Toggle.styles';

const Toggle = (): ReactElement => {
  const themeState = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    if (nextChecked) {
      themeState.setTheme('dark');
    } else {
      themeState.setTheme('light');
    }
  };
  useEffect(() => {
    if (themeState.theme === 'light') {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [themeState.theme]);
  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      uncheckedIcon={
        <LightIcon>
          <FiSun />
        </LightIcon>
      }
      checkedIcon={
        <DarkIcon>
          <FiMoon />
        </DarkIcon>
      }
    />
  );
};

export default Toggle;
