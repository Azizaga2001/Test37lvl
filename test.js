1)
//выведите в консоли ширину и высоту окна браузера с помощью window
let x = window.innerHeight
let y = window.innerWidth

console.log(w, y);
2)
//создайте обработчик события для кнопки ниже, которая будет открывать новое окно в браузере при нажатии
<button id='open'>Open</button>

const open1 = document.querySelector('#open')

open1.addEventListener('click', window.open("https://"))

3)
//создайте обработчик события для кнопки ниже, которая будет закрывать текущее окно в браузере при нажатии
<button id='close'>Open</button>


const close1 = document.querySelector('#close')

close1.addEventListener('click', window.close("https://"))

4)
//создайте обработчик события для кнопки ниже, которая будет перемещать текущее окно в браузере при нажатии
<button id='move'>Open</button>

const move1 = document.querySelector('#move')

move1.addEventListener('click', window.moveTo(0, 0))

5)
//создайте обработчик события для кнопки ниже, которая будет менять размер текущего окно в браузере при нажатии
<button id='remove'>Open</button>

const remove1 = document.querySelector('#remove')

remove1.addEventListener('click', window.onresize())

6)
//выведите в консоли ширину экрана пользователя в пикселях

console.log(screen.width);

7)
//выведите в консоли высоту экрана пользователя в пикселях

console.log(screen.height);

8)
//выведите в консоли ширину экрана пользователя без панели задач и интерфейса вкладок в пикселях

console.log(screen.availWidth);

9)
//выведите в консоли высоту экрана пользователя без панели задач и интерфейса вкладок в пикселях

console.log(screen.availHeight);

10)
//выведите в консоли сколько битов использует браузер пользователя

console.log(screen.colorDepth);

11)
//выведите в консоли глубину экрана пользователя в пикселях

console.log(screen.pixelDepth);

12)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на предыдущую страницу в браузере при нажатии
<button id='back'>Open</button>

const back1 = document.querySelector('#back')

back1.addEventListener('click', history.back())

13)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на следующую страницу в браузере при нажатии
<button id='next'>Open</button>

const next1 = document.querySelector('#next')

next1.addEventListener('click', history.forward())

14)
//с помощью какого свойства можно проверить включены ли у пользователя куки

//cookieEnabled

15)
//с помощью какого свойства можно проверить как называется имя приложения в браузере пользователя

//appName

16)
//с помощью какого свойства можно проверить как называется имя браузера пользователя

//Product

17)
//с помощью какого свойства можно проверить какая версия у браузера пользователя

//appVersion

18)
//с помощью какого свойства можно отправить заголовок браузера на сервер

//userAgent

19)
//с помощью какого свойства можно узнать операционную систему пользователя

//Platform

20)
//с помощью какого свойства можно узнать язык браузера пользователя

//Language

21)
//с помощью какого свойства можно узнать находится в данный момент пользователь в сети или нет

//online

22)
//с помощью какого свойства можно проверить включен ли java у пользователя

//javaEnabled()