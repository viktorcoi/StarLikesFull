const GetSearchTerms = (obj) => {
    return Object.keys(obj).map((v) => {
        const {searchable, text} = obj[v];

        return searchable ? { text, value: v} : null;
    }).filter(v => !!(v));
};

const FilterPermissionsObject = (obj, permission = -1) => {
    obj = JSON.parse(JSON.stringify(obj));
    if (permission != -1){
        Object.keys(obj).forEach(v => {
            if (IsPermittedColumn(obj[v], permission)){
                return;
            }
            delete obj[v];
        });
    }

    return obj;
}

const GetDataColumns = (obj, permission = -1) => {
    return Object.getOwnPropertyNames(
        FilterPermissionsObject(obj, permission)
    ).map(v => obj[v].column);
}

const GetPrismaSelectColumns = (obj, permission) => {
    return Object.getOwnPropertyNames(
        FilterPermissionsObject(obj, permission)
    ).reduce((v, s) => {
        if (typeof(v) == "undefined"){
            v = {};
        }
        v[s] = true;
        return v;
    }, {});
};

const IsPermittedColumn = (obj = null, permissionLevel) => {
    if (obj === null){
        return true;
    }
    const ret = obj.permissions || obj;
    return ret.filter(v => v === permissionLevel).length > 0;
} 

const MapClasses = (map, props) => {

    return Object.keys(map).reduce((prev, cur) => {
        const obj = props[cur];
        if (!(obj) || obj == false){
            return prev;
        }
        return `${prev} ${map[cur]}`;
    }, "");
};

export { 
    GetSearchTerms, 
    FilterPermissionsObject,
    GetDataColumns, 
    GetPrismaSelectColumns, 
    IsPermittedColumn, 
    MapClasses 
};