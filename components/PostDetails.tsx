import { PostDetailsFragment } from "@/graphql/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
interface PostDetailsProps {
  post: PostDetailsFragment;
}

export const PostDetails = ({ post }: PostDetailsProps) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex justify-between">
        <h3 className="font-semibold">{post.category?.title}</h3>
        <Link href={`/${post.category?.slug}`}>Voltar</Link>
      </div>
      <h1 className="text-2xl py-3">{post.title}</h1>
      {post.thumbnail?.url && (
        <div className="relative overflow-hidden rounded-md h-96 mb-3">
          <Image
            src={post.thumbnail?.url}
            alt={post.thumbnail?.title || post.title || ""}
            layout={"fill"}
            objectFit="cover"
          />
        </div>
      )}
      <div>{documentToReactComponents(post.content?.json)}</div>
    </div>
  );
};
