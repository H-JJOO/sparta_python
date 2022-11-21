//if
const shoesPrice = 30000
if (shoesPrice < 50000) {
    console.log('이 신발을 사겠습니다.')
}

const capPrice = 40000
if (capPrice < 50000) {
    console.log('이 모자 사겠습니다.')
}

// else
const shoesPrice = 30000
if (shoesPrice < 40000) {
	console.log('신발을 사겠습니다.')
} else {
	console.log('너무 비싸요. 신발을 사지 않겠습니다.') // 신발 가격이 40000원보다 작지 않으므로 해당 코드가 실행됨
}

// else if
const shoesPrice = 50000
if (shoesPrice < 40000) {
	console.log('신발을 사겠습니다.')
} else if (shoesPrice <= 50000) {
	console.log('고민을 해볼게요...')  // 신발 가격이 50000원보다 작거나 같으므로 않으므로 해당 코드가 실행됨
} else {
	console.log('너무 비싸요. 신발을 사지 않겠습니다.')
}

// quiz 거리변순 선언, 2km, 미만이면 걸어가자 2km 이상이고 5km 미만이면 택시를 타자, 그외 기차를타자
const distance = 4.9
if (distance < 2) {
    console.log('걸어가자')
} else if (distance >= 2 && distance < 5) {
    console.log('택시타자')
} else {
    console.log('기차 타자')
}