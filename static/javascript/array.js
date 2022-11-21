// // 1번째 방법
// const arr1 = new Array(1, 2, 3, 4, 5)
//
// // 2번째 방법 ★☆★☆★☆
// const arr2 = [1, 2, 3, 4, 5]
// console.log(arr2)
//
// // 배열 안의 데이터
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log(rainbowColors[0]) // o번 인덱스를 통해서 데이터에 접근. red
// console.log(rainbowColors[1]) // 1번 인덱스를 통해서 데이터에 접근. orage
// console.log(rainbowColors[2]) // 2번 인덱스를 통해서 데이터에 접근. yellow
// console.log(rainbowColors[3]) // 3번 인덱스를 통해서 데이터에 접근. green
// console.log(rainbowColors[4]) // 4번 인덱스를 통해서 데이터에 접근. blue
// console.log(rainbowColors[5]) // 5번 인덱스를 통해서 데이터에 접근. indigo
// console.log(rainbowColors[6]) // 6번 인덱스를 통해서 데이터에 접근. violet
//
// // 배열의 길이
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log(rainbowColors.length) // 7을 출력
//
// console.log(rainbowColors[rainbowColors.length - 1]) // length 를 응용하여 배열의 마지막 요소도 쉽게 찾아서 출력 가능!
//
//
// //요소 추가와 삭제
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// rainbowColors.push('ultraviolet') // 배열의 마지막에 ultarviolet 추가
// console.log(rainbowColors) // ultraviolet이 추가된 rainbowColors 출력
//
// rainbowColors.pop() // 배열의 마지막 요소 ultraviolet을 제거
// console.log(rainbowColors) // ultraviolet이 제거된 rainbowColors 출력
//
//
// // 배열과 반복문
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// for (let i = 0; i < rainbowColors.length; i++) {
// 	console.log(rainbowColors[i])
// }
//
// // 간단한 형식의 for 문
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// for (const color of rainbowColors) {
// 	console.log(color)
// }

// quiz 열 개의 상품 가격 데이터 배열 만들고 반복문활용 가격합계와 평균 구하기

const goods = [5000, 3000, 9000, 13000, 40000, 1000, 12000, 12500, 4000, 500]

let sum = 0

// for (let i = 0; i < goods.length; i++) {
//     let sum = sum + goods[i]
// }

for (const price of goods) {
    sum +=price
}

const avg = sum / goods.length

console.log(`합계 : ${sum} 평균 : ${avg}`)

