const input__box = document.getElementById('input__box')
const button__box = document.getElementById('button__box')
const para__box = document.getElementById('para__box')

button__box.addEventListener('click',function(){

          var para = document.createElement('p')
          // para.innerText = 'hlo'

             para.innerText = input__box.value
             input__box.value = ""

          para.classList.add('class__p')

          para__box.appendChild(para)

          // delete functionality

          para.addEventListener('click',()=>{

                    para.style.textDecoration = 'line-through'
                    para.style.color = 'green'

          })

          para.addEventListener('dblclick',()=>{

                    para.innerText = ''
                    para.classList.remove('class__p')


          })

})