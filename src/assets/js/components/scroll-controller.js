const navLinks = document.querySelectorAll("#nav-list a")
const allNavBlocks = document.querySelectorAll(".nav_block")

window.addEventListener("scroll", () => {
  closeMenu()

  let currentScrollPos = document.documentElement.scrollTop

  if (currentScrollPos + 200 < allNavBlocks[0].offsetTop) {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active")
    })
  } else {
    allNavBlocks.forEach((navBlock, blockIndex) => {
      if (currentScrollPos + 200 > navBlock.offsetTop) {
        if (blockIndex > 0) {
          navLinks[blockIndex - 1].classList.remove("active")
        }
        if (blockIndex + 1 < navLinks.length) {
          navLinks[blockIndex + 1].classList.remove("active")
        }
        navLinks[blockIndex].classList.add("active")
        return
      }
    })
  }
})
