import React, { useState, useEffect } from 'react';

const Clock = () => {
  // สร้าง state เก็บเวลา
  const [now, setNow] = useState(new Date());

  // อัปเดตเวลาเป็นวินาที
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000); // อัปเดตทุก 1 วินาที

    // cleanup เวลา component ถูก unmount
    return () => clearInterval(timer);
  }, []);

  // แปลงเวลาเป็น string
  const timeString = now.toLocaleTimeString('th-TH');
  const dateString = now.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="clock" style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
      <h5>🕐 TIME </h5>
      <p className="date">{dateString}</p>
      <p className="time">{timeString}</p>
    </div>
  );
};

export default Clock;