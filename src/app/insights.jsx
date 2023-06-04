import React from 'react';
import styles from './page.module.css';
import TimeBlock from './Timeblock';
import data from '../data/predictedData1.js';

const Schedule = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timeSlots = Array.from({ length: 48 });

  const formatTime = (slotIndex) => {
    const hour = Math.floor(slotIndex / 2);
    const minute = (slotIndex % 2) * 30;
    const ampm = hour < 12 ? 'AM' : 'PM';
    const formattedHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
  };

  const handleGetDay = (columnIndex) => {
    if (columnIndex >= 0 && columnIndex < daysOfWeek.length) {
      return daysOfWeek[columnIndex];
    }
    return null;
  };

  const getRating = (dayIndex, slotIndex) => {
    if (dayIndex >= 0 && dayIndex < data.length) {
      const dayData = data[dayIndex];
      if (slotIndex >= 0 && slotIndex < dayData.length) {
        return dayData[slotIndex].rating;
      }
    }
    return null;
  };

  return (
    <div className={styles.schedule}>
      {daysOfWeek.map((day, dayIndex) => (
        <div key={dayIndex} className={styles.scheduleBlockRow}>
          <h2 className={styles.header}>{day}</h2>
          <div className={styles.timeSlots}>
            {timeSlots.map((_, slotIndex) => {
              const rating = getRating(dayIndex, slotIndex);
              return (
                <TimeBlock
                  key={slotIndex}
                  time={formatTime(slotIndex)}
                  day={handleGetDay(dayIndex)}
                  rating={rating}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;

















