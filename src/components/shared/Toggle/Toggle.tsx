import React, { ReactElement, useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Switch from 'react-switch';

import Darkmode from '../Darkmode/Darkmode';
import { DarkIcon, LightIcon } from './Toggle.styles';

const Toggle = (toggleTheme: () => void): ReactElement => {
  const [themeToggler] = Darkmode();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (themeToggler === 'light') {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [themeToggler]);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    toggleTheme();
  };
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
