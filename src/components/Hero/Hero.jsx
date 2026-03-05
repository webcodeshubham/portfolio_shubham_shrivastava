import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInLeft, fadeInUp, floatingAnimation, glowPulse, staggerContainer } from '../../animations/animationVariants';
import { socialLinks } from '../../data/projectsData';
import styles from './Hero.module.css';

const profileImg = '/profile.jpg';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroInner}>
        <motion.div
          className={styles.imageCol}
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.imageWrapper} animate={floatingAnimation}>
            <div className={styles.imageGlow} />
            <motion.div
              className={styles.imageRingOuter}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div className={styles.imageRing} animate={glowPulse} />
            <img
              src={profileImg}
              alt="Shubham Shrivastava"
              className={styles.profileImage}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.textCol}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.name} variants={fadeInUp}>
            Shubham<br />
            <span className={styles.nameHighlight}>Shrivastava</span>
          </motion.h1>

          <motion.div className={styles.roles} variants={fadeInUp}>
            <span className={`${styles.roleBadge} ${styles.rolePrimary}`}>Frontend Engineer</span>
            <span className={`${styles.roleBadge} ${styles.roleSecondary}`}>React Developer</span>
          </motion.div>

          <motion.p className={styles.statement} variants={fadeInUp}>
            I design <span className={styles.statementHighlight}>scalable UI systems</span> and
            performance-focused frontend architectures with{' '}
            <span className={styles.statementHighlight}>3+ years</span> of engineering excellence.
          </motion.p>

          <motion.div className={styles.buttons} variants={fadeInUp}>
            <button
              className={styles.btnPrimary}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download="Shubham_Shrivastava_Resume.pdf"
              className={styles.btnSecondary}
              onClick={(e) => {
                e.preventDefault();
                const driveWin = window.open(socialLinks.resume, '_blank');
                if (!driveWin || driveWin.closed) {
                  window.location.href = '/resume.pdf';
                }
              }}
            >
              Download Resume
            </a>
            <button
              className={styles.btnOutline}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className={styles.mouse}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={styles.mouseBody}>
                <motion.div
                  className={styles.mouseWheel}
                  animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
