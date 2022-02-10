import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const InputSearch = (props) => {
  const {
    placeholder, name, value, action,
  } = props;
  const dispatch = useDispatch();
  return (
    <Col
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      className="d-flex justify-content-center align-items-center"
    >
      <input
        type="text"
        className="search input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => dispatch(action(e.target.value))}
      />
      <button type="button" className="search btn">
        &#128269;
      </button>
    </Col>
  );
};
InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
export default InputSearch;
