export const Input = ({placeHolder, Img, type, className, Name, onChange, value }) => {

  return (
    <div className={className}>
      {Img}
      <input 
      type={type}
      placeholder={placeHolder} 
      name={Name} 
      onChange={onChange}
      value={value}
      required
      />
    </div>
  )
}  