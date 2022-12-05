import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getEvents } from '../apiClient/event.js'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents()
      setEvents(events)
    }
    fetchEvents()
  }, [])

  const MOCK_AUTHID = 69

  // todo: hostId should be auth0_id but setup after.
  // const filterEvents = (events) => {
  //   return events.filter((event) => event.host_id === MOCK_AUTHID)
  // }

  // Word wrap this for big guest lists
  // alphabetical order

  return (
    <div className={styles.dashboard}>
      <h1>Secret Santa</h1>
      <hr></hr>
      <h2>Your events</h2>
      <div className={styles.events}>
        <div className={styles.event}>
          <h2 className={styles.title}>Dev Academy Christmas Party</h2>
          <p>
            {' '}
            Date: 23 December 2022 | Guest Submissions{' '}
            <span className={styles.statusOpen}>Open</span>
          </p>
          <h2>Participants</h2>
          <ul>
            <li>🎄 Barb</li>
            <li>🎄 Janet</li>
            <li>🎄 June</li>
            <li>🎄 Dale</li>
          </ul>
          <button>
            <Link to={`/dashboard/1`}>View Event</Link>
          </button>
        </div>
        <img
          src='../../server/public/tree.PNG'
          alt='christmas tree'
          width='50'
          className={styles.treeImage}
        ></img>

        {/* {filterEvents(events).map((event) => (
          <div className='event' key={event.id}>
            <h3>Event name: {event.event_name}</h3>
            <p> Event date: {event.date}</p>

            <p>
              {event.status === 0 ? 'Submissions Open' : 'Submissions Closed'}
            </p>

            <Link to={`/dashboard/${event.invite_id}`}>View Event</Link>
          </div>
        ))} */}

        <div className={styles.event}>
          <h2>TradeMe Christmas Party</h2>
          <p>
            Date: 24 December 2022 | Guest Submissions{' '}
            <span className={styles.statusClosed}>Closed</span>
          </p>
          <h2>Participants</h2>
          <ul>
            <li>🎄 Janice</li>
            <li>🎄 Aimee</li>
            <li>🎄 Peter</li>
            <li>🎄 Sarah</li>
            <li>🎄 Lisa</li>
            <li>🎄 David</li>
          </ul>
          <button>
            <Link to={`/dashboard/1`}>View Event</Link>
          </button>
        </div>
        <img
          src='../../server/public/tree.PNG'
          alt='christmas tree'
          width='50'
          className={styles.treeImage}
        ></img>
      </div>
    </div>
  )
}

export default Dashboard
