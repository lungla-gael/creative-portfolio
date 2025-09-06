import React from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";


const AboutDetails = () => {
  const skillIcons = ['react', 'nextjs', 'typescript', 'threejs',
    'tailwind', 'sass','graphql','cypress', 'npm', 'yarn', 'atam',
    'firebase', 'mysql', 'python', 'flask', 'ruby', 'spring', 'anaconda',
    'windows', 'ubuntu', 'kali', 'javascript', 'css', 'html', 'discord',
    'pycharm', 'vscode', 'git', 'github', 'vercel', 'bootstrap', 'selenium',
    'sublime', 'sqlite', 'powershell', 'pnpm', 'postman', 'mongodb',
    'java', 'nodejs', 'linkedin', 'gitlab', 'eclipse', 'bash', 'aws'
];
  const iconString = skillIcons.join(',');
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-8 w-full'>
            <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                <h2 className="text-2xl text-left w-full capitalize">
                    Architect of Enchantment
                </h2>
                <p className="font-light">                   
                    As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-4 text-[rgb(var(--accent))] '}>
                <p className='font-semibold text-5xl w-full text-left'>
                    25+ <sub className="font-semibold text-base">clients</sub>
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-4 text-[rgb(var(--accent))] '}>
                <p className='font-semibold text-5xl w-full text-left'>
                    4+ <sub className="font-semibold text-base">years of experiencce</sub>
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-4 !p-0'}>
              <Image 
                className="w-full h-auto"
                alt="Lungla Gael"
                loading="lazy"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=lungla-gael&langs_count=7&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&show_icons=true&icon_color=FEFE58&text_bold=false"
              />  
            </ItemLayout>

            <ItemLayout className={'col-span-8 !p-0'}>
              <Image 
                className="w-full h-auto"
                alt="Lungla Gael"
                loading="lazy"
                src="https://github-readme-stats.vercel.app/api?username=lungla-gael&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
              />  
            </ItemLayout>

            <ItemLayout className={'col-span-full'}>
              <Image 
                className="w-full h-auto"
                alt="Lungla Gael"
                loading="lazy"
                src={`https://skillicons.dev/icons?i=${iconString}`}
              />  
            </ItemLayout>

            <ItemLayout className={'col-span-6 !p-0'}>
              <Image 
                className="w-full h-auto"
                alt="Github Streak"
                loading="lazy" 
                src="https://github-readme-streak-stats.herokuapp.com?user=lungla-gael&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE58&currStreakLabel=FEFE58"/>
            </ItemLayout>

            <ItemLayout className={'col-span-6 !p-0'}>
              <Image 
                className="w-full h-auto"
                alt="Lungla Gael"
                loading="lazy"
                src={`https://github-readme-stats.vercel.app/api/pin/?username=lungla-gael&repo=my_portfolio&langs_count=7&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&show_icons=true&icon_color=FEFE58&text_bold=false&description_lines_count=2`}
              />  
            </ItemLayout>
        </div>
    </section>
  )
}

export default AboutDetails