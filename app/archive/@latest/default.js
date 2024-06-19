import NewsList from "@/app/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
    const latestNews = getLatestNews();
    return <>
    <h2>Latest Page</h2>
    <NewsList news={latestNews}/>
    </>
  }
  