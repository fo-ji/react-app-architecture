import { Heading, Stack } from '@chakra-ui/react';
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import type { ReactElement } from 'react';

import { Loading } from '@/components/loading';
import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import {
  JobsList,
  type Job,
  getJobs,
  useJobs,
} from '@/features/jobs';
import {
  getOrganization,
  OrganizationInfo,
  useOrganization,
} from '@/features/organizations';
import { PublicLayout } from '@/layouts/public-layout';
import {
  queryClient,
  dehydrate,
  queryKeys,
} from '@/lib/react-query';

type PublicOrganizationPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const PublicOrganizationPage = ({
  organizationId,
}: PublicOrganizationPageProps) => {
  const { data: organization, isLoading } =
    useOrganization({
      organizationId,
    });
  const { data: jobs } = useJobs({
    params: {
      organizationId,
    },
  });

  if (isLoading) return <Loading />;
  if (!organization) return <NotFound />;

  return (
    <>
      <Seo title={organization.name} />
      <Stack
        spacing="4"
        w="full"
        maxW="container.lg"
        mx="auto"
        mt="12"
        p="4"
      >
        <OrganizationInfo organization={organization} />
        <Heading size="md" my="6">
          Open Jobs
        </Heading>
        <JobsList
          jobs={jobs}
          organizationId={organization.id}
          type="public"
        />
      </Stack>
    </>
  );
};

PublicOrganizationPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default PublicOrganizationPage;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const organizationId = params?.organizationId as string;
  await Promise.all([
    queryClient.prefetchQuery(
      queryKeys.organizations.one(organizationId),
      () =>
        getOrganization({ organizationId }).catch(
          () => null
        )
    ),
    queryClient.prefetchQuery(
      queryKeys.jobs.many({ organizationId }),
      () =>
        getJobs({
          params: { organizationId },
        }).catch(() => [] as Job[])
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      organizationId,
    },
  };
};
