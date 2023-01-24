import React from 'react'

export default function footer() {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com</p></footer>
  )
}
