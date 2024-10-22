import React from "react"

interface ifProps {
    children: React.ReactNode,
    test: boolean,
}

const If: React.FC<ifProps> = props => {
    if(props.test){
        return props.children
    } else{
        return false
    }
}

export default If