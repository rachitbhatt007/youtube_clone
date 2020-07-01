import React from 'react'

class SearchBar extends React.Component{
    state={term:""}


    onInputChange = (event)=>{
        this.setState({term:event.target.value})
        
    };

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    };

    render(){
        return(<div>
            <div className='container'>
            <form className='border col-10 mt-3 py-3' onSubmit={this.onFormSubmit}>
                <label htmlFor="search"><h6>Video Search</h6></label>
            <input type="text" 
            className="form-control" id="Search"
             value={this.state.term}
             onChange={this.onInputChange}/>
            <input type="submit" className="btn btn-outline-primary mt-2" value="Search"/>
            </form>
            </div>
        </div>)
    }
}

export default SearchBar