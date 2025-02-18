import { Event, TeamMember, Sponsor, FAQ } from './types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Battle of Bands',
    category: 'Music',
    description: 'Showcase your band\'s talent in this electrifying competition!',
    date: '2024-04-15',
    time: '18:00',
    venue: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    rules: [
      'Band size: 3-6 members',
      'Time limit: 15 minutes',
      'Original compositions preferred',
    ],
    teamSize: {
      min: 3,
      max: 6,
    },
  },
  // Add more events...
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Festival Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    social: {
      instagram: 'alexrivera',
      linkedin: 'alexrivera',
      twitter: 'alexrivera',
    },
  },
  // Add more team members...
];

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9',
    tier: 'platinum',
  },
  // Add more sponsors...
];

export const faqs: FAQ[] = [
  {
    question: 'How can I register for events?',
    answer: 'You can register through our online registration form available on each event\'s page.',
  },
  // Add more FAQs...
];