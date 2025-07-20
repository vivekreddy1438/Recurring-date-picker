import { useRecurrence } from '../context/RecurrenceContext';

const weeks = ['First', 'Second', 'Third', 'Fourth', 'Last'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const PatternSelection = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  if (recurrence.frequency !== 'monthly') return null;

  return (
    <div className="mb-3">
      <label className="form-label">Pattern</label>
      <div className="d-flex gap-2">
        <select
          className="form-select w-auto"
          value={recurrence.patternWeek}
          onChange={(e) => setRecurrence({ ...recurrence, patternWeek: e.target.value })}
        >
          <option value="">Select Week</option>
          {weeks.map((week, index) => (
            <option key={index} value={week}>{week}</option>
          ))}
        </select>

        <select
          className="form-select w-auto"
          value={recurrence.patternDay}
          onChange={(e) => setRecurrence({ ...recurrence, patternDay: e.target.value })}
        >
          <option value="">Select Day</option>
          {days.map((day, index) => (
            <option key={index} value={day}>{day}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PatternSelection;
