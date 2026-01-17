import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <section id="hero"
            className='relative min-h-screen flex flex-col items-center justify-center px-4'
        >
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> Muhamad</span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Rufaid</span>
                    </h1>
                    <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        A proficient Full Stack Web Developer with a solid foundation in web design, software development, and graphic
                        design. Leveraging expertise in both front-end and back-end technologies, I specialize in building advanced
                        web applications, such as billing systems, using React, Tailwind CSS, and Django, with a focus on delivering
                        scalable, high-performance solutions.
                    </p>

                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href="#projects" className='cosmic-button'>
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className='h-5 w-5 text-primary' />
            </div>

        </section>
    )
}

export default HeroSection
