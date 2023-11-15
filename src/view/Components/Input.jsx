export const Input = ({placeHolder, Img, type, className, Name, onChange }) => {

  return (
    <div className={className}>
      {Img}
      <input 
      type={type}
      placeholder={placeHolder} 
      name={Name} 
      onChange={onChange}
      />
    </div>
  )
}  