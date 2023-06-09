import React from 'react';
import { useRouter } from 'next/router';

const Message: React.FC = () => {
  const router = useRouter();
  const { user_id } = router.query;

  return <div>Messages avec l'utilisateur {user_id}</div>;
};

export default Message;
