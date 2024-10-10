import "../../styles/eventsPage/Events.css";

function Events({ events }) {
  return (
    <div className="events-list">
      {events.length === 0 ? (
        <div>No recent event was found</div>
      ) : (
        events.map((eventItem) => (
          <div key={eventItem.id} className="event-item">
            <div>Event type: {eventItem.type}</div>
            <div>Created at: {eventItem.created_at}</div>
            <div>repo: {eventItem.repo.name}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Events;
