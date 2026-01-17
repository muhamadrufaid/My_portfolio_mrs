import { Description } from '@radix-ui/react-toast'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "BizCore - Invoicing App",
        description: "The smartest way to run your business",
        image: "/projects/bizcoredashboard.jpeg",
        tags: ["Python", "Django", "React", "SQL Lite", "TailwindCSS"],
        demoUrl: "https://www.linkedin.com/posts/muhamad-rufaid_im-excited-to-share-my-billing-inventory-activity-7396118586865475584-YcnT?utm_source=share&utm_medium=member_android&rcm=ACoAAFekgUYBYS5ItyW01Nvos5uRbsXA-WNr_sg",
        githubUrl: "https://github.com/muhamadrufaid/Bizcore.gen",
    },
    {
        id: 2,
        title: "GastroGrill Resturant",
        description: "Savor the Flavor of Authentic Arabic Grill",
        image: "/projects/gastrogrill.jpeg",
        tags: ["React", "Material UI", "TailwindCSS", "JavaScript"],
        demoUrl: "https://www.linkedin.com/posts/muhamad-rufaid_gastrogrill-reactjs-materialui-activity-7402360443849125888-Ge_3?utm_source=share&utm_medium=member_android&rcm=ACoAAFekgUYBYS5ItyW01Nvos5uRbsXA-WNr_sg",
        githubUrl: "https://github.com/muhamadrufaid/react-restaurant-web",
    },
    {
        id: 3,
        title: "TaskPRO - Task manager",
        description: "Make a Proper Habbit",
        image: "/projects/taskpro.jpeg",
        tags: ["Python", "Django", "React", "MySQL", "JWT Auth", "TailwindCSS"],
        demoUrl: "https://www.linkedin.com/posts/muhamad-rufaid_taskpro-fullstackdeveloper-reactjs-activity-7400247424277057536-nlE5?utm_source=share&utm_medium=member_android&rcm=ACoAAFekgUYBYS5ItyW01Nvos5uRbsXA-WNr_sg",
        githubUrl: "https://github.com/muhamadrufaid/task-manager",
    },
    {
        id: 4,
        title: "StayEase",
        description: "The Future of Hotel Booking",
        image: "/projects/stayEaseThumbnail.jpeg",
        tags: ["Python", "React", "SQL Lite", "Web Auth", "TailwindCSS"],
        demoUrl: "https://www.linkedin.com/posts/muhamad-rufaid_python-django-djangorestframework-activity-7408439223076192256-uGJm?utm_source=share&utm_medium=member_android&rcm=ACoAAFekgUYBYS5ItyW01Nvos5uRbsXA-WNr_sg",
        githubUrl: "https://github.com/muhamadrufaid/StayEaseBooking",
    },
    {
        id: 5,
        title: "Memory Game",
        description: "Boost Your Memory Through Practice",
        image: "/projects/memory-game.jpeg",
        tags: ["HTML5", "CSS3", "React", "TailwindCSS"],
        demoUrl: "https://www.linkedin.com/posts/muhamad-rufaid_reactjs-frontenddevelopment-javascript-activity-7407703293797470208-Zo5l?utm_source=share&utm_medium=member_android&rcm=ACoAAFekgUYBYS5ItyW01Nvos5uRbsXA-WNr_sg",
        githubUrl: "https://github.com/muhamadrufaid/react-memory-game",
    },
    {
        id: 6,
        title: "Weather API",
        description: "Stay Updated with Real-Time Weather",
        image: "/projects/weather-api.jpeg",
        tags: ["React", "HTML5", "CSS3", "TailwindCSS"],
        demoUrl: "https://www.linkedin.com/posts/muhamad-rufaid_reactjs-tailwindcss-openweathermap-activity-7399341652500287488-JPk7?utm_source=share&utm_medium=member_android&rcm=ACoAAFekgUYBYS5ItyW01Nvos5uRbsXA-WNr_sg",
        githubUrl: "https://github.com/muhamadrufaid/weather-app-react",
    }

]

const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className='container mx-auto max-w-5xl'>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured
                    <span className='text-primary'>Projects</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent project was carefully crafted with
                    attention to detail,performance,and user experience
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' />
                            </div>
                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>{tag}</span>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                                <div className='flex justify-between items-center'>

                                    <div className='flex space-x-3'>
                                        <a href={project.demoUrl}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <Github size={20} />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='text-center mt-12'>

                    <a href="https://github.com/muhamadrufaid"
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check My Github <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
