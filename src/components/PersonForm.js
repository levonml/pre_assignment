import React from 'react'

const Person = ({user, show}) =>{
    const cardStyle = {
        width : 200,
        height : 270,
        padding: 20,
        display : 'inline-block',
        listStyle : 'none',
        textAlign : 'center',
        fontFamily: 'Roboto',
        boxSizing : 'border-box',
        backgroundColor : '#fffcff',
        margin: 5,
        borderRadius: 10,
        border : 'solid',
        borderWidth : 2,
        borderColor: '#faf5fa',
        shadowColor: 'red',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 60,
    
    }
    const profilePic = {
        padding : 30,
        width : 30,
        height : 30,
        background : '#ffca38',
        borderRadius : 100,
        margin : 'auto',
        marginBottom: 15,
        fontSize : 24,
        color : '#595957'
    }
    const name = {
        fontSize : 14,
    }
    const userName = {
        fontSize : 10,
        fontStyle : 'italic',
        color : '#8c8c85'

    }
    const email = {
        fontSize : 10,
        fontStyle : 'italic',
        marginButton: 20,
    }
    const buttonStyle = {
        padding : 8,
        paddingRight : 22,
        paddingLeft : 22,
        background : '#3285a8',
        borderRadius : 5, 
        borderWidth : 0,
        color : 'white',
    }
    const liStyle = {
        borderColor : 'black',
        borderWidth : 2,
        haight : 50
    }
    const id = user.id;
    let n = user.name.charAt(0)
    return(
        <div style = {cardStyle}>
            <div style = {profilePic}>{n}</div>
            <li stile = {liStyle}>
            <span style = {name}>{user.name}</span> <br/>
            <span style = {userName}>@{user.username}</span> <br />
            <a style = {email}href = {user.website}>{user.website}</a> <br/><br />
            <button style = {buttonStyle} onClick = {show} id = {id}>
                MORE DETAILS
            </button>
            </li>
        </div>)
}
const PersonForm = ({person, show}) => {
    return(
        <div>
            <ul>
                {person.map(p => <Person key = {p.id} user = {p} show = {show} />)}
            </ul>
        </div>)
}
export default PersonForm