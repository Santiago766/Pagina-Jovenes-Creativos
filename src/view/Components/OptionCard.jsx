export const OptionCard = ({ text, className, img, onClick}) => {
  return (
  <div onClick={onClick} className={className}>
    <p>{text}</p>
    {img}
  </div>
  )
}