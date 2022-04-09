const Header = ({ description, srcLogo }) => {
  return (
    <header className='header' id="header">
      <img src={srcLogo} alt={description} className='logo' aria-label={description} title={description} />
      <img src="./images/ondulacao.jpeg" alt="efeito de onda" className="ondulacao" />
    </header>
  )
};

export default Header;