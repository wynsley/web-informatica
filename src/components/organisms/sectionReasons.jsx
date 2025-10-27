import { useState, useEffect, useCallback } from 'react';
import { Titles } from '../atoms/titlesReasons';
import { ReasonCard } from '../molecules/reasondCard';
import { ReasonsDots } from '../molecules/reasonsDots';
import { reasonsData } from './arraisData';
import { ReasonsBtns } from '../molecules/reasonsBtns';
import styles from './sectionReasons.module.css';

function Reasons() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === reasonsData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? reasonsData.length - 1 : prev - 1));
  }, []);

  // Auto-avance cada 5 segundos
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current, isPaused, nextSlide]);

  const getVisibleCards = useCallback(() => {
    const prevIndex = (current - 1 + reasonsData.length) % reasonsData.length;
    const nextIndex = (current + 1) % reasonsData.length;
    return [prevIndex, current, nextIndex];
  }, [current]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleCardClick = (index) => {
    setCurrent(index);
  };

  const handleCardDragStart = useCallback((e) => {
    e.preventDefault();
    const startX = e.clientX || e.touches?.[0]?.clientX;

    const handleMove = (moveEvent) => {
      const currentX = moveEvent.clientX || moveEvent.touches?.[0]?.clientX;
      const diff = currentX - startX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
        cleanup();
      }
    };

    const cleanup = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', cleanup);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', cleanup);
      setIsPaused(false);
    };

    setIsPaused(true);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', cleanup);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', cleanup);
  }, [nextSlide, prevSlide]);

  const visibleCards = getVisibleCards();

  return (
    <section id="reasons" className={styles.reasons}>
      <Titles
        title="¿Por qué estudiar Informática con nosotros?"
        subtitle="Explora el poder de la informática y descubre cómo las ideas se transforman en innovación."
      />

      <div className={styles.carousel}>
        <div
          className={styles.cardsContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {visibleCards.map((index) => {
            const reason = reasonsData[index];
            const isActive = index === current;
            const isVisible = !isActive;

            return (
              <ReasonCard
                key={reason.id}
                title={reason.title}
                text={reason.text}
                isActive={isActive}
                isVisible={isVisible}
                onClick={() => handleCardClick(index)}
                onDragStart={handleCardDragStart}
              />
            );
          })}
        </div>
      </div>

      <ReasonsDots
        total={reasonsData.length}
        currentIndex={current}
        onIndicatorClick={setCurrent}
      />
      <ReasonsBtns/>
    </section>
  );
}

export { Reasons };