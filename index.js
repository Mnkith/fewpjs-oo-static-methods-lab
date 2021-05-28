class Formatter {
  static capitalize(str){
    return str.replace(/\b\w/g, (m) => m.toUpperCase())
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(str){
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    str = this.capitalize(str)
    words.forEach((w) => {
      let re = new RegExp(`\\b${w}\\b`, 'ig')
      str = str.replace(re, w)

    })
    const c = str[0]
    return str.replace(c, c.toUpperCase())
  }
}

Formatter.titleize("a tale of two cities")