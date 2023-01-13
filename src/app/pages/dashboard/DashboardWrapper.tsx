/* eslint-disable jsx-a11y/anchor-is-valid */
// router
// import { Route, Routes, useLocation, Link, Navigate } from "react-router-dom";
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'




const DashboardPage: FC = () => {



  return (
    <>
      <h2 className='display-2'>Stojance <small className="text-muted">Demirovic</small> </h2>
    </>
  )
}

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}



export { DashboardWrapper }
