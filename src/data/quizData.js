/**
 * Replace or extend `questions` per subject using your JSON format:
 * { question, options[], answer } — answer must match one string in options.
 */
export const SUBJECTS = [
  {
    id: "marketing-sessions-1-6",
    name: "Marketing: Sessions 1–6",
    description:
      "Comprehensive list covering strategic marketing, PESTLE, SWOT, marketing mix, consumer behavior, and global marketing.",
    questions: [
      {
        question:
          "Strategic marketing is primarily distinguished from tactical marketing by its focus on:",
        options: [
          "Daily social media engagement.",
          "Long-term value creation and organizational alignment.",
          "Immediate quarterly sales targets.",
          "Reducing the cost of office supplies.",
        ],
        answer: "Long-term value creation and organizational alignment.",
      },
      {
        question:
          'In a PESTLE analysis, a new Nigerian government policy on "Startup Acts" represents which factor?',
        options: ["Economic", "Social", "Political", "Technological"],
        answer: "Political",
      },
      {
        question:
          'A "Strength-Opportunity (SO)" strategy in a SWOT matrix involves:',
        options: [
          "Fixing internal weaknesses to avoid threats.",
          "Using internal strengths to exploit external market trends.",
          "Ignoring external threats to focus on strengths.",
          "Minimizing both weaknesses and threats.",
        ],
        answer: "Using internal strengths to exploit external market trends.",
      },
      {
        question:
          'Which of the following is an "External" component of a situation analysis?',
        options: [
          "Financial resources.",
          "Brand reputation.",
          "Competitor pricing strategies.",
          "Employee specialized skills.",
        ],
        answer: "Competitor pricing strategies.",
      },
      {
        question: 'SMART objectives must be "Measurable" to ensure:',
        options: [
          "They are easy to write.",
          "Progress can be tracked using specific metrics.",
          "Every employee likes the goal.",
          "They never change over time.",
        ],
        answer: "Progress can be tracked using specific metrics.",
      },
      {
        question: 'The "Macro-environment" refers to forces that:',
        options: [
          "The marketing manager can fully control.",
          "Affect the entire industry and are largely uncontrollable.",
          "Only affect the internal staff.",
          "Are related to the company’s physical building.",
        ],
        answer: "Affect the entire industry and are largely uncontrollable.",
      },
      {
        question:
          'A fintech identifying a "large unbanked population" is performing:',
        options: [
          "Internal auditing.",
          "Market opportunity identification.",
          "Competitive sabotage.",
          "Product decommissioning.",
        ],
        answer: "Market opportunity identification.",
      },
      {
        question: "PESTLE analysis is most useful during:",
        options: [
          "Daily staff meetings.",
          "The initial stage of strategic planning.",
          "Firing an underperforming distributor.",
          "Designing a single Instagram post.",
        ],
        answer: "The initial stage of strategic planning.",
      },
      {
        question:
          'In Nigeria, "Infrastructure limitations" in a SWOT analysis are typically a:',
        options: [
          "Strength",
          "Weakness",
          "Opportunity",
          "Threat (or Weakness depending on context)",
        ],
        answer: "Weakness",
      },
      {
        question:
          'Which factor in PESTLE covers "Consumer attitudes toward organic products"?',
        options: ["Political", "Economic", "Social", "Legal"],
        answer: "Social",
      },
      {
        question:
          'According to the Ansoff Matrix, "Market Development" involves:',
        options: [
          "Selling new products to new markets.",
          "Selling existing products to new geographic or demographic markets.",
          "Selling existing products to the same customers.",
          "Decreasing the price of existing products.",
        ],
        answer:
          "Selling existing products to new geographic or demographic markets.",
      },
      {
        question:
          'Which growth strategy is the most "Related" to existing operations but carries high risk?',
        options: [
          "Market Penetration",
          "Product Development",
          "Related Diversification",
          "Conglomerate Diversification",
        ],
        answer: "Related Diversification",
      },
      {
        question: 'A "Star" in the BCG Matrix requires:',
        options: [
          "No investment.",
          "High investment to maintain its strong market position in a growing industry.",
          "Immediate divestment.",
          "Harvesting for cash.",
        ],
        answer:
          "High investment to maintain its strong market position in a growing industry.",
      },
      {
        question: 'Porter’s "Differentiation" strategy succeeds when:',
        options: [
          "The product is the cheapest in the market.",
          "Customers perceive a unique value that justifies a premium price.",
          "The company stops all marketing efforts.",
          "The product is identical to all competitors.",
        ],
        answer:
          "Customers perceive a unique value that justifies a premium price.",
      },
      {
        question: 'A "Cash Cow" is strategically valuable because:',
        options: [
          "It has high growth potential.",
          'It generates excess cash to fund "Stars" and "Question Marks."',
          "It is a new product in a new market.",
          "It helps the company exit the industry.",
        ],
        answer:
          'It generates excess cash to fund "Stars" and "Question Marks."',
      },
      {
        question: "Which strategy involves a firm becoming its own supplier?",
        options: [
          "Forward Integration",
          "Backward Integration",
          "Horizontal Integration",
          "Market Penetration",
        ],
        answer: "Backward Integration",
      },
      {
        question: 'The "Question Mark" in the BCG matrix has:',
        options: [
          "Low market share in a high-growth market.",
          "High market share in a low-growth market.",
          "High market share in a high-growth market.",
          "Low market share in a low-growth market.",
        ],
        answer: "Low market share in a high-growth market.",
      },
      {
        question: 'Porter’s "Focus" strategy is best suited for:',
        options: [
          "Large firms targeting the entire national population.",
          "Firms targeting a narrow, specific niche with unique needs.",
          "Firms that want to be the cost leader and differentiator at once.",
          "Government-owned monopolies.",
        ],
        answer: "Firms targeting a narrow, specific niche with unique needs.",
      },
      {
        question: "Unrelated diversification is often called:",
        options: [
          "Synergy",
          "Conglomerate Diversification",
          "Market Penetration",
          "Product Expansion",
        ],
        answer: "Conglomerate Diversification",
      },
      {
        question: 'A "Dog" in the BCG matrix should generally be:',
        options: [
          "Funded heavily.",
          "Harvested, divested, or liquidated.",
          "Turned into a Cash Cow through massive ads.",
          "Used as the main brand identity.",
        ],
        answer: "Harvested, divested, or liquidated.",
      },
      {
        question: "Market segmentation is the process of:",
        options: [
          "Selling one product to everyone.",
          "Dividing a heterogeneous market into homogeneous groups.",
          "Closing down branches in rural areas.",
          "Hiring more sales representatives.",
        ],
        answer: "Dividing a heterogeneous market into homogeneous groups.",
      },
      {
        question: 'Segmenting by "Social Class" or "Lifestyle" is:',
        options: ["Demographic", "Geographic", "Psychographic", "Behavioral"],
        answer: "Psychographic",
      },
      {
        question: '"Positioning" occurs in:',
        options: [
          "The company’s warehouse.",
          "The minds of the target consumers.",
          "The legal department.",
          "The balance sheet.",
        ],
        answer: "The minds of the target consumers.",
      },
      {
        question:
          'A brand using "Occasion Segmentation" might promote a product specifically for:',
        options: [
          "All times of the year.",
          "Nigerian Independence Day or religious festivals.",
          "High-income earners only.",
          "People living in Lagos.",
        ],
        answer: "Nigerian Independence Day or religious festivals.",
      },
      {
        question:
          'The "Evaluation of Alternatives" stage in consumer behavior involves:',
        options: [
          "Realizing you are hungry.",
          "Comparing different brands based on specific attributes.",
          "Buying the first product you see.",
          "Complaining about a product after purchase.",
        ],
        answer: "Comparing different brands based on specific attributes.",
      },
      {
        question: "High-involvement purchases are characterized by:",
        options: [
          "Habitual buying.",
          "Low financial risk.",
          "Extensive information search and cognitive effort.",
          "Impulse decision-making.",
        ],
        answer: "Extensive information search and cognitive effort.",
      },
      {
        question: '"Post-purchase Dissonance" refers to:',
        options: [
          "Excitement before buying.",
          "Buyer’s remorse or discomfort after a purchase.",
          "The speed of the delivery.",
          "Finding a cheaper alternative before buying.",
        ],
        answer: "Buyer’s remorse or discomfort after a purchase.",
      },
      {
        question:
          'Which factor is an "Internal Stimulus" for problem recognition?',
        options: [
          "A television advertisement.",
          "A friend’s recommendation.",
          "Feeling thirsty.",
          "Seeing a discount sign.",
        ],
        answer: "Feeling thirsty.",
      },
      {
        question: '"Reference Groups" influence consumers by:',
        options: [
          "Providing legal advice.",
          "Serving as a point of comparison for attitudes or behavior.",
          "Reducing the price of the product.",
          "Delivering the product to the home.",
        ],
        answer: "Serving as a point of comparison for attitudes or behavior.",
      },
      {
        question: "Selective Attention means consumers:",
        options: [
          "Remember every ad they see.",
          "Screen out most information they are exposed to.",
          "Only buy products they see on TV.",
          "Never change their brand preference.",
        ],
        answer: "Screen out most information they are exposed to.",
      },
      {
        question: 'In the 4Cs model, "Convenience" replaces:',
        options: ["Product", "Price", "Place", "Promotion"],
        answer: "Place",
      },
      {
        question: 'Ogilvy’s "Experience" (4Es) focuses on:',
        options: [
          "The functional features of a product only.",
          "The emotional and sensory journey of the customer.",
          "Reducing the cost of the product.",
          "Having more than 10 years in business.",
        ],
        answer: "The emotional and sensory journey of the customer.",
      },
      {
        question: '"Exchange" in the 4Es emphasizes:',
        options: [
          "Only the monetary price in Naira.",
          "The value of the customer’s time, data, and attention.",
          "Returning faulty goods to the store.",
          "Swapping products with a competitor.",
        ],
        answer: "The value of the customer’s time, data, and attention.",
      },
      {
        question: '"Everyplace" (4Es) suggests that:',
        options: [
          "You must have a store in every street.",
          "You should be present where the customer is, across online and offline touchpoints.",
          "You should only sell products in Nigeria.",
          "You should avoid digital channels.",
        ],
        answer:
          "You should be present where the customer is, across online and offline touchpoints.",
      },
      {
        question: '"Evangelism" (4Es) aims to:',
        options: [
          "Convert people to a religion.",
          "Turn customers into passionate brand advocates.",
          "Spend 100% of the budget on TV ads.",
          "Hide the brand’s weaknesses.",
        ],
        answer: "Turn customers into passionate brand advocates.",
      },
      {
        question: "Sachet marketing is an example of adapting which P?",
        options: ["Promotion", "Place", "Product (and Price)", "People"],
        answer: "Product (and Price)",
      },
      {
        question: 'The "Process" element of the 7Ps is most critical for:',
        options: [
          "Manufacturing a car.",
          "Service delivery (e.g., banking or hospitality).",
          "Designing a logo.",
          "Printing a flyer.",
        ],
        answer: "Service delivery (e.g., banking or hospitality).",
      },
      {
        question: '"Physical Evidence" (7Ps) for a digital bank includes:',
        options: [
          "The physical building of the bank.",
          "The user interface (UI) and design of the mobile app.",
          "The CEO’s signature.",
          "The amount of money in the vault.",
        ],
        answer: "The user interface (UI) and design of the mobile app.",
      },
      {
        question: "Value-based pricing is determined by:",
        options: [
          "The cost of production + 20%.",
          "The competitor’s average price.",
          "The consumer’s perception of the product’s worth.",
          "Government regulations.",
        ],
        answer: "The consumer’s perception of the product’s worth.",
      },
      {
        question: "Penetration pricing involves:",
        options: [
          "Setting a high initial price to skim the market.",
          "Setting a low initial price to gain rapid market share.",
          "Keeping the price the same forever.",
          "Charging different prices in different cities.",
        ],
        answer: "Setting a low initial price to gain rapid market share.",
      },
      {
        question: 'Marketing "Implementation" is the link between:',
        options: [
          "The CEO and the Board.",
          "Strategic intent and realized performance.",
          "Nigeria and the UK.",
          "Sales and Finance departments only.",
        ],
        answer: "Strategic intent and realized performance.",
      },
      {
        question: 'A "Functional" marketing organization is structured by:',
        options: [
          "Geographic regions.",
          "Specialized activities like research, advertising, and sales.",
          "Different product lines.",
          "Customer types.",
        ],
        answer: "Specialized activities like research, advertising, and sales.",
      },
      {
        question: "Marketing ROI is calculated as:",
        options: [
          "(Sales Growth - Marketing Investment) / Marketing Investment",
          "Total Revenue / Total Number of Employees",
          "Price x Quantity",
          "Marketing Spend + Profit",
        ],
        answer: "(Sales Growth - Marketing Investment) / Marketing Investment",
      },
      {
        question: 'A "Marketing Control System" is used to:',
        options: [
          "Micromanage every employee’s desk.",
          "Evaluate results and take corrective action if goals aren’t met.",
          "Stop competitors from entering the market.",
          "Increase the budget every month.",
        ],
        answer:
          "Evaluate results and take corrective action if goals aren’t met.",
      },
      {
        question:
          "Which metric measures the percentage of people who see an ad and then perform a desired action?",
        options: ["Reach", "Conversion Rate", "Bounce Rate", "Market Share"],
        answer: "Conversion Rate",
      },
      {
        question: '"Strategic Insights" are best derived from:',
        options: [
          "Guessing.",
          "Big Data and Marketing Analytics.",
          "Reading only one customer complaint.",
          "Following a competitor’s Instagram.",
        ],
        answer: "Big Data and Marketing Analytics.",
      },
      {
        question: "A challenge of data collection in Nigeria is:",
        options: [
          "Having too much reliable government data.",
          "Informal economy transactions and infrastructure gaps.",
          "Every Nigerian using only one bank.",
          "The lack of any mobile phones.",
        ],
        answer: "Informal economy transactions and infrastructure gaps.",
      },
      {
        question: "Adapting global performance metrics to Nigeria requires:",
        options: [
          "Ignoring global standards.",
          'Accounting for local nuances like "Cash on Delivery" and power outages.',
          "Using only the metrics used in 1990.",
          "Changing the currency in the report to Dollars.",
        ],
        answer:
          'Accounting for local nuances like "Cash on Delivery" and power outages.',
      },
      {
        question: '"Marketing ROI" helps an MBA leader:',
        options: [
          "Spend money without accountability.",
          "Justify marketing budgets to the CFO/Finance.",
          "Hire more graphic designers.",
          "Choose the brand color.",
        ],
        answer: "Justify marketing budgets to the CFO/Finance.",
      },
      {
        question: "KPIs (Key Performance Indicators) should always be:",
        options: [
          "General and vague.",
          "Aligned with strategic business objectives.",
          "Created by the IT department.",
          "Changed every week.",
        ],
        answer: "Aligned with strategic business objectives.",
      },
      {
        question: 'The "Standardization" approach in global marketing assumes:',
        options: [
          "Every culture is different.",
          "Consumer needs and wants are becoming more similar worldwide.",
          "Marketing should be different in every city.",
          "Only English should be used.",
        ],
        answer: "Consumer needs and wants are becoming more similar worldwide.",
      },
      {
        question: '"Localisation" (or Adaptation) is necessary when:',
        options: [
          "A company wants to save money.",
          "Cultural, legal, or economic differences are significant.",
          "The product is digital.",
          "The CEO is local.",
        ],
        answer: "Cultural, legal, or economic differences are significant.",
      },
      {
        question:
          "Which entry strategy involves the least risk and financial commitment?",
        options: [
          "Joint Venture",
          "Direct Exporting",
          "Indirect Exporting",
          "Wholly Owned Subsidiary",
        ],
        answer: "Indirect Exporting",
      },
      {
        question: 'A "Franchise" is a form of:',
        options: [
          "Direct Investment",
          "Contractual Entry Strategy",
          "Exporting",
          "Merger",
        ],
        answer: "Contractual Entry Strategy",
      },
      {
        question: '"Cross-cultural Marketing" requires understanding:',
        options: [
          "Only the language.",
          "Values, symbols, and norms of the target country.",
          "The competitor’s bank account.",
          "The distance between two countries in kilometers.",
        ],
        answer: "Values, symbols, and norms of the target country.",
      },
      {
        question: '"Marketing Nigeria to the World" involves:',
        options: [
          "Buying more foreign goods.",
          "Promoting Nigerian brands and talent to attract investment and exports.",
          "Moving the capital to another country.",
          "Stopping all local manufacturing.",
        ],
        answer:
          "Promoting Nigerian brands and talent to attract investment and exports.",
      },
      {
        question: "A Joint Venture is characterized by:",
        options: [
          "One company buying another.",
          "Shared ownership and control between two or more firms.",
          "One company selling its logo to another.",
          "Hiring a local consultant.",
        ],
        answer: "Shared ownership and control between two or more firms.",
      },
      {
        question: 'Which global strategy "Acts Global, but Thinks Local"?',
        options: [
          "Ethnocentric",
          "Glocal (Glocalization)",
          "Polycentric",
          "Regiocentric",
        ],
        answer: "Glocal (Glocalization)",
      },
      {
        question: 'A "Wholly Owned Subsidiary" offers the advantage of:',
        options: [
          "Zero risk.",
          "Maximum control over operations and marketing.",
          "Minimal investment.",
          "Ease of exit.",
        ],
        answer: "Maximum control over operations and marketing.",
      },
      {
        question: '"Cultural Taboos" are important for which P?',
        options: [
          "Price",
          "Promotion (Marketing Communications)",
          "Process",
          "Physical Evidence",
        ],
        answer: "Promotion (Marketing Communications)",
      },
      {
        question: 'An "Omnichannel" strategy focuses on:',
        options: [
          "Selling only on WhatsApp.",
          "A seamless customer experience across multiple channels.",
          "Using only radio and TV.",
          "Having many different unrelated websites.",
        ],
        answer: "A seamless customer experience across multiple channels.",
      },
      {
        question: '"Mobile-First" is vital in Nigeria because:',
        options: [
          "Nigerians do not have eyes for billboards.",
          "The majority of internet users access via mobile devices.",
          "Computers are too expensive to import.",
          "The government provides free mobile phones.",
        ],
        answer: "The majority of internet users access via mobile devices.",
      },
      {
        question: "SEO (Search Engine Optimisation) is used to:",
        options: [
          "Pay for the top spot on Google.",
          "Increase organic (non-paid) visibility on search engines.",
          "Delete bad reviews.",
          "Build a physical store.",
        ],
        answer: "Increase organic (non-paid) visibility on search engines.",
      },
      {
        question: "Content Marketing involves:",
        options: [
          'Constantly shouting "Buy Now!"',
          "Creating valuable and relevant content to attract and retain an audience.",
          "Hiring an influencer to dance.",
          "Sending the same email 10 times a day.",
        ],
        answer:
          "Creating valuable and relevant content to attract and retain an audience.",
      },
      {
        question: '"Customer Journey Mapping" helps identify:',
        options: [
          "The physical address of the customer.",
          "All touchpoints where a customer interacts with the brand.",
          "The fastest route for a delivery driver.",
          "The customer’s family tree.",
        ],
        answer: "All touchpoints where a customer interacts with the brand.",
      },
      {
        question: '"Social Commerce" is:',
        options: [
          "Trading social media accounts.",
          "Selling products directly through social media platforms.",
          "Donating money to social causes.",
          "Hiring a social media manager.",
        ],
        answer: "Selling products directly through social media platforms.",
      },
      {
        question: 'An "Inbound Marketing" approach focuses on:',
        options: [
          "Interruption ads like TV commercials.",
          "Attracting customers through helpful content and SEO.",
          "Cold calling.",
          "Mass email spam.",
        ],
        answer: "Attracting customers through helpful content and SEO.",
      },
      {
        question: '"Bounce Rate" in digital analytics refers to:',
        options: [
          "The number of people who buy a product.",
          "The percentage of visitors who leave a site after viewing only one page.",
          "The speed of the internet.",
          'How many times a person clicks a "Like" button.',
        ],
        answer:
          "The percentage of visitors who leave a site after viewing only one page.",
      },
      {
        question: '"Retargeting" (or Remarketing) involves:',
        options: [
          "Targeting people who have never heard of the brand.",
          "Showing ads to people who have previously visited the brand’s website.",
          "Changing the target market completely.",
          "Targeting competitors’ employees.",
        ],
        answer:
          "Showing ads to people who have previously visited the brand’s website.",
      },
      {
        question: 'Digital "Conversion" could be:',
        options: [
          "A sale.",
          "An email signup.",
          "A whitepaper download.",
          "All of the above.",
        ],
        answer: "All of the above.",
      },
      {
        question: '"Marketing Ethics" refers to:',
        options: [
          "Only following the law to avoid being sued.",
          "Moral principles and values that govern marketing actions.",
          "How to lie to customers without getting caught.",
          "Reducing the marketing budget to zero.",
        ],
        answer: "Moral principles and values that govern marketing actions.",
      },
      {
        question:
          "Corporate Social Responsibility (CSR) in marketing involves:",
        options: [
          "Using a charity’s logo without permission.",
          "Integrating social and environmental concerns into business operations.",
          "Avoiding any contact with the local community.",
          "Maximizing profit at any human cost.",
        ],
        answer:
          "Integrating social and environmental concerns into business operations.",
      },
      {
        question: '"Sustainable Marketing" focuses on:',
        options: [
          "Short-term sales at the expense of the future.",
          "Meeting present needs without compromising future generations’ ability to meet theirs.",
          "Only using green-colored logos.",
          "Selling products that last only one week.",
        ],
        answer:
          "Meeting present needs without compromising future generations’ ability to meet theirs.",
      },
      {
        question: '"Greenwashing" is the practice of:',
        options: [
          "Planting trees at the office.",
          "Making false or exaggerated claims about the environmental benefits of a product.",
          "Using only digital ads to save paper.",
          "Washing the products before selling them.",
        ],
        answer:
          "Making false or exaggerated claims about the environmental benefits of a product.",
      },
      {
        question: "Consumer Privacy is an ethical concern in:",
        options: [
          "Sachet marketing.",
          "Big Data and digital tracking.",
          "Billboard advertising.",
          "Radio jingles.",
        ],
        answer: "Big Data and digital tracking.",
      },
      {
        question: '"Deceptive Advertising" involves:',
        options: [
          "Giving a discount.",
          "Misleading consumers through false claims or omissions.",
          "Using a celebrity in an ad.",
          "Advertising on a Sunday.",
        ],
        answer: "Misleading consumers through false claims or omissions.",
      },
      {
        question: '"Planned Obsolescence" is an ethical issue where:',
        options: [
          "Products are built to last forever.",
          "Products are designed to become obsolete or break after a short period.",
          "Marketing plans are made for 10 years.",
          "The company retires its old employees.",
        ],
        answer:
          "Products are designed to become obsolete or break after a short period.",
      },
      {
        question:
          '"Social Marketing" (different from Social Media Marketing) aims to:',
        options: [
          "Sell more luxury goods.",
          "Change behaviors for the benefit of individuals or society (e.g., anti-smoking).",
          "Make the company the most popular on Instagram.",
          "Hire more social workers.",
        ],
        answer:
          "Change behaviors for the benefit of individuals or society (e.g., anti-smoking).",
      },
      {
        question: 'The "Triple Bottom Line" measures:',
        options: [
          "Profit, Profit, and Profit.",
          "Profit, People, and Planet.",
          "Price, Product, and Place.",
          "Past, Present, and Future.",
        ],
        answer: "Profit, People, and Planet.",
      },
      {
        question: '"Cause-Related Marketing" is when:',
        options: [
          "A company causes a problem.",
          "A firm links a product sale to a donation to a specific cause/charity.",
          "A firm stops all marketing for a year.",
          "A firm complains about the government.",
        ],
        answer:
          "A firm links a product sale to a donation to a specific cause/charity.",
      },
      {
        question:
          'Why is the Nigerian "Informal Economy" a challenge for strategic marketing?',
        options: [
          "It is too small to notice.",
          "Transactions are hard to track and traditional media may not reach them.",
          "There are no customers in the informal sector.",
          "It is illegal to sell in the informal sector.",
        ],
        answer:
          "Transactions are hard to track and traditional media may not reach them.",
      },
      {
        question:
          'A fintech company in Lagos using "USSD codes" for banking is addressing:',
        options: [
          "High-income individuals.",
          "Infrastructure and internet connectivity gaps.",
          "A desire for luxury.",
          "International growth.",
        ],
        answer: "Infrastructure and internet connectivity gaps.",
      },
      {
        question:
          'Which Nigerian brand is a classic example of "Related Diversification"?',
        options: [
          "A small bakery in Port Harcourt.",
          "The Dangote Group (Cement, Sugar, Flour).",
          "A new tech startup in Yaba.",
          "A government ministry.",
        ],
        answer: "The Dangote Group (Cement, Sugar, Flour).",
      },
      {
        question: '"Word-of-mouth" is powerful in Nigeria due to:',
        options: [
          "The lack of any TV stations.",
          "Strong communal and social ties.",
          "High literacy rates in every village.",
          "Government laws mandating it.",
        ],
        answer: "Strong communal and social ties.",
      },
      {
        question:
          'A brand like "Indomie" has achieved high brand equity in Nigeria through:',
        options: [
          "Only being available in one store.",
          "Consistent quality and widespread distribution (Everyplace).",
          "Having the highest price in the market.",
          "Avoiding television advertising.",
        ],
        answer: "Consistent quality and widespread distribution (Everyplace).",
      },
      {
        question:
          'Which tool is used to analyze Nigeria’s "Population Growth" as an opportunity?',
        options: ["SWOT (Internal)", "PESTLE (Social)", "BCG Matrix", "4Cs"],
        answer: "PESTLE (Social)",
      },
      {
        question: '"Sachet" pricing for milk and detergent primarily targets:',
        options: [
          "People with limited daily cash flow.",
          "Large families with high incomes.",
          "Foreign tourists.",
          "Industrial wholesalers.",
        ],
        answer: "People with limited daily cash flow.",
      },
      {
        question: 'Nigerian "Nollywood" collaborations are a form of:',
        options: [
          "Cost leadership.",
          "Cultural and social alignment in promotion.",
          "Market divestment.",
          "Legal compliance.",
        ],
        answer: "Cultural and social alignment in promotion.",
      },
      {
        question:
          'A "Mobile-First" strategy for a Nigerian retailer means their website must:',
        options: [
          "Be extremely heavy and detailed.",
          "Be light, fast, and responsive for low-bandwidth mobile devices.",
          "Only work on desktops.",
          "Be written in a coding language from 1980.",
        ],
        answer:
          "Be light, fast, and responsive for low-bandwidth mobile devices.",
      },
      {
        question:
          'Marketing in Nigeria often requires "High Trust" strategies like:',
        options: [
          "Only accepting payment in Dollars.",
          "Cash-on-Delivery or clear money-back guarantees.",
          "Not showing the product before purchase.",
          "Having no phone number for customer support.",
        ],
        answer: "Cash-on-Delivery or clear money-back guarantees.",
      },
      {
        question: 'The ultimate goal of "Positioning" is to:',
        options: [
          "Occupy a clear, unique, and advantageous place in the consumer’s mind.",
          "Have the most employees in the industry.",
          "Rent the largest billboard on the 3rd Mainland Bridge.",
          "Pay the least taxes.",
        ],
        answer:
          "Occupy a clear, unique, and advantageous place in the consumer’s mind.",
      },
      {
        question: 'A "Sustainable Competitive Advantage" is something that:',
        options: [
          "Competitors can copy in one day.",
          "Is unique to a firm and difficult for others to replicate over time.",
          "Is only based on having a low price.",
          "Lasts for only one month.",
        ],
        answer:
          "Is unique to a firm and difficult for others to replicate over time.",
      },
      {
        question: '"Marketing Information Systems" (MIS) should be:',
        options: [
          "Static and never updated.",
          "Continuous and dynamic to reflect market changes.",
          "Only for the IT department to see.",
          "Based entirely on social media likes.",
        ],
        answer: "Continuous and dynamic to reflect market changes.",
      },
      {
        question: "The transition from 4Ps to 4Cs reflects a shift toward:",
        options: [
          "Product-centric thinking.",
          "Customer-centric thinking.",
          "Manufacturing-centric thinking.",
          "Legal-centric thinking.",
        ],
        answer: "Customer-centric thinking.",
      },
      {
        question:
          "In the BCG matrix, a product in a high-growth market with low market share is a:",
        options: ["Star", "Cash Cow", "Question Mark", "Dog"],
        answer: "Question Mark",
      },
      {
        question: '"Segmenting" by age, gender, and education is:',
        options: ["Demographic", "Psychographic", "Behavioral", "Geographic"],
        answer: "Demographic",
      },
      {
        question: 'The "Promotion Mix" includes:',
        options: [
          "Advertising, Sales Promotion, Public Relations, and Personal Selling.",
          "Price, Product, Place, and People.",
          "Strengths, Weaknesses, Opportunities, and Threats.",
          "Segmentation, Targeting, and Positioning.",
        ],
        answer:
          "Advertising, Sales Promotion, Public Relations, and Personal Selling.",
      },
      {
        question: 'A "Mission Statement" in strategic marketing defines:',
        options: [
          "Next week’s sales targets.",
          "The organization’s purpose and what it wants to accomplish in the larger environment.",
          "The CEO’s favorite hobby.",
          "The exact price of every product.",
        ],
        answer:
          "The organization’s purpose and what it wants to accomplish in the larger environment.",
      },
      {
        question: '"Market Share" is the ratio of:',
        options: [
          "A firm’s sales to the total industry sales.",
          "A firm’s profit to its debt.",
          "Marketing spend to overall spend.",
          "Employees to customers.",
        ],
        answer: "A firm’s sales to the total industry sales.",
      },
      {
        question: "Effective marketing strategy is about making choices that:",
        options: [
          "Please everyone in the world.",
          "Create a match between internal capabilities and external opportunities.",
          "Copy every single thing a competitor does.",
          "Focus only on the cheapest advertising.",
        ],
        answer:
          "Create a match between internal capabilities and external opportunities.",
      },
    ],
  },
  {
    id: "managerial-economics-100",
    name: "MBA Managerial Economics",
    description:
      "Comprehensive 100-Question Exam (Unified) covering microeconomics, macroeconomics, market structures, and cost analysis.",
    questions: [
      {
        question:
          "Which branch of economics is primarily used to address “External” environmental issues in a firm?",
        options: [
          "Microeconomics",
          "Macroeconomics",
          "Agricultural economics",
          "Behavioral economics",
        ],
        answer: "Macroeconomics",
      },
      {
        question: "The “Market-Clearing Price” occurs when:",
        options: [
          "There is a massive surplus in the market",
          "The government fixes the price of fuel",
          "Quantity demanded equals quantity supplied",
          "No consumers are willing to buy the product",
        ],
        answer: "Quantity demanded equals quantity supplied",
      },
      {
        question:
          "In Nigeria, a rise in the price of imported raw materials due to Naira devaluation is an example of:",
        options: [
          "Demand-pull inflation",
          "Cost-push inflation",
          "Technical efficiency",
          "Perfect competition",
        ],
        answer: "Cost-push inflation",
      },
      {
        question:
          "Managerial economics is best described as the study of economic theories and tools used in:",
        options: [
          "National political campaigning",
          "Purely academic mathematical research",
          "The business decision-making process",
          "Social welfare administration",
        ],
        answer: "The business decision-making process",
      },
      {
        question:
          "According to the Law of Demand, as the price of a commodity increases, ceteris paribus:",
        options: [
          "The demand curve shifts to the right",
          "Quantity demanded typically decreases",
          "The supply curve shifts to the left",
          "Consumer real income increases",
        ],
        answer: "Quantity demanded typically decreases",
      },
      {
        question:
          "Which of the following is a “Controllable” factor for a business manager?",
        options: [
          "National inflation rates",
          "The firm’s product pricing",
          "Consumer tastes and preferences",
          "Climatic and weather factors",
        ],
        answer: "The firm’s product pricing",
      },
      {
        question:
          "If a 10% increase in price leads to a 20% decrease in quantity demanded, the price elasticity is:",
        options: [
          "0.5 (Inelastic)",
          "1.0 (Unitary)",
          "2.0 (Elastic)",
          "0 (Perfectly Inelastic)",
        ],
        answer: "2.0 (Elastic)",
      },
      {
        question:
          "Strategic interdependence among a few large firms is the primary characteristic of:",
        options: [
          "Perfect Competition",
          "Monopoly",
          "Monopolistic Competition",
          "Oligopoly",
        ],
        answer: "Oligopoly",
      },
      {
        question:
          "The “Invisible Hand” refers to an economy where prices are determined by:",
        options: [
          "Central Bank regulations",
          "Price mechanisms and market forces",
          "Labor union strikes",
          "International trade agreements",
        ],
        answer: "Price mechanisms and market forces",
      },
      {
        question:
          "A “Price Taker” firm is most commonly found in which market structure?",
        options: [
          "Monopoly",
          "Oligopoly",
          "Perfect Competition",
          "Monopolistic Competition",
        ],
        answer: "Perfect Competition",
      },
      {
        question: "Stage II of production is considered “Rational” because:",
        options: [
          "Total product is declining",
          "Marginal product is positive but decreasing",
          "Labor is being used for free",
          "Marginal product is at its maximum",
        ],
        answer: "Marginal product is positive but decreasing",
      },
      {
        question:
          "Which strategy focuses on being the lowest-cost producer in an industry?",
        options: [
          "Product Differentiation",
          "Market Segmentation",
          "Cost Leadership",
          "Revenue Diversification",
        ],
        answer: "Cost Leadership",
      },
      {
        question:
          "In the short run, a firm will “Shut Down” if its price is lower than its:",
        options: [
          "Average Fixed Cost",
          "Total Revenue",
          "Average Variable Cost",
          "Marginal Revenue",
        ],
        answer: "Average Variable Cost",
      },
      {
        question:
          "Cross-elasticity of demand for two goods is positive if they are:",
        options: ["Complements", "Substitutes", "Inferior goods", "Unrelated"],
        answer: "Substitutes",
      },
      {
        question: "Which Nigerian sector is a typical example of an Oligopoly?",
        options: [
          "Yam farming",
          "Telecommunications",
          "Street tailoring",
          "Local transportation",
        ],
        answer: "Telecommunications",
      },
      {
        question: "Demand for necessities like salt is generally:",
        options: [
          "Perfectly Elastic",
          "Inelastic",
          "Highly Elastic",
          "Unitary",
        ],
        answer: "Inelastic",
      },
      {
        question:
          "An “Isoquant” represents various combinations of inputs that yield:",
        options: [
          "Different levels of utility",
          "The same level of physical output",
          "Maximum possible profit",
          "Minimum taxes",
        ],
        answer: "The same level of physical output",
      },
      {
        question:
          "The “Substitution Effect” means that as a product’s price falls, it becomes:",
        options: [
          "Less desirable",
          "Comparatively cheaper than its substitutes",
          "A luxury good",
          "Perfectly inelastic",
        ],
        answer: "Comparatively cheaper than its substitutes",
      },
      {
        question:
          "What happens to the demand curve when consumer income increases for a “Normal Good”?",
        options: [
          "It shifts to the left",
          "It shifts to the right",
          "It remains stationary",
          "It becomes vertical",
        ],
        answer: "It shifts to the right",
      },
      {
        question: "“Stagflation” is an economic condition defined by:",
        options: [
          "High growth and low inflation",
          "Low unemployment and stable prices",
          "High inflation and stagnant economic growth",
          "Rapid currency appreciation",
        ],
        answer: "High inflation and stagnant economic growth",
      },
      {
        question:
          "The “Kinked Demand Curve” model is used to explain price rigidity in:",
        options: [
          "Perfect Competition",
          "Monopoly",
          "Oligopoly",
          "Monopolistic Competition",
        ],
        answer: "Oligopoly",
      },
      {
        question: "In economics, “Capital” refers to:",
        options: [
          "Cash in the office safe",
          "Plant, machinery, and equipment",
          "The owner’s personal wealth",
          "Government grants",
        ],
        answer: "Plant, machinery, and equipment",
      },
      {
        question:
          "Which of the following is a barrier to entry in a Monopoly market?",
        options: [
          "Low startup costs",
          "Patents and copyrights",
          "Large numbers of competitors",
          "Homogeneous products",
        ],
        answer: "Patents and copyrights",
      },
      {
        question: "Monopolistic Competition is characterized by:",
        options: [
          "One single seller",
          "Product differentiation",
          "Identical products",
          "Perfect information",
        ],
        answer: "Product differentiation",
      },
      {
        question:
          "The Law of Diminishing Returns is most likely to be observed in:",
        options: [
          "Software development",
          "Agriculture",
          "Banking services",
          "Advertising",
        ],
        answer: "Agriculture",
      },
      {
        question:
          "Which tool is used to evaluate the long-term profitability of an investment project?",
        options: [
          "Break-even analysis",
          "Net Present Value (NPV)",
          "Marginal analysis",
          "Demand forecasting",
        ],
        answer: "Net Present Value (NPV)",
      },
      {
        question: "When a firm is a “Price Maker,” it means the firm:",
        options: [
          "Must accept the market-determined price",
          "Can set its own price to its advantage",
          "Has no control over its own supply",
          "Is in a perfectly competitive market",
        ],
        answer: "Can set its own price to its advantage",
      },
      {
        question:
          "“Indifference Curves” illustrate different combinations of goods that provide:",
        options: [
          "Increasing levels of profit",
          "The same total utility for a consumer",
          "The lowest possible cost for a firm",
          "Maximum tax benefits",
        ],
        answer: "The same total utility for a consumer",
      },
      {
        question:
          "Keynesian economics suggests that during a recession, the government should:",
        options: [
          "Decrease all public spending",
          "Increase spending to stimulate demand",
          "Fix the price of every commodity",
          "Raise corporate taxes",
        ],
        answer: "Increase spending to stimulate demand",
      },
      {
        question: "Marginal Cost (MC) is best defined as:",
        options: [
          "Total cost divided by quantity",
          "The change in total cost from producing one more unit",
          "The cost of fixed inputs",
          "Revenue minus total variable cost",
        ],
        answer: "The change in total cost from producing one more unit",
      },
      {
        question:
          "In Nigeria, “Infrastructure” issues like power outages lead to:",
        options: [
          "Lower marginal costs",
          "Higher operational and maintenance costs",
          "Increased consumer demand",
          "Price stability",
        ],
        answer: "Higher operational and maintenance costs",
      },
      {
        question: "A “Natural Monopoly” arises because:",
        options: [
          "The government bans all competitors",
          "One firm can supply the market at a lower cost than multiple firms",
          "A firm owns a popular brand name",
          "There are no barriers to entry",
        ],
        answer:
          "One firm can supply the market at a lower cost than multiple firms",
      },
      {
        question: "“Internal managerial issues” specifically include:",
        options: [
          "National inflation rates",
          "Deciding what and how much to produce",
          "Changes in political environment",
          "Global oil price fluctuations",
        ],
        answer: "Deciding what and how much to produce",
      },
      {
        question:
          "If cross-elasticity between two goods is negative, they are:",
        options: [
          "Substitutes",
          "Complementary goods",
          "Inferior goods",
          "Luxury goods",
        ],
        answer: "Complementary goods",
      },
      {
        question: "The slope of an indifference curve is the:",
        options: [
          "Marginal Rate of Technical Substitution",
          "Marginal Rate of Substitution (MRS)",
          "Marginal Cost",
          "Price Ratio",
        ],
        answer: "Marginal Rate of Substitution (MRS)",
      },
      {
        question: "A perfectly competitive firm’s demand curve is:",
        options: [
          "Perfectly Inelastic (Vertical)",
          "Perfectly Elastic (Horizontal)",
          "Downward sloping",
          "Upward sloping",
        ],
        answer: "Perfectly Elastic (Horizontal)",
      },
      {
        question: "Income elasticity for an “Inferior Good” is:",
        options: ["Positive", "Negative", "Zero", "Infinite"],
        answer: "Negative",
      },
      {
        question: "“Derived Demand” refers to the demand for:",
        options: [
          "Luxury items",
          "Inputs (like labor) based on demand for the final product",
          "Free government services",
          "Competitor secrets",
        ],
        answer: "Inputs (like labor) based on demand for the final product",
      },
      {
        question:
          "The “shutdown” decision in the short run depends on covering:",
        options: [
          "Total Fixed Costs",
          "Average Variable Costs (AVC)",
          "Future expansion plans",
          "CEO bonuses",
        ],
        answer: "Average Variable Costs (AVC)",
      },
      {
        question: "“Game Theory” is most useful for analyzing:",
        options: [
          "Monopoly",
          "Perfect Competition",
          "Oligopoly",
          "Agricultural staple markets",
        ],
        answer: "Oligopoly",
      },
      {
        question:
          "Increasing Returns to Scale means that doubling inputs leads to:",
        options: [
          "Exactly double the output",
          "More than double the output",
          "Less than double the output",
          "Half the output",
        ],
        answer: "More than double the output",
      },
      {
        question: "“Economic Efficiency” involves producing a given output at:",
        options: [
          "The highest possible cost",
          "The least cost",
          "The lowest quality",
          "The highest labor count",
        ],
        answer: "The least cost",
      },
      {
        question:
          "During unanticipated inflation, which group typically loses?",
        options: [
          "Debtors (Borrowers)",
          "Creditors (Lenders)",
          "Stock investors",
          "Business owners",
        ],
        answer: "Creditors (Lenders)",
      },
      {
        question: "“Indivisibility” of a factor of production means it:",
        options: [
          "Can be split into tiny portions",
          "Must be used in a certain minimum size",
          "Is free for everyone",
          "Lasts forever",
        ],
        answer: "Must be used in a certain minimum size",
      },
      {
        question:
          "A “Price Ceiling” set below equilibrium price usually leads to:",
        options: [
          "A surplus",
          "A shortage",
          "Market stability",
          "Lower demand",
        ],
        answer: "A shortage",
      },
      {
        question: "“Fixed Costs” are costs that:",
        options: [
          "Change as output increases",
          "Do not vary with production levels",
          "Only exist in the long run",
          "Are always paid to the bank",
        ],
        answer: "Do not vary with production levels",
      },
      {
        question: "The “Phillips Curve” suggests an inverse link between:",
        options: [
          "Price and Quantity",
          "Inflation and Unemployment",
          "Labor and Capital",
          "Saving and Investment",
        ],
        answer: "Inflation and Unemployment",
      },
      {
        question: "An “Indifference Map” is a collection of curves showing:",
        options: [
          "Physical maps of Nigeria",
          "Different levels of total utility",
          "Tax regulations",
          "Employee records",
        ],
        answer: "Different levels of total utility",
      },
      {
        question:
          "“Break-Even Analysis” identifies the sales volume needed to:",
        options: [
          "Maximize dividends",
          "Cover all costs (Total Revenue = Total Cost)",
          "Hire more staff",
          "Devalue the currency",
        ],
        answer: "Cover all costs (Total Revenue = Total Cost)",
      },
      {
        question: "Revenue Diversification is a strategy to:",
        options: [
          "Focus on one product only",
          "Reduce risk and stabilize income",
          "Increase fixed costs",
          "Avoid all competition",
        ],
        answer: "Reduce risk and stabilize income",
      },
      {
        question: "“Land” as a factor of production includes:",
        options: [
          "Only farm soil",
          "All natural resources (minerals, water, air)",
          "Man-made buildings",
          "Bank loans",
        ],
        answer: "All natural resources (minerals, water, air)",
      },
      {
        question: "A production function shows the link between:",
        options: [
          "Marketing and Sales",
          "Inputs and physical output",
          "Inflation and Interest",
          "Supply and Price",
        ],
        answer: "Inputs and physical output",
      },
      {
        question: "The Short Run is a period where:",
        options: [
          "All costs are variable",
          "At least one input is fixed",
          "The firm cannot hire labor",
          "Prices never change",
        ],
        answer: "At least one input is fixed",
      },
      {
        question: "A firm’s “Scale” of production is determined by:",
        options: [
          "Customer satisfaction",
          "Total fixed factors and capacity",
          "Weekly sales revenue",
          "Number of delivery trucks",
        ],
        answer: "Total fixed factors and capacity",
      },
      {
        question:
          "Stage III of production is avoided because marginal product is:",
        options: ["Positive", "Negative", "At its peak", "Infinite"],
        answer: "Negative",
      },
      {
        question: "“Indivisibility” means a factor of production:",
        options: [
          "Can be split into tiny portions",
          "Must be used in a certain minimum size",
          "Is free for everyone",
          "Lasts forever",
        ],
        answer: "Must be used in a certain minimum size",
      },
      {
        question: "Marginal Revenue Productivity (MRP) is defined as:",
        options: [
          "Total Revenue / Total Labor",
          "Marginal Product × Price",
          "Fixed Cost + Variable Cost",
          "Total Output / Total Time",
        ],
        answer: "Marginal Product × Price",
      },
      {
        question: "An “Expansion Path” helps a manager decide how to:",
        options: [
          "Hire more security",
          "Increase production scale efficiently",
          "Decrease sales efforts",
          "Close the factory",
        ],
        answer: "Increase production scale efficiently",
      },
      {
        question: "“Managerial Diseconomies” lead to:",
        options: [
          "Falling average costs",
          "Rising average costs as the firm grows too large",
          "Higher profits per unit",
          "Better communication",
        ],
        answer: "Rising average costs as the firm grows too large",
      },
      {
        question: "In the cost equation TC = a + bQ, “a” represents:",
        options: [
          "Variable costs",
          "Total Fixed Cost",
          "Marginal cost",
          "Revenue",
        ],
        answer: "Total Fixed Cost",
      },
      {
        question:
          "The Marginal Cost (MC) curve crosses the Average Cost (AC) curve at its:",
        options: [
          "Maximum point",
          "Minimum point",
          "Starting point",
          "Vertical intercept",
        ],
        answer: "Minimum point",
      },
      {
        question: "Cost drivers in manufacturing are typically:",
        options: [
          "CEO hobbies",
          "Raw materials and direct labor",
          "Office furniture color",
          "Employee lunch preferences",
        ],
        answer: "Raw materials and direct labor",
      },
      {
        question: "A “Structural” cost driver is determined by:",
        options: [
          "Daily work shifts",
          "Long-term technology and scale choices",
          "Next week’s advertising",
          "Cleaning schedules",
        ],
        answer: "Long-term technology and scale choices",
      },
      {
        question: "Firms use break-even analysis to set:",
        options: [
          "Holiday dates",
          "Pricing and sales targets",
          "Competitor salaries",
          "Tax rates",
        ],
        answer: "Pricing and sales targets",
      },
      {
        question:
          "“Price Discrimination” involves charging different prices for:",
        options: [
          "Different products",
          "The same product to different groups",
          "Only luxury goods",
          "Only used products",
        ],
        answer: "The same product to different groups",
      },
      {
        question: "Fuel subsidy removal in Nigeria leads to:",
        options: [
          "Immediate price drops",
          "Sector-wide price volatility",
          "Lower transport fares",
          "Zero inflation",
        ],
        answer: "Sector-wide price volatility",
      },
      {
        question:
          "Which of the following is a “Revenue-Related” profit driver?",
        options: [
          "Operating efficiency",
          "Pricing strategy and market share",
          "Labor productivity",
          "Fixed cost reduction",
        ],
        answer: "Pricing strategy and market share",
      },
      {
        question: "NPV and IRR are used to evaluate:",
        options: [
          "Employee attendance",
          "Profitability of long-term investments",
          "Competitor passwords",
          "Office furniture quality",
        ],
        answer: "Profitability of long-term investments",
      },
      {
        question: "In the long run, firms in Perfect Competition earn:",
        options: [
          "Supernormal profit",
          "Normal profit",
          "Constant losses",
          "Government subsidies",
        ],
        answer: "Normal profit",
      },
      {
        question: "A barrier to entry in a Monopoly can be:",
        options: [
          "Free entry",
          "Legal protection like patents",
          "Homogeneous products",
          "Many small sellers",
        ],
        answer: "Legal protection like patents",
      },
      {
        question: "Marginal Revenue (MR) is the revenue from selling:",
        options: [
          "All goods",
          "One additional unit",
          "Nothing",
          "Only to government",
        ],
        answer: "One additional unit",
      },
      {
        question: "A firm will “Shut Down” if it cannot cover its:",
        options: [
          "Rent",
          "Average Variable Costs (AVC)",
          "CEO vacation pay",
          "Future expansion",
        ],
        answer: "Average Variable Costs (AVC)",
      },
      {
        question: "Cost-push inflation in Nigeria is often due to:",
        options: [
          "High consumer income",
          "Currency depreciation and fuel costs",
          "Low production costs",
          "High growth",
        ],
        answer: "Currency depreciation and fuel costs",
      },
      {
        question: "The Phillips Curve shows the link between inflation and:",
        options: ["Prices", "Unemployment", "Savings", "Weather"],
        answer: "Unemployment",
      },
      {
        question: "A local yam market in Nigeria is relatively close to:",
        options: ["Monopoly", "Perfect Competition", "Oligopoly", "Monopsony"],
        answer: "Perfect Competition",
      },
      {
        question: "“Derived Demand” means demand for labor is based on:",
        options: [
          "Labor’s own price",
          "Demand for the final product",
          "The weather",
          "The CEO’s mood",
        ],
        answer: "Demand for the final product",
      },
      {
        question: "The Average Fixed Cost (AFC) curve:",
        options: [
          "Increases as output rises",
          "Decreases as output increases",
          "Is a vertical line",
          "Never changes",
        ],
        answer: "Decreases as output increases",
      },
      {
        question: "Monopoly cross-elasticity with other products is:",
        options: ["Very high", "Very low", "One", "Negative"],
        answer: "Very low",
      },
      {
        question: "“Oligopoly” interdependence means firms must consider:",
        options: [
          "Only the weather",
          "Competitor reactions",
          "Only one customer",
          "Only their own costs",
        ],
        answer: "Competitor reactions",
      },
      {
        question: "“Nash Equilibrium” occurs when:",
        options: [
          "Every player is doing the best they can, given others’ actions",
          "Only one firm survives",
          "All firms cooperate",
          "Profit is zero",
        ],
        answer:
          "Every player is doing the best they can, given others’ actions",
      },
      {
        question: "“Technical Efficiency” means a firm is:",
        options: [
          "Using the most expensive software",
          "Achieving maximum output from given inputs",
          "Paying the lowest taxes",
          "Operating without a CEO",
        ],
        answer: "Achieving maximum output from given inputs",
      },
      {
        question: "The “Prisoner’s Dilemma” illustrates:",
        options: [
          "Perfect cooperation",
          "Tension between individual rationality and collective benefit",
          "Infinite profits",
          "Perfect information",
        ],
        answer: "Tension between individual rationality and collective benefit",
      },
      {
        question: "“Value Chain Optimization” aims to:",
        options: [
          "Increase operational waste",
          "Enhance value while reducing costs",
          "Ignore customers",
          "Raise prices arbitrarily",
        ],
        answer: "Enhance value while reducing costs",
      },
      {
        question: "Which factor is “Uncontrollable” for a firm?",
        options: [
          "Price",
          "Government policy",
          "Promotion budget",
          "Product quality",
        ],
        answer: "Government policy",
      },
      {
        question: "“Stagflation” involves high inflation and:",
        options: [
          "High growth",
          "High unemployment/stagnant growth",
          "Low taxes",
          "Zero debt",
        ],
        answer: "High unemployment/stagnant growth",
      },
      {
        question: "“Price Discrimination” is charging different prices for:",
        options: [
          "Different products",
          "The same product to different customers",
          "Luxury items only",
          "Used products only",
        ],
        answer: "The same product to different customers",
      },
      {
        question: "“Fixed Costs” are costs that:",
        options: [
          "Change with output",
          "Do not vary with output",
          "Only exist in the long run",
          "Are always zero",
        ],
        answer: "Do not vary with output",
      },
      {
        question: "The Law of Diminishing Returns applies to:",
        options: [
          "Long run",
          "Short run",
          "All time periods",
          "No time periods",
        ],
        answer: "Short run",
      },
      {
        question: "A “Price Maker” firm exists in:",
        options: [
          "Perfect Competition",
          "Monopoly",
          "All markets",
          "No markets",
        ],
        answer: "Monopoly",
      },
      {
        question: "“Macroeconomic issues” include:",
        options: [
          "Firm’s internal cost",
          "National inflation and exchange rates",
          "Choice of technology",
          "Product selection",
        ],
        answer: "National inflation and exchange rates",
      },
      {
        question: "“Technical Efficiency” means producing:",
        options: [
          "With zero labor",
          "Max output from given inputs",
          "Only high-tech goods",
          "At highest cost",
        ],
        answer: "Max output from given inputs",
      },
      {
        question: "“Marginal Revenue” (MR) equals Marginal Cost (MC) at:",
        options: [
          "Minimum cost",
          "Profit maximization point",
          "Zero profit",
          "Point of rest",
        ],
        answer: "Profit maximization point",
      },
      {
        question: "“Economies of Scale” lead to:",
        options: [
          "Higher average cost",
          "Lower average cost as output increases",
          "Higher prices",
          "Lower total revenue",
        ],
        answer: "Lower average cost as output increases",
      },
      {
        question: "“Giffen Goods” are a type of:",
        options: [
          "Normal good",
          "Inferior good",
          "Luxury good",
          "Essential good",
        ],
        answer: "Inferior good",
      },
      {
        question: "“Kinked Demand Curve” describes price stability in:",
        options: [
          "Monopoly",
          "Oligopoly",
          "Perfect competition",
          "All markets",
        ],
        answer: "Oligopoly",
      },
      {
        question: "In Nigeria, “Poor infrastructure” is a:",
        options: [
          "Controllable factor",
          "Uncontrollable factor",
          "Profit driver",
          "Subsidy",
        ],
        answer: "Uncontrollable factor",
      },
      {
        question: "“Monopoly” demand curve is:",
        options: [
          "Horizontal",
          "Downward sloping",
          "Vertical",
          "Upward sloping",
        ],
        answer: "Downward sloping",
      },
      {
        question: "“Cardinal Utility” assumes utility is:",
        options: [
          "Rankable",
          "Measurable in utils",
          "Inexpressible",
          "Infinite",
        ],
        answer: "Measurable in utils",
      },
      {
        question: "“Strategic Interdependence” is key to:",
        options: [
          "Monopoly",
          "Oligopoly",
          "Perfect competition",
          "Pure agriculture",
        ],
        answer: "Oligopoly",
      },
      {
        question: "“Average Fixed Cost” (AFC) curve:",
        options: [
          "Is a horizontal line",
          "Continually falls as output increases",
          "Is a vertical line",
          "Never reaches zero",
        ],
        answer: "Continually falls as output increases",
      },
    ],
  },
  {
    id: "mba-accounting-100",
    name: "MBA Accounting",
    description:
      "Comprehensive 100-Question Exam covering financial accounting, bookkeeping, cost accounting, and auditing.",
    questions: [
      {
        question:
          "According to the American Accounting Association, accounting is defined as the process of identifying, measuring, and communicating what type of information?",
        options: [
          "Qualitative data",
          "Economic information",
          "Social impact scores",
          "Marketing metrics",
        ],
        answer: "Economic information",
      },
      {
        question:
          "Which branch of accounting is concerned with providing stakeholders, both internal and external, with a standardized format of financial reports?",
        options: [
          "Management Accounting",
          "Cost Accounting",
          "Financial Accounting",
          "Social Accounting",
        ],
        answer: "Financial Accounting",
      },
      {
        question:
          "In the case of Premier Furniture Ltd., which concept ensures that their ₦10 million worth of machinery is valued as a productive asset rather than at forced-sale value?",
        options: [
          "Money Measurement",
          "Going Concern",
          "Historical Cost",
          "Full Disclosure",
        ],
        answer: "Going Concern",
      },
      {
        question:
          "Which stakeholder group uses accounting information to ensure a company like Innoson Motors is financially sound enough to honor warranties?",
        options: [
          "Creditors",
          "Stockholders",
          "Customers",
          "Regulatory Agencies",
        ],
        answer: "Customers",
      },
      {
        question:
          "If the owner of a retail shop in Ibadan buys a piece of furniture for personal home use, which concept prevents this from being recorded in the business books?",
        options: [
          "Accrual Concept",
          "Materiality Convention",
          "Business Entity Concept",
          "Dual Aspect Concept",
        ],
        answer: "Business Entity Concept",
      },
      {
        question: 'The "Money Measurement" concept states that:',
        options: [
          "Every transaction must be recorded in multiple currencies.",
          "Only transactions that can be expressed in monetary terms are recorded.",
          "Intangible factors like reputation are included in financial statements.",
          "The value of money never changes over time.",
        ],
        answer:
          "Only transactions that can be expressed in monetary terms are recorded.",
      },
      {
        question:
          'Which accounting convention focuses on the "economic reality" of a transaction rather than its legal arrangement?',
        options: [
          "Materiality",
          "Prudence",
          "Substance over Form",
          "Full Disclosure",
        ],
        answer: "Substance over Form",
      },
      {
        question:
          "Which branch of accounting identifies social benefits such as providing healthcare and education to employees?",
        options: [
          "Management Accounting",
          "Auditing",
          "Social Accounting",
          "Tax Accounting",
        ],
        answer: "Social Accounting",
      },
      {
        question:
          "The process of maintaining accurate financial records by keeping a record of all money coming in and out is called:",
        options: [
          "Summarizing",
          "Recording Transactions",
          "Interpreting",
          "Classifying",
        ],
        answer: "Recording Transactions",
      },
      {
        question:
          "Stakeholders like Zenith Bank stockholders use accounting information to primarily determine:",
        options: [
          "Employee satisfaction levels.",
          "Bank profitability and potential dividends.",
          "The bank's carbon footprint.",
          "Daily office operations.",
        ],
        answer: "Bank profitability and potential dividends.",
      },
      {
        question:
          "In the Tunde Ventures illustration, how is a 3% trade discount on a ₦380,000 sale to Mrs. Aisha handled in the Sales Day Book?",
        options: [
          "It is recorded as a separate expense.",
          "It is ignored until cash is received.",
          "It is deducted from the gross amount to record a net total of ₦368,600.",
          "It is added to the cost of goods sold.",
        ],
        answer:
          "It is deducted from the gross amount to record a net total of ₦368,600.",
      },
      {
        question:
          'A "Contra-entry" in Kunle Ventures\' cash book would be required for which of the following?',
        options: [
          "Paying for shop insurance in cash.",
          "Withdrawing ₦120,000 from the bank for office use.",
          "Receiving a bank loan by cheque.",
          "Selling goods for cash.",
        ],
        answer: "Withdrawing ₦120,000 from the bank for office use.",
      },
      {
        question:
          "Which source document is issued to Obi Ventures when they return a bag of flour worth ₦35,000 to Tunde Ventures?",
        options: ["Debit Note", "Receipt", "Credit Note", "Purchase Order"],
        answer: "Credit Note",
      },
      {
        question:
          "If a business owner withdraws ₦100,000 cash for personal use, what is the correct entry in the Journal Proper?",
        options: [
          "Debit Cash; Credit Drawings",
          "Debit Drawings; Credit Cash",
          "Debit Expenses; Credit Cash",
          "Debit Capital; Credit Drawings",
        ],
        answer: "Debit Drawings; Credit Cash",
      },
      {
        question:
          "The Sales Day Book is strictly used to record which of the following?",
        options: [
          "All cash sales.",
          "Credit sales of non-current assets.",
          "Credit sales of goods meant for resale.",
          "Sales of office furniture on credit.",
        ],
        answer: "Credit sales of goods meant for resale.",
      },
      {
        question:
          "Which document accompanies goods when they are delivered and is signed by the receiver?",
        options: ["Invoice", "Debit Note", "Delivery Note", "Purchase Order"],
        answer: "Delivery Note",
      },
      {
        question:
          "Double-entry bookkeeping ensures that the accounting equation stays balanced. This equation is:",
        options: [
          "Assets + Equity = Liabilities",
          "Assets = Liabilities + Equity",
          "Liabilities - Equity = Assets",
          "Revenue - Expenses = Liabilities",
        ],
        answer: "Assets = Liabilities + Equity",
      },
      {
        question: 'A "Bin Card" is used specifically to:',
        options: [
          "Record cash transactions.",
          "Track inventory movement in a warehouse.",
          "Summarize all monthly sales.",
          "Record employee wages.",
        ],
        answer: "Track inventory movement in a warehouse.",
      },
      {
        question: "The first step in the bookkeeping process is:",
        options: [
          "Posting to ledger accounts.",
          "Identifying and classifying transactions.",
          "Extracting a trial balance.",
          "Preparing the income statement.",
        ],
        answer: "Identifying and classifying transactions.",
      },
      {
        question:
          "In the Journal Proper, each transaction must be accompanied by a brief explanation called a:",
        options: ["Summary", "Particular", "Narration", "Folio"],
        answer: "Narration",
      },
      {
        question:
          'For SunGlow Enterprises, "Accounts Receivable" of ₦500,000 is expected to be collected within 90 days. How is this classified?',
        options: [
          "Non-current Asset",
          "Current Liability",
          "Current Asset",
          "Intangible Asset",
        ],
        answer: "Current Asset",
      },
      {
        question:
          "Using the AlphaTech Ltd data, if Gross Profit is ₦400,000 and Operating Expenses are ₦200,000, what is the Operating Profit (EBIT)?",
        options: ["₦700,000", "₦600,000", "₦200,000", "₦119,000"],
        answer: "₦200,000",
      },
      {
        question:
          "Which component of Equity represents cumulative profits reinvested to expand production instead of paying dividends?",
        options: [
          "Shareholders' Equity",
          "Additional Paid-in Capital",
          "Retained Earnings",
          "Short-term Debt",
        ],
        answer: "Retained Earnings",
      },
      {
        question:
          "If GammaBuild Co has Total Assets of ₦1,950,000 and Total Liabilities of ₦850,000, what is their Total Equity?",
        options: ["₦1,100,000", "₦2,800,000", "₦750,000", "₦350,000"],
        answer: "₦1,100,000",
      },
      {
        question:
          'Which of the following is an example of an "Accrued Expense" for SunGlow Enterprises?',
        options: [
          "Solar panels in the warehouse.",
          "Wages of ₦50,000 incurred but not yet paid at month-end.",
          "Prepaid insurance for the factory.",
          "A 10-year bank loan.",
        ],
        answer: "Wages of ₦50,000 incurred but not yet paid at month-end.",
      },
      {
        question: "Non-current Assets are also known as:",
        options: [
          "Short-term assets.",
          "Liquid assets.",
          "Long-term assets.",
          "Current assets.",
        ],
        answer: "Long-term assets.",
      },
      {
        question:
          "Cost of Goods Sold (COGS) includes direct costs associated with production, such as:",
        options: [
          "Office manager salaries.",
          "Raw materials like silicon and glass.",
          "Marketing expenses.",
          "Interest on loans.",
        ],
        answer: "Raw materials like silicon and glass.",
      },
      {
        question:
          "Net Profit is the final profit after deducting all expenses, including:",
        options: [
          "Only COGS.",
          "Only operating expenses.",
          "Taxes.",
          "Dividends.",
        ],
        answer: "Taxes.",
      },
      {
        question:
          "Which financial statement shows a snapshot of a company's financial condition at a specific point in time?",
        options: [
          "Income Statement",
          "Statement of Cash Flows",
          "Statement of Financial Position",
          "Sales Journal",
        ],
        answer: "Statement of Financial Position",
      },
      {
        question: "Shareholders' Equity can increase if the company:",
        options: [
          "Buys back its shares.",
          "Issues more shares.",
          "Increases its debt.",
          "Pays out all profits as dividends.",
        ],
        answer: "Issues more shares.",
      },
      {
        question:
          "Why is Depreciation added back to Net Profit when calculating cash flow using the indirect method?",
        options: [
          "It is a source of cash income.",
          "It is a non-cash expense that reduced profit but not cash.",
          "It represents cash paid for new machinery.",
          "It is a tax refund.",
        ],
        answer: "It is a non-cash expense that reduced profit but not cash.",
      },
      {
        question:
          'In the GreenTech Ltd case study, "Proceeds from New Loan" of ₦200,000 is classified under which activity?',
        options: [
          "Operating Activities",
          "Investing Activities",
          "Financing Activities",
          "Revenue Activities",
        ],
        answer: "Financing Activities",
      },
      {
        question:
          'Under the Indirect Method, an increase in "Inventory" is subtracted from net profit because:',
        options: [
          "It represents a gain in asset value.",
          "It means the company has more goods to sell.",
          "It reflects cash spent on goods that have not yet been sold.",
          "It is a non-cash adjustment like depreciation.",
        ],
        answer: "It reflects cash spent on goods that have not yet been sold.",
      },
      {
        question:
          "What is the primary difference between the Direct and Indirect methods of preparing operating cash flows?",
        options: [
          "The final net cash flow result is different.",
          "How cash inflows and outflows are presented.",
          "Only the direct method includes financing activities.",
          "The indirect method is only for small companies.",
        ],
        answer: "How cash inflows and outflows are presented.",
      },
      {
        question:
          "BetaFarms Ltd purchased land for ₦100,000. Where does this appear in the Cash Flow Statement?",
        options: [
          "Outflow under Operating Activities.",
          "Inflow under Financing Activities.",
          "Outflow under Investing Activities.",
          "Inflow under Operating Activities.",
        ],
        answer: "Outflow under Investing Activities.",
      },
      {
        question: "Cash flow is often described as the:",
        options: [
          "Profit of a company.",
          "Lifeblood of an organization.",
          "Sales of the business.",
          "Liabilities of the business.",
        ],
        answer: "Lifeblood of an organization.",
      },
      {
        question:
          "Which of the following is an adjustment added back to net profit in the indirect method?",
        options: [
          "Increase in Accounts Receivable.",
          "Allowance for Doubtful Debts.",
          "Purchase of Machinery.",
          "Decrease in Accounts Payable.",
        ],
        answer: "Allowance for Doubtful Debts.",
      },
      {
        question:
          "Financing activities relate to transactions involving the company's:",
        options: [
          "Day-to-day sales.",
          "Long-term assets.",
          "Equity and debt.",
          "Inventory purchases.",
        ],
        answer: "Equity and debt.",
      },
      {
        question:
          "Operating activities show whether a company generates enough cash to:",
        options: [
          "Pay its shareholders dividends.",
          "Buy other companies.",
          "Pay for its short-term liabilities.",
          "Repay long-term debt.",
        ],
        answer: "Pay for its short-term liabilities.",
      },
      {
        question:
          '"Proceeds from Sale of Equipment" is considered an inflow under:',
        options: [
          "Operating Activities.",
          "Investing Activities.",
          "Financing Activities.",
          "Revenue Activities.",
        ],
        answer: "Investing Activities.",
      },
      {
        question:
          "If GreenTech Ltd has a Net Income of ₦500,000 and Shareholders' Equity of ₦2,000,000, what is the Return on Equity (ROE)?",
        options: ["10%", "25%", "50%", "4%"],
        answer: "25%",
      },
      {
        question:
          'The "Quick Ratio" is a stricter measure of liquidity than the Current Ratio because it excludes:',
        options: [
          "Cash.",
          "Accounts Receivable.",
          "Inventory.",
          "Short-term loans.",
        ],
        answer: "Inventory.",
      },
      {
        question:
          'Which costing method treats fixed overheads as "period costs" expensed immediately?',
        options: [
          "Absorption Costing",
          "Full Costing",
          "Marginal Costing",
          "Job Costing",
        ],
        answer: "Full Costing",
      },
      {
        question:
          "Return on Assets (ROA) measures how efficiently a company uses its assets to:",
        options: [
          "Pay its employees.",
          "Generate profit.",
          "Repay long-term debt.",
          "Sell its products on credit.",
        ],
        answer: "Generate profit.",
      },
      {
        question: 'An "Interest Coverage Ratio" of 5 implies:',
        options: [
          "The company earns 5 times its interest expense through operating income.",
          "The company earns 5% profit.",
          "The company has 5 creditors.",
          "The company has a debt ratio of 5.",
        ],
        answer: "The company earns 5% profit.",
      },
      {
        question: '"Costing" is essentially the process of:',
        options: [
          "Setting taxes for the government.",
          "Determining the amount spent in producing a particular product or service.",
          "Managing employee benefits.",
          "Selling goods to customers.",
        ],
        answer:
          "Determining the amount spent in producing a particular product or service.",
      },
      {
        question: 'A "Cost Objective" can include:',
        options: [
          "Only the final product.",
          "Any activity for which a separate measurement of cost is required.",
          "Only the marketing department.",
          "Only the total company sales.",
        ],
        answer: "Only the marketing department.",
      },
      {
        question:
          "Which ratio measures how many times inventory is sold and replaced over a period?",
        options: [
          "Quick Ratio.",
          "Debt Ratio.",
          "Inventory Turnover Ratio.",
          "Asset Turnover Ratio.",
        ],
        answer: "Inventory Turnover Ratio.",
      },
      {
        question: '"Absorption Costing" includes:',
        options: [
          "Only direct materials.",
          "Only variable production costs.",
          "Both fixed and variable production costs.",
          "Only administrative expenses.",
        ],
        answer: "Both fixed and variable production costs.",
      },
      {
        question:
          'The "Net Profit Margin" shows the percentage of revenue that remains after:',
        options: [
          "Only COGS are deducted.",
          "Only interest is deducted.",
          "All expenses, including taxes and interest, are deducted.",
          "Dividends are paid.",
        ],
        answer: "Only interest is deducted.",
      },
      {
        question:
          "What were the major compliance issues discovered during the audit of Lagos Medical Supplies?",
        options: [
          "Overpayment of taxes.",
          "Inventory mismanagement and incorrect revenue recognition.",
          "Lack of marketing strategy.",
          "Excessive cash reserves.",
        ],
        answer: "Inventory mismanagement and incorrect revenue recognition.",
      },
      {
        question:
          "Under Nigerian law (CAMA 2020), which of the following is NOT a right of an external auditor?",
        options: [
          "Access to all accounting books and records.",
          "The right to attend and speak at shareholders' meetings.",
          "The right to serve as a Director of the company being audited.",
          "The right to request information from management.",
        ],
        answer: "The right to attend and speak at shareholders' meetings.",
      },
      {
        question:
          "Which type of audit is mandated for Nigerian banks to ensure they operate within the legal framework?",
        options: [
          "Operational Audit.",
          "Statutory Audit.",
          "Value-for-Money Audit.",
          "Special Audit.",
        ],
        answer: "Statutory Audit.",
      },
      {
        question: "How does AI-driven OCR solve common accounting failures?",
        options: [
          "By predicting future stock prices.",
          "By automating data entry from invoices and reducing manual errors.",
          "By replacing the need for an external auditor.",
          "By increasing the complexity of tax filings.",
        ],
        answer:
          "By automating data entry from invoices and reducing manual errors.",
      },
      {
        question: 'A "Qualified Opinion" issued by an auditor is considered:',
        options: [
          "A confirmation of perfect financial health.",
          'A "clean" report with no issues.',
          'A "red flag" indicating material misstatements or non-compliance.',
          "A certification required for small companies only.",
        ],
        answer: 'A "clean" report with no issues.',
      },
      {
        question: '"Professional Scepticism" in auditing means:',
        options: [
          "Assuming the management is lying.",
          "Having a questioning mind and critically assessing audit evidence.",
          "Refusing to perform the audit.",
          "Only believing the verbal explanations of directors.",
        ],
        answer:
          "Having a questioning mind and critically assessing audit evidence.",
      },
      {
        question:
          "The primary responsibility for preventing and detecting fraud rests with:",
        options: [
          "The external auditor.",
          "Management and those charged with governance.",
          "The tax authorities.",
          "The company's customers.",
        ],
        answer: "The tax authorities.",
      },
      {
        question: 'An "Unqualified Opinion" means the financial statements:',
        options: [
          "Are completely false.",
          "Present a true and fair view in all material respects.",
          "Are only for internal use.",
          "Cannot be audited.",
        ],
        answer: "Present a true and fair view in all material respects.",
      },
      {
        question: "Audit fieldwork phases typically include:",
        options: [
          "Planning, Execution, and Reporting.",
          "Sales, Marketing, and Operations.",
          "Hiring, Training, and Firing.",
          "Tax filing and Dividend payment.",
        ],
        answer: "Sales, Marketing, and Operations.",
      },
      {
        question: '"Statutory Audit" is required by:',
        options: [
          "The company's marketing team.",
          "Law and regulations (e.g., CAMA 2020).",
          "Only foreign investors.",
          "The company's employees.",
        ],
        answer: "Law and regulations (e.g., CAMA 2020).",
      },
      {
        question:
          "In the Bella’s Boutique scenario, what happens when a customer returns clothes worth ₦30,000?",
        options: [
          "Debit Inventory; Credit Cash.",
          "Debit Sales Returns; Credit Accounts Receivable/Cash.",
          "Debit Sales; Credit Capital.",
          "Debit Expenses; Credit Revenue.",
        ],
        answer: "Debit Sales Returns; Credit Accounts Receivable/Cash.",
      },
      {
        question: 'The "Materiality" convention states that:',
        options: [
          "Every single kobo must be tracked regardless of cost.",
          "Only information significant enough to influence user decisions should be included.",
          "Large assets must be recorded at market value.",
          "Inventory must be counted every day.",
        ],
        answer:
          "Only information significant enough to influence user decisions should be included.",
      },
      {
        question:
          "Which document is used to track inventory movement inside a warehouse?",
        options: [
          "Sales Day Book.",
          "Bin Card.",
          "Delivery Note.",
          "Purchase Order.",
        ],
        answer: "Bin Card.",
      },
      {
        question: '"Prime Cost" is the sum of:',
        options: [
          "All indirect costs.",
          "All direct costs (Direct Materials + Direct Labour + Direct Expenses).",
          "Fixed costs + Variable costs.",
          "Revenue - Gross Profit.",
        ],
        answer:
          "All direct costs (Direct Materials + Direct Labour + Direct Expenses).",
      },
      {
        question: 'A "Qualified Opinion" is issued by an auditor when:',
        options: [
          "The financial statements are perfect.",
          "The auditor finds material issues or non-compliance.",
          "The company has made a very high profit.",
          "The company is a small family business.",
        ],
        answer: "The auditor finds material issues or non-compliance.",
      },
      {
        question: '"Absorption Costing" is often required for:',
        options: [
          "Short-term internal decisions.",
          "External financial reporting.",
          "Calculating the break-even point.",
          "Deciding whether to discontinue a product.",
        ],
        answer: "External financial reporting.",
      },
      {
        question:
          "Which AI solution can analyze vast amounts of data to detect patterns indicating theft?",
        options: [
          "Automated Data Entry.",
          "Fraud Detection algorithms.",
          "Real-time Reporting.",
          "Automated Payroll.",
        ],
        answer: "Fraud Detection algorithms.",
      },
      {
        question:
          'Under CAMA 2020, a "Small Company" is exempt from audit if its turnover does not exceed:',
        options: [
          "₦10 million.",
          "₦120 million.",
          "₦500 million.",
          "₦1 billion.",
        ],
        answer: "₦120 million.",
      },
      {
        question: '"Substance over Form" means:',
        options: [
          "Legal status is more important than economic reality.",
          "Transactions are recorded based on economic reality rather than just legal form.",
          "Only high-value items are recorded.",
          "Every transaction must have a physical receipt.",
        ],
        answer:
          "Transactions are recorded based on economic reality rather than just legal form.",
      },
      {
        question: 'The "Historical Cost" concept is used because it provides:',
        options: [
          "Subjective estimates.",
          "Objectivity and verifiable, original cost data.",
          "High profits for the business.",
          "Lower taxes for the owner.",
        ],
        answer: "Objectivity and verifiable, original cost data.",
      },
      {
        question:
          "Which branch of accounting is concerned with providing healthcare or housing to employees?",
        options: [
          "Cost Accounting",
          "Social Accounting",
          "Tax Accounting",
          "Management Accounting",
        ],
        answer: "Social Accounting",
      },
      {
        question: "What is the first step in the bookkeeping process?",
        options: [
          "Posting to ledger accounts.",
          "Identifying and classifying transactions.",
          "Extracting a trial balance.",
          "Preparing the balance sheet.",
        ],
        answer: "Identifying and classifying transactions.",
      },
      {
        question: 'A "Debit Note" is issued by a store when:',
        options: [
          "A customer returns goods.",
          "There was an undercharge or error that needs to be corrected.",
          "A customer pays in cash.",
          "The store pays its electricity bill.",
        ],
        answer: "There was an undercharge or error that needs to be corrected.",
      },
      {
        question: 'In the Tunde Ventures example, "Return Inwards" refers to:',
        options: [
          "Goods returned to the supplier by Tunde.",
          "Goods returned by customers to Tunde.",
          "Cash flowing into the bank.",
          "Buying machinery on credit.",
        ],
        answer: "Goods returned by customers to Tunde.",
      },
      {
        question: 'The "Accounting Equation" must always remain:',
        options: [
          "Positive.",
          "Balanced.",
          "Higher than the previous year.",
          "Zero.",
        ],
        answer: "Balanced.",
      },
      {
        question:
          '"Current Assets" are assets expected to be converted to cash within:',
        options: [
          "1 month.",
          "12 months (one year).",
          "5 years.",
          "The life of the business.",
        ],
        answer: "12 months (one year).",
      },
      {
        question: 'Which of the following is a "Non-current Liability"?',
        options: [
          "Accounts Payable.",
          "Accrued Wages.",
          "Long-term Debt (e.g., a 10-year loan).",
          "Bank Overdraft.",
        ],
        answer: "Long-term Debt (e.g., a 10-year loan).",
      },
      {
        question: '"Gross Profit Margin" measures profitability relative to:',
        options: [
          "Net Income.",
          "Total Assets.",
          "Revenue.",
          "Shareholders' Equity.",
        ],
        answer: "Revenue.",
      },
      {
        question:
          'If Company H generates ₦2 in revenue for every ₦1 of assets, its "Asset Turnover Ratio" is:',
        options: ["0.5", "2", "1", "200"],
        answer: "2",
      },
      {
        question: '"Interest Coverage Ratio" below 1.5 might indicate:',
        options: [
          "High profitability.",
          "Financial stress and difficulty meeting debt payments.",
          "Excellent inventory management.",
          "That the company has no debt.",
        ],
        answer: "Financial stress and difficulty meeting debt payments.",
      },
      {
        question: '"Cost Accounting" provides information primarily for:',
        options: [
          "External investors.",
          "Internal management decision-making.",
          "Government tax agencies.",
          "The general public.",
        ],
        answer: "Internal management decision-making.",
      },
      {
        question: 'A "Cost Unit" is defined as:',
        options: [
          "A department where costs are collected.",
          "The basic unit of product or service for which cost is ascertained.",
          "The salary of the CEO.",
          "A tax-free zone.",
        ],
        answer:
          "The basic unit of product or service for which cost is ascertained.",
      },
      {
        question:
          'In "Marginal Costing," if Sales are ₦1,000 and Variable Costs are ₦600, what is the Contribution?',
        options: ["₦1,600", "₦400", "₦600", "₦1,000"],
        answer: "₦400",
      },
      {
        question: 'Which costing method is also known as "Variable Costing"?',
        options: [
          "Absorption Costing.",
          "Marginal Costing.",
          "Standard Costing.",
          "Batch Costing.",
        ],
        answer: "Marginal Costing.",
      },
      {
        question: "The primary responsibility for preventing fraud lies with:",
        options: [
          "The External Auditor.",
          "The Government.",
          "Management and those charged with governance.",
          "The Bank.",
        ],
        answer: "Management and those charged with governance.",
      },
      {
        question:
          'An auditor’s right of "Access to Records" means they can view:',
        options: [
          "Only the final balance sheet.",
          "All accounting books and records at any time.",
          "Only documents approved by the CEO.",
          "Only tax returns from the last year.",
        ],
        answer: "All accounting books and records at any time.",
      },
      {
        question: '"IFRS" stands for:',
        options: [
          "Internal Financial Reporting System.",
          "International Financial Reporting Standards.",
          "International Federal Revenue Service.",
          "Integrated Financial Reporting Standards.",
        ],
        answer: "International Financial Reporting Standards.",
      },
      {
        question:
          "Which AI technology is used to reconcile thousands of transactions in real-time?",
        options: [
          "OCR.",
          "Real-time Reconciliation algorithms.",
          "Automated Data Entry.",
          "Blockchain.",
        ],
        answer: "Real-time Reconciliation algorithms.",
      },
      {
        question: 'Why is "Professional Judgement" critical in auditing?',
        options: [
          "Because auditors need to decide which employees to fire.",
          "Because many financial elements involve estimates.",
          "To help the company pay fewer taxes.",
          "To predict the company's future stock price.",
        ],
        answer: "Because many financial elements involve estimates.",
      },
      {
        question:
          'In the Lagos Medical Supplies case, "Revenue Recognition" issues meant the company was:',
        options: [
          "Not earning enough money.",
          "Recognizing revenue before it was actually earned.",
          "Paying too much in dividends.",
          "Forgetting to record its sales.",
        ],
        answer: "Recognizing revenue before it was actually earned.",
      },
      {
        question: 'What does a "Balanced Trial Balance" ensure?',
        options: [
          "That the company made a profit.",
          "That there are no arithmetic errors in the ledger.",
          "That all customers have paid their debts.",
          "That the CEO is doing a good job.",
        ],
        answer: "That there are no arithmetic errors in the ledger.",
      },
      {
        question:
          "Which subsidiary book records credit purchases of goods for resale?",
        options: [
          "Sales Day Book.",
          "Purchases Day Book (Purchases Journal).",
          "Cash Book.",
          "General Journal.",
        ],
        answer: "Purchases Day Book (Purchases Journal).",
      },
      {
        question:
          '"Retained Earnings" are found in which section of the balance sheet?',
        options: ["Assets.", "Liabilities.", "Equity.", "Revenue."],
        answer: "Equity.",
      },
      {
        question:
          'Which cash flow method is "less transparent" but "easier to prepare"?',
        options: [
          "Direct Method.",
          "Indirect Method.",
          "Marginal Method.",
          "Absorption Method.",
        ],
        answer: "Indirect Method.",
      },
      {
        question: '"Debt-to-Equity" ratio measures:',
        options: [
          "Profitability.",
          "Liquidity.",
          "Financial leverage (Capital Structure).",
          "Efficiency.",
        ],
        answer: "Financial leverage (Capital Structure).",
      },
      {
        question:
          'In "Absorption Costing," if a company produces more than it sells, profit is often:',
        options: [
          "Understated.",
          "Inflated (higher than in marginal costing).",
          "Zero.",
          "Negative.",
        ],
        answer: "Inflated (higher than in marginal costing).",
      },
      {
        question: '"Forensic Audits" are conducted specifically to:',
        options: [
          "Prepare for a stock market launch.",
          "Investigate suspicions of fraud or legal violations.",
          "Check if employees are happy.",
          "Evaluate a new marketing plan.",
        ],
        answer: "Investigate suspicions of fraud or legal violations.",
      },
      {
        question: '"Integrity" in auditing requires the auditor to be:',
        options: ["Rich.", "Honest and fair.", "Famous.", "A lawyer."],
        answer: "Honest and fair.",
      },
      {
        question:
          "Which AI solution reduces the time taken for report preparation from days to hours?",
        options: [
          "OCR.",
          "AI-driven financial reporting.",
          "Fraud detection.",
          "Email automation.",
        ],
        answer: "AI-driven financial reporting.",
      },
      {
        question:
          '"Accounting" is often called the language of business because it:',
        options: [
          "Is only spoken by business owners.",
          "Communicates the financial position to stakeholders.",
          "Uses very complex words.",
          "Is the same in every country.",
        ],
        answer: "Communicates the financial position to stakeholders.",
      },
    ],
  },
];

export function getSubjectById(id) {
  return SUBJECTS.find((s) => s.id === id) ?? null;
}
