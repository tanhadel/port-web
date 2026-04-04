'use client'

export default function LinesGrid() {
  return (
    <div className="lines-grid loaded">
      <div className="row">
        <div className="col col-m-12 col-t-6 col-d-4 col-d-lg-3"></div>
        <div className="col col-m-12 col-t-6 col-d-4 col-d-lg-3">
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2" style={{ animationDelay: '10s' }}></div>
          </div>
        </div>
        <div className="col col-m-12 col-t-6 col-d-4 col-d-lg-3">
          <div className="lines">
            <div className="line-1"></div>
          </div>
        </div>
        <div className="col col-m-0 col-t-0 col-d-0 col-d-lg-3">
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2" style={{ animationDelay: '0s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
