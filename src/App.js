import logo from './png.png';
import './App.css';
// import Button  from './Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My name is Ikram!</h1>
        <h2>I'm from Morocco and I live in the Netherlands</h2>
        <h3>My favourit sport is beach volleyball</h3>
        {/* <Button message="And again another message"/>  */}
        {/* <h2>
          VolleyBall
        </h2>
        <p>
          <strong>Volleyball</strong> is a team sport in which <em>two teams of six players</em> are separated by a net.
          Each team tries to score points by grounding a ball on the other team's court under organized rules.
        </p>
        <ol>
          <li>Three players in the front near the net and three in the back</li>
          <li>A maximum of three hits per side</li>
          <li>A block is not considered a hit</li>
        </ol>
        <p>I enjoy it because it requires team-work and that skill is very importante in all life aspects</p> */}

        {/* <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Volleyball"
          target="_blank"
          rel="noopener noreferrer"
        >
          VolleyBall
        </a> */}
      </header>
    </div>
  );
}

export default App;
