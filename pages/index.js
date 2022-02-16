import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[#161413] min-h-screen'>
      <Image
        src='https://i.postimg.cc/Y0mdjrJq/IMG-2728.jpg'
        alt='Quentin'
        height='1365'
        width='2048'
        layout='responsive'
      />
      <div className='absolute top-0 left-0 px-40 py-20'>
        <h1 className='mb-3 text-6xl font-semibold tracking-tight text-white'>
          Hello, I&apos;m Quentin
        </h1>
        <h3 className='text-2xl leading-normal text-gray-100'>
          welcome to my homepage.
        </h3>
      </div>
    </div>
  );
}
