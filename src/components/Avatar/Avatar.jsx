import './Avatar.scss'

const Avatar = ({ withImage, variant }) => {
  const avatarClassName = `avatar${withImage ? ' avatar--with-image' : ''}${variant ? ` avatar--${variant}` : ''}`

  return (
    <div
      className={avatarClassName}
    />
  )
}

export default Avatar
