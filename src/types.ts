export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
}

export interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
  type: 'work' | 'internship';
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools';
  icon: string;
}