import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'Организация 1', label: 'Организация 1' },
    { value: 'Организация 2', label: 'Организация 2' },
    { value: 'Организация 3', label: 'Организация 3' },
];

class Dropdown extends React.Component <{placeText?: string, classes?: string}> {
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
        const {placeText} = this.props;
        const {classes} = this.props;

        return (
            <Select
                className={`dropdown ${isOpen ? ' dropdown--open' : ''} ${classes}`}
                classNamePrefix="react-select"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder={placeText}
                onMenuOpen={this.handleMenuOpen}
                onMenuClose={this.handleMenuClose}
            />
        );
    }
}

export default Dropdown ;