const headerElem = document.querySelector("#header-component")

const togleMenu = () => {
  headerElem.classList.toggle("active")
}

const closeMenu = () => {
  headerElem.classList.remove("active")
}
