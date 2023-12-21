const Notification = props => {
  //  Write your code here.
  const {notiText, imageUrl, className} = props
  return (
    <div className={`box ${className}`}>
      <img src={imageUrl} className='box-image' />
      <p>{notiText}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <div className='card-container'>
      <h1 className='main-heading'>Notification</h1>
      <Notification
        notiText='Information Message'
        imageUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        className=' blueBox'
      />
      <Notification
        notiText='Success Message'
        imageUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        className=' greenBox'
      />
      <Notification
        notiText='Warning Message'
        imageUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        className=' yellowBox'
      />
      <Notification
        notiText='Error Message'
        imageUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        className=' redBox'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
