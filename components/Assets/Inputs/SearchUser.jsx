import React from 'react';
import styles from './Input.module.css'
import Input from './Input';
import CustomBlockOption from '../tags/CustomBlockOption';
import DataUsers from '../Table/Data/Admin/DataUsers';
import { Component } from 'react';

class SearchUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: props.value ?? "",
            Users: DataUsers.map(v => v.login),
            showUsers: 0,
        };
    }

    render() {

        return (
            <>
                <div className={`pos-relative ${styles[this.props.classSerach] ?? ""}`}>
                    <Input value={this.state.value} placeholder={"Поиск"} className="search" 
                        onChange={(e) => {this.setState({...this.state, value: e.target.value, showUsers: e.target.value.length > 2})}}>
                    </Input>
                    {(
                        <CustomBlockOption classOption="search-popup" addClass={this.state.showUsers ? "open" : ""}>
                            {this.state.Users.filter((v => v.indexOf(this.state.value) != -1)).map(v => (
                                <p key={v} onClick={(e) => {this.setState({...this.state, value: e.target.innerText, showUsers: 0})}} 
                                    className='transition_0_3 none-select cursor-pointer'>{v}
                                </p>
                            ))}
                        </CustomBlockOption>
                    )}
                </div>
            </>
        )
    }
}

export default SearchUser;