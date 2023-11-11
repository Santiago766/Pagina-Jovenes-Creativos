import './Input.css'

export const Input = ({placeHolder, Img, type, className}) => {
  return (
    <div className={className}>
      {Img}
      <input type={type} placeholder={placeHolder} />
    </div>
  )
}  

