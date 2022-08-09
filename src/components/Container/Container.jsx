import React from 'react';
import ContainerBox from './Container.styled';
import PropTypes from 'prop-types';

const Container = ({ children }) => <ContainerBox>{children}</ContainerBox>;

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
