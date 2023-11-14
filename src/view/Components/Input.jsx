export const Input = ({placeHolder, Img, type, className, Name}) => {

 

  return (
    <div className={className}>
      {Img}
      <input 
      type={type}
      placeholder={placeHolder} 
      name={Name} 
      />
    </div>
  )
}  