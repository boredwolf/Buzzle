const Avatar = ({ randomName }) => {
    return(
        
        <img className="avatarImg" src={'https://avatars.dicebear.com/api/personas/' + randomName + '.svg'} alt="avatar"/>
        )
}

export default Avatar;