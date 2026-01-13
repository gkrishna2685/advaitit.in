
export type Page = 'home' | 'it-services' | 'hr-services' | 'case-studies' | 'contact';

export interface GroundingSource {
  title?: string;
  uri?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  sources?: GroundingSource[];
}
