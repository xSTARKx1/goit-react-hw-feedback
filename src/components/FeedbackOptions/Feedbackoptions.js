import React from 'react';
import Proptypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  Object.keys(options).map(option => {
    const upFirstLetter = option[0].toLocaleUpperCase() + option.slice(1);

    return (
      <button
        className={styles.leaveFeedbackBtn}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {upFirstLetter}
      </button>
    );
  });

// this.value = this.value[0].toUpperCase() + this.value.slice(1);

FeedbackOptions.propTypes = {
  options: Proptypes.objectOf(Proptypes.number.isRequired).isRequired,
  onLeaveFeedback: Proptypes.func.isRequired,
};

export default FeedbackOptions;
