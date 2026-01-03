import { useCurrentDate } from '../../hooks/useCurrentDate';
import './DateDisplay.css';

interface DateDisplayProps {
  format?: 'long' | 'short';
}

const DateDisplay: React.FC<DateDisplayProps> = ({ format = 'long' }) => {
  const currentDate = useCurrentDate();

  const formatDate = (date: Date): string => {
    if (format === 'long') {
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return date.toLocaleDateString();
  };

  return (
    <div className="date-display">
      {formatDate(currentDate)}
    </div>
  );
};

export default DateDisplay;
