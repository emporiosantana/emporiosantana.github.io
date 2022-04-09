import React from 'react'

const Menu = ({ name, srcIcon, description, section }) => {
  return (
    <a href={`#${section}`}>
      <div className="menu_itens">
        <img src={srcIcon} alt={description} aria-label={description} title={description} className='icones_menu' />
        <h2 className="nome_menu" aria-label={name} title={name}>{name}</h2>
      </div>
    </a>
  )
}

export default Menu