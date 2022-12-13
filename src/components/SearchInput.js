import React from 'react'

class SearchInput extends React.Component {

    // onInputChange(event) {
    //     console.log(event.target.value) //It will execute when we type something (input)
    // }
    constructor(props) {
        super(props)
        this.state = {entry: ''}
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {  
        return ( 
            <>
                <div className='ui segment'>
                    {/* <form onSubmit={this.props.onSearchSubmit} className='ui form'> */}
                    <form onSubmit={this.onFormSubmit} className='ui form'>
                        <div className='field'>
                            <div className='ui massive icon input'>
                                <input type="text" placeholder="Search Image..."
                                    //   /* onChange={(event)=>console.log(event.target.value)} /> {/*this.onInputChange() - using () will execute everytime when it render */
                                    onChange={(event) => this.setState({ entry: event.target.value })}
                                    value={this.state.entry} 
                                    /> {/* For storing a data in value */}
                                <button type='submit'><i className="search icon"></i></button>
                            </div>
                        </div>
                        {/* <h1>{this.state.entry}</h1> */}
                    </form> 
                </div>
            </>
        )
    }
}

export default SearchInput;