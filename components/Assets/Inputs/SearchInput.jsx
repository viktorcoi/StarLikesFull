import React, { useState } from 'react';
import CustomBlockOption from '../tags/CustomBlockOption';
import styles from './Input.module.css'
import Input from './Input';

const SearchInput = (props) => {

    const [value, setValue] = useState(0);

    return (
        <>
            <div className={`pos-relative ${styles[props.classSerach] ?? ""} ${props.addClassDiv ?? ""}`}>
                <Input placeholder={"Поиск"} {...props} className="search" 
                onChange={(e) => setValue(e.target.value.length > 3)} >
                    {props.none}
                </Input>
                {(
                    <CustomBlockOption {...props} addClass={value ? "open" : ""}>
                        {props.items.map(item => (
                            <p className='transition_0_3 none-select cursor-pointer' key={item}>{item}</p>
                        ))}
                    </CustomBlockOption>
                )}
            </div>
        </>
    )
}

export default SearchInput;