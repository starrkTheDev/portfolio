import React from 'react';
import GreetingPage from './components/GreetingPage';
import projects from "./data/projectsData";

const App: React.FC = () => {

  return (
    <div>
      <GreetingPage projects={projects} />
    </div>
  );
}

export default App;
