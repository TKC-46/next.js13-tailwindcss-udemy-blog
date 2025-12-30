import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
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
              published at {article.createdAt}
            </p>
            <a href={`articles/${article.id}`} className="text-slate-900 pd-6">
              {article.content}
            </a>
            <Link
              href={`articles/${article.id}`}
              className="text-pink-800 hover:text-black"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
      ;
    </div>
  );
};

export default ArticleList;
