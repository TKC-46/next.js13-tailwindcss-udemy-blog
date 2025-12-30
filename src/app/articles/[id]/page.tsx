import { getDetailArticle } from "@/blogAPI";
import Image from "next/image";

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const detailArticle = await getDetailArticle(id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://images.pexels.com/photos/${detailArticle.id}/pexels-photo-${detailArticle.id}.jpeg`}
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center md-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
    </div>
  );
};

export default Article;
