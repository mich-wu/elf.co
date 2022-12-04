import ClipLoader from 'react-spinners/SyncLoader'

import styles from './Spinner.module.scss'

const override = {
  display: 'flex',
  margin: '0 auto',
  borderColor: '#EDC4C2',
}

const Spinner = ({ loading }) => {
  return (
    <div className='sweet-loading'>
      <ClipLoader
        color='#EDC4C2'
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
