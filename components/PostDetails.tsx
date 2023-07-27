import { PostDetailsFragment } from "@/graphql/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
interface PostDetailsProps {
  post: PostDetailsFragment;
}

export const PostDetails = ({ post }: PostDetailsProps) => {
  return (
    <div>
      <Link href={`/${post.category?.slug}`}>Voltar</Link>
      <h3>{post.category?.title}</h3>
      <h1>{post.title}</h1>
      <h2>{post.subTitle}</h2>
      <div>{documentToReactComponents(post.content?.json)}</div>
    </div>
  );
};
