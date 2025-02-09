import Image from 'next/image';

export default function Occupation() {
  return (
    <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
      <div className="text-left">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Fahmin Guliyev</h1>
        <h2 className="text-sm font-normal md:text-base">Software Developer</h2>
      </div>
      <div>
        <Image
          alt="Fahmin Guliyev"
          height={200}
          width={200}
          src="/static/images/avatar.JPEG"
          className="rounded-full object-scale-down grayscale"
        />
      </div>
    </div>
  );
}
