import React, { useState, useEffect } from 'react';

type View = 'home' | 'insights' | 'post';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [activePost, setActivePost] = useState<number | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, activePost]);

  const posts = [
    {
      id: 1,
      title: "The Magic of Compound Interest in Investing",
      date: "January 2024",
      content: (
        <>
          <p className="text-[18px] leading-[2] mb-[28px]">Albert Einstein reportedly called compound interest the "eighth wonder of the world." But what does it actually mean for your investments?</p>
          <p className="text-[18px] leading-[2] mb-[28px]">Simply put, compound interest is <span className="hl">interest on your interest</span>. When you invest money, it earns a return. In the next period, you earn a return not just on your original money, but also on the return you already earned.</p>
          <p className="text-[18px] leading-[2] mb-[28px]">Over long periods, this creates an exponential growth curve. This is why starting early is often more important than starting with a lot of money.</p>
        </>
      )
    },
    {
      id: 2,
      title: "Market Cap: Why a $10 Stock Might Be Bigger Than a $100 Stock",
      date: "December 2023",
      content: (
        <>
          <p className="text-[18px] leading-[2] mb-[28px]">A common beginner mistake is looking at a stock's price to determine if a company is "big" or "small", or "cheap" or "expensive".</p>
          <p className="text-[18px] leading-[2] mb-[28px]">The true measure of a company's size is its <span className="hl">Market Capitalization</span> (Market Cap). You calculate it by multiplying the stock price by the total number of shares outstanding.</p>
          <p className="text-[18px] leading-[2] mb-[28px]">A company with 1 billion shares priced at $10 has a market cap of $10 billion. A company with 10 million shares priced at $100 has a market cap of $1 billion. The $10 stock is actually the much larger company!</p>
        </>
      )
    },
    {
      id: 3,
      title: "Dividends Explained: Getting Paid to Hold Stocks",
      date: "November 2023",
      content: (
        <>
          <p className="text-[18px] leading-[2] mb-[28px]">When you buy a stock, you're buying a piece of a business. If that business makes a profit, it has a few choices on what to do with that cash.</p>
          <p className="text-[18px] leading-[2] mb-[28px]">It can reinvest the money into growing the business, or it can <span className="hl">distribute some of it back to shareholders</span>. This distribution is called a dividend.</p>
          <p className="text-[18px] leading-[2] mb-[28px]">Dividends provide a steady stream of income, regardless of whether the stock price goes up or down on any given day. They are a cornerstone of many wealth-building strategies.</p>
        </>
      )
    },
    {
      id: 4,
      title: "Understanding P/E Ratio: Is the Stock Cheap or Expensive?",
      date: "October 2023",
      content: (
        <>
          <p className="text-[18px] leading-[2] mb-[28px]">How do you know if you're paying a fair price for a stock? One of the most common metrics is the <span className="hl">Price-to-Earnings (P/E) ratio</span>.</p>
          <p className="text-[18px] leading-[2] mb-[28px]">The P/E ratio tells you how much you are paying for every $1 of the company's earnings. A P/E of 15 means you are paying $15 for $1 of current earnings.</p>
          <p className="text-[18px] leading-[2] mb-[28px]">While a lower P/E might seem better (cheaper), it can also mean the market expects the company's earnings to decline. Always compare a company's P/E to its competitors and its own historical average.</p>
        </>
      )
    }
  ];

  const renderTopbar = () => (
    <div className="flex justify-between items-center mb-[70px] text-[13px]">
      <div 
        className="font-mono opacity-70 cursor-pointer hover:opacity-100 transition-opacity" 
        onClick={() => setView('home')}
      >
        [user@market ~]# ./insights.sh
      </div>
      <div className="flex gap-4">
        {view !== 'home' && (
          <button onClick={() => setView('home')} className="underline text-[#333] hover:opacity-70 transition-opacity">
            home
          </button>
        )}
        {view !== 'insights' && (
          <button onClick={() => { setView('insights'); setActivePost(null); }} className="underline text-[#333] hover:opacity-70 transition-opacity">
            insights
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-[760px] mx-auto my-[40px] md:my-[70px] px-6 md:px-[60px]">
      {renderTopbar()}

      <div className="content">
        {view === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-[18px] leading-[2] mb-[28px]">
              Welcome to <span className="hl">Simple Stock Insights</span>.
            </p>
            <p className="text-[18px] leading-[2] mb-[28px]">
              I break down complex stock market concepts into simple, digestible essays for beginners.
            </p>
            <p className="text-[18px] leading-[2] mb-[28px]">
              No jargon. No hype. Just <span className="hl">clear analysis</span> to help you build wealth slowly and steadily.
            </p>
            
            <div className="h-[30px]"></div>
            
            <p className="text-[18px] leading-[2] mb-[28px]">
              Recent insights:
              <br className="sm:hidden" />
              {' '}
              {posts.slice(0, 3).map((post, i) => (
                <React.Fragment key={post.id}>
                  <button 
                    onClick={() => { setActivePost(post.id); setView('post'); }}
                    className="underline text-[#333] hover:opacity-70 transition-opacity inline text-left"
                  >
                    {post.title}
                  </button>
                  {i < 2 ? <span className="hidden sm:inline">, </span> : '.'}
                  {i < 2 ? <br className="sm:hidden" /> : null}
                </React.Fragment>
              ))}
            </p>

            <div className="mt-[20px] flex flex-col sm:flex-row gap-[8px]">
              <input 
                type="email" 
                placeholder="you@email.com" 
                className="flex-1 p-[10px] font-serif text-[15px] border border-[#ccc] bg-white focus:outline-none focus:border-[#999] transition-colors"
              />
              <button className="p-[10px] px-[16px] font-serif text-[14px] border border-[#ccc] bg-[#f5f5f5] hover:bg-[#e5e5e5] transition-colors cursor-pointer">
                subscribe
              </button>
            </div>
          </div>
        )}

        {view === 'insights' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ul className="leading-[1.6]">
              {posts.map(post => (
                <li key={post.id} className="mb-[22px]">
                  <button 
                    onClick={() => { setActivePost(post.id); setView('post'); }}
                    className="text-[#1a1a1a] underline text-[19px] hover:opacity-70 transition-opacity text-left"
                  >
                    {post.title}
                  </button>
                  <div className="text-[13px] opacity-60 mt-[4px] font-mono">{post.date}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {view === 'post' && activePost && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {posts.filter(p => p.id === activePost).map(post => (
              <div key={post.id}>
                <div className="mb-[30px]">
                  <button 
                    onClick={() => setView('insights')}
                    className="bg-[#1a1a1a] text-[#f3efe7] px-[16px] py-[8px] rounded-[5px] hover:opacity-80 transition-opacity font-mono text-[13px]"
                  >
                    ← back to insights
                  </button>
                </div>
                <h1 className="text-[24px] sm:text-[28px] font-medium mb-[8px] leading-tight">{post.title}</h1>
                <div className="text-[13px] opacity-60 mb-[40px] font-mono">{post.date}</div>
                <div>
                  {post.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
