import {
  ExpressIcon,
  JavaScriptIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  SupabaseIcon
} from '../components/icons/icons'

export const technologies = {
  javaScript: <JavaScriptIcon />,
  reactJS: <ReactIcon />,
  supabase: <SupabaseIcon />,
  nodeJS: <NodeIcon />,
  mongoDB: <MongoIcon />,
  express: <ExpressIcon />,
  nextJS: <NextIcon />
}

export const projects = [
  {
    name: 'AtheShop',
    description:
      'This is an personal project focused on e-commerce. AtheShop is a clothing store, with a minimalistic design inpired by simplicity keeping the aspects that make the page looks good.',
    images: ['/assets/projects_images/athe_main_pic.png'],
    usedTechnologies: ['javaScript', 'reactJS', 'nextJS', 'supabase']
  },
  {
    name: 'ToroSpanish',
    description:
      'As a web developer, I build dreams as websites. ToroSpanish is one of them, a start up dedicated to teach lenguages such as English and Spanish. In addition to offering the best tours in Colombia.',
    images: ['/assets/projects_images/toro_main_pic.png'],
    usedTechnologies: ['javaScript', 'reactJS', 'nextJS', 'mongoDB']
  },
  {
    name: 'Colombia API',
    description:
      'API Colombia is a public RESTful API that enable users to obtain a variety of public information about the country Colombia.',
    images: ['/assets/projects_images/colombiaAPI_main_pic.png'],
    usedTechnologies: ['javaScript', 'express', 'nodeJS', 'mongoDB']
  }
]
