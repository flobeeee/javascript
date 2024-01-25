class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail ++
    }

    dequque() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head ++
        return removed
    }

    initIndex() {
        this.head = 0
        this.tail = 0
    }

    send() {
        while (Object.keys(this.storage).length > 0) {
            const data = this.dequque()

        console.log(data)

        }

        this.initIndex()
    }
}

  // Queue 인스턴스 생성
  const myQueue = new Queue();
console.log(myQueue.tail)
  // 요소 추가
  myQueue.enqueue("첫 번째");
  myQueue.enqueue("두 번째");
  myQueue.enqueue("세 번째");

  console.log(myQueue.send());


