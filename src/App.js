import React from 'react';
import './App.css'; // Import du fichier CSS
import PlayersList from './PlayersList';

   function App() {
     return (
       <div className="App">
         <h1>Football Players</h1>
         <PlayersList />
       </div>
     );
   }

export default App;
