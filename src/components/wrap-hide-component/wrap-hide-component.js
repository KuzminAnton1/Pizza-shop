import React from 'react';
import MyContext from '../my-context/my-context';

const WrapHideComponent = () => (Component) => {
  return (props) => {
    return (
      <MyContext.Consumer>
        {() => {
          return <Component {...props} />;
        }}
      </MyContext.Consumer>
    );
  };
};

export default WrapHideComponent;
