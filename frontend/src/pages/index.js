import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/ai-catalog');
  }, [router]);

  // Show nothing while redirecting
  return null;
}
