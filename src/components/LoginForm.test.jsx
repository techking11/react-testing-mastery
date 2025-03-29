import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event';

/* eslint-disable no-undef */
describe('LoginForm Component', () => {
  test('Submit form data correctly', async () => {
    const handleSubmit = vi.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    // Fill out form
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(emailInput, 'test123@gmail.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(submitButton);

    // Verify the submission
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test123@gmail.com',
      password: 'password123',
    });
  });
});
