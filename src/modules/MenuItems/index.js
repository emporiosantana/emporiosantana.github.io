import MenuItem from "../../components/MenuItem";

const MenuItems = ({ items }) => {
  return (
    <div className="full_menu">
      <div className="menu">
        {items.map(menuItem => (
          <MenuItem
            srcIcon={menuItem.srcIcon}
            description={menuItem.description}
            name={menuItem.name}
            section={menuItem.section}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuItems;