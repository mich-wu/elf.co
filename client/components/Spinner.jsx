import { CSSProperties /* useState */ } from 'react'
import ClipLoader from 'react-spinners/SyncLoader'

const override = {
  display: 'flex',
  margin: '0 auto',
  borderColor: '#eac3ff',
}

const Spinner = ({ loading }) => {
  return (
    <div className='sweet-loading'>
      <ClipLoader
        color='#eac3ff'
        loading={loading}
        cssOverride={override}
        size={25}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

export default Spinner
