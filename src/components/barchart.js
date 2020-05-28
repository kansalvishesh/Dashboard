import React , {Component} from "react";
import { Bar } from 'react-chartjs-2';

class Barchart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Mark','Smith','Mahesh','Jack','Ganesh'],
                datasets:[
                    {
                        data:[
                            271,
                            300,
                            470,
                            223,
                            400
                        ],
                        backgroundColor:"#FFA8A0",
                        barThickness:10,
                        
                    }
                ]
            }
        }
    }
    render(){
        return(
            <>
            <div>
            <Bar
            data={this.state.chartData}
            options= {{ maintainAspectRatio: false ,
                legend:{
                    display:false
                },
            scales:{
                yAxes: [{display:false }]
            }}}
            height={300}
           
            />
            </div>
            </>
        )
    }
}
export default Barchart;