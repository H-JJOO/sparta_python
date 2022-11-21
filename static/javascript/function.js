//function
// function 함수명(매개변수들...) {
//
//     이 함수에서 실행할 코드들
//
//     return 반환값
//
//     }

// 함수의 선언
function calculateAvg(price1, price2) {
	const sum = price1 + price2 // 매개변수인 price1, price2을 변수처럼 활용!
	console.log(`두 상품의 합계는 ${sum}입니다.`)
	const avg = sum / 2
	return avg // 평균가격을 리턴!
}

// 함수의 호출
const priceA = 1000
const priceB = 2000
// 함수의 호출
const avg1 = calculateAvg(priceA, priceB)
console.log(`두 상품의 평균은 ${avg1}입니다.`)

const priceC = 3000
const priceD = 4000
// 함수의 호출
const avg2 = calculateAvg(priceC, priceD)
console.log(`두 상품의 평균은 ${avg2}입니다.`)

// quiz 세 개의 물건가격 매개변수 전달 평균값리턴 함수 정의, 그 함수 호출 평균값 출력

function calculateAvg(price1, price2, price3) {
    const sum = price1 + price2 + price3
    const avg = sum / 3
    return avg
}

const priceA = 1000
const priceB = 2000
const priceC = 3000

const avgRetun = calculateAvg(priceA, priceB, priceC)

console.log(`세 물건의 평균은 ${avgRetun}원 입니다.`)