import React from 'react';
import '../Components/Calendar.css'; // We'll create this for styling
const Calendar = () => {
  return (
    <div className="calendar-container">
      <h2>October 2021</h2>
      <table className="calendar-grid">
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr className="dates-row">
            <td>25</td>
            <td className="highlight">26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
          <tr className="times-row">
            <td>10:00</td>
            <td className="highlight">08:00</td>
            <td>12:00</td>
            <td>10:00</td>
            <td>—</td>
            <td>12:00</td>
            <td>09:00</td>
          </tr>
          <tr className="times-row">
            <td>11:00</td>
            <td className="highlight">09:00</td>
            <td>—</td>
            <td>11:00</td>
            <td>14:00</td>
            <td>14:00</td>
            <td>10:00</td>
          </tr>
          <tr className="times-row">
            <td>12:00</td>
            <td className="highlight">10:00</td>
            <td>13:00</td>
            <td>—</td>
            <td>16:00</td>
            <td>15:00</td>
            <td>11:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;