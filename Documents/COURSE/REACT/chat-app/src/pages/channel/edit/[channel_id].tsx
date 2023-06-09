import React from 'react';
import { useRouter } from 'next/router';

const EditChannel: React.FC = () => {
  const router = useRouter();
  const { channel_id } = router.query;

  return <div>Formulaire de modification du canal {channel_id}</div>;
};

export default EditChannel;
