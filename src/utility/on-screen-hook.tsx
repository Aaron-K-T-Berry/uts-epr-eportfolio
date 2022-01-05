import { useState, useEffect, useRef } from "react"

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false)
  let observer = null

  useEffect(() => {
    observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )
  }, [])

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [observer])

  return isIntersecting
}
