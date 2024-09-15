import { link } from 'fs';

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Experience', link: '#experience' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title:
      'A passionate lifelong learner with a keen interest in software engineering and business.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full opacity-30',
    titleClassName: 'justify-end',
    img: '/about-dream.webp',
    spareImg: '',
  },
  {
    id: 2,
    title: 'tech stacks.',
    description: 'Take a look at my',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'magic kits.',
    description: 'I build solutions using these',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },

  {
    id: 4,
    title: "I'm very flexible, I can work remotely across different timezones.",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },

  {
    id: 5,
    title: 'University of Indonesia.',
    description: 'I am currently majoring in Computer Science at the',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName:
      'absolute right-0 bottom-0 md:w-96 w-60 opacity-30 rounded-3xl',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/ui-logo.webp',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'TVRI News Reporting App',
    des: "TVRI News Reporting App is a Flutter app designed to streamline news reporting, delivering real-time updates from TVRI, Indonesia's national television network. The app aims to empower TVRI journalists and reporters to capture, edit, and publish news reports and tasks efficiently.",
    img: '/no-image.jpeg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Mobile Bansos App - Ditjen Pembendaharaan',
    des: 'Mobile Bansos is a Flutter app developed for Ditjen Pembendaharaan (Directorate General of Treasury) to streamline the distribution and management of social assistance (bansos) in Indonesia. Built with a focus on accessibility, efficiency, and security.',
    img: '/no-image.jpeg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '',
  },
  {
    id: 3,
    title: 'Bikun Tracker Mobile',
    des: 'Bikun Tracker is a Flutter mobile app aimed at University of Indonesia students to keep track of the mobilization of Bis Kuning (Bikun) so they can be alerted if a Bikun is nearby. Developed several features consists of location recentering, halte list, reports, and bikun alert.',
    img: '/bikun-tracker.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '',
  },
  {
    id: 4,
    title: 'HouseSpot',
    des: 'HouseSpot is Kotlin-based mobile app designed to simplify homeownership in Indonesia by providing tools for estimating house prices, connecting with reliable vendors, and discovering related home products and services.',
    img: '/no-image.jpeg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '',
  },
  {
    id: 5,
    title: 'Ulas Kelas',
    des: 'A Flutter-based application that provides reviews of courses at Fasilkom UI. This application helps Fasilkom UI students choose and consider the class to be taken before the IRS filing period begins. My contribution to the project are maintaining the project while solving minor bugs such as rendering overflow issues.',
    img: '/ulas-kelas.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '',
  },
  {
    id: 6,
    title: 'FKG International Info Page',
    des: "Developed and deployed a website to showcase information on the Faculty of Dentistry at Universitas Indonesia for international students, while leading a team of over three developers. This project was primarily built using React.js and Tailwind CSS and hosted on Niagahoster's platform.",
    img: '/fkg-io.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '',
  },
  {
    id: 7,
    title: 'Questify',
    des: "A startup project that aims to empower academic community engagement through a redefined prize-based questionnaire. The startup consists of six individuals who aim to solve Fasilkom's questionnaire participation issues while ensuring fair and transparent prize distribution.",
    img: '/questify.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Software Developer Intern',
    desc: 'Focused on software development, supporting the IT Application Delivery work unit in their projects.',
    company: 'PT Bank Mandiri (Persero) Tbk.',
    className: 'md:col-span-2',
    thumbnail: '/mandiri.png',
  },
  {
    id: 2,
    title: 'Mobile Development Cohort',
    company: 'Bangkit Academy 2024',
    desc: 'Gained hands-on team experience in building Android mobile applications, demonstrated in HouseSpot mobile app. Also specialized in entrepreneurship program.',
    className: 'md:col-span-2',
    thumbnail: '/bangkit.png',
  },
  {
    id: 3,
    title: 'Teaching Assistant',
    desc: 'Mentored student groups across multiple courses; Human-Computer Interaction (HCI), Foundation of Programming I, and Foundation of Programming II. Guided over 40 students, developed lab assignments, evaluated projects, and provided personalized one-on-one support to enhance their understanding of core concepts and methodologies. Helped students achieve academic excellence, such as earning the highest scores in their class, while ensuring all work aligned with rigorous academic standards.',
    company: 'Faculty of Computer Science, Universitas Indonesia',
    className: 'md:col-span-2',
    thumbnail: '/fasilkom.jpeg',
  },
];

export const organizationalExperience = [
  {
    id: 1,
    company: 'RISTEK Fasilkom UI',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    title: 'Lead Mobile Developer',
    className: 'md:col-span-2',
    thumbnail: '/ristek.jpeg',
  },
  {
    id: 2,
    company: 'FUKI Fasilkom UI',
    desc: "Managing the organization's digital infrastructure. Oversaw the development and maintenance of IT projects, including FUKI Main Website.",
    title: 'Director of IT Force',
    className: 'md:col-span-2',
    thumbnail: '/fuki.png',
  },
  {
    id: 3,
    title: 'Visual Designer',
    desc: 'Tackled the challenges of creating visual designs for marketing materials and web assets over 11-months period.',
    company: 'Compfest',
    className: 'md:col-span-2',
    thumbnail: '/compfest.jpeg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/achievagemilang',
  },
  {
    id: 2,
    img: '/medium.svg',
    link: 'https://medium.com/@achievafuturagemilang',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/achieva-futura-gemilang/',
  },
  {
    id: 4,
    img: '/linktree.svg',
    link: 'https://www.linktr.ee/achieva.futura',
  },
];
