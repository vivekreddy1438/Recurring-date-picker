import { useRecurrence } from '../context/RecurrenceContext';

const options = ['daily', 'weekly', 'monthly', 'yearly'];

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  return (
    <div className="mb-3">
      <label className="form-label">Frequency</label>
      <div className="d-flex gap-3">
        {options.map(option => (
          <div key={option} className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="frequency"
              id={option}
              value={option}
              checked={recurrence.frequency === option}
              onChange={(e) => setRecurrence({ ...recurrence, frequency: e.target.value })}
            />
            <label className="form-check-label" htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecurrenceOptions;
