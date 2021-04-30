import React ,{ useReducer,useEffect,createContext} from "react";
import axios from "axios";
import {reducer,initialState,minDate } from "./reducer"
export const ResultContext =  createContext();


function AppProvider({children}){

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      axios.get("data/jsonTab.json")
      .then(response =>{
        dispatch({type: 'FETCH_SUCCESS', payload:response.data.books})
      })
      .catch(error => {
        dispatch({type: 'FETCH_ERROR'})
        console.log(error)
      })
    }, [])

    const addBookTobBorrowedBook = state.library.filter(bookTitle =>  bookTitle.title === state.inputValue);
   
  
    const addBook = (e)=>{
      e.preventDefault()
          if(!state.inputValue){
            return
          }
       state.library.forEach(book =>{
          if(state.checked){
              book.important = true 
          }
          else{
            book.important = false 
          }

          if(state.actualDate){
            book.date = state.actualDate
          }
          else{
            book.date = minDate
          }
        });
     dispatch({type: 'BORROW_A_BOOK', payload:addBookTobBorrowedBook})
    }

    const handleChangeDate =(value)=>{
      dispatch({type: 'CHANGE_DATE', payload: value})
    }

    const handleValueInput =(value) =>{
      dispatch({type: 'CHANGE_VALUE_INPUT',payload: value})
    }

    const handleCheckbox =(value)=>{
      dispatch({type :'CHANGE_VALUE_CHECKBOX',payload: value})
    }


  return(
    <ResultContext.Provider 
    value={{
      //menu
          addBook,
          inputValue:state.inputValue,
          onChangeValueInput:handleValueInput,
          library:state.library,
          checked:state.checked,
          onCheckBox: handleCheckbox,
          actualDate: state.actualDate,
          minDate,
          onChangeDate: handleChangeDate,
      //borrowwedBooks
          borrowedBooks: state.borrowedBooks,
          dispatch,
      //returnedBooks
          returnedBooks:state.returnedBooks,
        //navigation
        resultsBorrowedBooks:state.resultsBorrowedBooks,
        resultsReturnedBooks:state.resultsReturnedBooks,  
        }}
    >
        {children}
    </ResultContext.Provider>
  );
}

export default AppProvider;