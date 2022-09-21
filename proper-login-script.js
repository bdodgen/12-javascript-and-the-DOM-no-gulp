// Create a login page where the user can enter their username and password. If the user enters incorrect password display a nasty insulting message on the page. If the password is correct, display a gentle welcoming message.

let properUsername = "thewalrus"
let properPassword = "theeggman"

const properLogin = (username, password) => {
  if (username === properUsername) {
    if (password === properPassword) {
      alert("Howdy there, sugar!")
      return 1
    }
    alert("Fuck off.")
    return 1
  }
  alert("So you don't even know your own damn name, loser?")
  return 1
}

buttonClick = () => {
  let username = document.querySelector('.username-input')
  let password = document.querySelector('.password-input')
  properLogin(username, password)
}