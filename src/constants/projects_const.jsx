import {
  ExpressIcon,
  JavaScriptIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  SupabaseIcon
} from '../components/icons/icons'

export const projects = [
  {
    name: 'AtheShop',
    description:
      'This is an personal project focused on e-commerce. AtheShop is a clothing store, with a minimalistic design inpired by simplicity keeping the aspects that make the page looks good.',
    images: ['/assets/projects_images/athe_main_pic.png'],
    usedTechnologies: [
      <JavaScriptIcon key={1} />,
      <ReactIcon key={2} />,
      <NextIcon key={3} />,
      <SupabaseIcon key={4} />
    ],
    url: 'https://athe-shop.vercel.app'
  },
  {
    name: 'Henry Augustus',
    description:
      'The goal in this project was to create a striking and minimalist design.',
    images: ['/assets/projects_images/henry_main_pic.png'],
    usedTechnologies: [
      <JavaScriptIcon key={1} />,
      <ReactIcon key={2} />,
      <NextIcon key={3} />,
      <MongoIcon key={4} />
    ],
    url: '#'
  },
  // {
  //   name: 'ToroSpanish',
  //   description:
  //     'As a web developer, I build dreams as websites. ToroSpanish is one of them, a start up dedicated to teach lenguages such as English and Spanish. In addition to offering the best tours in Colombia.',
  //   images: ['/assets/projects_images/toro_main_pic.png'],
  //   usedTechnologies: ['javaScript', 'reactJS', 'nextJS', 'mongoDB'],
  //   url: 'https://www.torospanish.com/'
  // },
  {
    name: 'Colombia API',
    description:
      'API Colombia is a public RESTful API that enable users to obtain a variety of public information about the country Colombia.',
    images: ['/assets/projects_images/colombiaAPI_main_pic.png'],
    usedTechnologies: [
      <JavaScriptIcon key={1} />,
      <NodeIcon key={3} />,
      <ExpressIcon key={2} />,
      <MongoIcon key={4} />
    ],
    url: '#'
  }
]
