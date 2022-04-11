import { render, screen } from "@testing-library/react";
import Header from ".";

describe('Header', () => {
  it('should render with logo', () => {
    render(
      <Header srcLogo="./my-logo" description="my logo description" />
    );

    expect(screen.getByRole('img', { name: 'my logo description' })).toBeVisible();
  })

  it('should contain id', () => {
    render(
      <Header srcLogo="./my-logo" description="my logo description" />
    );

    expect(screen.getByRole('banner')).toHaveAttribute('id', 'header');
  })
})