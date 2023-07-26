import Image from 'next/image';
import dashboardImage from '../assets/executive-dashboard2.jpg'

export default function Dashboard() {
  return (
    <div className='w-[100%] flex items-center justify-center'>
      <Image
        src={dashboardImage}
        alt='Engineering Dashboard'
        width={1500}
        height={1500}
        className='w-[80%]'
        priority={true}
      />
    </div>
  );
}