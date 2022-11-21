// while문 선언, 조건, 증감

let temperature = 20//선언
while (temperature < 25) {//조건
	console.log(`${temperature}도 정도면 적당한 온도입니다.`)
	temperature++ // 증감연산자를 활용해서 온도를 변화시킵니다.//증감
}

// for문
for (let temperature = 20; temperature < 25; temperature++) {
	console.log(`${temperature}도 정도면 적당한 온도입니다.`)
}

// 반복문과 조건문 활용
for (let number = 1; number <= 10; number++) {
	if (number % 3 === 0) {
		console.log(`${number}는 3으로 나눠서 떨어지는 숫자입니다.`)
	}
}

// quiz 1부터 20까지 숫자중 홀수인 경우 '숫자 ...는 홀수입니다' 짝수인 경우 '숫자 ...는 짝수입니다' 출력

for (let num = 1; num <= 20; num++) {
	if (num % 2 === 0) {
		console.log(`숫자 ${num}은 짝수입니다.`)
	} else {
		console.log(`숫자 ${num}은 홀수입니다.`)
	}
}
