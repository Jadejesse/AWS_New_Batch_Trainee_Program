import { useState, useEffect } from 'react';

export function useCurrentDate(): Date {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const timer = setTimeout(() => {
      setCurrentDate(new Date());
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, [currentDate]);

  return currentDate;
}
