import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose, title }) => {
  const [listItems, setListItems] = useState([
    { id: 1, label: 'Living Room AC', isOn: false },
    { id: 2, label: 'Bedroom AC', isOn: false },
    { id: 3, label: 'Kitchen AC', isOn: false },
    { id: 4, label: 'TV / Video Games', isOn: false },
    { id: 5, label: 'Washing Machine', isOn: false },
    { id: 6, label: 'Electric Car', isOn: false },
  ]);

  const [reminderSent, setReminderSent] = useState(false);
  const [showSendReminderButton, setShowSendReminderButton] = useState(true);

  const handleToggleSwitch = (itemId) => {
    setListItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            isOn: !item.isOn,
          };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const handleClose = () => {
    setListItems((prevItems) => {
      console.log('Saving settings:', prevItems);
      return prevItems;
    });
    onClose();
  };

  const handleSubmit = () => {
    setReminderSent(true);
    setShowSendReminderButton(false);
    setListItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isOn: false,
      }))
    );
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <ul className={styles.list}>
          {listItems.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <span>{item.label}</span>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={item.isOn}
                  onChange={() => handleToggleSwitch(item.id)}
                />
                <span className={`${styles.slider} ${item.isOn ? styles.on : ''}`}></span>
              </label>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          {showSendReminderButton && !reminderSent ? (
            <button onClick={handleSubmit}>Send Reminder</button>
          ) : (
            reminderSent && <p>Reminder sent to Calendar!</p>
          )}
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


