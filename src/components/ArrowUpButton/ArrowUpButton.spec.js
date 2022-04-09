import { render, screen } from "@testing-library/react";
import ArrowUp, { HIDE_CLASS } from ".";

describe('ArrowUp', () => { 
  it('should be visible given visible as true', () => {
    render(
      <ArrowUp 
        visible
        href="./go-to-url"
      />
    );

    expect(screen.getByRole('link')).not.toHaveClass(HIDE_CLASS);
  })

  it('should not be visible given visible as false', () => {
    render(
      <ArrowUp 
        visible={false}
        href="./go-to-url"
      />
    );

    expect(screen.getByRole('link')).toHaveClass(HIDE_CLASS);
  })

  it('should has href attribute', () => {
    render(
      <ArrowUp 
        visible
        href="./go-to-url"
      />
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', './go-to-url');
  })
 })