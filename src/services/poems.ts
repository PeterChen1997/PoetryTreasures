import poems from '@/assets/poems.json';
import dayjs from 'dayjs';
import { Poem } from '@/types/poem.type';

const BASE_DATE = dayjs('2022-04-05');

export const getPoem = (): Poem => {
  const dayDiff = dayjs().diff(BASE_DATE, 'day');

  return poems[dayDiff % poems.length];
};
