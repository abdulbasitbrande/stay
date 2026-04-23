interface SolutionItem {
  id: string;
  title: string;
  content: string;
  link: string;
}

export interface SolutionData {
  SolutionItem: SolutionItem[];
  image: string;
}
