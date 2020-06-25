import React from 'react';
import Proptypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.element.isRequired,
};

export default Section;
