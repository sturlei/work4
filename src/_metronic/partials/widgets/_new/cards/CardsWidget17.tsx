/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
// import {KTSVG} from '../../../../helpers'
// import {getCSSVariableValue} from '../../../../assets/ts/_utils'
// import { useThemeMode } from '../../../layout/theme-mode/ThemeModeProvider'
import toLocalString from "../../../../../app/functions/toLocalString";

const toLocalSV = (num: number) => toLocalString(num, 'sv');

type Props = {
  className: string,
  newOrder?: number,
  renewalOrder?: number,
  whenPaid?: number
}

const CardsWidget17: FC<Props> = ({
  className,
  newOrder,
  renewalOrder,
  whenPaid
}) => {
  newOrder = newOrder ? newOrder : 0;
  renewalOrder = renewalOrder ? renewalOrder: 0;
  whenPaid = whenPaid ? whenPaid: 0;
  const totalOrder = newOrder +  renewalOrder  + whenPaid  


  return (
    <div className={`card card-flush ${className}`}>
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <div className='d-flex align-items-center'>
            <div className='d-flex align-items-center'>
              <span className='fs-2hx fw-bold text-dark  me-2 lh-1 ls-n2'>
                {toLocalSV(totalOrder)}
              </span>
              <span className='fs-4 fw-semibold text-gray-400 me-1 align-self-end'>kr</span>
            
            </div>
            
          </div>
          
          <span className='text-gray-400 pt-1 fw-semibold fs-6'>Totalt såld för <span className='text-gray-600 pt-1 fw-bold fs-6'>april</span></span>
        </div>
      </div>

      <div className='card-body pt-2 pb-4 d-flex flex-wrap align-items-center'>
        

        <div className='d-flex flex-column content-justify-center flex-row-fluid'>
          <div className='d-flex fw-semibold align-items-center'>
            <div className='bullet w-8px h-3px rounded-2 bg-success me-3'></div>
            <div className='text-gray-500 flex-grow-1 me-4'>Nya kunder</div>
            <div className='fw-bolder text-gray-700 text-xxl-end'>
              {toLocalSV(newOrder)}
              <span className='fs-8 fw-semibold text-gray-600 me-1 align-self-end'> kr</span>
            </div>
          </div>
          <div className='d-flex fw-semibold align-items-center my-3'>
            <div className='bullet w-8px h-3px rounded-2 bg-primary me-3'></div>
            <div className='text-gray-500 flex-grow-1 me-4'>Förnyade</div>
            <div className='fw-bolder text-gray-700 text-xxl-end'>
            {toLocalSV(renewalOrder)}
              <span className='fs-8 fw-semibold text-gray-600 me-1 align-self-end'> kr</span>
            </div>
          </div>
          <div className='d-flex fw-semibold align-items-center'>
            <div
              className='bullet w-8px h-3px rounded-2 me-3'
              style={{backgroundColor: '#E4E6EF'}}
            ></div>
            <div className='text-gray-500 flex-grow-1 me-4'>Vid Betalning</div>
            <div className=' fw-bolder text-gray-700 text-xxl-end'>
              {toLocalSV(whenPaid)}
              <span className='fs-8 fw-semibold text-gray-600 me-1 align-self-end'> kr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export {CardsWidget17}
