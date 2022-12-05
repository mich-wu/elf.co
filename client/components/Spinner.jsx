import ClipLoader from 'react-spinners/SyncLoader'

import styles from './Spinner.module.scss'

const override = {
  display: 'flex',
  margin: '0 auto',
  borderColor: '#d6b068',
}

const Spinner = ({ loading }) => {
  return (
    <div className='sweet-loading'>
      <ClipLoader
        color='#d6b068'
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
