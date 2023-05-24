import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import type { Job, CreateJobData } from '../types';

type CreateJobOptions = {
  data: CreateJobData;
};

export const createJob = ({
  data,
}: CreateJobOptions): Promise<Job> => {
  return apiClient.post(`/jobs`, data);
};

type UseCreateJobOptions = {
  // MEMO: リクエストが成功した場合に呼び出すオプションのコールバックを受け入れる。
  //       例）通知表示、リダイレクト、APIリクエストに直接関係しないことを行う場合に利用
  onSuccess?: (job: Job) => void;
};

export const useCreateJob = ({
  onSuccess,
}: UseCreateJobOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createJob,
    onSuccess: (job) => {
      queryClient.invalidateQueries(['jobs']);
      onSuccess?.(job);
    },
  });

  return { submit, isLoading };
};
