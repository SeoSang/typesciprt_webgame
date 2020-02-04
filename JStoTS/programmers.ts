const carpet = (brown: number, red: number): Array<number> => {
  let width, height, redsum: number
  let answer: number[] = []
  const width_height_sum = brown / 2 + 2
  for (height = 1; height < width_height_sum; height++) {
    width = width_height_sum - height
    redsum = (width - 2) * (height - 2)
    if (redsum === red) {
      answer.push(width)
      answer.push(height)
      break
    }
  }
  return answer
}

console.log(carpet(10, 2))
console.log(carpet(8, 1))
console.log(carpet(24, 24))
