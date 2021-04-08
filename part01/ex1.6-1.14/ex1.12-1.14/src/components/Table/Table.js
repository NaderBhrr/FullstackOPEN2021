import React from 'react';
import './Table.css';

const TableRow = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        <i>{text === 'Positive Feedback' ? `${value}%` : value}</i>
      </td>
    </tr>
  );
};

const Table = ({ ...props }) => {
  const {
    goodRate,
    neutralRate,
    badRate,
    averageScore,
    totalFeedback,
    positiveFeedback,
  } = props;
  return (
    <table>
      <thead>Statistics</thead>
      <tbody>
        <TableRow text='Good' value={goodRate} />
        <TableRow text='Neutral' value={neutralRate} />
        <TableRow text='Bad' value={badRate} />
        <TableRow text='Total Feedback' value={totalFeedback} />
        <TableRow text='Average' value={averageScore} />
        <TableRow text='Positive Feedback' value={positiveFeedback} />
      </tbody>
    </table>
  );
};

export default Table;
