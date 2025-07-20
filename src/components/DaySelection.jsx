import { useRecurrence } from '../context/RecurrenceContext';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DaySelection = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const toggleDay = (day) => {
    const updated = recurrence.daysOfWeek.includes(day)
      ? recurrence.daysOfWeek.filter(d => d !== day)
      : [...recurrence.daysOfWeek, day];

    setRecurrence({ ...recurrence, daysOfWeek: updated });
  };

  if (recurrence.frequency !== 'weekly') return null;

  return (
    <div className="mb-3">
      <label className="form-label">Select Days of Week</label>
      <div className="d-flex gap-2 flex-wrap">
        {days.map(day => (
          <button
            key={day}
            type="button"
            className={`btn btn-sm ${recurrence.daysOfWeek.includes(day) ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => toggleDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelection;
