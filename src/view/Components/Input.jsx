export const Input = ({placeHolder, Img, Img2, type, className, Name, onChange, value }) => {

  return (
    <div className={className}>
      {Img && Img}
      <input 
      type={type}
      placeholder={placeHolder} 
      name={Name} 
      onChange={onChange}
      value={value}
      required
      />
      {Img2 && Img2}
    </div>
  )
}  