import './app.scss';
import dtz_logo from './images/dtz_logo.png';
import demczur_pl_logo from './images/demczur_pl_logo.png';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <a href="https://demczur.pl/" className="header-link">
          <div className="container-background left-side">
            <img
              className="logo left"
              src={demczur_pl_logo}
              alt="demczur-group-logo"
              loading="lazy"
            />
          </div>
        </a>
        <a href="https://www.dtzstudio.pl/" className="header-link">
          <div className="container-background right-side">
            <img
              className="logo right"
              src={dtz_logo}
              alt="dtz-logo"
              loading="lazy"
            />
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
