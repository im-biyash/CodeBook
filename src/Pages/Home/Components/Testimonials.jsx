import React from 'react';
import  biyashImage  from '../../../assets/bos.jpg';
import  prijalImage  from '../../../assets/prijal.jpg';
import  anishImage  from '../../../assets/anish.jpg';
import  mirajImage  from '../../../assets/miraj.jpeg';

const teamMembers = [
    {
      id: 1,
      name: 'Biyash  Shrestha',
      role: 'Tech Lead',
      description: 'Alper leads our tech team with over a decade of experience, driving innovative solutions and ensuring project success.',
      imgSrc: biyashImage,
    },
    {
      id: 2,
      name: 'Prijal khadka',
      role: 'UI Developer',
      description: 'Prijal is a creative UI developer with a talent for crafting user-friendly and visually appealing interfaces.',
      imgSrc: prijalImage,
    },
    {
      id: 3,
      name: 'Anish karna',
      role: 'Frontend Developer',
      description: 'Anish specializes in building responsive web applications, consistently delivering high-quality code.',
      imgSrc: anishImage,
    },
    {
      id: 4,
      name: 'Meeraj adhikari',
      role: 'Backend Developer',
      description: 'Meeraj ensures the scalability and reliability of our applications with his expertise in backend technologies.',
      imgSrc: mirajImage,
    },
  ];
  

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font dark:text-slate-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" font-medium  mb-4 dark:text-slate-100 underline text-3xl">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-serif">
  Meet the talented individuals who drive our success. Our team is composed of experienced professionals dedicated to innovation, collaboration, and excellence. .
</p>

        </div>
        <div className="flex flex-wrap -m-4 ">
          {teamMembers.map(member => (
            <div className="p-4 lg:w-1/4 md:w-1/2" key={member.id}>
              <div className="h-full   flex flex-col items-center text-center hover:bg-slate-500 transform-hover hover:scale-105 transition-all duration-300 dark:text-slate-100">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover mb-4 sm:h-64 md:h-72 lg:h-64 xl:h-72 object-top sm:object-center md:object-center lg:object-center xl:object-center" src={member.imgSrc} />
                <div className="w-full">
                  <h2 className="title-font font-bold text-lg text-black dark:text-slate-100 font-italic  ">{member.name}</h2>
                  <h3 className="mb-3 text-red-500 text-xl">{member.role}</h3>
                  <p className="mb-4">{member.description}</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
