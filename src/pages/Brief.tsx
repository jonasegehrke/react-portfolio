import Blob from '../components/Blob'

export default function Brief() {
  return (
    <div>
      <section className='brief-section' id="brief">
        <div className="brief-image">
          <Blob />
        </div>

        <div className="brief-text">
          <h1>Hi, I'm Jonas</h1>
          <h2>Computer Science Student</h2>
          <p>Software developer with a passion for agile development and web services</p>
        </div>
      </section>
    </div>
  )
}
