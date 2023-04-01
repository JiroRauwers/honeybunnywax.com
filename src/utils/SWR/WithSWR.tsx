import { NextPage } from 'next';
import { FC } from 'react';

import { SWRConfig } from 'swr';

import { fetcher } from 'utils/SWR';

function WithSWR<T extends { props: { fallback: { [key: string]: unknown } } }>(
  Page: NextPage<T | unknown> | FC<T | unknown> | FC | NextPage
) {
  const res = ({ fallback }: T['props']) => (
    <SWRConfig value={{ fallback, fetcher }}>
      <Page />
    </SWRConfig>
  );

  res.displayName = Page.displayName;
  return res;
}

export default WithSWR;
