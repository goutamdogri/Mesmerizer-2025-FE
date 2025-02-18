export interface Event {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  rules: string[];
  teamSize: {
    min: number;
    max: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver';
}

export interface FAQ {
  question: string;
  answer: string;
}