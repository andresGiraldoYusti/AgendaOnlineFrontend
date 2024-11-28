import React, { useState } from "react";
import "./SelectDays.css";

export default function DaysPickerCheckbox() {
  const [selectedDays, setSelectedDays] = useState([]);

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDays((prev) => [...prev, value]);
    } else {
      setSelectedDays((prev) => prev.filter((day) => day !== value));
    }
  };

  return (
    <div className="days-picker-container">
      <label className="title">Seleccionar los días:</label>
      <div className="checkbox-list">
        {days.map((day) => (
          <div key={day} className="checkbox-item">
            <input
              type="checkbox"
              id={day}
              value={day}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={day}>{day}</label>
          </div>
        ))}
      </div>
      <p>Días seleccionados: {selectedDays.join(", ")}</p>
    </div>
  );
}
