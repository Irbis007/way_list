

const faqItemTop = document.querySelectorAll('.faq .faq-item .item-top')
const faqItemBody = document.querySelectorAll('.faq .faq-item .item-body')


faqItemTop.forEach((item, i) => {
  item.addEventListener('click', () =>{
    faqRemoveActive(faqItemTop)
    faqRemoveActive(faqItemBody)
    item.classList.add('active')
    faqItemBody[i].classList.add('active')
  })
})


function faqRemoveActive(list) {
  list.forEach(item =>{
    item.classList.remove('active')
  })
}