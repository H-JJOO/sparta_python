console.log('My' + ' car')
console.log('1' + 2)
console.log(1+ 2)

// 템플릿 리터럴 (Template literals) 백틱(``)

const shoesPrice = 200000
console.log(`이 신발의 가격은 ${shoesPrice}원 입니다.`)

// 산술연살자 (Numeric operators)

console.log(2 + 1)
console.log(2 - 1)
console.log(2 * 3)
console.log(4 / 2)
console.log(10 % 3)
console.log(10 ** 2)

// 증감연산자 (Increment and Decrement operators)

let cnt = 1
const preIncremnet = ++cnt
console.log(`count: ${cnt}, preIncremnet: ${preIncremnet}`)

const postIncremnet = cnt++
console.log(`count: ${cnt}, postIncremnet: ${postIncremnet}`)

// 대입연산자 (Assignment operatos)

const shirtsPrice = 100000
const pantsPrice = 80000
let totalPrice = 0

totalPrice += shirtsPrice
console.log(totalPrice) // 100000

totalPrice += pantsPrice
console.log(totalPrice) // 180000

totalPrice -= shirtsPrice
console.log(totalPrice) // 80000

// 비교연산자 (Comparison operators)
console.log(1 < 2)
console.log(1 <= 2)
console.log(1 > 2)
console.log(1 >= 2)

// 논리연산자 (Logical operatos)
let isOnSale = true
let isDiscountItem = true

console.log(isOnSale && isDiscountItem) // true && true 이므로 true
console.log(isOnSale || isDiscountItem) // true || true 이므로 true

isOnSale = false
console.log(isOnSale && isDiscountItem) // false && true 이므로 false
console.log(isOnSale || isDiscountItem) // false || true 이므로 true

isDiscountItem = false
console.log(isOnSale && isDiscountItem) // false && false 이므로 false
console.log(isOnSale || isDiscountItem) // false || false 이므로 false

console.log(!isOnSale) // !false 이므로 true

일치연산자 (Equality operatos)
console.log(1 === 1) // true
console.log(1 === 2) // false
console.log('Javascript' === 'Javascript') // true
console.log('Javascript' === 'javascript') // 대소문자나 띄워쓰기도 다 정확히 일치해야 해요. 따라서 false

// quiz 물건 두개 선언, 총합 변수에 할당, 마지막 총가격 20% 할인
const pen = 3000
const note = 2000
let total = pen + note

console.log(`총 ${total * 0.8}원에 물건을 구입합니다.`)

