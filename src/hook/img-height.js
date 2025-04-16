import { useContext } from "react"
import { ImgHeightContext } from "../context/img-height"

const useImgHeight = () => {
  const value = useContext(ImgHeightContext)

  if (!value) {
    throw new Error(
      "useImgHeight precisa ser usado dentro de ImgHeightProvider",
    )
  }

  return value
}

export { useImgHeight }
