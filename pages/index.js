import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[#161413] min-h-screen'>
      <Image
        src='https://i.postimg.cc/ht2vDgS7/quentin.jpg'
        alt='Quentin'
        height='1365'
        width='2048'
        layout='responsive'
      />
    </div>
  );
}
