import React, { useContext } from 'react'
import {ResultContext} from "./context"
import "../styles/AddBook.css"

export default function AddBook(){

    const context = useContext(ResultContext)
    
    let maxDate = context.minDate.slice(0, 4) * 1 + 1;
    let  getMaxDate = maxDate + "-12-31";

return(
    <nav className="menu">
        <form onSubmit ={context.addBook}>
        <select value={context.inputValue} 
             onChange={(e)=> context.onChangeValueInput(e.target.value) 
        }>
                 <option>Borrow a book:</option>  
            {context.library.map((book) => (
                <option key={book.id} value={book.title} >
                    {book.title}
                </option>
            ))}
        </select>
        <div>
        <input
            type="checkbox"
            checked={context.checked}
            onChange={(e)=>context.onCheckBox(e.target.checked)}
        />
        <label>Priority</label>
        </div>
        <br />
        <br />
        <label htmlFor="date"> Time to give back a book: </label>
        <input
            type="date"
            value={context.actualDate}
            min={context.minDate}
            max={ getMaxDate }
            onChange ={(e)=>context.onChangeDate(e.target.value) }
        />
        <br />
        <hr className="new4" />
            <div className="centerize">
                <button>BORROW</button>
            </div>
        </form>
    </nav>
    )
}
