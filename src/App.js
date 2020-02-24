import React from "react";

function Header(name = "Fabio") {
  return (
    <div>
      <h1>Welcome to Codaisseur</h1>
      <h2>My name is {name}</h2>
      <p>Dit is een beetje raar</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Biagio" />
    </div>
  );
}

export default App;
