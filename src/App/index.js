import React from 'react';
import './style.css';
import { Button } from './Components/Button';

const App = () => {
  return (
    <div>
      <Button handleClick={() => console.log('Clicked button One!')}>
        Click Button One!
      </Button>
      <Button
        type="submit"
        handleClick={() => console.log('Clicked button Two!')}
      >
        Click Button Two!
      </Button>
    </div>
  );
};

export default App;
