import poems from '@/assets/poems.json';
import dayjs from 'dayjs';
import { Poem } from '@/types/poem.type';

const BASE_DATE = dayjs('2022-03-16');

console.log(BASE_DATE);

export const getPoem = (): Poem => {
  const dayDiff = dayjs().diff(BASE_DATE, 'day');

  const todayPoem = poems[dayDiff % poems.length];

  return todayPoem;
};
