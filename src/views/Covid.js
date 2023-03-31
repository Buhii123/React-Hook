import { useState } from "react";
import useFetch from "../costomize/fetch";
import moment from "moment";
const Covid = () => {

    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const pr = moment().subtract(31, 'days')

    const { data: dataCovid, isloadding, isError } = useFetch("https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z", true)
    // const { data: dataCovid, isloadding, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=${pr.toISOString()}&to=${today.toISOString()}`)


    return (
        <div className='table-container'>
            <table>

                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && isloadding === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>
                                        {item.Date}
                                    </td>
                                    <td>
                                        {item.Confirmed}
                                    </td>
                                    <td>
                                        {item.Active}
                                    </td>
                                    <td>
                                        {item.Deaths}
                                    </td>
                                    <td>
                                        {item.Recovered}
                                    </td>
                                </tr>
                            );
                        })

                    }
                    {
                        isloadding === true &&
                        <tr>Loading...</tr>
                    }

                    {
                        isError === true &&
                        <tr>Something wrong...</tr>
                    }
                </tbody>


            </table>
        </div>
    );
}
export default Covid;