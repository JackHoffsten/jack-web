import React from 'react';

import styles from './Navbar.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <a className={styles.listItem} href="#">Home</a>
        </li>
        <li>
          <a className={styles.listItem} href="#">Contact</a>
        </li>
        <li>
          <a className={styles.listItem} href="#">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
