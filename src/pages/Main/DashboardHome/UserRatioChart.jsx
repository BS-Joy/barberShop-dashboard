import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { GoDotFill } from "react-icons/go";

const data = [
  { name: "Male", value: 50, color: "#3D1027" },
  { name: "Female", value: 70, color: "#E6D1DB" },
];

const UserRatioChart = () => {
  return (
    <div className="p-6 border border-primary rounded-xl w-full bg-white">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-[#3D1027]">User Ratio</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#3D1027",
              }}
              className="rounded-full"
            ></span>
            <span className="text-sm text-[#3D1027] font-medium">Male</span>
          </div>
          <div className="flex items-center space-x-2">
            <span
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#E6D1DB",
              }}
              className="rounded-full"
            ></span>
            <span className="text-sm text-[#3D1027] font-medium">Female</span>
          </div>
        </div>
      </div>
      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            startAngle={180}
            endAngle={0}
            paddingAngle={5}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {/* Custom Center Labels */}
          {/* <circle cx="47.8%" cy="37%" r="5" fill="#3D1027" /> */}
          <text
            x="50.5%"
            y="38%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#3D1027"
          >
            {data[0].value}%
          </text>
          {/* <circle cx="47.8%" cy="47%" r="5" fill="#E6D1DB" /> */}
          <text
            x="50.5%"
            y="48%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#E6D1DB"
          >
            {data[1].value}%
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRatioChart;
