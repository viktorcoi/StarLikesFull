import React, { useState, useRef } from 'react';
import CustomBlockOption from './CustomBlockOption';
import styles from './CustomSelector.module.css'

const FilterSelector = (props) => {

    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [text, setText] = useState(props.title);
    const [selected, setSelected] = useState(false);

    const DropDown = () => setOpen(!open);
    const addClass = (selected) => setSelected(!selected)

    const handleOnClick = (item) => {
        if (!selection.some(current => current === item)) {
            setSelection([item]);
            setText(item);
        }
    }

    const CloseDropDown = () => {
        setOpen(false)
    }

    return (
        <div className={`pos-relative ${styles["for-selector"]} ${props.addClassName ?? ""} ${styles[props.className] ?? ""}`}>
            <div tabindex={0} onClick={() => DropDown(open)} onBlur={() => CloseDropDown()}
            className={`pos-relative transition_0_3 d-flex items-center ${styles["filter-selector"]} 
            ${styles[props.addIMG]} ${(open ? styles.open : "")} ${(selected ? styles.open : "")}`}>
                <img alt='filter' src='/assets/img/filter.svg'></img>
                <p className='none-select transition_0_3'>
                    <input style={{display: "none"}} value={text} name={props.name} />
                    {`Показать ${text}`}
                </p>
                
            </div>
            {(
                <CustomBlockOption addClass={open ? "open" : ""}>
                {props.items.map(item => (
                    <p className='transition_0_3 none-select' key={item} onMouseDown={(e) => {handleOnClick(item), addClass(), props.onClick(e)}}>{item}</p>
                ))}
                </CustomBlockOption>
            )}
        </div>
    );
}

export default FilterSelector;