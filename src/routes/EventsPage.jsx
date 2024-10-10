import { useEffect, useState } from "react";
import Events from "../components/eventsPage/Events";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

function EventsPage() {
  const { username } = useParams();

  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLastFiveEvents = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/received_events`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Error fetching user's last events.");
        }

        const data = await res.json();
        setEvents(data.slice(0, 5));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLastFiveEvents();
  }, [username]);

  return <>{!isLoading && events ? <Events events={events} /> : <Spinner />}</>;
}

export default EventsPage;
