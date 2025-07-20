import { useRecurrence } from '../context/RecurrenceContext';

const CalendarPreview = () => {
  const { recurrence } = useRecurrence();

  return (
    <div className="border mt-4 p-3">
      <h5>Preview:</h5>
      <p>
        Frequency: <strong>{recurrence.frequency}</strong><br />
        Interval: Every <strong>{recurrence.interval}</strong> {recurrence.frequency}<br />
        Start Date: <strong>{recurrence.startDate || 'Not selected'}</strong><br />
        End Date: <strong>{recurrence.endDate || 'None'}</strong><br />
        Days of Week: <strong>{recurrence.daysOfWeek.join(', ') || 'None'}</strong>
        Pattern: <strong>{recurrence.patternWeek} {recurrence.patternDay} of each month</strong>
      </p>
    </div>
  );
};

export default CalendarPreview;
