import React from 'react';
import { connect } from 'react-redux';

interface HorizontalScrollProps {
  // Define props here. For instance:
  // myProp?: string;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = (props) => {
  return (
    <div>HorizontalScroll</div>
  );
}

const mapStateToProps = (state: any) => {
  // Define state to props mapping here
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalScroll);
