import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryKeys } from '@/lib/react-query';

import type { AuthUser } from '../types';

export const getAuthUser = (): Promise<AuthUser> => {
  return apiClient.get('/auth/me');
};

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.auth.authUser,
    queryFn: () => getAuthUser(),
  });

  return { data, isLoading };
};
