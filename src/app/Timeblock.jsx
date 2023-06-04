import styles from './page.module.css';
import Modal from './Modal';
import React, { useState } from 'react';

const TimeBlock = ({ time, day, rating }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const title = `${day} - ${time}`;

  // Define a rating-based background color
  const getBackgroundColor = () => {
    if (rating === 'Very Low') {
      return 'lightgreen';
    } else if (rating === 'Low') {
      return 'darkgreen';
    } else if (rating === 'Average') {
      return 'yellow';
    } else if (rating === 'High') {
      return 'orange';
    } else if (rating === 'Above Average') {
      return 'red';
    } else {
      return '#f050f8';
    }
  };

  const blockStyle = {
    backgroundColor: getBackgroundColor(),
  };

  return (
    <>
      <div className={styles.scheduleBlock} style={blockStyle} onClick={handleOpenModal}>
        <span>{time}-{rating} </span>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} title={title} />}
    </>
  );
};

export default TimeBlock;

