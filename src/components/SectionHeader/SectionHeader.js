import './SectionHeader.scss'

const SectionHeader = (props) => {
  return (
    <div className='SectionHeader'>
      <div className="h4 text-capitalize">
        <span className='firstPart'>{props.firstPart}</span>
        <span className='secondPart'>{" "+props.secondPart}</span>
      </div>
    </div>
  )
}

export default SectionHeader
