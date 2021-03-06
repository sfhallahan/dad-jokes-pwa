import React from "react";
import PropTypes from "prop-types";

import { cardContainer, jokeText, errorText } from "./styles.css";

Card.propTypes = {
  jokeText: PropTypes.string,
  favorited: PropTypes.bool,
  dateReceived: PropTypes.number,
  error: PropTypes.string
};

export default function Card(props) {
  return (
    <div className={cardContainer}>
      {props.jokeText ? (
        <p className={jokeText} id="jokeText">{`"${props.jokeText}"`}</p>
      ) : (
        <p className={errorText} id="error">
          {props.error}
        </p>
      )}
    </div>
  );
}
