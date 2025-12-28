import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {// force-cache:SSG(ビルド時にサーバーサイドで一度だけレンダリング)
                                                            // next: {revalidate: 10} ISR(指定した時間ごとにキャッシュを更新する)
    const res = await fetch(`http://localhost:3001/posts`, {cache: "no-store"});// SSR(リクエスト時にサーバーサイドでレンダリングして返す

    const articles = await res.json();// データをシリアライズ(文字列化)
    return articles;
}