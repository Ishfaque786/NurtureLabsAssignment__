import React, { useEffect, useState } from 'react'
import {MdSearch,MdDelete} from 'react-icons/md'

function AddKeywordpage() {
const [tabledata, settabledata] = useState<any>([])
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard";
        fetch(url).then((Response) => Response.json())
            .then(data =>
                settabledata(data.data));
       
        
    }, [])
    console.log(tabledata);
    return (
        <div className="addKeywordPage">
            <div className="filterBox">
                <div style={{display:'flex'}}>
                    <div>
                        <div>Add Another keyword</div>
                        <div style={{ backgroundColor: "#3f0e40", color: "white",width:'50px',marginInline:'10px',paddingInline:'10px' }}>1/3</div>
                        <div>UPGRADE</div>

                    </div>
                    <div>Advance search</div>
                </div>
                <div className="filterBarBox">
                    <div>
                        <div className="searchIcon">
                        <MdSearch size='25px' />
                        </div>
                    
                    <input className="filterSearchBar" type="text" placeholder="Enter your filters here" />
                    </div>
                    <div>
                    <button>SAVE FILTERS</button>
                    </div>
                </div>
                
                
            </div>
            <div className="filterBox">
                <div style={{display:'flex'}}>
                    <div>The terms you are tracking</div>
                    <div>The data will refresh every 5 min</div>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>Keywords</th>
                            <th></th>
                            <th>Goal</th>
                            <th>Matches</th>
                            <th>Search Status</th>
                            <th>Delete keyword</th>
                        </tr>
                        {
                            tabledata.map((data:any) =>
                                <tr>
                                    <td>{data.keyword}</td>
                                    <td><MdSearch size={'20px'}/></td>
                                    <td>{data.goal}</td>
                                    <td>{data.matches}</td>
                                    <td>{data.search_status}</td>
                                    <td><MdDelete /></td>
                            </tr>)
                        }
                 </table>
                    
                </div>
                <div >
                    <button style={{margin:'auto'}}>VIEW RESULTS</button>
                    </div>
                
            </div>

        </div>
    )
}

export default AddKeywordpage
