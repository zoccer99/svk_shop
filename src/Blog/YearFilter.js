import React from "react";

const YearFilter = ({ years, selectedYear, onSelectYear }) => {
  const styles = `
    .year-filter {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
    
    .year-button {
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 20px;
      color: #333;
      cursor: pointer;
      font-size: 16px;
      margin: 0 10px;
      padding: 10px 20px;
      transition: all 0.3s ease;
    }
    
    .year-button:hover {
      background-color: #e0e0e0;
    }
    
    .year-button.active {
      background-color: #251f47;
      color: #fff;
      border-color: #251f47;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="year-filter">
        {years.map((year) => (
          <button
            key={year}
            className={`year-button ${selectedYear === year ? "active" : ""}`}
            onClick={() => onSelectYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearFilter;
