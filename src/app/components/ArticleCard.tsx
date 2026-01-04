import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  article: Article;
};

/**
 * 記事カードコンポーネント。
 * 指定された記事データを基に、記事の概要を表示します。
 *
 * @param {ArticleCardProps} props - コンポーネントのプロパティ。
 * @param {object} props.article - 表示する記事データ。
 * @param {string} props.article.id - 記事の一意の識別子。
 * @param {string} props.article.title - 記事のタイトル。
 * @param {string} props.article.content - 記事の内容。
 * @param {string} props.article.createdAt - 記事の作成日時。
 *
 * @returns {JSX.Element} 記事カードのJSX要素。
 */
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="shadow my-4 flex-col" key={article.id}>
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src={`https://images.pexels.com/photos/${article.id}/pexels-photo-${article.id}.jpeg`}
          alt=""
          width={1280}
          height={300}
        />
      </Link>
      <div className="bg-white flex flex-col">
        <Link
          href={`articles/${article.id}`}
          className="text-blue-700 pd-4 font-bold"
        >
          Technology
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-slate-900">
          {/* 日付/YYYY/MM/DD/HH/mm/ss */}
          published at {new Date(article.createdAt).toLocaleString()}
        </p>
        <a href={`articles/${article.id}`} className="text-slate-900 pd-6">
          {article.content.length > 70
            ? article.content.substring(0, 70) + "..."
            : article.content}
        </a>
        <Link
          href={`articles/${article.id}`}
          className="text-pink-800 hover:text-black"
        >
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
