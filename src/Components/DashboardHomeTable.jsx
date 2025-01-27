import { Table } from "antd";
import { Link } from "react-router-dom";

const DashboardHomeTable = () => {
  const columns = [
    {
      title: "#SI No.",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Report",
      key: "Report",
      dataIndex: "Report",
    },
    {
      title: "See Review",
      key: "Review",
      aligen: "center",
      render: (_, data) => (
        <div className="  items-center justify-around">
          {/* Review Icon */}
          <Link
            to={"/reviews"}
            className="btn bg-[#052255] text-white px-3 py-1 text-sm rounded-full"
          >
            {/* <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      View
                    </svg> */}
            View
          </Link>
        </div>
      ),
    },
  ];

  const data = [];
  for (let index = 0; index < 6; index++) {
    data.push({
      transIs: `${index + 1}`,
      name: "Henry",
      Email: "sharif@gmail.com",
      Report: "5",
      Review: "See Review",
      date: "16 Apr 2024",
      _id: index,
    });
  }

  return (
    <div className="rounded-lg border py-4 px-6 bg-white shadow-lg w-full">
      <h3 className="text-2xl font-semibold mb-4">Recent Users</h3>

      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
        className="rounded-lg"
      />
    </div>
  );
};

export default DashboardHomeTable;
