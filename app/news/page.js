import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "../news-list";

export default function News() {
  return (
    <>
      <h1> News Page</h1>
      <NewsList news={DUMMY_NEWS}></NewsList>
    </>
  );
}
