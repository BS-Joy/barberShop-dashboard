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

const dailyData = [
  { name: "08:00", value: 20 },
  { name: "10:00", value: 35 },
  { name: "12:00", value: 50 },
  { name: "14:00", value: 70 },
  { name: "16:00", value: 90 },
  { name: "18:00", value: 110 },
  { name: "20:00", value: 130 },
  { name: "22:00", value: 150 },
  { name: "23:00", value: 170 },
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

const DailyIncome = () => {
  const [data, setData] = useState(dailyData); // State to handle current dataset
  const [selectedOption, setSelectedOption] = useState("Weekly");

  const handleChange = (value) => {
    setSelectedOption(value);
    setData(value === "Weekly" ? weeklyData : monthlyData);
  };

  return (
    <div className="p-4 border border-primary rounded-xl bg-white relative w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-primary">Income Ratio</h3>
        <div
          className="w-32 border border-[#999999] bg-transparent"
          bordered={false}
          style={{
            background: "transparent",
            borderRadius: "20px",
            textAlign: "center",
          }}
          suffixIcon={null} // Hides the dropdown icon
        >
          Daily
        </div>
      </div>
      <ResponsiveContainer width="100%" height={650}>
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

export default DailyIncome;
