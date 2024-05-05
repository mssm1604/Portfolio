import {
  JavaScriptIcon,
  NextIcon,
  ReactIcon,
  SupabaseIcon
} from '../components/icons/icons'

export const projects = [
  {
    name: 'ToroSpanish',
    description:
      'ToroSpanish is a company dedicated to Colombian national tourism, with its main focus on Medellín. What we wanted to achieve here was a simplistic and eye-catching website, where users can easily book their tours and get the necessary information about them.',
    images: ['/assets/projects_images/toro_main_pic.webp'],
    usedTechnologies: [
      <JavaScriptIcon key={1} />,
      <ReactIcon key={2} />,
      <NextIcon key={3} />,
      <SupabaseIcon key={4} />
    ],
    url: 'https://torospanish.com'
  },
  {
    name: 'Henry Augustus',
    description:
      'The goal in this project was to create a striking and minimalist design.',
    images: ['/assets/projects_images/henry_main_pic.webp'],
    usedTechnologies: [
      <JavaScriptIcon key={1} />,
      <ReactIcon key={2} />,
      <NextIcon key={3} />,
      <SupabaseIcon key={4} />
    ],
    url: '#'
  },
  {
    name: 'Css Tools',
    description:
      'All of us who develop Frontend have wanted to have help to work in a faster, more efficient and easier way. CSS tools are designed to make things easier for us. We are still working to add more features.',
    images: ['/assets/projects_images/cssTools_main_pic.webp'],
    usedTechnologies: [<JavaScriptIcon key={1} />, <ReactIcon key={2} />],
    url: 'https://css-tools-sm.vercel.app/'
  },
  {
    name: 'AtheShop',
    description:
      'This is an personal project focused on e-commerce. AtheShop is a clothing store, with a minimalistic design inpired by simplicity keeping the aspects that make the page looks good.',
    images: ['/assets/projects_images/athe_main_pic.webp'],
    usedTechnologies: [
      <JavaScriptIcon key={1} />,
      <ReactIcon key={2} />,
      <NextIcon key={3} />,
      <SupabaseIcon key={4} />
    ],
    url: 'https://athe-shop.vercel.app'
  }
  // {
  //   name: 'Colombia API',
  //   description:
  //     'API Colombia is a public RESTful API that enable users to obtain a variety of public information about the country Colombia.',
  //   images: ['/assets/projects_images/colombiaAPI_main_pic.webp'],
  //   usedTechnologies: [
  //     <JavaScriptIcon key={1} />,
  //     <NodeIcon key={3} />,
  //     <ExpressIcon key={2} />,
  //     <MongoIcon key={4} />
  //   ],
  //   url: ''
  // }
]
