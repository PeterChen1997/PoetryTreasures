import poems from '@/assets/poems.json';
import dayjs from 'dayjs';
import { Poem } from '@/types/poem.type';

export const getPoem = (): Poem => {
  const timestamp = dayjs().startOf('day').unix();

  const todayPoem = poems[timestamp % poems.length];

  console.log(todayPoem);

  return todayPoem;
};
