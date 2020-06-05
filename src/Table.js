import React, { Component } from "react";


const Tbody = props =>{



    const rows = props.adata.map((rowww,index) =>{
        return (
            <tr>
                <td>
                    {rowww.name}
                </td>
                <td>
                    {rowww.job}
                </td>
                <td>
                    <button onClick={()=> props.ayLouJee(index) }>
                        Delete
                    </button>
                </td>

            </tr>
        )    
        })
    return(    
        <tbody>
            {rows}
        </tbody>
    )
}

const Thead = () =>{
    return(
        <thead>
            <th>
                Name
            </th>
            <th>
                Class
            </th>                    
        </thead>
    )
}

class Table extends Component{
    render(){
        console.log("Ye data vekh lou");
        console.log(this.props);

        const adata = this.props.cDat;
        const func = this.props.yeWalaFunction;

        return(
            <table>
                <Tbody adata={ adata } ayLouJee= { func } />
                <Thead/>                
            </table>
            
        );
    }
}

export default Table;