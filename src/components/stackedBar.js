import React , {Component} from "react";
import { HorizontalBar } from 'react-chartjs-2';


class Stack extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                datasets: [
                    { 
                      data: [25.8],
                      backgroundColor: '#8FDCE5',
                      barThickness:15, 
                    },
                    {
                      data: [20.7],
                      backgroundColor: '#FFD180', 
                      barThickness:15, 
                      
                    },
                    {
                      data: [15.4],
                      barThickness:15, 
                      backgroundColor: '#FFA8A0' 
                      
                    },
                    {
                      data: [38.1],
                      backgroundColor: '#F1F1F5',
                      barThickness:15, 
                    }
                    
                  ]
                  
            }
        }
    }
    render(){
        return(
            <>
            <div>
            <HorizontalBar
            data={this.state.chartData}
            options={{maintainAspectRatio: false ,
                legend:{
                    display:false
                },
                scales: {
                    
                  xAxes: [{ stacked: true,display:false }],
                  yAxes: [{ stacked: true,display:false }]
                }
              }} 
            height={100}
           
            />
            </div>
            </>
        )
    }
}
export default Stack;