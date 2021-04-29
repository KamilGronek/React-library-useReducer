import React, { useContext } from 'react'
import "../styles/SectionBooks.css";
import {ResultContext} from "./context"

export default function BookItems(){ 

    const context = useContext(ResultContext)

    const sortReturnedBooks= context.returnedBooks.sort((prevId,nextId)=>{
        return prevId.id - nextId.id;
    })
    return(   
        context.returnedBooks.length > 0 ?(
        <div className ="active">
            <section className="gallery"> 
                {sortReturnedBooks.map(book => (
                    <div key={book.id} className="book">
                    <span className="bolder">{book.id}</span>
                        <img src ={book.cover.small}  alt="" />
                        <h3>{book.title}</h3>
                        <hr className="new" />
                        <h4>
                            <i>
                            <span className="lighter">By {book.author}</span>
                            </i>
                        </h4>
                        <p>
                            <i>
                                Release Date: {book.releaseDate}
                                <br />
                                Pages: {book.pages}
                                <br />
                                <span>
                                    Links: <a href={book.link}>shop</a>
                                </span>
                                </i>
                                <br />
                                <p>
                                <em>(confirm returned book: {book.date.replace(
                                    /(\d{4})-(\d\d)-(\d\d)/,
                                    "$3-$2-$1"
                                )})</em>
                                </p>
                                <button 
                                onClick={()=> context.dispatch({type:'CONFIRM_GIVEBACK_BOOK',payload: book})}
                                className="confirm">
                                          Confirm returned book
                                </button>
                        </p>
                    </div>
                ))}
            </section>
        </div>
        ):(<p>All books are returned</p>)
    )
}
