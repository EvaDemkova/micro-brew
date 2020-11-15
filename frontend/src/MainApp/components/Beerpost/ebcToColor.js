const ebcToColor = (ebc) => {
  if (ebc < 8) {
    return '#F6F513'
  } else if (ebc < 13) {
    return '#D5BC26'
  } else if (ebc < 18) {
    return '#BF923B'
  } else if (ebc < 30) {
    return '#BC6733'
  } else if (ebc < 80) {
    return '#0F0B0A'
  } else {
    return 'green'
  }
}

export { ebcToColor }
