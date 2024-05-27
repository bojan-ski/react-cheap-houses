import loading from '../assets/Hourglass.gif'

const Loading = () => {
    return (
        <div className='loading d-flex justify-content-center align-items-center'>
            <img src={loading} alt="loader" />
        </div>
    )
}

export default Loading