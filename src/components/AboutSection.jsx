import React from 'react'
import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer & Marketing</h3>

            <p className='text-muted-foreground'>
              As a fresher in the tech industry, I have quickly gained hands-on experience working with
              modern development tools and frameworks. I have worked with React for building dynamic,
              responsive front-end interfaces, and Django for creating robust back-end solutions. With a
              focus on user experience and performance optimization, I have built web applications that
              are both functional and visually appealing.
            </p>
            <p className='text-muted-foreground'>
              As a fresher in the tech industry, I have quickly gained hands-on experience working with
              modern development tools and frameworks. I have worked with React for building dynamic,
              responsive front-end interfaces, and Django for creating robust back-end solutions. With a
              focus on user experience and performance optimization, I have built web applications that
              are both functional and visually appealing.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                Get In Touch
              </a>

              <a href="" className='px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300'>
                Download CV
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4 '>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left '>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>
                    Creating responsive websites and
                    web apllications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4 '>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left '>
                  <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                  <p className='text-muted-foreground'>
                    Designing intuitive user interface and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4 '>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left '>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p className='text-muted-foreground'>
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
