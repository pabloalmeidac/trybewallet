import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, name, value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          {id}
          <input
            type="text"
            name={ name }
            id={ id }
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
