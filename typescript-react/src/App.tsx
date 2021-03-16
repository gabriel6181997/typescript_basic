import React, {useState} from 'react';
import {Hello} from './components/hello'

function App() {
  const [name, setName] = useState<string | null>('Peter');

  return (
    <div>
      <Hello message={`I am ${name}`}/>
    </div>
  );
}

export default App;
