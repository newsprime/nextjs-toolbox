import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>5 Reasons why most people prefer to use news aggregator apps over watching news channels or reading newspapers. 
</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Many people nowadays prefer to use news aggregator apps on their mobile devices over watching TV news channels or reading newspapers when on their commutes, during leisure time, or while eating. People choose to read the complete news as soon as possible, choose their own category of news, or just glance at the trending headlines rather than reading the entire news bulletin, so the reasons vary based on the individual. 
    
    <ul>
    
    <li>Instead of reading the entire article, summarized news can be read & understood in just a few words. Reading the newspapers or seeing repeated telecasts of TV news channels is time-consuming, as you can read many summarized news in the same amount of time. 
</li>
    <li>Rather than scrolling through the whole list of unnecessary news headlines without knowing what you're looking for, you can choose the news category that interests you the most.
</li>
    <li>News aggregator news apps has the ability to save and share the news to anyone using social media channels or via messengers unlike newspapers and tv news channels. This day’s most of the tv news channels have their own websites and YouTube channels where these videos can also be shared via link. 
</li>
    
    Live TV news channels offer a few benefits, but they require users to spend time and be in front of their televisions, which isn't possible if you're working or involved in any other activity. Users can stay up to date with the latest news by using news aggregators on the go. This is also why most of the television news channels have developed their own apps for deploying news and displaying it on the news channels as well. 


        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
