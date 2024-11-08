export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize team collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    // TODO: maybe change this to something better
    id: 2,
    title: "I am a self-starter, fast learner and capable of tackling any challenge.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-left",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast who thrives in a remote environment.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building JS web applications",
    description: "Latest in my development world",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to reach out?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// TODO
export const projects = [
  {
    // bookstore
    id: 1,
    title: "Bookstore App",
    des: "Browse books from various authors, complete purchases, and more. Admins get special access to analytical insights.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/UkrainianProgrammer/bookstore",
  },
  {
    // market
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/UkrainianProgrammer/Market",
  },
  {
    // video2mp3
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/UkrainianProgrammer/video2mp3",
  },
  {
    // TODO-API
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/UkrainianProgrammer/TODO-API",
  },
];

// This comes from LinkedIn
export const testimonials = [
  {
    quote:
      "Oleks is extremely proficient in software engineering, but that's only one aspect of his skill set. He has the critical ability of taking a high-level problem statement and breaking it down into multi-layer components and creating a solution that covers various corner cases. He is curious and collegial. His documentation and presentation skills are A+ grade. He is a valuable asset in any engineering team. It has been a pleasure working with him in multiple MAC-layer features at Viasat.",
    name: "Kaushik Charkaborty",
    title: "Lead Systems Engineer",
  },
  {
    quote:
      "I had the pleasure of working with Olek at Viasat. He is a detail-oriented software engineer, willing to step up and take on challenging tasks. He is always willing to help and willing to learn. He provided excellent presentations on features he developed. With his interpersonal and technical skills, Olek will be a good asset to any software organization.",
    name: "Uma Paranjape",
    title: "Senior Software Engineer",
  },
];

export const companies = [
  {
    id: 1,
    name: "Microsoft Azure",
    img: "/azure.svg"
  },
  {
    // k8s
    id: 2,
    name: "k8s",
    img: "/k8s.svg"
  },
  {
    id: 3,
    name: "Docker",
    img: "/dock.svg"
  },
  {
    id: 4,
    name: "NextJS",
    img: "/next.svg"
  },
  {
    id: 5,
    name: "PostgreSQL",
    img: "/postgresql.svg"
  },
];

export const workExperience = [
  {
    //TODO: Viasat's internshop but make it last
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Designed, developed, and deployed a cross-platform mobile application written in React Native which is still being used today by 150,000+ customers.",
    className: "md:col-span-2",
    thumbnail: "/viasat.svg",
  },
  {
    // TODO: Current Position
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    // TODO: Viasat's software engineering position
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    // TODO: Viasat's leadership position
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    // TODO: Airbnb
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];