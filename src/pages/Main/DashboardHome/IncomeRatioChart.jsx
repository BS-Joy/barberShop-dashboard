import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Select } from "antd"; // Using Ant Design for the dropdown

const { Option } = Select;

// Sample data for Weekly and Monthly
const weeklyData = [
  { name: "Sun", value: 50 },
  { name: "Mon", value: 100 },
  { name: "Tue", value: 150 },
  { name: "Wed", value: 500 },
  { name: "Thu", value: 510 },
  { name: "Fri", value: 300 },
  { name: "Sat", value: 200 },
];

const monthlyData = [
  { name: "Week 1", value: 300 },
  { name: "Week 2", value: 400 },
  { name: "Week 3", value: 200 },
  { name: "Week 4", value: 600 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-2 rounded shadow">
        <p>${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const IncomeRatioChart = () => {
  const [data, setData] = useState(weeklyData); // State to handle current dataset
  const [selectedOption, setSelectedOption] = useState("Weekly");

  const handleChange = (value) => {
    setSelectedOption(value);
    setData(value === "Weekly" ? weeklyData : monthlyData);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-primary">Income Ratio</h3>
        <Select
          value={selectedOption}
          onChange={handleChange}
          className="w-32 border border-[#999999] bg-transparent"
          bordered={false}
          style={{
            background: "transparent",
            borderRadius: "20px",
            textAlign: "center",
          }}
          suffixIcon={null} // Hides the dropdown icon
        >
          <Option value="Weekly">Weekly</Option>
          <Option value="Monthly">Monthly</Option>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#EAEAEA" />
          <XAxis dataKey="name" tick={{ fill: "#646464" }} />
          <YAxis tick={{ fill: "#646464" }} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3D1027"
            strokeWidth={2}
            dot={{ r: 4, fill: "yellow", stroke: "yellow", strokeWidth: 2 }}
            activeDot={{ r: 6, fill: "yellow" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeRatioChart;
