import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import CustomBlockOption from './CustomBlockOption';
import styles from './CustomSelector.module.css'

class CustomSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false],
            selected: false,
            status: ""
        };
        this.addClass = this.addClass.bind(this);
    }

    CloseDropDown = () => {
        this.setState({
            activeClasses: [false]
        })
    }

    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
    }

    render() {

    return (
        <div className={`pos-relative ${styles["for-selector"]} ${this.props.addClassName ?? ""} ${styles[this.props.className] ?? ""}`}>
            <div tabIndex={0} onClick={() => this.addClass(0)} onBlur={()=>this.CloseDropDown()}
            className={`pos-relative transition_0_3 d-flex ${styles["custom-selector"]} 
            ${styles[this.props.addIMG] ?? ""} ${(this.state.activeClasses[0] ? styles.open : "")} ${(this.state.selected ? styles.open : "")}`}>
                <p className='none-select transition_0_3'>
                    {this.props.title}
                </p>
                <img className={`${(this.state.activeClasses[0] ? styles.open : "")} transition_0_3 pos-absolute`}
                    alt='arrow down' src='/assets/img/arrow-down.svg'>
                </img>
            </div>
            {(
                <CustomBlockOption addClass={this.state.activeClasses[0] ? "open" : ""}>
                    {this.props.items.map(item => (
                        <p className='transition_0_3 none-select' key={item} 
                            onMouseDown={(e)=>{this.setState({selected: true}), this.props.onClick(e)}}>{item}</p>
                    ))}
                </CustomBlockOption>
            )}
        </div>
    );
    }
}

export default CustomSelector;