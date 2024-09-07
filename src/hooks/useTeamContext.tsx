import { useContext } from 'react'
import { TeamContext } from '../context/TeamsContext'

export default function useTeamsContext () {
  const context = useContext(TeamContext)

  if (!context) {
    throw new Error('El hook useTeamsContext tiene que ser usado dentro de TeamsProvider')
  }

  return context
}
