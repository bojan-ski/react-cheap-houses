import spinner from '../assets/spinner.gif'

const Loading = () => {
    return (
        <div className='loading d-flex justify-content-center align-items-center'>
            <img src={spinner} alt="loader" />
        </div>
    )
}

export default Loading