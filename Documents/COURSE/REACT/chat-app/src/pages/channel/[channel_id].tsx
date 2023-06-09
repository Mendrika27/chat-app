import React from 'react';
import { useRouter } from 'next/router';

const Channel: React.FC = () => {
  const router = useRouter();
  const { channel_id } = router.query;

  return <div>Messages du canal {channel_id}</div>;
};

export default Channel;
