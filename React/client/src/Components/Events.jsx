import React from 'react'

function Events() {
    const handleClick = () => {
        alert("oh my god eppo")
    }
    const handleChange = (e) => {
        console.log("value", e.target.value)
    }
    return (
        <div>
            <div className="input-group flex-nowrap mt-3 w-50">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" className="form-control" placeholder="Username"
                    aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange} />
            </div>
            <button className="btn btn-primary mt-3" onClick={handleClick}>Button</button>



        </div>
    )
}

export default Events
