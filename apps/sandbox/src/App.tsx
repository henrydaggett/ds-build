import { ButtonPlayground } from './pages/ButtonPlayground';

export default function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">ds-build</span>
          <span className="brand-tag">Sandbox</span>
        </div>
        <nav className="nav" aria-label="Components">
          <a className="nav-item" aria-current="page" href="#button">
            Button
          </a>
        </nav>
      </header>
      <main className="content">
        <ButtonPlayground />
      </main>
    </div>
  );
}
