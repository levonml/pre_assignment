import React from 'react'

const ShowDetail = ({data}) =>{
    const main = {
        border : 'solid',
        borderWidth : 1.5,
        borderColor : '#adada6',
        width : 400,
        margin : 'auto',
        padding : 10,
        
    }
    const list = {
        listStyle :' none',
        fontFamily : 'Roboto',
        fontSize : 18,
        marginLeft : 50,
    }
    return( 
        <div style = {main}>
            <ul style = {list}>
                <li>-name:{data[0].name}</li>
                <li>-username:{data[0].username}</li> 
                <li>-email:{data[0].email}</li> 
                <li>-phone:{data[0].phone}</li>
                <li>-company:{data[0].company.name}</li> 
                <li>-website:{data[0].website}</li>  
                <li>-address:<ul>
                                <li>street:{data[0].address.street}</li>
                                <li>suite:{data[0].address.suite}</li>
                                <li>city:{data[0].address.city}</li>
                                <li>zipcode:{data[0].address.zipcode}</li>
                            </ul> </li>
            </ul>
        </div>
    )
}
export default ShowDetail