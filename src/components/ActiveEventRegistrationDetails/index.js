import './index.css'

const options = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {activeEventStatus, isButtonClicked} = props
  console.log(activeEventStatus)
  const noButtonClicked = 'Click on an event, to view its registration details'

  const renderActiveEventsTab = () => {
    switch (activeEventStatus) {
      case options.registered:
        return (
          <div className="view-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
              className="registered-img"
            />
            <h1 className="registered-heading">
              You have already registered for the event
            </h1>
          </div>
        )
      case options.yetToRegister:
        return (
          <div className="view-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="yet-to-register-image"
            />
            <p className="register-description">
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you fall totally in love with
              beautiful art form.
            </p>
            <button type="button" className="register-here-button">
              Register Here
            </button>
          </div>
        )
      case options.registrationClosed:
        return (
          <div className="view-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
              className="registrations-closed-image"
            />
            <h1 className="registrations-closed-heading">
              Registrations Are Closed Now!
            </h1>
            <p className="registrations-closed-description">
              Stay tuned. We will reopen the registration soon!
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="active-event">
      {isButtonClicked ? (
        <div>{renderActiveEventsTab()}</div>
      ) : (
        <p className="no-active-event-description">{noButtonClicked}</p>
      )}
    </div>
  )
}

export default ActiveEventRegistrationDetails
