type Props = {
  className: string
  color: string
  img: string,
  top?: {
    stat: number,
    description: string
  },
  bottom?: {
    statTotal: number,
    descriptionTotal: string,
    descriptionDone: string
  }
}

const CardsWidget20 = ({ className, color, img, top, bottom }: Props) => {
  const stats = top?.stat ? top?.stat : 0;
  const statsTotal = bottom?.statTotal ? bottom?.statTotal : 0;
  const statsRes = statsTotal - stats;
  const statsResProc = Math.ceil( (statsRes / statsTotal) * 100);
  
  
  return (
    <div
      className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end ${className}`}
      style={{
        backgroundColor: color,
        backgroundImage: `url('${img}')`,
      }}
    >
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{stats}</span>

          <span className='text-white opacity-75 pt-1 fw-semibold fs-6'>{top?.description ? top?.description : 'Description'}</span>
        </div>
      </div>
      <div className='card-body d-flex align-items-end pt-0'>
        <div className='d-flex align-items-center flex-column mt-3 w-100'>
          <div className='d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2'>
            <span>{statsTotal} {bottom?.descriptionTotal ? bottom.descriptionTotal : 'Total' }</span>
          </div>
          <div className='d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2'>
            <span>{statsRes} {bottom?.descriptionDone ? bottom.descriptionDone : 'Done' }</span>
            <span>{(statsResProc | 0)}%</span>
          </div>

          <div className='h-8px mx-3 w-100 bg-white bg-opacity-50 rounded'>
            <div
              className='bg-white rounded h-8px'
              role='progressbar'
              style={{ width: (statsResProc | 0) +'%' }}
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export {CardsWidget20}
