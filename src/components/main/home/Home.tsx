import * as React from 'react';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className='container'>
      <h2>Hello there, user!</h2>
      <p>Go to <b>My memos</b> to start.</p>
      <h2 style={{marginTop: '2rem'}}>You have no pending memos. Yay!</h2>
      <p>It seems you're good to go.</p>
    </div>
  );
};

export default Home;
