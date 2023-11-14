export const OptionCard = ({ text, className, img }) => {
  return (
  <div className={className}>
    <p>{text}</p>
    {img}
  </div>
  )
}