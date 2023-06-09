import React from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    const userData = localStorage.getItem('user');

    if (userData) {
      router.push('/channel');
    } else {
      router.push('/signup');
    }
  }, []);

  return <div>Accueil</div>;
};

export default Home;
