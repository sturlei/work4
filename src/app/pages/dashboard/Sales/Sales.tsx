/* eslint-disable jsx-a11y/anchor-is-valid */
// router
import { Route, Routes, useLocation, Link, Navigate } from "react-router-dom";
import { FC, lazy, Suspense } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../../_metronic/layout/core'




const DashboardPage: FC = () => {
  const StatsTab = lazy(() => import("./Stats"));
  const FormWizzard = lazy(() => import("./components/Vertical"));


  return (
    <>
      <h2 className='display-2'>Stojance <small className="text-muted">Demirovic</small> </h2>

      <br />
      <DashboardTabs links={[
        { name: 'Statistik', link: 'stats' },
        { name: 'Registrera kund', link: 'register' },
        { name: 'Verktygg', link: 'other' },
      ]} />

      <div>

        <Routes>
          <Route path="" element={<Navigate to='stats' replace />}></Route>
          <Route path="stats" element={
            <Suspense fallback={<div className="spinner-grow " />}>
              <StatsTab />
            </Suspense>
          }></Route>
          <Route path="register" element={
            <Suspense fallback={<div className="spinner-grow " />}>
              <FormWizzard />
            </Suspense>
          }></Route>
          <Route path="other" element={
            <div >
              Sint sit mollit irure quis est nostrud cillum consequat Lorem
              esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
              Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
              cupidatat. eserunt officia id Lorem nostrud aute id commodo elit
              eiusmod enim irure amet eiusmod qui reprehenderit nostrud
              tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad
              irure in labore cillum elit enim. Consequat aliquip incididunt
              ipsum et minim laborum laborum laborum et cillum labore.
              Deserunt adipisicing cillum id nulla minim nostrud labore
              eiusmod et amet.
            </div>
          }></Route>
        </Routes>
      </div>

    </>
  )
}

const SalesDashboard: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

type DashboardTabsType = {
  links: { name: string, link: string }[]

}
const DashboardTabs: FC<DashboardTabsType> = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x  mb-5 fs-6">
      {links.map(({ link, name }, ind) => {


        return (
          <li className="nav-item " key={`${ind}_${name}`}>
            <Link
              replace
              className={"nav-link " + (pathname.endsWith(link) ? 'active' : '')}
              to={link}
            >
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}


export default SalesDashboard 
