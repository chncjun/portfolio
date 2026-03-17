export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack web application with real-time data sync, user authentication, and a clean dashboard interface for team collaboration.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/chncjun',
    liveUrl: '#',
  },
  {
    title: 'DevTools CLI',
    description:
      'A command-line tool that automates common development workflows including project scaffolding, linting, and deployment pipelines.',
    techStack: ['TypeScript', 'Node.js', 'Commander.js'],
    githubUrl: 'https://github.com/chncjun',
  },
  {
    title: 'CloudSync Dashboard',
    description:
      'A responsive admin dashboard for monitoring cloud infrastructure with interactive charts, alerts, and real-time metrics.',
    techStack: ['Next.js', 'Tailwind CSS', 'Chart.js', 'AWS'],
    githubUrl: 'https://github.com/chncjun',
    liveUrl: '#',
  },
  {
    title: 'AI Content Engine',
    description:
      'An intelligent content generation platform powered by modern AI APIs with markdown export, templates, and a sleek editor UI.',
    techStack: ['Python', 'FastAPI', 'React', 'OpenAI'],
    githubUrl: 'https://github.com/chncjun',
    liveUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very site! A performant, modern portfolio built with Astro and Tailwind CSS, deployed on Cloudflare Pages with a perfect Lighthouse score.',
    techStack: ['Astro', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/chncjun/portfolio',
    liveUrl: 'https://juncui.me',
  },
  {
    title: 'Task Flow',
    description:
      'A minimalist task management app with drag-and-drop, categories, priority levels, and progress tracking — all in a beautiful UI.',
    techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/chncjun',
    liveUrl: '#',
  },
];
