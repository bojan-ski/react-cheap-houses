import spinner from '../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='spinner d-flex justify-content-center align-items-center mb-5'>
      <img src={spinner} alt="spinner"/>
    </div>
  )
}

export default Spinner