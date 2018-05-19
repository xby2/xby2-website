export class OpenPosition {
  id: string;
  title: string;
  location: string;
  commitment: string;
  team: string;
  description: string;
  sections: {
    text: string;
    content: string;
  }[];
  applyUrl: string;
}
