import { client } from "@/sanity/client";
import { newsQuery } from "@/sanity/lib/queries";
import NewsList, { NewsItem } from "./NewsList";

export const dynamic = 'force-dynamic';

export default async function NewsPage() {
    let news: NewsItem[] = [];
    try {
        news = await client.fetch(newsQuery);
    } catch (error) {
        console.warn("Failed to fetch news:", error);
    }

    return <NewsList initialNews={news} />;
}
