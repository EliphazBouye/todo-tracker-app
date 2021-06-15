function GenerateUser(props) {

    return <div>
        <img src={props.userInfo.picture} alt="" />
       <h1>
            I'm {props.userInfo.firstName} {props.userInfo.lastName}
       </h1>

        <p>
            Email : {props.userInfo.email}
        </p>

        <p>
            Phone number : {props.userInfo.phone}
        </p>
        
        <p>
            Location City : {props.userInfo.city}
        </p>

        <button onClick={props.generate}>Generate New User</button>
    </div>
}

export default GenerateUser;