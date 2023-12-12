import styles from '@/styles/Projects.module.css';
import { useState } from 'react';

export default function Projects() {
  const [fontSize, setFontSize] = useState(2);
  return (
    <>
      <h1>Projects page</h1>
      <p className={styles.greenColor}>test</p>


      <style jsx>{`
        .font-size {
          font-size: ${fontSize}rem;
        }
      `}</style>

      <p className='font-size'>This is my brandstatement</p>

      <button onClick={() => setFontSize(fontSize + 1)}>Click Me!</button>
    </>
  );
}
