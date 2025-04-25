const Header = () => {
  return (
    <header>
      <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
          <a className="active" href="#home">Recipe</a>
          <a href="#contact">A Little Bit of History</a>
        </div>
      </div>
    </header>
  );
}; 

export default Header;