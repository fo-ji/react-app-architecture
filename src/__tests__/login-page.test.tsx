import LoginPage from '@/pages/auth/login';
import {
  act,
  appRender,
  screen,
  userEvent,
  waitFor,
} from '@/testing/test-utils';

const router = {
  replace: jest.fn(),
  query: {},
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

describe('Login Page', () => {
  it('should login the user into the dashboard', async () => {
    appRender(<LoginPage />);

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    const passwordInput =
      screen.getByLabelText(/password/i);

    const submitButton = screen.getByRole('button', {
      name: /log in/i,
    });

    const credentials = {
      email: 'user1@test.com',
      password: 'password',
    };

    act(() => {
      userEvent.type(emailInput, credentials.email);
      userEvent.type(passwordInput, credentials.password);

      userEvent.click(submitButton);
    });

    await waitFor(() =>
      expect(router.replace).toHaveBeenCalledWith(
        '/dashboard/jobs'
      )
    );
  });
});
