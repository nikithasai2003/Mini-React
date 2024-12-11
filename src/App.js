// import logo from './logo.svg';
// import './App.css';
// import land from './pages/landing'

// function App() {
//   return (

// <routes>
//     <route path="/home" element={<land/>}/>

// </routes>
//   );
// }

// export default App;

import React from "react";
import Stopwatch from "./pages/landing"; // Ensure this path is correct based on your project structure

const App = () => {
  return (
    <div>
      <h1 style={styles.header}>Stopwatch</h1>
      <Stopwatch />
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center",
    margin: "20px 0",
    fontFamily: "Arial, sans-serif",
    color: "#007BFF",
  },
};

export default App;

