import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import classNames from "classnames";

/**
 * Interactive component. A multi-purpose button that changes appearance on hover.
 */

export function Button({ onClick, text, img, className }) {
  return (
    <button
      type="button"
      className={classNames(styles.btn, className, {
        [styles.flex]: img,
      })}
      onClick={onClick}
    >
      {img && (
        <div className={`${styles.imageDiv} ${styles.flex}`}>
          <img src={img} alt="Button icon" className={styles.img} />
        </div>
      )}

      <div className={styles.text}>{text}</div>
    </button>
  );
}

Button.propTypes = {
  /**
   * Function that fires on button click.
   */
  onClick: PropTypes.func,

  /**
   * String that can alter style.
   */
  className: PropTypes.string,
  /**
   * An optional string for the button text. .
   */
  text: PropTypes.string,
  /**
   * An optional source for a button icon.
   */
  img: PropTypes.string,
};
