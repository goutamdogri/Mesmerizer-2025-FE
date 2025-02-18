export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  maxTeamSize: number;
  rules: string[];
  venue: string;
  registrationOpen: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socialLinks: {
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

export interface RegistrationForm {
  eventId: string;
  teamName: string;
  participants: {
    name: string;
    email: string;
    phone: string;
    college: string;
  }[];
}