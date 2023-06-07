import {
  QueryClient,
  Hydrate,
  dehydrate,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});

const getQueryKeys = (baseKey: string) => {
  return {
    all: [baseKey],
    many: (params: Record<string, unknown>) => [
      baseKey,
      params,
    ],
    one: (id: string) => [baseKey, id],
  };
};

const queryKeys = {
  auth: {
    authUser: ['auth-user'],
  },
  jobs: getQueryKeys('jobs'),
  organizations: {
    one: getQueryKeys('organizations').one,
  },
};

export { queryClient, Hydrate, dehydrate, queryKeys };
