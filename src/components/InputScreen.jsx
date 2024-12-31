const InputScreen = () => {
  return (
    <div>
        <h3>Insert:</h3>
        <textarea name="" id="" autoFocus></textarea>
        <input type="number" min={1} max={1000} />
        <button className="btn btn-primary">Convert</button>
    </div>
  )
}

export default InputScreen