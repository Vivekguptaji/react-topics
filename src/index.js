import React, { useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import './index.css';

const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    console.log('startDate', startDate)
    return (
        <>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label className="required">Full Name</label>
                    <input
                        type="text"
                        placeholder="John Smith"
                        required
                    />
                </div>
                <div className="newUserItem" >
                <button onClick={() => { setShowCalendar(!showCalendar) }}>Show Calendar</button>
                    {showCalendar && <DatePicker selected={startDate}
                        className="text-center"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select" 
                        onChange={(date) => { setShowCalendar(!showCalendar); setStartDate(date) }} inline />}
                </div>
                <div className="newUserItem">
                    <label className="required">Location</label>
                    <input
                        type="text"
                        placeholder="Location"
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label className="required">State</label>
                    <input
                        type="text"
                        placeholder="State"
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label className="required">City</label>
                    <input
                        type="text"
                        placeholder="City"
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label className="required">Phone Number</label>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        required
                    />
                </div>
            </form>
         
          
        </>
        
    )
}

ReactDOM.render(<Example />, document.getElementById("root"));