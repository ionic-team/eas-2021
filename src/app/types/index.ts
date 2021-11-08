export interface AgendaItem {
  id: number;
  title: string;
  speakerId: number;
  startTime: string;
  endTime: string;
}

export interface Speaker {
  id: number;
  name: string;
  company: string;
  role: string;
  photoUrl: string;
}
