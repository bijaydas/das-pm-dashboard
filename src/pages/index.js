import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import {isUserLoggedIn} from '../utils/auth';

function index() {
  const router = useRouter();
  useEffect(() => {
    if (isUserLoggedIn()) {
      router.push('/home');
    } else {
      router.push('/login');
    }
  }, [isUserLoggedIn()]);
  return (
    <span>Loading...</span>
  );
}

export default index;
