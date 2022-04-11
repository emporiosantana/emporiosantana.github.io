import { render, screen } from "@testing-library/react";
import MenuIcon from ".";

describe('MenuIcon', () => { 
  it('should render logo image', () => {
    render(
      <MenuIcon 
        name="menu name"
        srcIcon="./icon.svg"
        description="menu name icon"
        section="my-section"
      />
    )

    expect(screen.getByRole('img', { name: 'menu name icon' })).toBeVisible();
  })

  it('should render menu name', () => {
    render(
      <MenuIcon 
        name="menu name"
        srcIcon="./icon.svg"
        description="menu name icon"
        section="my-section"
      />
    )

    const menuItemName = screen.getByRole('heading', { name: 'menu name' });

    expect(menuItemName).toBeVisible();
    expect(menuItemName).toHaveTextContent('menu name');
  })

  it('should go to section when hit the icon', async () => {
    render(
      <MenuIcon 
        name="menu name"
        srcIcon="./icon.svg"
        description="menu name icon"
        section="my-section"
      />
    );

    const linkToSection = screen.getByRole('link');

    expect(linkToSection).toBeVisible();
    expect(linkToSection).toHaveAttribute('href', '#my-section');
  })
 })