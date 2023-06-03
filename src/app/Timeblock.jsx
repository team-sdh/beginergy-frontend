import styles from './page.module.css';
import Modal from './Modal';
import React, { useState } from 'react';

const TimeBlock = ({ time, day }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const title = `${day} - ${time}`;

  return (
    <>
      <div className={styles.scheduleBlock} onClick={handleOpenModal}>
        <span>{time}</span>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} title={title} />}
    </>
  );
};

export default TimeBlock;
