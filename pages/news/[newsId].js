// our-domain.com/news/something-important
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // we could do this -send a request to the
  // backend API to fetch the news item with newsId

  return <h1>dynamic route</h1>;
}

export default DetailPage;
