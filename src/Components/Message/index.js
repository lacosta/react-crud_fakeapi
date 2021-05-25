// @packages
import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

// @own
import './index.scss';

function Message({ message, bgColor }) {
  return (
    <div className={cn('message',
      {[`message--background-${bgColor}`]: bgColor}
    )}>
      <p>{message}</p>
    </div>
  )
}

Message.propTypes = {
  bgColor: PropTypes.string,
  message: PropTypes.string,
};

export default Message;
