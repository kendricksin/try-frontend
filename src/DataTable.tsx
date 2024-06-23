import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface Waypoints {
    id?: number;
    Point: string;
    LatDeg: number;
    LatMn: number;
    LonDeg: number;
    LonMn: number;
  }

  const TableStyle = styled.table`
  /* Define table styles here */
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  /* Define table header styles here */
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  /* Define table data styles here */
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const DataTable: React.FC = () => {
  const [data, setData] = useState<Waypoints[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await axios.get('http://localhost:5000/api/waypoints');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or error
      }
    };

    fetchData();
  }, []);

  return (
    <TableStyle>
      <thead>
        <tr>
            <TableHeader>Point</TableHeader>
            <TableHeader>LatDeg</TableHeader>
            <TableHeader>LatMn</TableHeader>
            <TableHeader>LonDeg</TableHeader>
            <TableHeader>LonMn</TableHeader>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={3}>Loading...</td>
          </tr>
        ) : data.length === 0 ? (
          <tr>
            <td colSpan={3}>No data available</td>
          </tr>
        ) : (
          data.map((item) => (
          <tr key={item.id}>
            {/* Map data to table cells here */}
            <TableData> {item.Point} </TableData>
            <TableData> {item.LatDeg} </TableData>
            <TableData> {item.LatMn} </TableData>
            <TableData> {item.LonDeg} </TableData>
            <TableData> {item.LonMn} </TableData>
          </tr>
        )))}
      </tbody>
    </TableStyle>
  );
};

export default DataTable;