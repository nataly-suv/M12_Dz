// ОСНОВНОЙ ИНТЕРФЕЙС ДЛЯ ВЗАИМОДЕЙТСТВИЯ С API
// 

// инферфейс для  объекта в  source
export interface ISource {
    id: string | null;
    name: string;
}

// инферфейс для  объекта в массиве articles
export interface IArticle {
    source: ISource;  // передаем сюда интерфейс ISource
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

// интерфей для кesponse (ответ от сервера), указываем ключи в объеке с указанием типа
export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: IArticle[]; // пмередаем сюда интерфейс IArticle
}


// интерфей для sources, указываем только те поля, которые необходимы
export interface ISourceResponse {
    status: string;
    sources: ISource[];
}
