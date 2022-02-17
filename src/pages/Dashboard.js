import React from 'react'
import PageHeader from '../components/atoms/PageHeader'
import StatusCard from '../components/atoms/StatusCard'
import StatusCardDanger from '../components/atoms/StatusCardDanger'
import StatusCardWarning from '../components/atoms/StatusCardWarning'
import Footer from '../components/molecules/Footer'
import Header from '../components/molecules/Header'
import SideNAv from '../components/molecules/SideNAv'
import CountUp from 'react-countup';
import ProgressBar from "@ramonak/react-progress-bar";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar, Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [80,20,50,10, 22, 63],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data:[10,20,30,40,60,50],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

function Dashboard() {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-2 hidden md:block ">
                    <SideNAv/>

                </div>
                <div className=" col-span-12 md:col-span-10 ">
                    <Header/>
                    <PageHeader title="Machine Status" />
                    <hr className="border-2 border-primary-0"/>
                    <div className="flex flex-wrap overflow-auto">

                   <div className="p-3 min-w-full">
                       <h1 className=" font-bold text-lg text-left  md:pl-20 lg:pl-20 xl:pl-2 ">Shift Time - Shift A</h1>
                       <div className="my-3 md:w-full md:grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:pl-20 lg:pl-20 xl:pl-2 ">
                                <div className="w-full ">
                                   <div className="w-full bg-white rounded-md p-3 shadow-md">
                                       <table className="text-left p-3">
                                            <tr>
                                                <td>
                                                    Machine Id
                                                </td>
                                                <td>
                                                    -
                                                </td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Machine Name
                                                </td>
                                                <td>
                                                    -
                                                </td>
                                                <td>Abcd efg</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Quantity
                                                </td>
                                                <td>
                                                    -
                                                </td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Purpose
                                                </td>
                                                <td>
                                                    -
                                                </td>
                                                <td>Lorem ipsium anorweign dorstep</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Machine Id
                                                </td>
                                                <td>
                                                    -
                                                </td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Machine Id
                                                </td>
                                                <td>
                                                    -
                                                </td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Machine Id
                                                </td>
                                                <td>
                                                    -
                                                </td>
                                                <td>123</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Machine Id
                                                </td>
                                                <td>
                                                    -
                                                </td>
                                                <td>123</td>
                                            </tr>
                                       </table>

                                   </div>
                                   <div className="w-full bg-white shadow-md rounded-md mt-6">
                                   <Line options={options} data={data} />;
                                   </div>
                                </div>
                                <div className="w-full ">
                                <div className="w-full py-14 bg-white shadow-md rounded-md text-theme_blue-0 text-lg font-bold flex justify-evenly">
                                   <div>
                                    <CountUp end={74.22}  />%
                                    <h1 className="font-bold text-black-0 text-xs">Sucess Rate</h1>
                                   </div>
                                   <div>
                                    <CountUp end={2}  />s
                                    <h1 className="font-bold text-black-0 text-xs">Avg. Time</h1>

                                   </div>
                                   <div>
                                    <CountUp end={35}  />ms
                                    <h1 className="font-bold text-black-0 text-xs">Response Time</h1>

                                   </div>
                                </div>
                                <div className="w-full py-10 mt-6 px-5  bg-white shadow-md rounded-md text-sm font-bold ">
                                    <div className="flex flex-col w-full  items-start">
                                    <h3>Foundation completion</h3>
                                    <ProgressBar completed={60} className="w-full " bgColor={'#7DCF97'}/>

                                    </div>
                                    <div className="flex flex-col w-full  items-start mt-5">
                                    <h3>Secondary Level completion</h3>
                                    <ProgressBar completed={60} className="w-full " bgColor={'#7DCF97'}/>

                                    </div>
                                </div>
                                <div className="w-full py-10 mt-6 px-5  bg-white shadow-md rounded-md text-sm font-bold ">
                                   <Bar options={options} data={data} />
                                    
                                </div>
                                </div>
                                <div className="w-full ">
                                <div className="w-full py-5 px-5  bg-white shadow-md rounded-md text-sm  font-bold ">
                                    <h6 className="text-left">Abcd Efg</h6>
                                   <table class="border-collapse border border-slate-500 w-full">
                                    
                                    <tbody>
                                        <tr>
                                        <td class="border border-slate-700 ...">Indiana</td>
                                        <td class="border border-slate-700 ...">Indianapolis</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-slate-700 ...">Ohio</td>
                                        <td class="border border-slate-700 ...">Columbus</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-slate-700 ...">Michigan</td>
                                        <td class="border border-slate-700 ...">Detroit</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-slate-700 ...">Michigan</td>
                                        <td class="border border-slate-700 ...">Detroit</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                <div className="w-full py-5 px-5  bg-white shadow-md rounded-md text-sm font-bold mt-6">
                                    <h6 className="text-left">Abcd Efg</h6>
                                   <table class="border-collapse  w-full">
                                    
                                    <tbody>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-theme_red-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-theme_red-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-theme_red-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-theme_blue-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-theme_blue-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-theme_red-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-theme_red-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-theme_red-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                        <tr>
                                        <td class="p-3 px-2 text-xs"> <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div></td>
                                        <td class="p-3 px-2 text-xs">Indiana</td>
                                        <td class="p-3 px-2 text-xs"><div className=" w-10 h-5  bg-lgreen-0 text-white"> 5</div></td>
                                        <td class="p-3 px-2 text-xs">10.01.20.345</td>
                                        </tr>
                                      
                                        

                                        
                                        
                                    </tbody>
                                    </table>
                                    
                                </div>
                                
                                </div>
                                <div className="w-full ">
                                <div className="w-full py-5 px-5  bg-white shadow-md rounded-md text-sm font-bold ">
                                    <h6 className="text-left">Abcd Efg</h6>
                                   <table class="border-collapse border border-slate-500 w-full">
                                   <thead>
                                            <tr>
                                            <th class="border border-slate-600 bg-theme_lblue-0 text-white"></th>
                                            <th class="border border-slate-600 bg-theme_lblue-0 text-white">State</th>
                                            <th class="border border-slate-600 bg-theme_lblue-0 text-white">City</th>
                                            <th class="border border-slate-600 bg-theme_lblue-0 text-white">distric</th>
                                            </tr>
                                        </thead>
                                    <tbody>
                                        <tr>
                                        <td class="border border-slate-700 ...">Indiana</td>
                                        <td class="border border-slate-700 ...">Indianapolis</td>
                                        <td class="border border-slate-700 ...">1234</td>
                                        <td class="border border-slate-700 ...">556</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-slate-700 ...">Indiana</td>
                                        <td class="border border-slate-700 ...">Indianapolis</td>
                                        <td class="border border-slate-700 ...">1234</td>
                                        <td class="border border-slate-700 ...">556</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-slate-700 ...">Indiana</td>
                                        <td class="border border-slate-700 ...">Indianapolis</td>
                                        <td class="border border-slate-700 ...">1234</td>
                                        <td class="border border-slate-700 ...">556</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-slate-700 ...">Indiana</td>
                                        <td class="border border-slate-700 ...">Indianapolis</td>
                                        <td class="border border-slate-700 ...">1234</td>
                                        <td class="border border-slate-700 ...">556</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                <div className="w-full py-5 px-5  bg-white shadow-md rounded-md text-sm font-bold mt-6">
                                    <h6 className="text-left">Abcd Efg</h6>
                                   <table class="border-collapse  w-full">
                                  
                                    <tbody>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_green-0">Sucess</td>
                                        
                                        </tr>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_green-0">Sucess</td>
                                        
                                        </tr>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_yellow-0">Warning</td>
                                        
                                        </tr>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_yellow-0">Warning</td>
                                        
                                        </tr>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_yellow-0">Warning</td>
                                        
                                        </tr>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_green-0">Sucess</td>
                                        
                                        </tr>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_red-0">Error</td>
                                        
                                        </tr>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_red-0">Error</td>
                                        
                                        </tr>
                                        <tr>
                                        <td class="p-3 text-xs">218.123.456.7</td>
                                        <td class="p-3 text-xs">Indiana</td>
                                        <td class="p-3 text-xs text-theme_green-0">Sucess</td>
                                        
                                        </tr>
                                       
                                      
                                        

                                        
                                        
                                    </tbody>
                                    </table>
                                    
                                </div>
                                
                                </div>
                       </div>
                   </div>




                    </div>
                </div>
                <Footer/>
            </div>

        </div>
    )
}

export default Dashboard
