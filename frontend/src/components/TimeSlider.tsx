import React from 'react';

TimeSliderProps TimeSliderProps {
  year: number;
  onChange: (year: number) => void;
}

const TimeSlider: React.FC<TimeSliderProps> = ({ year, onChange }) => {
  return (
    <div>
      <label htmlFor="year-slider">Año: {year}</label>
      <input
        id="year-slider"
        type="range"
        min="-500"
        max="0"
        step="50"
        value={year}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default TimeSlider;
