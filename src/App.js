import './App.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import { useState } from 'react';
function App() {
  const [category,setCategory] = useState("general")
  return (
    <div className="App">
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  );
}

export default App;
