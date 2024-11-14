import '../Buttons/Button.scss'

const Button = (props) => {
  return (
      <div className="text-capitalize text-center btn text-white pt-lg-2 genralBtn">
            <span>{props.btnName}</span>
        </div>
  )
}

export default Button
