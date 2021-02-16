import { render } from '@testing-library/react';
import React from 'react'
import FormComponent from './Components/formComponent'

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <FormComponent/>
      </div>
    );
  }
  
}

export default App;
