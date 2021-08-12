// our-domain.com/news/
import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            Next JS is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">something else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
