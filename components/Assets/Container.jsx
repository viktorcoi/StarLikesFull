import { MapClasses } from "../../models/Placeholders/Methods";

const classMap = {
    noMargin: "no-margin",
    noSelect: "u-sel-none",
    marginChilds: "margin-childs",
    marginChildsBlock: "margin-childs-top margin-childs-bot",
    marginChildsTop: "margin-childs-top",
    marginChildsBot: "margin-childs-bot",
    marginChildsInline: "margin-childs-inline",
    marginChildsRight: "margin-childs-right",
    flexWrap: "flex-wrap",
    flexStart: "flex-start"
}

const Container = (props) => {
    return (
        <div 
        {...props} 
        className={`items-center display-flex ${
            props.className || ""} ${
            MapClasses(classMap, props)}`
        } 
        style={{
            cursor: (props.cursor?"pointer":"default"),
            flexDirection: (props.flexDirection),
            width: (props.wide ? "100%" : ""),
            height: (props.height ?? ""),
            alignItems: (props.alignItems ?? ""),
            alignSelf: (props.alignSelf ?? ""),
            position: (props.position ?? ""),
            margin: (props.margin ?? ""),
            marginTop: (props.marginTop || props.marginBlock || "unset"),
            marginBottom: (props.marginBottom || props.marginBlock || "unset"),
            marginLeft: (props.marginLeft || props.marginInline || "unset"),
            marginRight: (props.marginRight || props.marginInline || "unset"),
            justifyContent: (props.justifyContent ?? ""),
            ...props?.style, 
        }}>
            {props.children}
        </div>
    )
};

export default Container;