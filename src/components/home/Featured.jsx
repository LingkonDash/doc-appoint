import getFeaturedDoc from '@/lib/api/getFeaturedDoc';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DoctorCard from '../shared/DoctorCard';
import getJwtToken from '@/lib/getJwtToken';

const Featured = async () => {
  const data = await getFeaturedDoc();
  const featuredData = data.data;

  return (
    <section className="my-16 px-10 max-w-380 mx-auto">

      {/* ── Header row ── */}
      <div className="md:flex items-end justify-between mb-8">
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-widest mb-2"
            style={{ color: "rgba(36,59,66,0.5)" }}
          >
            Our specialists
          </p>
          <h2 className="text-[28px] font-bold text-primary leading-tight mb-2">
            Meet our Expert Doctors
          </h2>
          <p
            className="text-[14px] max-w-105 leading-relaxed"
            style={{ color: "rgba(13,13,13,0.5)" }}
          >
            Highly experienced doctors and specialists committed to your health journey.
          </p>
        </div>

        <Link
          href="/appointments"
          className="mt-5 md:mt-0 inline-flex items-center gap-2 text-[13px] font-medium text-primary border-[1.5px] border-primary px-5 py-2 rounded-full opacity-80 hover:opacity-100 transition-opacity shrink-0"
        >
          See all doctors <ArrowRight size={14} />
        </Link>
      </div>

      {/* ── Cards grid ── */}
      {
        !data.success ? <div className='text-center py-10 text-red-400 '>Something went wrong while fetching featured data please contact support... <br /> error message: <span className='font-medium'>{`{ ${data.message} }`}</span></div>
          :
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredData.map((doc) => (
              <DoctorCard key={doc._id} data={doc} />
            ))}
          </div>
      }

    </section>
  );
};

export default Featured;