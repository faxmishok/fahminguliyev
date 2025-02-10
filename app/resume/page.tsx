import MainLayout from 'app/components/layouts/main-layout';
import React from 'react';

export const metadata = {
  title: 'Resume',
  description: 'Resume - Fahmin Guliyev',
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Resume
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Here is my Resume.</p>
      </div>
      <div className="w-full h-screen">
        <iframe src="/static/resume.pdf" title="My Resume" className="w-full h-full border-0" />
      </div>
    </MainLayout>
  );
}
