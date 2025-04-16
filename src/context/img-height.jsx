import { createContext, useState } from "react"

const ImgHeightContext = createContext()

const ImgHeightProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false)
  const height = isLarge ? 200 : 100

  return (
    <ImgHeightContext.Provider value={{ height, isLarge, setIsLarge }}>
      {children}
    </ImgHeightContext.Provider>
  )
}

export { ImgHeightContext, ImgHeightProvider }
