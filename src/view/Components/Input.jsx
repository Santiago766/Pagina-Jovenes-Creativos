export const Input = ({placeHolder, Img, type, className, Name, onChange}) => {

  // const handleChange = ( {target} ) => {
  //   setNewTask(state => {
  //     return {
  //       ...state,
  //       [target.name]: target.value
  //     }
  //   })
  // }

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