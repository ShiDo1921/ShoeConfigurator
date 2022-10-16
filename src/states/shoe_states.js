import { proxy } from "valtio"

export const shoeColorState = proxy({
  currentSelected: 'Please click the shoe',
  items: {
      laces: '#ffffff',
      mesh: '#ffffff',
      caps: '#ffffff',
      inner: '#ffffff',
      sole: '#ffffff',
      stripes: '#ffffff',
      band: '#ffffff',
      patch: '#ffffff',
  }
})


export const shoeTexture = {
  mesh: {
    file: null,
    base64URL: null
  }
}
