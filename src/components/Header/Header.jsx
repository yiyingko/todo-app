import iconSun from '../../assets/images/icon-sun.svg';
import './Header.css';

export default function Header() {
  return (
    <>
      <header className="hero">
        <div className="hero__wrapper">
          <h1>TODO</h1>
          <img src={iconSun} alt="sun-icon" className="hero__icon" />
        </div>
      </header>
    </>
  );
}
