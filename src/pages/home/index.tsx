import styles from './index.module.scss';
import { Poem } from '@/types/poem.type';
import { useEffect, useState } from 'react';
import { getPoem } from '@/services/poems';

export default function Home() {
  console.log(123);

  const [poem, setPoem] = useState<Poem>();

  useEffect(() => {
    setPoem(getPoem());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>每日诗词</div>
      {poem && (
        <div className={styles.content}>
          <div className={styles.poemTitle}>{poem.title}</div>
          <div className={styles.poemAuthor}>{poem.author}</div>
          <div className={styles.poemDynasty}>{poem.dynasty}</div>
          <div className={styles.poemContent}>
            {poem.content.map((line) => {
              return <div key={line}>{line}</div>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
