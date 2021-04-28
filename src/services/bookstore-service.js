export default class BookStoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: "Полное руководство Java",
                author: "Gerbert Shild",
            },
            {
                id: 2,
                title: "Чистая архитектура",
                author: "Дядюшка Боб",
            }
        ]
    }
}