import React from 'react';

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

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', columnGap: '20px' }}>
      {daysOfWeek.map((day, dayIndex) => (
        <div key={dayIndex}>
          <h2>{day}</h2>
          {timeSlots.map((_, slotIndex) => (
            <div key={slotIndex}>
              <span>{formatTime(slotIndex)}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Schedule;






