import React from 'react';
import classes from './Home.scss';

class Home extends React.Component {
  render() {
    return (
        <div className={classes.Home}>
          <header className={classes.HomeHeader}>
            <h1 className={classes.HomeTitle}>Home Header</h1>
          </header>
            <div>
                Home Page
            </div>
        </div>
    );
  }
}

export default Home;
