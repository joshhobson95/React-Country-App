import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

function Overview() {
    let currentDisplay = useSelector(selectDisplay);
  return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>
        <h2>{currentDisplay.name.common}</h2>

        <table className='overview-table'>
    <tr>
        <td>Borders:</td>
        <td>
            {currentDisplay.borders ?
            currentDisplay.borders.map((e, i, arr) => {
                if (i +1 === arr.length) {
                    return `${e}`;
                } else {
                    return `${e}, `;
                }
            })
        : 'N/A'}
        </td>
    </tr>
    <tr>
            <td>Capitol:</td>
            <td>
                {currentDisplay.capital}
            </td>

</tr>
      <tr>
            <td>Start of their Week:</td>
            <td>
                {currentDisplay.startOfWeek.charAt(0).toUpperCase() + currentDisplay.startOfWeek.slice(1)}
            </td>
        
        </tr>      
    <tr>
            <td>FIFA Team Acronym:</td>
            <td>
                {currentDisplay.fifa ? currentDisplay.fifa : "No team"}
            </td>
    </tr>
    <tr>
        <td>Population:</td>
        <td>
            {currentDisplay.population}
        </td>
    </tr>
    <tr>
        <td>Landlocked: </td>
        <td>
            {currentDisplay.landlocked ? 'True' : "False"}
        </td>
    </tr>
    <tr>
            <td>Timezones:</td>
            <td>
            {currentDisplay.timezones ?
            currentDisplay.timezones.map((e, i, arr) => {
                if (i +1 === arr.length) {
                    return `${e}`;
                } else {
                    return `${e}, `;
                }
            })
        : 'N/A'}
            </td>


    </tr>

        </table>
    </div>
  )
}

export default Overview