/* eslint-disable jsx-a11y/anchor-is-valid */
// router
// import { Route, Routes, useLocation, Link, Navigate } from "react-router-dom";
import {FC, useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {useAuth} from '../../modules/auth'

const DashboardPage: FC = (test) => {
  const {auth, logout, setCurrentUser, saveAuth} = useAuth()
  useEffect(() => {
    console.log(auth?.firstName)

    return () => {}
  }, [auth])

  return (
    <>
      <h2 className='display-2'>
        {auth?.firstName ? `Hej ${auth.firstName}!` : 'Hej!'} <small className='text-muted'></small>
      </h2>
    </>
  )
}

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
