import React from 'react'

const News = () => {
  return (
    <div className='news'>
      <h1>Subscribe to get the Latest News</h1>
      <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
      <form>
        <input type="email" placeholder='Enter your email addres'/>
        <button><i class="fa-brands fa-telegram"></i>Subscribe</button>
      </form>
    </div>
  )
}

export default News