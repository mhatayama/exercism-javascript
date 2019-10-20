export const hey = (message) => {
  message = message.trim()
  const isYelling = /[A-Z]/.test(message) && !/[a-z]/.test(message)
  const isQuestion = /\?$/.test(message)

  if (isYelling) {
    return isQuestion ?
      'Calm down, I know what I\'m doing!' :
      'Whoa, chill out!'
  } else if (isQuestion) {
    return 'Sure.'
  } else if (!message) {
    return 'Fine. Be that way!'
  }
  return 'Whatever.'
}
