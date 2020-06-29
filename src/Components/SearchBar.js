import React from 'react'

class SearchBar extends React.Component{
    onFormSubmit=(event)=>{
        console.log("My Name is Rachit")
    }
    render(){
        return(<div>
            <div className='container'>
            <form className='col-10 mt-5' onSubmit={this.onFOrmSubmit}>
            <input type="text" className="form-control" id="Search"/>
            <input type="submit" className="btn btn-primary mt-2" value="Search"/>
            </form>
            </div>
        </div>)
    }
}

export default SearchBar