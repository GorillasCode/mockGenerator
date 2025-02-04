import './MockGen.css'
const MockGen = () => {
  return (
    <div className="container text-center">
      <h1>MockGen</h1>
      <div>
        <p>A simple tool to convert JSON data to a mock API.</p>
        <textarea name="" id="" placeholder="Enter your object"></textarea>
        <p>Number of Mocks:</p>
        <input type="number" name="" id="" placeholder="" min={1} />
        <button onClick={{}} className="btn btn-success">
          Generate
        </button>
      </div>
    </div>
  )
}

export default MockGen

{
  /* <div>

<textarea name="" id="" autoFocus></textarea>
<input type="number" min={1} max={1000} />
<button className="btn btn-primary">Convert</button>
</div> */
}
