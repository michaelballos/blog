import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const HomeContent = () => {
  const headingRef = useRef()

  useEffect(() => {
    const element = headingRef.current
    gsap.fromTo({element} , { rotate: 0 },{
      duration: 1,
      x: -100, 
    })
  }, [])

  return <h1 ref={headingRef}>Michael</h1>
}

export default HomeContent;