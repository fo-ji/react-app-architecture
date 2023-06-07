import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import {
  queryClient,
  queryKeys,
} from '@/lib/react-query';

import type { AuthUser, LoginData } from '../types';

export const login = (
  data: LoginData
): Promise<{
  user: AuthUser;
}> => {
  return apiClient.post('/auth/login', data);
};

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
};

export const useLogin = ({
  onSuccess,
}: UseLoginOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(
        queryKeys.auth.authUser,
        user
      );
      onSuccess?.(user);
    },
  });

  return { submit, isLoading };
};
