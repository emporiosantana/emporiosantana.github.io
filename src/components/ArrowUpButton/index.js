const HIDE_CLASS = ' arrow-hide';

const ArrowUp = ({ visible = true, href, description }) => {
  return (
    <a className={`back-to-top${!visible ? HIDE_CLASS : ''}`} href={href}>
      <img className="arrow" src="./images/upArrow.png" alt={description}></img>
    </a>
  )
}

export { HIDE_CLASS };

export default ArrowUp;