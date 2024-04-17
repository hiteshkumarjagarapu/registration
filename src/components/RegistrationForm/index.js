import {Component} from 'react'

class RegistrationForm extends Component {
  state = {f: '', l: '', fe: false, le: false, isSubmit: false}

  changeFirst = event => {
    const {target} = event
    const {value} = target
    this.setState({f: value})
  }

  changeLast = event => {
    const {target} = event
    const {value} = target
    this.setState({l: value})
  }

  blurFirst = event => {
    const isFname = this.first()
    this.setState({fe: !isFname})
  }

  blurLast = event => {
    const isLname = this.last()
    this.setState({le: !isLname})
  }

  formData = event => {
    event.preventDefault()
    const isFirst = this.first()
    const isLast = this.last()

    if (isFirst && isLast) {
      this.setState({isSubmit: true})
    } else {
      this.setState({fe: !isFirst, le: !isLast, isSubmit: false})
    }
  }

  first = () => {
    const {f} = this.state
    return f !== ''
  }

  last = () => {
    const {l} = this.state
    return l !== ''
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prev => ({f: '', l: '', isSubmit: !prev.isSubmit}))
  }

  renderForm = () => {
    const {f, fe, l, le} = this.state
    return (
      <form onSubmit={this.formData}>
        <div>
          <label htmlFor="fn">FIRST NAME</label>
          <input
            type="text"
            placeholder="first name"
            id="fn"
            value={f}
            onChange={this.changeFirst}
            onBlur={this.blurFirst}
          />
          {fe && <p>Required</p>}
        </div>
        <div>
          <label htmlFor="ln">LAST NAME</label>
          <input
            type="text"
            placeholder="last name"
            id="ln"
            value={l}
            onChange={this.changeLast}
            onBlur={this.blurLast}
          />
          {le && <p>required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }

  submissionSuccess = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {f, fe, l, le, isSubmit} = this.state
    return (
      <div>
        <h1>Registration</h1>
        <div>{isSubmit ? this.submissionSuccess() : this.renderForm()}</div>
      </div>
    )
  }
}
export default RegistrationForm
