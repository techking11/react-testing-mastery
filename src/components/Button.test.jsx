import { render } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';

/* eslint-disable no-undef */
describe('Button Component', () => {
  test('renders correctly and handle click', async () => {
    const handleClick = vi.fn(); // mock fn
    render(<Button onClick={handleClick}>Click Me</Button>);

    // Check if button renders
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-primary');

    // Simulate click
    await userEvent.click(button);
    expect(handleClick).toHaveBeenTimes(1);
  });
});
