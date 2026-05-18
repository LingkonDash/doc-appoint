import getFeaturedDoc from '@/lib/api/getFeaturedDoc';
import React from 'react';
import DoctorCard from '../shared/DoctorCard';

const Featured = async () => {
  const data = await getFeaturedDoc()
  const featuredData = data.data

  console.log(featuredData);
  return (
    <section className='my-10'>
      <h2>Meet our Expert Doctors</h2>
      <p>Highly experienced doctors and specialist committed to your health journey.</p>

      <div>
        {
          featuredData.map(data => <DoctorCard key={data._id} data={data}/>)
        }
      </div>
    </section>
  );
};

export default Featured;