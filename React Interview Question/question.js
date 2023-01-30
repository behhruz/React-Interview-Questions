//  1 React nima?
// Bu javascriptni kutubhonasi,bu bizaga bir sahifali pagelar va prilojeniyalar yaratishimizga yordam beradi
// Djordan Uoke tomonidan yani facebook developerlari tomonidan yaratilgan 2011 Facebookda ciqgan 2012 yil Instagramda

// 2 Reactning assosiy hususiyatlari qanday?
// Jsx sintaxisini ishlatadi.Yani Javascriptda Html kodlarini yozish.
// RealDOM manipulyatsiyasi qimmat ekanligini hisobga olib, RealDOM o'rniga VirtualDOM-dan foydalanadi.
// Server tomonidan Rendering holatini padderjka qiladi.
// Bir yo'nalishli ma'lumotlar oqimini yoki ma'lumotlarni bog'lashni kuzatib boradi

// 3 Jsx nima?
// Bu Javascript XML
// React.createElement() sintaxis sugari desak boladi,chunki bizga
// HTML kabi shablon sintaksisi bilan birga JavaScript-ning ifodaliligini beradi.

// NodeModuls nima?
// React ishlatadigon kutubhonalari
// reactni qoshimcha dependensieslari joylashadi borib

// Public nima?
// single page aplication
// hamma yozvotgan narsalarimiz borib eng katta va bitta index.html ichidagi root ga borib ulanadi

// .gitIgnore nima?
// githubga ketayotgan skritiy faylani yashirib qoyish.

// package.json
// projectni passporti desak boladi
// ichidagi malumotlarini ozimiz ozgartirib qoyolmaymiz
// yani npm bilan tortib kelgan kutubhonalarimiz ham joylashadi

// Mouting => yaratishlik class constructor super render bolib keyin ComponentDidMount boladi

// Updating => rerender qilish yani SetState  bolib keyin ComponentDidUpdate boladi

// Unmouting => bizga qachonki komponent ochib ketayotganida yoki ochib
//  qoganda Domdan shunda ishlatamiz ComponentWillUnmouting

// UseEffect => malumotlarini bir marta rerender qilish yani birinchisi objectda malumotla kiritiladi ikkinchi
// qiymati bosh massiv yani shu malumnotlarni bir marta render qilib berishga

// state nima?
// Bu bitta object
// Usha komponentga tegishli objectlar hammasi state ga saqlanadi

// let [state,SetState]=UseState("")=> state hozirgi sastayaniyasi ,setState bu function state update qilishga,
// bosh string esa initional value

// UseRef => ozgartirvotgan qiymatimizga biriktirib qoyamiz nimaga chunki
// usha narsani qayta-qayta rerender qilmasligi uchun

//  const [state, dispatch] = useReducer(reducer,initionalValue); => initionalValueni hozirgi sastayaniyasi,
// dispatch bu bitta function pasdegi malumotlarni onclick yoki onchange

// localStorage
// setItem => 2 qiymat oladi birinchisi key ikkinchisi value faqat hotirada saqlaydi
// removeItem => ochirib beradi 1 ta qiymat oladi key ni ozini
// ( clear => localStoragedi nechta malumot
//  bosa hammasini ochirvoradi ichiga qiymat qoymasegam boladi
//  )
// getItem => 1 ta qiymat faqat keyini oladi brauzerda qoldiradi refresh bogandayam project
// ochib yongandayam

//  sessionStorage => faqat bir marotaba tab qladigon
//  malumotlar projectni ochirsa ochadi
