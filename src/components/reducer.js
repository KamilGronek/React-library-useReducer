export let  minDate = new Date().toISOString().slice(0, 10);

export const initialState = {
    library : [],
    borrowedBooks: [],
    resultsBorrowedBooks: 0,
    checked: false,
    inputValue:"",
    actualDate: "",
    calendarDate: "",
    returnedBooks :[],
    resultsReturnedBooks: 0,
}

export function reducer(prevState, action){
  switch(action.type) {
        case 'FETCH_SUCCESS': 
         return{
          library : action.payload,
          borrowedBooks:[],
          resultsBorrowedBooks:0,
          returnedBooks:[],
          resultsReturnedBooks: 0,
          checked: false,
          actualDate: minDate ,
         }
        case 'CHANGE_VALUE_INPUT':
            return{
              ...prevState,
              inputValue: action.payload
          }
        case 'CHANGE_VALUE_CHECKBOX':
             return{
              ...prevState,
              checked: action.payload
            }
        case 'CHANGE_DATE':
              return{
                  ...prevState,
                  actualDate: action.payload,
              }
        case 'BORROW_A_BOOK':
             return{
                returnedBooks:[ ...prevState.returnedBooks],
                borrowedBooks: [...prevState.borrowedBooks,action.payload[0]],
                library:prevState.library.filter(library=>library.title !== action.payload[0].title),
                resultsBorrowedBooks: prevState.borrowedBooks.length + 1,
                resultsReturnedBooks: prevState.resultsReturnedBooks,
                actualDate: minDate,
            }
        case 'GIVEBACK_A_BOOK':
              return{
                ...prevState,
                borrowedBooks: prevState.borrowedBooks.filter(book => book.id !== action.payload.id),
                resultsBorrowedBooks: prevState.borrowedBooks.length - 1,
                returnedBooks:[...prevState.returnedBooks,action.payload],
                resultsReturnedBooks :prevState.returnedBooks.length + 1
              }
        case 'CONFIRM_GIVEBACK_BOOK':
              return{
                ...prevState,
                library : [...prevState.library, action.payload],
                returnedBooks: prevState.returnedBooks.filter(book => book.id !== action.payload.id),
                resultsReturnedBooks :prevState.returnedBooks.length - 1
              }
        default:
            return prevState;
      }
  }