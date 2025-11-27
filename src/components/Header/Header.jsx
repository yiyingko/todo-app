import iconMoon from '../../assets/images/icon-moon.svg';

export default function Header() {
  return (
    <>
      <header>
        <div className="header__wrapper">
          <h1>To Do</h1>
          <img src={iconMoon} alt="dark-mode-icon" />
        </div>
      </header>
    </>
  );
}
