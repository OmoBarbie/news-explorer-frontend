import exampleImage from "../images/headerbackground.png";

export const mockArticles = [
  {
    source: { name: "The Verge" },
    title:
      "Major Browser Update Brings Faster Performance and Better Privacy Controls",
    description:
      "The latest release focuses on reducing memory usage, improving startup time, and introducing several new privacy protections for everyday users.",
    url: "https://example.com/article-1",
    urlToImage: exampleImage,
    publishedAt: "2026-07-07T08:15:00Z",
  },
  {
    source: { name: "BBC News" },
    title: "Scientists Discover Promising New Coral Restoration Technique",
    description:
      "Researchers say the method could significantly improve reef recovery in areas heavily affected by climate change and pollution.",
    url: "https://example.com/article-2",
    urlToImage: exampleImage,
    publishedAt: "2026-07-07T07:30:00Z",
  },
  {
    source: { name: "Reuters" },
    title: "Global Markets Open Higher as Investors Await Inflation Data",
    description:
      "Stocks gained across several major exchanges ahead of economic reports expected later this week.",
    url: "https://example.com/article-3",
    urlToImage: exampleImage,
    publishedAt: "2026-07-07T06:50:00Z",
  },
  {
    source: { name: "TechCrunch" },
    title:
      "Startup Raises $80 Million to Build AI Tools for Healthcare Providers",
    description:
      "The company plans to expand its engineering team and accelerate partnerships with hospitals across North America.",
    url: "https://example.com/article-4",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T19:10:00Z",
  },
  {
    source: { name: "ESPN" },
    title: "Championship Game Ends in Dramatic Overtime Victory",
    description:
      "Fans witnessed one of the most exciting finishes of the season after a late comeback forced extra time.",
    url: "https://example.com/article-5",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T18:45:00Z",
  },
  {
    source: { name: "National Geographic" },
    title: "Rare Wildlife Returns to Protected Forest After Decades",
    description:
      "Conservationists celebrated the return of several native species following years of habitat restoration efforts.",
    url: "https://example.com/article-6",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T16:20:00Z",
  },
  {
    source: { name: "Wired" },
    title:
      "How Quantum Computing Is Slowly Moving From Research Labs Into Industry",
    description:
      "Although practical applications remain limited, companies are beginning to experiment with specialized quantum workloads.",
    url: "https://example.com/article-7",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T15:05:00Z",
  },
  {
    source: { name: "Associated Press" },
    title: "Local Communities Prepare for Extreme Summer Heat",
    description:
      "Officials are opening cooling centers and encouraging residents to stay hydrated as temperatures continue to rise.",
    url: "https://example.com/article-8",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T13:40:00Z",
  },
  {
    source: { name: "Bloomberg" },
    title: "Electric Vehicle Sales Continue Steady Growth Worldwide",
    description:
      "Industry analysts expect adoption to increase further as charging infrastructure expands in major markets.",
    url: "https://example.com/article-9",
    urlToImage: null, // Missing image to test fallback UI
    publishedAt: "2026-07-06T11:25:00Z",
  },
  {
    source: { name: "CNN" },
    title:
      "This Is an Intentionally Very Long Headline Designed to Test How Your React Card Handles Multiple Lines Without Breaking the Layout or Causing Unexpected Overflow",
    description:
      "A longer article description gives you a realistic amount of content to verify spacing, line clamping, responsive layouts, and overall typography in your news card component.",
    url: "https://example.com/article-10",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T09:00:00Z",
  },
];

export const savedMockArticles = [
  {
    source: { name: "The Verge" },
    title:
      "Major Browser Update Brings Faster Performance and Better Privacy Controls",
    description:
      "The latest release focuses on reducing memory usage, improving startup time, and introducing several new privacy protections for everyday users.",
    url: "https://example.com/article-1",
    urlToImage: exampleImage,
    publishedAt: "2026-07-07T08:15:00Z",
    keyword: "Technology",
  },
  {
    source: { name: "BBC News" },
    title: "Scientists Discover Promising New Coral Restoration Technique",
    description:
      "Researchers say the method could significantly improve reef recovery in areas heavily affected by climate change and pollution.",
    url: "https://example.com/article-2",
    urlToImage: exampleImage,
    publishedAt: "2026-07-07T07:30:00Z",
    keyword: "Environment",
  },
  {
    source: { name: "Reuters" },
    title: "Global Markets Open Higher as Investors Await Inflation Data",
    description:
      "Stocks gained across several major exchanges ahead of economic reports expected later this week.",
    url: "https://example.com/article-3",
    urlToImage: exampleImage,
    publishedAt: "2026-07-07T06:50:00Z",
    keyword: "Business",
  },
  {
    source: { name: "TechCrunch" },
    title:
      "Startup Raises $80 Million to Build AI Tools for Healthcare Providers",
    description:
      "The company plans to expand its engineering team and accelerate partnerships with hospitals across North America.",
    url: "https://example.com/article-4",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T19:10:00Z",
    keyword: "Technology",
  },
  {
    source: { name: "ESPN" },
    title: "Championship Game Ends in Dramatic Overtime Victory",
    description:
      "Fans witnessed one of the most exciting finishes of the season after a late comeback forced extra time.",
    url: "https://example.com/article-5",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T18:45:00Z",
    keyword: "Sports",
  },
  {
    source: { name: "National Geographic" },
    title: "Rare Wildlife Returns to Protected Forest After Decades",
    description:
      "Conservationists celebrated the return of several native species following years of habitat restoration efforts.",
    url: "https://example.com/article-6",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T16:20:00Z",
    keyword: "Environment",
  },
  {
    source: { name: "Wired" },
    title:
      "How Quantum Computing Is Slowly Moving From Research Labs Into Industry",
    description:
      "Although practical applications remain limited, companies are beginning to experiment with specialized quantum workloads.",
    url: "https://example.com/article-7",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T15:05:00Z",
    keyword: "Technology",
  },
  {
    source: { name: "Associated Press" },
    title: "Local Communities Prepare for Extreme Summer Heat",
    description:
      "Officials are opening cooling centers and encouraging residents to stay hydrated as temperatures continue to rise.",
    url: "https://example.com/article-8",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T13:40:00Z",
    keyword: "Weather",
  },
  {
    source: { name: "Bloomberg" },
    title: "Electric Vehicle Sales Continue Steady Growth Worldwide",
    description:
      "Industry analysts expect adoption to increase further as charging infrastructure expands in major markets.",
    url: "https://example.com/article-9",
    urlToImage: null, // Missing image to test fallback UI
    publishedAt: "2026-07-06T11:25:00Z",
    keyword: "Technology",
  },
  {
    source: { name: "CNN" },
    title:
      "This Is an Intentionally Very Long Headline Designed to Test How Your React Card Handles Multiple Lines Without Breaking the Layout or Causing Unexpected Overflow",
    description:
      "A longer article description gives you a realistic amount of content to verify spacing, line clamping, responsive layouts, and overall typography in your news card component.",
    url: "https://example.com/article-10",
    urlToImage: exampleImage,
    publishedAt: "2026-07-06T09:00:00Z",
    keyword: "Technology",
  },
];
