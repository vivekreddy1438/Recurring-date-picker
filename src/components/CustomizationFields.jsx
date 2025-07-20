import { useRecurrence } from '../context/RecurrenceContext';

const CustomizationFields = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  return (
    <div className="mb-3">
      <label className="form-label">
        Every
        <input
          type="number"
          min="1"
          className="form-control d-inline-block w-auto mx-2"
          value={recurrence.interval}
          onChange={(e) => setRecurrence({ ...recurrence, interval: parseInt(e.target.value) })}
        />
        {recurrence.frequency}
      </label>
    </div>
  );
};

export default CustomizationFields;
