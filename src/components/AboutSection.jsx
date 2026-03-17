import React from 'react'
import { Briefcase, Code, User, Computer } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer & IT Specialist</h3>

            <p className='text-muted-foreground'>
              As a Full Stack Developer and IT Specialist, I have hands-on experience with modern tools and frameworks like Python,
              Django, React, MySQL, and WordPress. I specialize in building dynamic, responsive front-end interfaces with React and
              robust back-end solutions with Django. Additionally, I leverage Microsoft tools like Excel, Word, and Outlook to
              streamline IT operations and enhance productivity. My focus is on creating functional, visually appealing web applications
              while ensuring optimal performance and a seamless user experience.
            </p>
            <p className='text-muted-foreground'>
              Alongside my development skills, I have a strong passion for design, focusing on creating intuitive user interfaces and
              engaging user experiences. Throughout my projects, I’ve refined my ability to work efficiently across both front-end and
              back-end development, ensuring seamless integration and delivering fully functional, responsive applications.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                Get In Touch
              </a>

              <a href="#" className='px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300'>
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
                  <Computer className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left '>
                  <h4 className='font-semibold text-lg'>IT Operations</h4>
                  <p className='text-muted-foreground'>
                    Optimizing IT operations and MS tools for streamlined workflows and productivity.
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
                  <h4 className='font-semibold text-lg'>Web Desgin</h4>
                  <p className='text-muted-foreground'>
                    Designing intuitive user interface and seamless user experiences.
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
