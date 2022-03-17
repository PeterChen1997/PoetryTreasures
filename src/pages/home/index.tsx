import styles from './index.module.scss';
import { Poem } from '@/types/poem.type';
import { useEffect, useState } from 'react';
import { getPoem } from '@/services/poems';
import upArrow from '@/assets/icons/upArrow.svg';
import { motion } from 'framer-motion';

export default function Home() {
  const [poem, setPoem] = useState<Poem>();

  useEffect(() => {
    setPoem(getPoem());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>-= 每日诗词 =-</div>

      {poem && (
        <div className={styles.content}>
          <div className={styles.poemTitle}>{poem.title}</div>
          <div className={styles.poemAuthor}>
            {poem.author} / {poem.dynasty}
          </div>
          <div className={styles.poemContent}>
            {poem.content.map((line) => {
              return <div key={line}>{line}</div>;
            })}
          </div>
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, translateY: '20px' },
          visible: { opacity: 1, translateY: '0px' },
        }}
        transition={{ duration: 1, delay: 2, ease: 'easeIn' }}
        className={styles.footer}
      >
        <img alt="arrow" className={styles.svg} src={upArrow}></img>
        <span>上划查看释义</span>
      </motion.div>
    </div>
  );
}
