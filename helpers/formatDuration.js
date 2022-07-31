export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60 / 60)
  const minutes = Math.floor(String(duration / 60 - hours * 60).padStart(2, '0'))
  const seconds = String(duration % 60).padStart(2, '0')

  if (hours) {
    return `${hours}:${minutes}:${seconds}`
  }

  return `${minutes}:${seconds}`
}