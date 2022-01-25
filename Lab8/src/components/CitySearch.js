import React from 'react'
import '../Style.css'


//klasa która pobiera wpisane miasto z forma.
class CitySearch extends React.Component{

    constructor(props){
        super(props)
        this.state = {searchInputValue: ""}
    }
    //po potwierdzeniu forma, przypisuje wyszukiwane miasto

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInputValue)
        
    }

    render() {
        return(
            <form className="search-loaction" onSubmit={this.onFormSubmit}>
            <input
             type="text"
             name="city"
             placeholder="What city?" 
             onChange={(event) => this.setState({searchInputValue: event.target.value})}
             className="form-control text-muted form-rounded p-4 shadow-sm" />
        </form>
        )
    }
}

export default CitySearch;