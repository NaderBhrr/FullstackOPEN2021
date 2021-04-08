import React from 'react';
import './Table.css';

const TableRow = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Table = ({ ...props }) => {
  const { goodRate, neutralRate, badRate, averageScore } = props;
  return (
    <table>
      <thead>Statistics</thead>
      <tbody>
        <TableRow text='Good' value={goodRate} />
        <TableRow text='Neutral' value={neutralRate} />
        <TableRow text='Bad' value={badRate} />
        <TableRow text='Total Feedback' value={5} />
        <TableRow text='Average' value={averageScore} />
        <TableRow text='Positive Feedback' value={5} />
      </tbody>
    </table>
  );
};

export default Table;
