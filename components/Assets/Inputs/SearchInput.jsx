import React, { useState, useEffect } from 'react';
import styles from './Input.module.css'
import Input from './Input';

const SearchInput = (props) => {

    const { data, callback, filterField } = props;
    const [value, setValue] = useState(props.value ?? "");

    let column = ["login", "balance", "status", "mail", "number", "country", "phone", "summ", "type", 
        "social", "referral", "referrer", "count", "dateLast", "theme"]

    let filter = ["По логину", "По балансу", "По статусу", "По почте", "По номеру", "По стране", 
        "По телефону", "По сумме", "По виду", "По соц. сети", "По рефералу", "По рефереру", "По кол-ву",
        "По дате", "По теме"]
    
    useEffect(() => {
        if (callback) {
            for (var i = 0; i < filter.length; i++) {
                if (filterField == filter[i]) {
                    callback(data?.filter((v => v[column[i]].indexOf(value) != -1)), column[i], value);
                }
            }
        }
    }, [value, filterField])

    return (
        <>
            <div className={`pos-relative ${styles[props.classSerach] ?? ""} ${props.addClassDiv ?? ""}`}>
                <Input value={value} placeholder={"Поиск"} {...props} className="search" 
                onChange={(e) => {setValue(e.target.value)}}>
                    {props.none}
                </Input>
            </div>
        </>
    )
}

export default SearchInput;