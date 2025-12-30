import { notFound } from "next/navigation";
import { Article } from "./types";

// ブログ全取得
export const getAllArticles = async (): Promise<Article[]> => {// force-cache:SSG(ビルド時にサーバーサイドで一度だけレンダリング)
    const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" });// SSR(リクエスト時にサーバーサイドでレンダリングして返す

    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 500)); // 擬似的に遅延を発生させる(ロードページ確認のため)

    const articles = await res.json();// データをシリアライズ(文字列化)
    return articles;
}

// ID指定ブログ取得
export const getDetailArticle = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        next: { revalidate: 60 }
    });// ISR(指定した時間ごとにキャッシュを更新する)

    if (res.status === 404) {
        notFound();
    }

    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const article = await res.json();
    return article;
}

// ブログ作成
export const createArticle = async (
    id: string,
    title: string,
    content: string
): Promise<Article> => {
    const currentDatetime = new Date().toISOString();

    const res = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
    });

    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const newArticle = await res.json();
    return newArticle;
}

// ブログ削除
export const deleteArticle = async (id: string): Promise<Article> => {

    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const deleteArticle = await res.json();
    return deleteArticle;
}