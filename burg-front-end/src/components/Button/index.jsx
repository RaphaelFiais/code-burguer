import React from "react";
import { Button } from './style'

function AllButton({children, ...props}){


    return <Button {...props}>{children}</Button>
}


export default AllButton