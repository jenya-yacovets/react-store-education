export default class BookStoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: "Полное руководство Java",
                author: "Герберд Шилдт",
                price: 39,
                coverImage: "https://cdn.javarush.ru/images/article/bda86484-3517-415f-8cbb-436843eadc39/original.jpeg"
            },
            {
                id: 2,
                title: "Чистая архитектура",
                author: "Дядюшка Боб",
                price: 31,
                coverImage: "https://s1-goods.ozstatic.by/2000/440/682/10/10682440_0.jpg"
            }
        ]
    }
}