import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Efficiency'],
  datasets: [
    {
      label: '# of Votes',
      data: [80,20],
      backgroundColor: [
        '#7DCF97',
        '#B1B1B1',
        
      ],
      borderColor: [
        '#7DCF97',
        '#B1B1B1',
      ],
      borderWidth: 1,
    },
  ],
  
};
function StatusCard() {
    return (
        <div>
            <Link to="/dashboard">

            <div className="  border-t-2 rounded-md border-t-theme_green-0 shadow-md text-black w-60 py-3 relative text-left px-5 mx-3 my-3">
                <span className="bg-theme_green-0 p-1 text-xs text-white font-bold absolute right-5 mr-5 mt-3 rounded-md">Runing</span>
                <div className="mt-8">
                    <h1 className="font-semibold">STENTER 1</h1>

                </div>
                <hr />
                <span className="text-xs font-light">EPF nuber : 302</span>
                <h3 className="font-medium text-sm">EFFICIENCY 80%</h3>

                <Doughnut data={data}  />

                <h3 className="font-medium text-sm mt-2">BATCH : 00547</h3>
                <h3 className="font-medium text-sm">QUALITY : 774 Rose</h3>
                <h3 className="font-medium text-sm">Length 50</h3>
                
            </div>
            </Link>
        </div>
    )
}

export default StatusCard
