export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  image: string | null;
  location: string | null;
  tagline: string | null;
  code: string | null;
  entryFees: string | null;
  coordinators: { name: string; contact: string }[] | null;
  rules: object | null;
  teamSize: {
    min: number | null;
    max: number | null;
  };
}