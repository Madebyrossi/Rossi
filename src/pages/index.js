import React, { useEffect } from 'react'
import locomotiveScroll from 'locomotive-scroll'

import SEO from '../helpers/seo'
import Header from '../components/Header'
import Intro from '../components/Intro'

const IndexPage = () => {
  const scrollRef = React.createRef()
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })
  })

  return (
    <div className="scroll" ref={scrollRef}>
      <SEO title="Home" />
      
      <Header />
      <Intro />

      <div data-scroll data-scroll-speed="1" data-scroll-position="top" style={{height: '3000px', opacity: '1'}}>test</div>
    </div>
  )
}

export default IndexPage
