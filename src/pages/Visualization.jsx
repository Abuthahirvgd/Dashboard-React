import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import data from "../dummy.json";

const Visualization = () => {
  const {
    monthlySales,
    productCategories,
    yearlyPerformance,
    dailyActiveUsers,
    employeeRatings,
    salesTrends,
    regionalSales,
    userGrowth,
  } = data.data;

  const COLORS = [
    "#FF6384", "#36A2EB", "#FF9F40", "#4BC0C0", "#9966FF", "#FFCD56", "#C9CBCF",
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">Data Visualization</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Monthly Sales</h2>
          <LineChart width={300} height={200} data={monthlySales}>
            <Line type="monotone" dataKey="sales" stroke="#FF6384" strokeWidth={2} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Product Categories</h2>
          <BarChart width={300} height={200} data={productCategories}>
            <Bar dataKey="revenue" fill="#36A2EB" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
          </BarChart>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Yearly Performance</h2>
          <BarChart width={300} height={200} data={yearlyPerformance}>
            <Bar dataKey="electronics" fill="#FFCD56" />
            <Bar dataKey="furniture" fill="#4BC0C0" />
            <Bar dataKey="clothing" fill="#9966FF" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
          </BarChart>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Daily Active Users</h2>
          <PieChart width={300} height={300}>
            <Pie data={dailyActiveUsers} dataKey="users" nameKey="day" outerRadius={100} label>
              {dailyActiveUsers.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Employee Ratings</h2>
          <PieChart width={300} height={300}>
            <Pie data={employeeRatings} dataKey="count" nameKey="rating" outerRadius={100} label>
              {employeeRatings.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Sales Trends (Quarterly)</h2>
          <BarChart width={300} height={200} data={salesTrends}>
            <Bar dataKey="onlineSales" stackId="a" fill="#FF9F40" />
            <Bar dataKey="offlineSales" stackId="a" fill="#9966FF" />
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Legend />
          </BarChart>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Regional Sales</h2>
          <PieChart width={300} height={300}>
            <Pie data={regionalSales} dataKey="sales" nameKey="region" outerRadius={100} label>
              {regionalSales.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">User Growth</h2>
          <LineChart width={300} height={200} data={userGrowth}>
            <Line type="monotone" dataKey="newUsers" stroke="#4BC0C0" strokeWidth={2} />
            <Line type="monotone" dataKey="activeUsers" stroke="#FF6384" strokeWidth={2} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </section>
      </div>
    </div>
  );
};

export default Visualization;
