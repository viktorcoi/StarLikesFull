import Router from "next/router";
import { useEffect } from "react";

const AdminIndex = () => {

    useEffect(() => {
       Router.push("/admin/users")
    }, []);

    return (
        <></>
    );
};

export default AdminIndex;