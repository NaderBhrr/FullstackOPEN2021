import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>Good</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Total Feedback</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Positive Feedback</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
