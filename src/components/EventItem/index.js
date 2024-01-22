import './index.css'

const EventItem = props => {
  const {eachItemDetails, updateActiveEvent, isActive} = props
  const {id, imageUrl, name, location} = eachItemDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickingEvent = () => {
    updateActiveEvent(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickingEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
