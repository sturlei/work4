import _ from 'lodash/fp'
import {useEffect} from 'react'
import {useQuery, useMutation} from 'react-query'

export interface User {
  _id: number
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const getUsers = async (): Promise<User[]> => {
  const response = await fetch('/api/v1/users')
  const data = await response.json()
  return data
}

export const useUsersData = () => {
  const {data: users, isLoading, error, refetch} = useQuery('users', getUsers)

  return {users, isLoading, error}
}
