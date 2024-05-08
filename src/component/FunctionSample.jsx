

export const FunctionSample = (props) => {
    const {handleclick} = props;
  return (
    <div>
        <h2>This is a function sample</h2>
        <button onClick={handleclick}>Click me</button>
    </div>
  )
}
