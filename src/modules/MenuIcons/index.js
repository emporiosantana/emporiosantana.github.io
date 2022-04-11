import MenuIcon from "../../components/MenuIcon";

const MenuIcons = ({ items }) => {
  return (
      <div className="menu">
        {items.map(menuItem => (
          <MenuIcon
            srcIcon={menuItem.srcIcon}
            description={menuItem.description}
            name={menuItem.name}
            section={menuItem.section}
          />
        ))}
      </div>
  )
}

export default MenuIcons;