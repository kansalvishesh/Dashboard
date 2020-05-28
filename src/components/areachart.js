import React , {Component} from "react";
import { Line } from 'react-chartjs-2';



class AreaChart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Sep','Oct','Nov','Dec','Jan','Feb','March','April','May'],
                datasets:[
                    {
                        data:[
                            250,
                            470,
                            300,
                            400,
                            290,
                            390,
                            310,
                            410,
                            210
                        ],
                        backgroundColor:"#E6F7F9",
                        
                        
                    }
                ]
            }
        }
    }
    render(){
        return(
            <>
            <div>
            <Line
            data={this.state.chartData}
            options={{ maintainAspectRatio: false,
                legend:{
                    display:false
                }, }}
            height={300}
            />
            </div>
            </>
        )
    }
}
export default AreaChart;