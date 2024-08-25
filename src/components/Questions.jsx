
const Questions = () => {
  return (
  <div>
    <h1>Ask as question</h1>
   <form className="questionForm">
    <input type="text" placeholder="Enter your email"/>
    <input type="text" placeholder="Enter your question"/>
    <button className="submitButton">submit</button>
   </form>
  </div>
  )
}

export default Questions