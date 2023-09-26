import React, { useState, useEffect } from 'react';

import styles from './IntroScreen.scss';
import Typewriter from './Typewriter';

function IntroScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`${styles.introScreen} ${show ? '' : styles.hide}`}
      onTransitionEnd={() => setShow(false)}
    >
      <Typewriter text="Jack Hoffsten" speed={125} />
    </div>
  );
}

export default IntroScreen;
