class NoteBook {
    constructor(name, price, company) {
        this.name = name
        this.price = price
        this.company = company
    }
}

const notebook1 = new NoteBook('Mackbook', 2000000, 'Apple')

console.log(notebook1)
console.log(notebook1.name)
console.log(notebook1.company)
console.log(notebook1.price)


// 메소드
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    printInfo() {
        console.log(`name : ${this.name}, price : ${this.price}`)
    }
}

const notbook = new Product('Macbook', 2000000)

notbook.printInfo()

// 객체 리터럴(Object Literal)



const computer = {
    name: 'Macbook',
    price: 200000,
    printInfo: function() {
        console.log(`name: ${this.name}, price: ${this.price}`)
    }
}

computer.printInfo()

// quiz 색깔 사이즈 가격 속성 가진 쇼핑몰 클래스만들기
// + 바로 확인가능한 출력 메소드

class Shopping {
    constructor(color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }

    printInfo() {
        console.log(`이 옷의 색깔은 ${this.color}이고, 사이즈는 ${this.size}, 가격은 ${this.price}입니다.`)
    }
}

const shirts = new Shopping('Red', 'L', 50000)
const pants = new Shopping('Blue', 32, 45000)

shirts.printInfo()
pants.printInfo()

