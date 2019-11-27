import React from 'react'; 
import { SortSearchWrapper, SearchButton } from './sort-search.styles';

class SortSearch extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            isToggleOn: true,
            color: 'white' 
        }

        // Binding
        this.handleClick = this.handleClick.bind(this);
    }

    // Lifecycle Methods
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));

        console.log('im being clicked!')
    }

    handleChange(e) {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn,
          color: 'blue'
        }));
      }
        
    
    render() {
        return (
            <SortSearchWrapper>
                <SearchButton onClick={this.handleClick} onChange={this.handleChange}>Sort by price</SearchButton>

                <SearchButton onClick={this.handleClick} onChange={this.handleChange}>Sort by name</SearchButton>

                <SearchButton onClick={this.handleClick} onChange={this.handleChange}>Sort by relevence</SearchButton>
            </SortSearchWrapper>
        )
    }
}

export default SortSearch; 