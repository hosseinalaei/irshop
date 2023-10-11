import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const Dashboard = () => {
  const options = {
    chart: {
      type: "pie",
      height: 120,
      width: 128,
    },
    title: false,
    series: [
      {
        name: "Data",
        data: [[23], [13], [62]],
      },
    ],
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 100,
          },
        },
      ],
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        borderWidth: 0,
        innerSize: "60%",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        colors: ["#E5E5E5", "#18CDCA", "#4F80E1"],
        states: {
          hover: {
            brightness: 0.1,
          },
        },
      },
    },
  };
  const options2 = {
    chart: {
      type: "column",
      height: 150,
    },
    xAxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    yAxis: {
      lineColor: "transparent",
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      gridLineWidth: 2,
    },
    title: false,
    series: [
      {
        name: "Vision",
        data: [5, 3, 4, 7, 2, 6, 8],
      },
      {
        name: "Sales",
        data: [2, 2, 2, 2, 1, 8, 10],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
        },
      ],
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    legend: {
      align: "left",
      verticalAlign: "top",
      x: -14,
      y: -12,
      enabled: true,
    },
    plotOptions: {
      pie: {
        borderWidth: 0,
        innerSize: "60%",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        colors: ["#18CDCA", "#4F80E1"],
        states: {
          hover: {
            brightness: 0.1,
          },
        },
      },
    },
  };
  const TableData = [
    {
      id: 12809,
      product: "Apple Macbook Pro...",
      order: "20/03/2023,01:10",
      status: "Waiting Payment",
      Qty: "x1",
      price: "$4.012",
      color: "#DD6107",
      image: "/assets/admin/dashboard/user2.png",
      customer: "Omar Griffith",
    },
    {
      id: 12808,
      product: "iBox iPhone 14Pro...",
      order: "20/03/2023,01:10",
      status: "Transition Done",
      Qty: "x1",
      price: "$2.092",
      customer: "Omar Griffith",
      image: "/assets/admin/dashboard/user3.png",
      color: "#10B860",
    },
    {
      id: 12807,
      product: "Apple Macbook Pro...",
      order: "20/03/2023,01:10",
      status: "Transition Done",
      Qty: "x1",
      price: "$1.089",
      customer: "Omar Griffith",
      image: "/assets/admin/dashboard/user4.png",
      color: "#10B860",
    },
    {
      id: 12806,
      product: "Apple Macbook Pro...",
      order: "20/03/2023,01:10",
      status: "Delivery to Cust",
      Qty: "x3",
      price: "$833",
      customer: "Omar Griffith",
      image: "/assets/admin/dashboard/user5.png",
      color: "#4F80E1",
    },
    {
      id: 12805,
      product: "iBox iPhone 14Pro...",
      order: "20/03/2023,01:10",
      status: "Cancel",
      Qty: "x3",
      price: "$1.458",
      customer: "Omar Griffith",
      image: "/assets/admin/dashboard/user6.png",
      color: "#FB4949",
    },
  ];
  return(
    <>
    <div className="w-full py-3 pl-7 pr-5 grid xl:grid-cols-12 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-start">
    <div className="px-4 pt-4 pb-7 bg-white flex-col gap-1 justify-between  w-full max-h-64 xl:col-span-4 xl:row-start-2 lg:row-start-3 rounded-xl border border-[#E7E7E7]">
              <span className="text-[#212B36] text-base font-semibold -tracking-[0.15px]">
                Customer Volume
              </span>
              <div className="flex justify-between sm:flex-col md:flex-row max-w-xs 2xl:max-w-none h-full max-h-60 md:pb-5">
                <div className="sm:mt-2 md:mt-0 self-center md:self-end">
                  <div className="flex gap-1 items-center">
                    <div className="h-2 w-3 bg-[#497AF9] rounded-sm"></div>
                    <div className="text-[10px] flex gap-1">
                      <span className="">62%</span>
                      <span className="text-[#637381]">New</span>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-2 w-3 bg-[#18CDCA] rounded-sm"></div>
                    <div className="text-[10px] flex gap-1">
                      <span>13% </span>
                      <span className="text-[#637381]">Returning</span>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-2 w-3 bg-[#000000]/20 rounded-sm"></div>
                    <div className="text-[10px] flex gap-1">
                      <span>23%</span>
                      <span className="text-[#637381]">Inactive</span>
                    </div>
                  </div>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
            </div>
            <div className="px-4 py-4 bg-white flex-col sm:col-span-2 w-full max-h-64 xl:col-span-7 xl:row-start-2 lg:row-start-3 rounded-xl border border-[#E7E7E7] ">
              <div className="flex flex-col justify-between">
                <div className="flex items-center justify-between ">
                  <span className="text-[#212B36] text-base font-semibold -tracking-[0.15px] whitespace-nowrap">
                    Sales Volume
                  </span>
                  <div className="sm:flex gap-2 items-center hidden">
                    <span className="text-sm font-medium text-[#212B36] -tracking-[0.15px] cursor-pointer">
                      Daily
                    </span>
                    <span className="text-[#637381] text-sm font-medium -tracking-[0.15px] cursor-pointer">
                      Weekly
                    </span>
                    <span className="text-[#637381] text-sm font-medium -tracking-[0.15px] cursor-pointer">
                      Monthly
                    </span>
                    <span className="text-[#637381] text-sm font-medium -tracking-[0.15px] cursor-pointer">
                      Yearly
                    </span>
                  </div>
                  <div className=" block sm:hidden">
                    {/* <DropDowns list={graphDropdown} /> */}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className=" w-full  h-full">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={options2}
                    />
                  </div>
                </div>
              </div>
            </div>
            
  </div>

   <div className="w-full py-3 pl-7 pr-5 grid xl:grid-cols-12 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-start">
   <div className="p-3 bg-white flex flex-col xl:col-span-11 xl:row-auto lg:row-start-4 lg:col-span-2 rounded-xl border border-[#E7E7E7]">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <span className="text-[#212B36] text-base font-semibold -tracking-[0.15px] whitespace-nowrap">
                  Recent Order
                </span>
                {/* <DropDowns list={people} /> */}
              </div>
              <div className="w-full overflow-x-scroll md:overflow-auto max-w-xl xs:max-w-xl sm:max-w-xl md:max-w-7xl 2xl:max-w-none mt-1">
                <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-1">
                  <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
                    <tr className="">
                      <th className="py-3 pl-3 text-[#212B36] text-sm font-normal whitespace-nowrap rounded-l-lg">
                        Order ID
                      </th>
                      <th className="py-3 pl-1 text-[#212B36] text-sm font-normal whitespace-nowrap">
                        Product
                      </th>
                      <th className="py-3 text-[#212B36] text-sm font-normal whitespace-nowrap">
                        Order time
                      </th>
                      <th className="py-3 text-[#212B36] text-sm font-normal whitespace-nowrap">
                        Status
                      </th>
                      <th className="py-3 px-2.5 text-[#212B36] text-sm font-normal whitespace-nowrap">
                        Qty
                      </th>
                      <th className="py-3 text-[#212B36] text-sm font-normal whitespace-nowrap">
                        Total Price
                      </th>
                      <th className="py-3 pl-1 text-[#212B36] text-sm font-normal whitespace-nowrap rounded-r-lg">
                        Customer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.map((data) => (
                      <tr
                        key={data.id}
                        className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] bg-[#f6f8fa] hover:shadow-2xl cursor-pointer"
                      >
                        <td className="py-4 pl-3 text-sm font-normal text-[#637381] rounded-l-lg">
                          {data.id}
                        </td>
                        <td className="py-4 px-1 text-sm font-normal text-[#637381]">
                          {data.product}
                        </td>
                        <td className="py-4 px-1 text-sm font-normal text-[#637381]">
                          {data.order}
                        </td>
                        <td
                          className="py-4 px-1 text-sm font-normal text-[#637381]"
                          style={{
                            color: data?.color,
                          }}
                        >
                          {data.status}
                        </td>
                        <td className="py-4 px-2.5 text-sm font-normal text-[#637381]">
                          {data.Qty}
                        </td>
                        <td className="py-4 px-1 text-sm font-normal text-[#637381]">
                          {data.price}
                        </td>
                        <td className="py-4 px-1 text-sm font-normal text-[#637381] rounded-r-[8px]">
                          <div className="relative flex gap-1 items-center">
                            {/* <div className="w-[22px] h-[22px]">
                              <img
                                src={data?.image}
                                alt="hepta-brown"
                                className="min-w-[22px] min-h-[22px]"
                              />
                            </div> */}
                            {data.customer}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
   </div>
 </>
  )
};

export default Dashboard;
