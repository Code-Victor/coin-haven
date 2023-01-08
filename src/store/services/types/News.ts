export default interface News {
  data: Datum[];
  count: number;
  page: number;
}

export interface Datum {
  title: string;
  description: string;
  author: null | string;
  url: string;
  updated_at: number;
  news_site: string;
  thumb_2x: string;
}
