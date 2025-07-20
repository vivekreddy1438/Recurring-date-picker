import RecurrenceOptions from './RecurrenceOptions';
import CustomizationFields from './CustomizationFields';
import DaySelection from './DaySelection';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';
import PatternSelection from './temp';

const RecurringDatePicker = () => {
  return (
    <div className="card p-4 shadow">
      <RecurrenceOptions />
      <CustomizationFields />
      <DaySelection />
      <PatternSelection /> 
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
};

export default RecurringDatePicker;
