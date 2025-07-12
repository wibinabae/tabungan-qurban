'use client';
import { useParams } from 'next/navigation';

const DynamicPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default DynamicPage;
