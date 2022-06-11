import React, { useState, useEffect } from 'react';
import styles from './Input.module.css'
import Input from './Input';

const SearchInput = (props) => {

    const { data, callback, filterField } = props;
    const [value, setValue] = useState(props.value ?? "");

    useEffect(() => {
        if (callback)
            if (filterField == "По логину") {
                callback(data?.filter((v => v.login.indexOf(value) != -1)));
            } else if (filterField == "По балансу") {
                callback(data?.filter((v => v.balance.indexOf(value) != -1)));
            } else if (filterField == "По статусу") {
                callback(data?.filter((v => v.status.indexOf(value) != -1)));
            } else if (filterField == "По почте") {
                callback(data?.filter((v => v.mail.indexOf(value) != -1)));
            } else if (filterField == "По номеру") {
                callback(data?.filter((v => v.numberAcc?.indexOf(value) != -1)));
            // } else if (filterField == "По номеру") {
            //     callback(data?.filter((v => v.numberSup?.indexOf(value) != -1)));
            // } else if (filterField == "По номеру") {
            //     callback(data?.filter((v => v.numberOrder?.indexOf(value) != -1)));
            } else if (filterField == "По стране") {
                callback(data?.filter((v => v.country.indexOf(value) != -1)));
            } else if (filterField == "По телефону") {
                callback(data?.filter((v => v.phone.indexOf(value) != -1)));
            } else if (filterField == "По сумме") {
                callback(data?.filter((v => v.summ.indexOf(value) != -1)));
            } else if (filterField == "По виду") {
                callback(data?.filter((v => v.type.indexOf(value) != -1)));
            } else if (filterField == "По соц. сети") {
                callback(data?.filter((v => v.social.indexOf(value) != -1)));
            } else if (filterField == "По рефералу") {
                callback(data?.filter((v => v.referral.indexOf(value) != -1)));
            } else if (filterField == "По рефереру") {
                callback(data?.filter((v => v.referrer.indexOf(value) != -1)));
            } else if (filterField == "По кол-ву") {
                callback(data?.filter((v => v.count.indexOf(value) != -1)));
            } else if (filterField == "По дате") {
                callback(data?.filter((v => v.dateLast.indexOf(value) != -1)));
            } else if (filterField == "По теме") {
                callback(data?.filter((v => v.theme.indexOf(value) != -1)));
            }
    }, [value, filterField])

    return (
        <>
            <div className={`pos-relative ${styles[props.classSerach] ?? ""} ${props.addClassDiv ?? ""}`}>
                <Input value={value} placeholder={"Поиск"} {...props} className="search" 
                onChange={(e) => setValue(e.target.value)}>
                    {props.none}
                </Input>
            </div>
        </>
    )
}

export default SearchInput;