import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'Организация 1', label: 'Организация 1' },
    { value: 'Организация 2', label: 'Организация 2' },
    { value: 'Организация 3', label: 'Организация 3' },
];

class Dropdown extends React.Component {
    state = {
        selectedOption: null,
        isOpen: false,
    };
    handleChange = (selectedOption: any) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    handleMenuOpen = () => {
        this.setState({ isOpen: true });
    }

    handleMenuClose = () => {
        this.setState({ isOpen: false });
    }


    render() {
        const { selectedOption, isOpen } = this.state;



        return (
            <Select
                className={`dropdown ${isOpen ? ' dropdown--open' : ''}`}
                classNamePrefix="react-select"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder="Выберите организацию"
                onMenuOpen={this.handleMenuOpen}
                onMenuClose={this.handleMenuClose}
            />
        );
    }
}

export default Dropdown ;