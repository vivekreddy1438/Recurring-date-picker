import { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
  frequency: 'monthly',
  interval: 1,
  daysOfWeek: [],
  patternWeek: '',  // new
  patternDay: '',   // new
  startDate: '',
  endDate: '',
});

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
