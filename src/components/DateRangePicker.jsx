import { useRecurrence } from '../context/RecurrenceContext';

const DateRangePicker = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  return (
    <div className="mb-3">
      <label className="form-label">Start Date</label>
      <input
        type="date"
        className="form-control"
        value={recurrence.startDate}
        onChange={(e) => setRecurrence({ ...recurrence, startDate: e.target.value })}
      />
      <label className="form-label mt-2">End Date (Optional)</label>
      <input
        type="date"
        className="form-control"
        value={recurrence.endDate}
        onChange={(e) => setRecurrence({ ...recurrence, endDate: e.target.value })}
      />
    </div>
  );
};

export default DateRangePicker;
