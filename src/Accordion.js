import React from 'react'

const Accordion = (props) => {

    const handleClick =()=>{
        const accordion = document.getElementById(`accordion${props.aid}`)
        accordion.classList.toggle('active')
    }
  return (
    <div className='accordion' id={`accordion${props.aid}`}>
        <div className='A-list' onClick={handleClick}>
            <p  className='A-title'>Accordion</p>
            <svg className='arrow' id='arrow'fill='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
            </svg>
        </div>
        <div className='content'>
            <div className="mainContent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam est enim vel soluta iusto. Praesentium sint earum dignissimos, molestiae reiciendis labore dolor, obcaecati perferendis laborum harum enim non dolore commodi voluptatem nesciunt velit quae iure nostrum distinctio? Suscipit doloribus odio odit expedita ipsam recusandae tempora quidem, officia, minima voluptates totam.</p>
            </div>
        

        </div>
    </div>
  )
}

export default Accordion