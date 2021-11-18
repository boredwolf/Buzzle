const Avatar = ({ randomName }) => {
  const avatarPicture = `https://avatars.dicebear.com/api/personas/${randomName}.svg`;
  return <img className="avatar-img" src={avatarPicture} alt="avatar" />;
};

export default Avatar;
