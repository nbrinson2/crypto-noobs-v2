import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TerminologyService {
  public terminologyJson =
    [
      {
        Term: "1hr",
        Definition: "Stands for data for the past 1 hour."
      },
      {
        Term: "24hr",
        Definition: "Stands for data for the past 24 hours."
      },
      {
        Term: "30d",
        Definition: "Stands for data for the past 30 days."
      },
      {
        Term: "51% Attack",
        Definition: "If more than half the computer power or mining hash rate on a network is run by a single person or a single group of people, then a 51% attack is in operation."
      },
      {
        Term: "7d",
        Definition: "Stands for data for the past 7 days."
      },
      {
        Term: "Abstract",
        Definition: "Abstract is something that exists in thought as an idea."
      },
      {
        Term: "Account",
        Definition: "An account is essentially a whose purpose is to track the financial activities of a specific asset/"
      },
      {
        Term: "Accumulation/Distribution Indicator",
        Definition: "The accumulation/distribution indicator determines the supply and demand level of a stock/asset/cryptocurrency by multiplying the closing price of a specific period with volume."
      },
      {
        Term: "Adam Back",
        Definition: "Adam Back is a world-renowned British cryptographer, cypherpunk and crypto industry figure from the United Kingdom."
      },
      {
        Term: "Address",
        Definition: "A place where cryptocurrency can be sent to and from, in the form of a string of letters and numbers."
      },
      {
        Term: "Adoption Curve",
        Definition: "Adoption curve indicates the pace of adoption of a new technology by people. It may also involve segregation of the target audience to understand the market's willingness."
      },
      {
        Term: "Air Gap",
        Definition: "If data cannot be accessed, then it cannot be infected or corrupted \ufffd this is the concept of an air gap."
      },
      {
        Term: "Airdrop",
        Definition: "A marketing campaign that distributes a specific cryptocurrency or token to an audience."
      },
      {
        Term: "Airnode",
        Definition: "Airnode is an oracle node and API blockchain gateway that is readily deployed by API providers who want to engage in the API3 blockchain protocol and put their data feeds on-chain."
      },
      {
        Term: "Algorithm",
        Definition: "A process or set of rules to be followed in problem-solving or calculation operations, usually by a computer."
      },
      {
        Term: "Algorithmic Market Operations (AMOs)",
        Definition: "Algorithmic Market Operations (AMOs) automatically control the supply of algorithmic stablecoins while improving scalability, decentralization, and transparency."
      },
      {
        Term: "Algorithmic Stablecoin",
        Definition: "An algorithmic stablecoin actually uses an algorithm underneath, which can issue more coins when its price increases and buy them off the market when the price falls."
      },
      {
        Term: "Algo-Trading (Algorithmic Trading)",
        Definition: "Algo-trading is an automated trading system where buy and sell orders are placed according to the rules of a computer program or algorithm."
      },
      {
        Term: "Allocation",
        Definition: "Allocation is the allotment of equity or tokens that may be earned, bought, or reserved for a specific team, group, investor, institution, or another similar entity."
      },
      {
        Term: "All-Time-High (ATH)",
        Definition: "The highest point (in price, in market capitalization) that a cryptocurrency has been in history. *see All-Time-Low (ATL)."
      },
      {
        Term: "All-Time-Low (ATL)",
        Definition: "The lowest point (in price, in market capitalization) that a cryptocurrency has been in history. *see All-Time-High (ATH)."
      },
      {
        Term: "Alphanumeric",
        Definition: "Alphanumeric phrases consist of both letters and numerals, or characters."
      },
      {
        Term: "Altcoin",
        Definition: "As Bitcoin is the first cryptocurrency that captured the world\ufffds imagination, all other coins were subsequently termed \ufffdaltcoins,\ufffd as in \ufffdalternative coins.\ufffd"
      },
      {
        Term: "Altcoin Trader",
        Definition: "A person who trades cryptocurrencies alternative to Bitcoin."
      },
      {
        Term: "Amazon S3",
        Definition: "Amazon Simple Storage Service (S3) is a scalable, high-speed, and inexpensive web-based cloud storage service to store and retrieve data anytime and anywhere."
      },
      {
        Term: "AMLD5",
        Definition: "The European Union\ufffds 5th Anti-Money Laundering Directive (AMDL5) is an update to the union\ufffds Anti-Money Laundering (AML) framework."
      },
      {
        Term: "Anarcho-capitalism",
        Definition: "A political philosophy originally conceived by American economist Murray Rothbard that has now been embraced by many members of the crypto community."
      },
      {
        Term: "Angel Investor",
        Definition: "A person who financially backs a new business venture or startup."
      },
      {
        Term: "Annual Percentage Rate (APR)",
        Definition: "The amount of interest a borrower must pay each year is known as the annual percentage rate (APR). The annual percentage rate (APR) is determined by multiplying the periodic interest rate by the number of periods in a year that the periodic rate is used."
      },
      {
        Term: "Annual Percentage Yield (APY)",
        Definition: "Annual percentage yield (APY) is the rate of return gained over the course of a year on a specific investment. Compounding interest, which is computed on a regular basis and applied to the amount, is factored into the APY."
      },
      {
        Term: "Anonymous",
        Definition: "Anonymity is when something is not known or named."
      },
      {
        Term: "Anti-Fragile",
        Definition: "A quality attached to an asset that means it performs better when exposed to volatility and shocks."
      },
      {
        Term: "Anti-Malware",
        Definition: "Anti-Malware is a type of application software that prevents, detects, and removes malware from computers & electronic devices."
      },
      {
        Term: "Anti-Money Laundering (AML)",
        Definition: "A set of international laws enacted to curtail criminal organizations or individuals laundering money through cryptocurrencies into real-world cash."
      },
      {
        Term: "Antivirus",
        Definition: "A piece of software designed to protect against malicious software and cyber attacks in general."
      },
      {
        Term: "Apeing",
        Definition: "Apeing is when a cryptocurrency trader buys a token shortly after the token project launch without conducting thorough research."
      },
      {
        Term: "API",
        Definition: "API stands for Application Programming Interface. It is a set of routines, protocols, and tools for building software applications. APIs specify how software components should interact, such as what data to use and what actions should be taken."
      },
      {
        Term: "Arbitrage",
        Definition: "Arbitrage is the practice of quickly buying and selling the same asset in different markets to take advantage of price differences between the markets."
      },
      {
        Term: "Aroon Indicator",
        Definition: "Aroon Indicator is used to identify the existence, changes, and corrective retracements and gauge the strength of an ongoing trend in financial markets."
      },
      {
        Term: "Ashdraked",
        Definition: "The complete loss of a trader's total invested capital, specifically as a result of shorting Bitcoin."
      },
      {
        Term: "ASIC",
        Definition: "An acronym for application-specific integrated circuit \ufffd a device designed for the sole purpose of mining cryptocurrencies."
      },
      {
        Term: "ASIC-Resistant",
        Definition: "This term usually applies to blockchains and mining algorithms, designed to give no benefit for ASICs over consumer grade hardware."
      },
      {
        Term: "Ask Price",
        Definition: "The minimum price that a seller is willing to accept for an asset. The ask price is also sometimes referred to as the offer price."
      },
      {
        Term: "Asset-Backed Tokens",
        Definition: "Asset-backed tokens are digital claims on a physical asset and are backed by that asset."
      },
      {
        Term: "Assets Under Management (AUM)",
        Definition: "Assets under management measures the total market values of all the funds controlled by an individual or financial institution on behalf of their clients."
      },
      {
        Term: "Astroturfing",
        Definition: "The practice of disguising marketing campaigns or otherwise sponsored messaging as the unprompted views of genuine community members."
      },
      {
        Term: "Asynchronous",
        Definition: "Events that do not occur simultaneously or at the same rate are referred to as asynchronous."
      },
      {
        Term: "Atomic Swap",
        Definition: "The transfer of cryptocurrency from one party to another, without the use of an exchange or other intermediary."
      },
      {
        Term: "AtomicDEX",
        Definition: "AtomicDEX offers a cryptocurrency wallet and DEX in one application that is available for multiple platforms."
      },
      {
        Term: "Attestation Ledger",
        Definition: "An attestation ledger is an account book designed to provide evidence of individual transactions. It is generally used to \ufffdattest\ufffd that a financial transaction took place, or to prove authenticity of transactions or products."
      },
      {
        Term: "Auction",
        Definition: "An auction is a public sale through a bidding process where an asset is sold to the highest bidder."
      },
      {
        Term: "Audit",
        Definition: "An audit is a process where developers inspect the underlying code and/or algorithm that compose systems and applications."
      },
      {
        Term: "Augmented Reality (AR)",
        Definition: "Augmented Reality (AR) is an immersive experience that improves the value and usage of real-world items using computer-generated intuitive information sent through a variety of sensory modalities such as sound, touch, smell, and sight."
      },
      {
        Term: "Authentication",
        Definition: "Authentication is a process that confirms a user's identity using passwords, SMS codes, fingerprints, and other forms of ownership proofs before granting access to sensitive and/or personal information."
      },
      {
        Term: "Automated Market Maker (AMM) [Updated]",
        Definition: "An automated market maker (AMM) is a system that provides liquidity to the exchange it operates in through automated trading."
      },
      {
        Term: "Average Directional Index\ufffd(ADX)",
        Definition: "The average directional index (ADX) is a technical indicator that measures how strong a market trend is by using price moving averages and is represented by figures ranging between 1 and 100, where a larger value suggesting a stronger trend."
      },
      {
        Term: "Bag",
        Definition: "Crypto slang for a large quantity of a specific cryptocurrency. Alternatively (but less frequently) used to refer to the contents of an individual's crypto portfolio."
      },
      {
        Term: "Bagholder",
        Definition: "An investor who continues to hold large amounts of a specific coin or token, regardless of its performance."
      },
      {
        Term: "Bakers",
        Definition: "Baking is the process that Tezos uses in order to append new blocks of transactions to its blockchain."
      },
      {
        Term: "Baking",
        Definition: "Baking is a process that is used by Tezos in order to append new blocks of transactions onto its blockchain."
      },
      {
        Term: "Bandwidth",
        Definition: "The quantity of data capacity available for transactional activity on a network is known as bandwidth."
      },
      {
        Term: "Bank for International Settlements (BIS)",
        Definition: "The BIS is an international financial institution that promotes global monetary stability."
      },
      {
        Term: "Banking as a Service (BaaS)",
        Definition: "BaaS platforms provides a higher level of financial transparency options by letting banks open up their APIs for third parties in order to develop new services."
      },
      {
        Term: "Banking Secrecy Act (BSA)",
        Definition: "The Bank Secrecy Act (BSA) was implemented in the United States in 1970 to prevent criminals from concealing or laundering their illegal gains."
      },
      {
        Term: "Basket",
        Definition: "A basket, when used in the cryptocurrency space, refers to a collection of digital currencies managed as a single asset."
      },
      {
        Term: "Batch Auctions",
        Definition: "Batch auctions are a trading mechanism in which individual orders are grouped together and executed simultaneously."
      },
      {
        Term: "Beacon Chain",
        Definition: "A blockchain that coordinates shard chains, manages staking and the registry of validators in a PoS cryptocurrency, such as Ethereum 2.0."
      },
      {
        Term: "Bear",
        Definition: "Someone who believes that prices in a given market will decline over an extended period. Such a person might be referred to as \ufffdbearish.\ufffd"
      },
      {
        Term: "Bear Trap",
        Definition: "The attempted manipulation of a specific cryptocurrency\ufffds price, based on the coordinated activity of a group of traders."
      },
      {
        Term: "Bearwhale",
        Definition: "A bearwhale is a person who has a high number of cryptocurrencies and uses their massive account to drive the price down and profit out of it.\ufffd"
      },
      {
        Term: "Benchmark",
        Definition: "Benchmarking is a method of comparing the performance of your asset or investment portfolio to that of similar assets to see whether there is a gap that can be bridged by increasing performance indicators."
      },
      {
        Term: "Benchmark Index",
        Definition: "A benchmark index is a popular index security that is used as a gauge or benchmark, against which the progress of the broader market may be tracked."
      },
      {
        Term: "BEP-2 (Binance Chain Tokenization Standard)",
        Definition: "A technical standard for tokens on Binance Chain."
      },
      {
        Term: "BEP-20",
        Definition: "BEP-20 is a Binance Smart Chain token standard created with the intention of extending ERC-20."
      },
      {
        Term: "BEP-721",
        Definition: "BEP-721 is a Binance Smart Chain (BSC) token standard that enables the generation of non-fungible tokens (NFTs). It is considered to be an extension of ERC-721 that is one of the most popular NFT standards."
      },
      {
        Term: "Beta (Release)",
        Definition: "A software pre-release stage where its access is offered to a set number of users & third-party software testers for testing it under real-world settings."
      },
      {
        Term: "Bid Price",
        Definition: "The cost that someone is willing to pay for a security, asset, commodity, service, or contract is referred to as a bid price."
      },
      {
        Term: "Bid-Ask Spread",
        Definition: "Bid-ask spread is the difference between the highest price which a buyer is willing to pay for an asset as well as the lowest price that a seller is willing to accept."
      },
      {
        Term: "Big Tech",
        Definition: "The four or five biggest technological corporations, particularly Facebook, Apple, Google, and Amazon, are referred to as \"Big Tech\" as they enjoy the biggest shares in their respective industries."
      },
      {
        Term: "Binance Labs",
        Definition: "Binance Labs is a project to nurture, invest in, and develop blockchain and cryptocurrency businesses, initiatives, and communities, as well as a social impact fund."
      },
      {
        Term: "Binance Launchpad",
        Definition: "Binance Launchpad offers crypto-startups a platform to raise capital and market their projects to millions of crypto investors in the Binance ecosystem."
      },
      {
        Term: "Binary Code",
        Definition: "Binary code is a two-symbol system that is based on numbers, \"0\" and \"1,\" to represent text, computer processor commands, or any other type of data."
      },
      {
        Term: "Bit",
        Definition: "A bit is a basic unit of information in computing."
      },
      {
        Term: "Bitcoin ATM (BTM)",
        Definition: "An automated teller machine (ATM or cashpoint) that allows the user to buy and sell Bitcoin."
      },
      {
        Term: "Bitcoin Dominance (BTCD)",
        Definition: "Bitcoin Dominance is a metric that determines how much share of the overall crypto market share is owned by Bitcoin."
      },
      {
        Term: "Bitcoin Improvement Proposal (BIP)",
        Definition: "The standard format for documents proposing changes to Bitcoin."
      },
      {
        Term: "Bitcoin Pizza",
        Definition: "Bitcoin Pizza refers to the infamous transaction where a guy, named Laszlo Hanyecz, paid 10,000 Bitcoins for two pizzas making it the first business transaction of Bitcoin in the real world."
      },
      {
        Term: "Bitcoiner",
        Definition: "A person who is bullish on Bitcoin."
      },
      {
        Term: "Bitcointalk",
        Definition: "Bitcointalk is the most popular online forum dedicated to Bitcoin, cryptocurrency and blockchain technology."
      },
      {
        Term: "BitLicense",
        Definition: "A business license permitting regulated virtual currency activities, issued by the New York State Department of Financial Services."
      },
      {
        Term: "BitPay",
        Definition: "BitPay is a Bitcoin payment service provider."
      },
      {
        Term: "Bits",
        Definition: "A commonly used unit, or subdivision, of a single Bitcoin."
      },
      {
        Term: "Black Swan Event",
        Definition: "A black swan event, also known as black swan occurrences, is a metaphor for an unexpected event that has a significant impact."
      },
      {
        Term: "Block",
        Definition: "A file containing information on transactions completed during a given time period. Blocks are the constituent parts of a blockchain."
      },
      {
        Term: "Block Explorer",
        Definition: "An application enabling a user to view details of blocks on a given blockchain. Also known as a blockchain browser."
      },
      {
        Term: "Block Header",
        Definition: "A block header is a unique identifier for a block on a blockchain that is hashed on a continuous basis to supply proof-of-work for mining incentives."
      },
      {
        Term: "Block Height",
        Definition: "A value describing the number of blocks preceding a given block in the blockchain."
      },
      {
        Term: "Block Producer",
        Definition: "A block producer (BP) is a person or group whose hardware is chosen to verify a block's transactions and begin the next block on most Proof-of-Stake (PoS) blockchains."
      },
      {
        Term: "Block Reward",
        Definition: "The coins awarded to a miner or group of miners for solving the cryptographic problem required to create a new block on a given blockchain."
      },
      {
        Term: "Block Size",
        Definition: "In blockchain technology, block size refers to the amount of data about transactions a single block in the chain can carry."
      },
      {
        Term: "Block Time",
        Definition: "Block time refers to the approximate time it takes for a blockchain-based system to produce a new block."
      },
      {
        Term: "Block Trade",
        Definition: "A block trade is a large-scale purchase or sale of securities that occur outside of an open market. It uses blockhouse as a financial intermediary to aid investors with risk management."
      },
      {
        Term: "Blockchain",
        Definition: "A distributed ledger system. A sequence of blocks, or units of digital information, stored consecutively in a public database. The basis for cryptocurrencies."
      },
      {
        Term: "Blockchain 1.0",
        Definition: "Blockchain 1.0 is the first generation of blockchain technology, which focuses on cryptocurrency and decentralization."
      },
      {
        Term: "Blockchain 2.0",
        Definition: "Blockchain 2.0 is an extension to blockchain 1.0 as it introduced the concept of decentralization of business and markets through smart contracts and improved security and transparency."
      },
      {
        Term: "Blockchain 3.0",
        Definition: "Blockchain 3.0 is the final developmental stage of blockchain technology, which predicts global, institutional and enterprise adoption."
      },
      {
        Term: "Blockchain Explorer",
        Definition: "A blockchain explorer is simply a search engine allowing users to browse through blockchain records."
      },
      {
        Term: "Blockchain Trilemma",
        Definition: "The blockchain trilemma is the set of three issues that plague blockchains: decentralization, security and scalability."
      },
      {
        Term: "Blockchain-Enabled Smart Locks",
        Definition: "Blockchain-enabled smart locks solve many security issues and can be locked or unlocked based on the state of a variable that is embedded in a smart contract."
      },
      {
        Term: "Bollinger Band",
        Definition: "A tool developed by Bollinger to help in the recognition of systemic pattern recognition in prices; it is a band that is plotted two standard deviations away from the simple moving average, or exponential moving average in some cases."
      },
      {
        Term: "Bonding Curve",
        Definition: "A bonding curve is a mathematical curve that defines the relationship between the price and the supply of a given asset."
      },
      {
        Term: "Bots",
        Definition: "Automated software that can carry out tasks such as cryptocurrency trades."
      },
      {
        Term: "Bounty",
        Definition: "A cryptocurrency bounty is a reward users receive for performing tasks assigned by a given blockchain or project."
      },
      {
        Term: "Brave Browser",
        Definition: "Brave Browser"
      },
      {
        Term: "Breaking",
        Definition: "In the world of cryptocurrencies, breaking the forward compatibility of cryptoassets is seen in hard forks of a cryptocurrency."
      },
      {
        Term: "Brian Armstrong",
        Definition: "Brian Armstrong is the founder of Coinbase, one of the largest cryptocurrency exchanges in the United States."
      },
      {
        Term: "Bridges",
        Definition: "A blockchain bridge allows the seamless transfer of data or tokens between two different blockchain projects."
      },
      {
        Term: "Browser Extension",
        Definition: "A browser extension is a plugin for an internet browser that adds additional features."
      },
      {
        Term: "Brute Force Attack (BFA)",
        Definition: "An attempt to crack a password or key through automated trial and error."
      },
      {
        Term: "Bubble",
        Definition: "When an asset is traded at a price exceeding that asset's intrinsic value."
      },
      {
        Term: "Bug Bounty",
        Definition: "A reward offered for the identification of vulnerabilities in software."
      },
      {
        Term: "Bug Exploit",
        Definition: "A bug exploit is an attack that take advantage of a system's vulnerabilities."
      },
      {
        Term: "Bull",
        Definition: "A person that is optimistic and confident that market prices will increase, this person is also known to be \"bullish\" about the market or price."
      },
      {
        Term: "Bull Trap",
        Definition: "A bull trap occurs when a steadily declining asset appears to reverse and go upward, but soon resumes its downward trend."
      },
      {
        Term: "Burn/Burned",
        Definition: "Cryptocurrency tokens or coins are considered \ufffdburned\ufffd when they have been purposely and permanently removed from circulation."
      },
      {
        Term: "Buy The (F*******) Dip (BTD/BTFD)",
        Definition: "An enthusiastic exclamation by supporters of a cryptocurrency to buy while prices are at a low point."
      },
      {
        Term: "Buy Wall",
        Definition: "A buy wall is a disproportionately large buy limit order placed on a cryptocurrency exchange."
      },
      {
        Term: "Byzantine Fault Tolerance (BFT)",
        Definition: "Byzantine Fault Tolerance (BFT) is the property of a computer system that allows it to reach consensus regardless of the failure of some of its components."
      },
      {
        Term: "Byzantine Generals\ufffd Problem",
        Definition: "A situation where communication that requires consensus on a single strategy from all members within a group or party cannot be trusted or verified."
      },
      {
        Term: "Byzantium Fork",
        Definition: "The Byzantium hard fork was geared towards making Ethereum's smart contracts suitable for usage in the commercial space and to increase the speed of the transactions with an enhancement in the security on its blockchain"
      },
      {
        Term: "C++",
        Definition: "C++ is an extension of the C programming language that allows cross-platform developments and capabilities."
      },
      {
        Term: "Call Options",
        Definition: "Call options are financial contracts that give an option buyer the right, but not the obligation, to purchase a stock, bond, commodity or other asset at a specific price."
      },
      {
        Term: "Candlesticks",
        Definition: "A candlestick chart is a graphing technique used to show changes in price over time. Each candle provides 4 points of information opening price, closing price, high, and low. Also known as \ufffdcandles\ufffd for short."
      },
      {
        Term: "Capital",
        Definition: "Capital is most commonly defined as the large sum of money you would use to invest."
      },
      {
        Term: "Capital Efficiencies",
        Definition: "Capital efficiency is the ratio that compares the spending of a company on their growing revenue and how much they are receiving in return in the way of profits."
      },
      {
        Term: "Capital Funds",
        Definition: "Capital funding is the money provided in the form of debt or equity to operate a company."
      },
      {
        Term: "Capitulation",
        Definition: "Capitulation is the process of selling assets or cryptocurrencies at a significant loss because you have lost hope or belief that it will ever increase in price."
      },
      {
        Term: "Casascius Coin",
        Definition: "A physical unit of Bitcoin that comes in the form of brass, silver or gold-plated coins."
      },
      {
        Term: "Cash",
        Definition: "Cash is the most liquid form of money: physical coins and banknotes in the most narrow sense of the term."
      },
      {
        Term: "Cathie Wood",
        Definition: "Cathie Wood is a top stock investor and the founder of ARK Invest, a $60 billion (assets) firm that invests in cutting-edge technologies, including self-driving vehicles and genomics."
      },
      {
        Term: "CeDeFi",
        Definition: "CeDeFi, or centralized decentralized finance, combines traditional centralized financial services with decentralized applications, merging conventional regulatory policies with modern financial products and infrastructure."
      },
      {
        Term: "Censorship",
        Definition: "Censorship is the act of altering, suppressing, or prohibiting speech or writing that is considered detrimental to the general public."
      },
      {
        Term: "Censorship Resistance",
        Definition: "Censorship resistance refers to the idea that no party can prevent anyone from participating in a given platform or network."
      },
      {
        Term: "Central Bank",
        Definition: "In contemporary economies, the central bank is responsible for the formulation and transmission of monetary policy, as well as for the regulation of member banks."
      },
      {
        Term: "Central Bank Digital Currency",
        Definition: "CBDCs are digital currencies issued by a central bank whose status as legal tender depends on government regulation or law."
      },
      {
        Term: "Central Ledger",
        Definition: "A central ledger is a physical book or a computer file used to record transactions in a centralized manner."
      },
      {
        Term: "Central Processing Unit (CPU)",
        Definition: "A central processing unit (CPU) is the part of a computer that is in charge of interpreting and executing programs and coordinating the work of all other components."
      },
      {
        Term: "Centralized",
        Definition: "A centralized organizational structure is one in which a single node or a small number of them are in control of an entire network."
      },
      {
        Term: "Centralized Exchange (CEX)",
        Definition: "Centralized exchanges (CEXs) are a type of cryptocurrency exchange that is operated by a company that owns it in a centralized manner."
      },
      {
        Term: "Certificate of Deposit (CD)",
        Definition: "A certificate of deposit (CD) is a financial product allowing customers to earn an interest rate premium after making a deposit."
      },
      {
        Term: "Chain Reorganization",
        Definition: "Chain reorganization is a process in blockchain technology that allows node operators to replace blocks and adopt new ones, in order to create new, longer chains of data."
      },
      {
        Term: "Chain Split",
        Definition: "Chain splits are another term used to describe cryptocurrency forks \ufffd the separation of a single original coin into several independently managed projects."
      },
      {
        Term: "Change",
        Definition: "Change \ufffd a concept relevant to cryptocurrencies that use the UTXO model \ufffd is the number of coins sent back to a user after they use their unspent outputs to initiate a transaction."
      },
      {
        Term: "Change Address",
        Definition: "In cryptocurrencies, a change address is where the change from a transaction is temporarily stored before it is returned to the sender wallet."
      },
      {
        Term: "Changpeng Zhao (CZ)",
        Definition: "Changpeng Zhao (CZ) is the founder of crypto exchange Binance."
      },
      {
        Term: "Chargeback",
        Definition: "A chargeback is the return of money to the payer of a certain transaction, most commonly one that was made with a credit or debit card."
      },
      {
        Term: "Chicago Mercantile Exchange (CME)",
        Definition: "The Chicago Mercantile Exchange (CME) is one of the largest exchanges dealing in the trading of futures and options in the United States."
      },
      {
        Term: "Cipher",
        Definition: "A cipher is any algorithm that can be used to encrypt and decrypt information."
      },
      {
        Term: "Ciphertext",
        Definition: "Ciphertext is a result of encryption that has been performed on plaintext through the usage of an algorithm"
      },
      {
        Term: "Circulating Supply",
        Definition: "The best approximation of the number of coins that are circulating in the market and in the general public\ufffds hands."
      },
      {
        Term: "Client",
        Definition: "A client is software that can access and process blockchain transactions on a local computer. A common application of this is a cryptocurrency software wallet."
      },
      {
        Term: "Close",
        Definition: "Refers to the closing price; similar to the same term used in stock trading."
      },
      {
        Term: "Cloud",
        Definition: "Cloud servers are typically located throughout different data centers all over the world."
      },
      {
        Term: "Cloud Mining",
        Definition: "Cryptocurrency mining with remote processing power rented from companies."
      },
      {
        Term: "Code",
        Definition: "The action of coding is to write programming statements for a program."
      },
      {
        Term: "Coin",
        Definition: "A coin can refer to a cryptocurrency that can operate independently or to a single unit of such cryptocurrency."
      },
      {
        Term: "Coin Mixer",
        Definition: "Coin mixers allow users to mix up transactions between different cryptocurrency addresses, so they become untraceable and cannot be followed back to the initial sender or receiver of the assets."
      },
      {
        Term: "Coinbase",
        Definition: "In mineable cryptocurrencies, a coinbase is the number of coins that are generated from scratch and awarded to miners for mining every new block."
      },
      {
        Term: "Cold Storage",
        Definition: "Offline storage of cryptocurrencies, typically involving hardware non-custodial wallets, USBs, offline computers, or paper wallets."
      },
      {
        Term: "Cold Wallet",
        Definition: "A cryptocurrency wallet that is in cold storage, i.e. not connected to the internet."
      },
      {
        Term: "Collateral",
        Definition: "Collateral is any asset that a lender accepts as a form of security to ensure that the borrower repays a loan."
      },
      {
        Term: "Collateral Tokens",
        Definition: "In cryptocurrency, collateral tokens are used as a risk mitigation asset when borrowing other types of crypto tokens."
      },
      {
        Term: "Collateralization",
        Definition: "Collateralization is the process of using one asset as insurance for securing a loan in a different asset."
      },
      {
        Term: "Collateralized Debt Obligation",
        Definition: "A collateralized debt obligation (CDO) represents a mixture of loans and assets that are offered to big investment firms with a lot of capital."
      },
      {
        Term: "Collateralized Debt Position (CDP)",
        Definition: "A collateralized debt position is held by locking collateral in smart contracts to generate stablecoins."
      },
      {
        Term: "Collateralized Mortgage Obligation (CMO)",
        Definition: "A collateralized mortgage obligation (CMO) is essentially a bundle of numerous mortgages combined in a package and sold to investors."
      },
      {
        Term: "Collateralized Stablecoin",
        Definition: "A \ufffdcollateralized stablecoin\ufffd is a stablecoin that is entirely or almost entirely backed by collateral held in a reserve."
      },
      {
        Term: "Commingling",
        Definition: "Commingling of funds is a method of combining all funds from different investors into a single investment in order to maximize the benefits."
      },
      {
        Term: "Commodity Futures Trading Commission (CFTC)",
        Definition: "The Commodity Futures Trading Commission (CFTC) is an independent federal regulatory agency responsible for regulation the U.S. derivatives market."
      },
      {
        Term: "Composable Token",
        Definition: "A composable token is an ERC-998 token, a standard extension to any non-fungible token, adding the ability for non-fungible tokens to own other non-fungible (ERC-721) and fungible (ERC-20) tokens."
      },
      {
        Term: "Confirmation",
        Definition: "In cryptocurrency, a confirmation is a measure of how many blocks have actually passed since a transaction was added to a blockchain."
      },
      {
        Term: "Confirmations",
        Definition: "A cryptocurrency transaction is considered confirmed when it is included in a block on the blockchain. Each new block after the first one is an additional confirmation for that transaction."
      },
      {
        Term: "Consensus",
        Definition: "Consensus is achieved when all participants of the network agree on the order and content of the blocks in the blockchain."
      },
      {
        Term: "Consensus Mechanism",
        Definition: "A consensus mechanism is an underlying technology behind the main functionalities of all blockchain technology, which makes them an essential operating feature of all cryptocurrencies."
      },
      {
        Term: "ConsenSys",
        Definition: "ConsenSys is a blockchain technology company that offers developer tools alongside enterprise solutions."
      },
      {
        Term: "Consortium Blockchain",
        Definition: "A privately owned and operated blockchain where a consortium shares information not readily available to the public, while relying on the immutable and transparent properties of the blockchain."
      },
      {
        Term: "Contract",
        Definition: "In traditional finance, a contract is a binding agreement between two parties. In cryptocurrencies, smart contracts execute functions on the blockchain."
      },
      {
        Term: "Contract Account",
        Definition: "A contract account is an account that has a crypto balance and associated code."
      },
      {
        Term: "Contract for Difference (CFD)",
        Definition: "A contract for difference (CFD) outlines a buyer\ufffds obligation to pay any price difference that might occur due to the shifting valuation of an asset."
      },
      {
        Term: "Coordinator",
        Definition: "In blockchain technology, a coordinator is a specialized client that allows nodes to verify the validity of their copy of the ledger against specific transactions."
      },
      {
        Term: "Core Wallet",
        Definition: "A core crypto wallet is able to contain the entire blockchain, rather than just a piece of a blockchain."
      },
      {
        Term: "Corporate Treasury",
        Definition: "A corporate treasury is formed to manage and control the liquidity, risk, funds, capital reserves, and other resources of a company to align with its short and long-term strategies."
      },
      {
        Term: "Correction",
        Definition: "A correction is a pullback of an asset\ufffds price of at least 10% to adjust for over-valuation."
      },
      {
        Term: "Co-Signer",
        Definition: "A person or entity that has partial control and access over a cryptocurrency wallet."
      },
      {
        Term: "Craig Wright",
        Definition: "Craig Wright is an Australian computer scientist associated with Bitcoin SV."
      },
      {
        Term: "Craig Wright",
        Definition: "Craig Wright is an Australian computer scientist that has publicly claimed to be Bitcoin inventor Satoshi Nakamoto."
      },
      {
        Term: "Credit Rating",
        Definition: "Credit rating is a measure that allows banks and lending institutions to predict how capable you are of repaying your debt."
      },
      {
        Term: "Credit Risk",
        Definition: "Crest risk is the number representing the possibility that a bank or lending institution will lose money because a borrower cannot repay their loan."
      },
      {
        Term: "Cross-Border Trading",
        Definition: "Cross-border trading in financial markets and trade finance represents the opportunity to trade globally using a local currency."
      },
      {
        Term: "Cross-Chain",
        Definition: "Cross-chain is a technology that enhances the interconnection between blockchain networks by allowing the exchange of information and value."
      },
      {
        Term: "Cross-Chain Communication",
        Definition: "Cross-chain communication between blockchains allows different protocols to verify data and transactions without the intervention of a centralized third-party service."
      },
      {
        Term: "Crowdfunding",
        Definition: "Crowdfunding enables fundraisers to collect money from a large number of people through a variety of different platforms."
      },
      {
        Term: "Crowdloan",
        Definition: "The practice of new projects to raise funds through DOT or KSM tokens for slots on Kusama or Polkadot network."
      },
      {
        Term: "Crypto Debit Card",
        Definition: "A crypto debit card is a type of debit card that allows its holder to pay for goods and services using cryptocurrencies."
      },
      {
        Term: "Cryptoasset",
        Definition: "A cryptoasset is any digital asset that uses cryptographic technologies to maintain its operation as a currency or decentralized application."
      },
      {
        Term: "Cryptocurrency",
        Definition: "Cryptocurrencies are digital currencies that use cryptographic technologies to secure their operation."
      },
      {
        Term: "Cryptocurrency Money Laundering",
        Definition: "Cryptocurrency money laundering is a method criminals use to legitimize and enshroud funds by changing fiat to digital currency and then routing it through many pathways. It is an attempt to lose any authorities who may be tracing the money."
      },
      {
        Term: "Cryptocurrency Pairs",
        Definition: "Exchanges utilize cryptocurrency pairs in order to facilitate the trade between different tokens."
      },
      {
        Term: "Cryptographic Hash Function",
        Definition: "Cryptographic hash functions produce a fixed-size hash value from a variable-size transaction input."
      },
      {
        Term: "Cryptography",
        Definition: "A field of study and practice to secure information, preventing third parties from reading information to which they are not privy."
      },
      {
        Term: "Cryptojacking",
        Definition: "The use of another party\ufffds computer to mine cryptocurrency without their consent."
      },
      {
        Term: "Cryptology",
        Definition: "Cryptology is the scientific study of cryptography as well as cryptanalysis."
      },
      {
        Term: "Currency",
        Definition: "Currency is a medium of exchange that defines value."
      },
      {
        Term: "Currency Crisis",
        Definition: "A currency crisis is termed as a financial emergency in which a country's fiat currency loses value, and investors become cautious of retaining/investing in that country's assets."
      },
      {
        Term: "Custodial",
        Definition: "Custodial cryptocurrency businesses are the ones that are in possession of their customers\ufffd funds for the duration of the use of their services."
      },
      {
        Term: "Custodian",
        Definition: "A custodian is responsible for safely holding assets for an institution or individual for a variety of purposes."
      },
      {
        Term: "Custody",
        Definition: "Custody is a financial institution's legal capacity to keep and preserve financial assets for its clients to avoid asset theft or loss."
      },
      {
        Term: "Cypherpunk",
        Definition: "The cypherpunk movement promotes the use of cryptography and other privacy-focused technologies to advance social and political progress."
      },
      {
        Term: "Dark Web",
        Definition: "A portion of the internet existing on darknets not indexed by search engines, that can only be accessed with specific software, configurations or authorizations."
      },
      {
        Term: "Darknodes",
        Definition: "RenVM is driven by Darknodes, a decentralized network of computers. In exchange for compensation, they offer their computing power and storage space to everyone with certain conditions."
      },
      {
        Term: "Data Privacy",
        Definition: "Data privacy refers to the area of data protection and security that is responsible for the handling of sensitive data."
      },
      {
        Term: "Data Scraping",
        Definition: "Data scraping or web scraping is the process of extracting information from a website into a spreadsheet or a local file on your computer or database."
      },
      {
        Term: "Date of Launch",
        Definition: "A term used for when ICOs will put up their tokens for sale."
      },
      {
        Term: "Day Trading",
        Definition: "Day trading is the practice of frequently buying and selling assets in order to make a profit on intraday changes in their price."
      },
      {
        Term: "Dead Cat Bounce",
        Definition: "A temporary recovery in prices after a prolonged decrease."
      },
      {
        Term: "Dead Coin",
        Definition: "A cryptocurrency that is no longer in existence."
      },
      {
        Term: "Death Cross",
        Definition: "A death cross is a bearish technical trading indicator that occurs when the 50-day moving average falls below the 200-day moving average, indicating a big sell-off."
      },
      {
        Term: "Decentralized",
        Definition: "Decentralization refers to the property of a system in which nodes or actors work in concert in a distributed fashion to achieve a common goal."
      },
      {
        Term: "Decentralized API (dAPI)",
        Definition: "API services that are intrinsically interoperable with blockchain technology are known as decentralized application programming interfaces (dAPIs). This is an invention of the API3 protocol."
      },
      {
        Term: "Decentralized Applications (DApps)",
        Definition: "A type of application that runs on a decentralized network, avoiding a single point of failure."
      },
      {
        Term: "Decentralized Autonomous Initial Coin Offerings (DAICO)",
        Definition: "A method for decentralized funding of projects that introduces a form of governance in the ICO process, allowing backers to vote for the return of their funds if certain conditions are met."
      },
      {
        Term: "Decentralized Autonomous Organizations (DAO)",
        Definition: "A decentralized autonomous organization (DAO) is founded upon and governed by a set of computer-defined rules and blockchain-based smart contracts."
      },
      {
        Term: "Decentralized Currency",
        Definition: "Decentralized currency refers to bank-free methods of transferring wealth or ownership of any other commodity without needing a third party."
      },
      {
        Term: "Decentralized Database",
        Definition: "A decentralized database is a modern-day storage solution that combines decentralized technologies with cutting-edge computing to randomly store data and files across multiple nodes, delivering high security and unmatched availability while being completely censorship-resistant."
      },
      {
        Term: "Decentralized Exchange (DEX)",
        Definition: "A peer-to-peer exchange allowing users to trade cryptocurrency without the need for an intermediary."
      },
      {
        Term: "Decentralized Governance",
        Definition: "Decentralized governance refers to the procedures through which a platform's disintermediated, equitable management is carried out for blockchain networks and dApps."
      },
      {
        Term: "Decentralized Identifier (DID)",
        Definition: "A decentralized identifier, or DID, refers to an ID that can be issued by an autonomous, independent, and decentralized platform that acts as a proof of ownership of digital identity."
      },
      {
        Term: "Decentralized Marketplace",
        Definition: "A decentralized marketplace, built on blockchain technology, allows traders or investors to trade with each other while eliminating middlemen. They are available globally and require no intermediaries to make trades possible.\ufffd"
      },
      {
        Term: "Decentralized Network",
        Definition: "A decentralized network is a collection of interconnected but distinct elements that interact with one another without the need for a centralized power or server."
      },
      {
        Term: "Decentralized Payment Network",
        Definition: "A decentralized payment network refers to a system where users, customers and vendors can exchange money without having to trust any third party to keep the network secure and operational."
      },
      {
        Term: "Decentralized Social Media",
        Definition: "Decentralized social media is a social media platform that is based on blockchain."
      },
      {
        Term: "Decentralized Stablecoin",
        Definition: "Decentralized stablecoins are fully transparent, non-custodial with no or partial third-party control."
      },
      {
        Term: "Decryption",
        Definition: "The process of transforming encrypted data back into a format that is readable by a user or machine."
      },
      {
        Term: "Deep Web",
        Definition: "The \"deep web\" is the part of the internet that is hidden from regular search engines."
      },
      {
        Term: "DeFi",
        Definition: "A movement encouraging alternatives to traditional, centralized forms of financial services."
      },
      {
        Term: "DeFi Aggregator",
        Definition: "A DeFi aggregator brings together trades across various DeFi platforms into one place."
      },
      {
        Term: "DeFi Degens",
        Definition: "DeFi degenerates. A subculture associated with a disreputable corner of decentralized finance known for pump and dump schemes."
      },
      {
        Term: "Deflation",
        Definition: "A decline in the general level of prices for goods and services in an economy."
      },
      {
        Term: "Delegated Proof-of-Stake (dPOS)",
        Definition: "An alternative to the Proof-of-Stake and Proof-of-Work consensus algorithms."
      },
      {
        Term: "Delisting",
        Definition: "The process of removing an asset/stock/cryptocurrency from a trading exchange is called delisting."
      },
      {
        Term: "Denial-of-Service (DoS) Attack",
        Definition: "A denial-of-service attack aims to temporarily make a computer or network service unavailable to its intended users."
      },
      {
        Term: "Depth Chart",
        Definition: "A graph that plots the requests to buy (bids) and the requests to sell (asks) on a chart, based on limit orders. The chart shows the point at which the market is most likely to accept a transaction."
      },
      {
        Term: "Derivative",
        Definition: "A financial instrument deriving its value from the value of an underlying asset."
      },
      {
        Term: "Derivatives Market",
        Definition: "A public market for derivatives, instruments such as futures contracts or options, which are derived from other forms of cryptocurrency assets."
      },
      {
        Term: "Deterministic Wallet",
        Definition: "A type of cryptocurrency wallet in which keys and addresses are created from a single seed."
      },
      {
        Term: "Dex Aggregator",
        Definition: "DEX aggregators are a relatively new type of blockchain-based service that allow cryptocurrency traders to benefit from a large variety of financial tools in a single interface, often providing better liquidity and prices on different crypto pairs."
      },
      {
        Term: "Diamond Hands",
        Definition: "Diamond Hands is a popular term on social media platforms. It refers to people who hold their coins even if their portfolio drops in value by more than 20%."
      },
      {
        Term: "Difficulty",
        Definition: "A measure of how hard it is to validate a new block on a blockchain."
      },
      {
        Term: "Digital",
        Definition: "Digital technologies are these electronic tools that have the ability to generate, store or even process data."
      },
      {
        Term: "Digital Art",
        Definition: "Digital art is art and media that is made by using digital technology."
      },
      {
        Term: "Digital Asset",
        Definition: "A digital asset refers to the digital representation of something of value."
      },
      {
        Term: "Digital Asset Custodian",
        Definition: "A digital asset custodian is responsible to look after digital assets on behalf of an investor or client."
      },
      {
        Term: "Digital Asset Ecosystem",
        Definition: "Digital asset ecosystem is a term that defines everything involved in the crypto space. From NFTs to futures, this terms sums up all the facilities offered and elements associated with the crypto universe."
      },
      {
        Term: "Digital Barter Economy",
        Definition: "Eliminating the inherent weaknesses of the traditional barter economy, a digital barter economy makes it easier to trade both physical and virtual items anywhere in the world."
      },
      {
        Term: "Digital Commodity",
        Definition: "A commodity that exists digitally, as opposed to in \ufffdmeatspace.\ufffd"
      },
      {
        Term: "Digital Currency",
        Definition: "A currency that exists only in digital form, as opposed to traditional physical currencies."
      },
      {
        Term: "Digital Dollar",
        Definition: "The term \"digital dollar\" refers to a possible digital currency issued by the US central bank (CBDC)."
      },
      {
        Term: "Digital Identity",
        Definition: "Information used by a person or entity to identify themselves to a computer or network."
      },
      {
        Term: "Digital Signature",
        Definition: "A method for proving the authenticity of a digital communication."
      },
      {
        Term: "Dildo",
        Definition: "No, not that. The red or green \ufffdcandles,\ufffd or vertical lines, on graphs showing cryptocurrency market data."
      },
      {
        Term: "Dip",
        Definition: "A dip is when markets experience a short or protracted downturn."
      },
      {
        Term: "Directed Acyclic Graph (DAG)",
        Definition: "A way of structuring data, often used for data modelling, and increasingly as a consensus tool in cryptocurrencies."
      },
      {
        Term: "Distributed Consensus",
        Definition: "Collective agreement reached among nodes in a network."
      },
      {
        Term: "Distributed Denial of Service (DDoS) Attack",
        Definition: "An attempt by a bad actor to disrupt the operation of an application, server or network by flooding it with traffic."
      },
      {
        Term: "Distributed Ledger",
        Definition: "Distributed ledgers are ledgers in which data is stored across a network of decentralized nodes. A distributed ledger does not necessarily involve a cryptocurrency and may be permissioned and private."
      },
      {
        Term: "Distributed Ledger Technology (DLT)",
        Definition: "A database that is shared by multiple participants, in multiple places. The basis for blockchains."
      },
      {
        Term: "Distributed Network",
        Definition: "A network in which the data and applications are dependent on multiple sources, as opposed to one location."
      },
      {
        Term: "Diversification",
        Definition: "Diversification is a risk-management strategy that mixes a wide variety of investments within a portfolio."
      },
      {
        Term: "Documentation",
        Definition: "Documentation is a part of token economies that stores all the details of an asset on the blockchain."
      },
      {
        Term: "Dolphin",
        Definition: "Someone with a moderate holding of cryptocurrency."
      },
      {
        Term: "Dominance",
        Definition: "A measure of Bitcoin's value in the context of the larger cryptocurrency market."
      },
      {
        Term: "Dorian Nakamoto",
        Definition: "Dorian Nakamoto is a Japanese-American physicist who some believe to be Satoshi Nakamoto."
      },
      {
        Term: "DotSama",
        Definition: "DotSama is a new piece of crypto slang, used to describe the Kusama and Polkadot ecosystems in just one word."
      },
      {
        Term: "Double Spend Attack",
        Definition: "A double-spend attack is a practice in the world of digital currencies where a user gains the ability to spend the same cryptocurrency more than once."
      },
      {
        Term: "Double Spending",
        Definition: "The potential for a digital currency to be spent twice."
      },
      {
        Term: "Dual-Token Economy/Model (Two-Token Economy)",
        Definition: "In the world of blockchain, a dual-token economy or model means a project with two tokens, one of which is used for utility inside the network and the other one as security to raise funds for the crypto project."
      },
      {
        Term: "Dump",
        Definition: "A sudden sell-off of digital assets."
      },
      {
        Term: "Dumping",
        Definition: "A collective market sell-off that occurs when large quantities of a particular cryptocurrency are sold in a short period of time."
      },
      {
        Term: "Dust Transactions",
        Definition: "Miniscule amounts of Bitcoin in a wallet \ufffd with a value that would be outweighed by the cost of a transaction fee."
      },
      {
        Term: "Dusting Attack",
        Definition: "An attack that aims to uncover the identity of a wallet\ufffds owner, information that can subsequently be used in phishing scams."
      },
      {
        Term: "DYCO (Dynamic Coin Offering)",
        Definition: "DYCO (dynamic coin offering) is a new crowdfunding model developed by DAO Maker that employs utility tokens that are backed by USD."
      },
      {
        Term: "DYOR",
        Definition: "The acronym of Do Your Own Research \ufffd encouraging investors to complete due diligence into a project before investing."
      },
      {
        Term: "Economic Utility",
        Definition: "Economic utility is a term in economics that refers to the total satisfaction that a person can derive from consuming a good or service."
      },
      {
        Term: "ELI5",
        Definition: "Short for \ufffdexplain like I\ufffdm five\ufffd \ufffd a plea for simplicity when crypto concepts are being explained."
      },
      {
        Term: "Elliott Waves",
        Definition: "The Elliott Wave Theory is an essential tool for many stock and crypto market traders."
      },
      {
        Term: "EMA (Exponential Moving Average)",
        Definition: "Exponential moving average (EMA) is a technical indicator that highlights the recent price changes and data points of an asset/stock/cryptocurrency while keeping the older chart observations intact."
      },
      {
        Term: "Email Spoofing",
        Definition: "Email spoofing is a technique that is used in order to trick users into thinking that a message actually came from a different person."
      },
      {
        Term: "Emission",
        Definition: "The speed at which new coins are produced and released."
      },
      {
        Term: "Encryption",
        Definition: "Encryption is a method through which information can be made into code."
      },
      {
        Term: "Enterprise Ethereum Alliance (EEA)",
        Definition: "A group of organizations and companies working together to further develop the Ethereum network."
      },
      {
        Term: "Epoch",
        Definition: "One entire run of the training dataset through the algorithm is referred to as an epoch in machine learning."
      },
      {
        Term: "Equity",
        Definition: "Equity is the funds that would be returned to a company's shareholders if all of the company's assets were dissolved and all debts were paid off in the event of liquidation."
      },
      {
        Term: "ERC-1155",
        Definition: "ERC-1155 digital token standard was created by Enjin and offers more security in comparison to older token standards. It can be used to create both fungible and non-fungible assets on the Ethereum network."
      },
      {
        Term: "ERC-20",
        Definition: "Tokens designed and used solely on the Ethereum platform."
      },
      {
        Term: "ERC-223",
        Definition: "ERC-223 is an Ethereum token standard that is powered by smart contracts that enable users to securely transfer tokens to a digital wallet."
      },
      {
        Term: "ERC-721",
        Definition: "A token standard for non-fungible Ethereum tokens."
      },
      {
        Term: "Escrow",
        Definition: "A financial instrument where assets or cash are held by a third party while a buyer and a seller complete a deal."
      },
      {
        Term: "E-Signature",
        Definition: "An electronic signature, or e-signature, is any electronic mark (sign, sound, symbol, etc.) used in the palace of a physical signature in signing a document or contract."
      },
      {
        Term: "Esports",
        Definition: "Electronic sports, commonly known as e-sports, is a term used for digital gaming competition, in which players battle against each other in an individual or team-based format often in a competition or event that offers huge monetary rewards to the winners. Some e-sports games are also available in a single-player mode."
      },
      {
        Term: "Ether",
        Definition: "The form of payment used in the operation of the distribution application platform, Ethereum."
      },
      {
        Term: "Ethereum Improvement Proposal (EIP)",
        Definition: "Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards."
      },
      {
        Term: "Ethereum Transaction",
        Definition: "Ethereum transaction are cryptographically signed instructions to initiate a transaction to update the state of the Ethereum network."
      },
      {
        Term: "Ethereum Virtual Machine (EVM)",
        Definition: "A Turing-complete virtual machine that enables execution of code exactly as intended; it is the runtime environment for every smart contract. Every Ethereum node runs on the EVM to maintain consensus across the blockchain."
      },
      {
        Term: "Exchange",
        Definition: "Businesses that allow customers to trade cryptocurrencies for fiat money or other cryptocurrencies."
      },
      {
        Term: "Exchange Traded Fund (ETF)",
        Definition: "A security that tracks a basket of assets such as stocks, bonds, and cryptocurrencies but can be traded like a single stock."
      },
      {
        Term: "Exit Scam",
        Definition: "An exit scam is a trick where projects disappear (or shut down) after accumulating investors\ufffd money. In other industries, this event occurs when a business stops shipping orders even if it is receiving payment for the new ones."
      },
      {
        Term: "Falling Knife",
        Definition: "A falling knife refers to the price dive of an asset and denotes a downward momentum of the financial market."
      },
      {
        Term: "Fan Token",
        Definition: "A fan token is a cryptocurrency issued by a specific sports team and allows its holders to participate in the governing activities and attain exclusive rewards & discounts."
      },
      {
        Term: "FATF Travel Rule",
        Definition: "The FATF Travel Rule requires virtual asset service providers to regulate information sharing for certain large transactions."
      },
      {
        Term: "Faucet",
        Definition: "A cryptocurrency reward system usually on a website or app, that rewards users for completing certain tasks."
      },
      {
        Term: "Fiat",
        Definition: "Fiat currency is \ufffdlegal tender\ufffd backed by a central government, such as the Federal Reserve, and with its own banking system, such as fractional reserve banking. It can take the form of physical cash, or it can be represented electronically, such as with bank credit."
      },
      {
        Term: "Fiat On-Ramp",
        Definition: "A fiat-on ramp is a way to get cryptocurrency from fiat, or regular money."
      },
      {
        Term: "Fiat-Pegged Cryptocurrency",
        Definition: "A coin, token or asset issued on a blockchain that is linked to a government or bank-issued currency."
      },
      {
        Term: "Fibonacci Retracement",
        Definition: "The Fibonacci retracement method uses a set of key numbers called Fibonacci ratios to identify the support and resistance levels of an asset/stock/cryptocurrency."
      },
      {
        Term: "Financial Action Task Force (FATF)",
        Definition: "The FATF is a global organization that sets global standards to combat money laundering and terrorist financing (AML/CFT)."
      },
      {
        Term: "Financial Crime Enforcement Network (FinCEN)",
        Definition: "The Financial Crimes Enforcement Network (FinCEN) is a federal regulatory bureau of the United States Treasury."
      },
      {
        Term: "Financial Transactions and Reports Analysis Centre (FINTRAC)",
        Definition: "The Financial Transactions and Reports Analysis Centre (FINTRAC) of Canada is the nation\ufffds financial intelligence agency."
      },
      {
        Term: "First In, First Out",
        Definition: "First in, First Out (FIFO) is an inventory method used to specify your cost-basis when calculating your taxes."
      },
      {
        Term: "Fish",
        Definition: "Someone who has a small crypto investment."
      },
      {
        Term: "Flash Crash",
        Definition: "A flash crash is a market condition where an asset\ufffds price falls very rapidly within a very brief time interval."
      },
      {
        Term: "Flash Loan",
        Definition: "A flash loan is a transaction in which a specific quantity of liquidity is borrowed and repaid in the same transaction or block."
      },
      {
        Term: "Flash Loan Attack",
        Definition: "Flash loan attacks are when malicious actors exploit a smart contract."
      },
      {
        Term: "Flash Loans",
        Definition: "Flash loans are a type of uncollateralized lending used in decentralized finance (DeFi)."
      },
      {
        Term: "Flippening",
        Definition: "A hypothetical scenario where Ethereum's market cap overtakes Bitcoin's."
      },
      {
        Term: "Flipping",
        Definition: "An investment strategy where you buy something with the goal of reselling for a profit later, usually in a short period of time."
      },
      {
        Term: "FOMO",
        Definition: "An acronym that stands for \"Fear of Missing Out.\""
      },
      {
        Term: "Fork (Blockchain)",
        Definition: "Forks, or chain splits, create an alternate version of the blockchain, leaving two blockchains to run simultaneously."
      },
      {
        Term: "Fork (Software)",
        Definition: "When an entirely new program has been developed from source code, taken from an open source software."
      },
      {
        Term: "Fractional Stablecoins",
        Definition: "A fractional stablecoin is one that is backed in two ways: collaterally-backed and algorithmically modified."
      },
      {
        Term: "Fraud Proof",
        Definition: "A fraud proof is a technological method that functions as a bond in a decentralized environment that uses Optimistic Rollups (ORs), which are sidechains that aim to reduce the costs and latency that dApps might encounter on a blockchain platform."
      },
      {
        Term: "Front Running",
        Definition: "Front running is when you place a transaction in a queue when you have knowledge of a future transaction."
      },
      {
        Term: "FUD [2021]",
        Definition: "An acronym that stands for \ufffdFear, Uncertainty and Doubt.\ufffd It is a strategy to influence perception of certain cryptocurrencies or the cryptocurrency market in general by spreading negative, misleading or false information. *see FUDster."
      },
      {
        Term: "FUDster",
        Definition: "Someone that is spreading FUD."
      },
      {
        Term: "Full Node",
        Definition: "Nodes that download a blockchain\ufffds entire history in order to observe and enforce its rules."
      },
      {
        Term: "Fundamental Analysis (FA)",
        Definition: "A method in which you research the underlying value of an asset by looking at the technology, team, growth prospects and other indicators. Some people perform fundamental analysis as part of an investment strategy called \ufffdvalue investing.\ufffd"
      },
      {
        Term: "Funding Payments",
        Definition: "Funding payments are periodic payments between traders. These are designed to reduce the discrepancy between the perpetual market price and the spot market price."
      },
      {
        Term: "Fungible",
        Definition: "In cryptocurrency, fungibility is when a coin or token can be replaced by any other identical coin or token."
      },
      {
        Term: "Futures",
        Definition: "A futures contract is a standardized legal agreement to buy or sell a particular commodity or asset at a predetermined price at a specified time in the future."
      },
      {
        Term: "Gains",
        Definition: "Gains refer to an increase in value or profit."
      },
      {
        Term: "GameFi",
        Definition: "GameFi, better known as play-to-earn (P2E) games, is a rather new term in the field of both gaming and cryptocurrency industries. It references games that are designed with economic and financial aspects of blockchain and cryptocurrencies, enabling players to exert full control over their in-game assets to generate revenue."
      },
      {
        Term: "Gas",
        Definition: "A term used on the Ethereum platform that refers to a unit of measuring the computational effort of conducting transactions or smart contracts, or launch DApps in the Ethereum network. It is the \ufffdfuel\ufffd of the Ethereum network. *see Gas Limit and Gas Price."
      },
      {
        Term: "Gas Limit",
        Definition: "A term used on the Ethereum platform that refers to the maximum amount of gas the user is willing to spend on a transaction."
      },
      {
        Term: "Gas Price",
        Definition: "A term used on the Ethereum platform that refers to the price you are willing to pay for a transaction."
      },
      {
        Term: "Gavin Wood",
        Definition: "Gavin Wood is the co-founder of Parity Technologies, and one of the founders of Ethereum."
      },
      {
        Term: "Gems",
        Definition: "Gem is a term for relatively unknown low-cap coins that have immense potential or are grossly undervalued."
      },
      {
        Term: "Genesis Block",
        Definition: "The first block of data that is processed and validated to form a new blockchain, often referred to as block 0 or block 1."
      },
      {
        Term: "Geotagged NFT",
        Definition: "Geotagged non-fungible tokens (NFT) feature 3D versions of the street art alongside the corresponding geo-location. They allows art aficionados to own both the virtual and physical artwork without the need to remove the actual infrastructure it was originally painted on."
      },
      {
        Term: "Geth",
        Definition: "Geth, short for Go Ethereum, is a command-line interface that allows developers to run full Ethereum nodes, mine the cryptocurrency and execute smart contracts."
      },
      {
        Term: "GitHub",
        Definition: "GitHub is one of the most popular code hosting platforms, allowing developers to collaborate on various projects."
      },
      {
        Term: "Gold-Backed Cryptocurrency",
        Definition: "A coin or token issued that represents a value of gold; for example, one physical gram of gold equals one coin."
      },
      {
        Term: "Golden Cross",
        Definition: "A golden cross is a bullish technical trading indicator that emerges when the 50-day moving average crosses the 200-day moving average, signaling an imminent price rise of the asset/stock/cryptocurrency."
      },
      {
        Term: "Google Authenticator",
        Definition: "Google Authenticator is a software-based verification system that generates unique one-time codes that are time-based on your mobile phone."
      },
      {
        Term: "Governance",
        Definition: "In the world of cryptocurrencies, governance is defined as the people or organizations that have decision-making powers regarding the project."
      },
      {
        Term: "Governance Token",
        Definition: "A governance token is a token that can be used to vote on decisions that influence an ecosystem."
      },
      {
        Term: "Graphical Processing Unit (GPU)",
        Definition: "More commonly known as a graphics card, it is a computer chip that creates 3D images on computers, but has turned out to be efficient for mining cryptocurrencies."
      },
      {
        Term: "Group Mining",
        Definition: "As opposed to solo mining, group mining is when multiple people mine together."
      },
      {
        Term: "Gwei",
        Definition: "The denomination used in defining the cost of gas in transactions involving Ether."
      },
      {
        Term: "Hacking",
        Definition: "Hacking is the process of using a computer to manipulate another computer or computer system in an unauthorized fashion."
      },
      {
        Term: "Hal Finney",
        Definition: "Hal Finney was a cryptographer and programmer who pioneered Bitcoin\ufffds development and worked with Satoshi Nakamoto."
      },
      {
        Term: "Halving",
        Definition: "An event in which the total rewards per confirmed block halves."
      },
      {
        Term: "Hard Cap",
        Definition: "A hard cap is the absolute maximum supply of a digital asset."
      },
      {
        Term: "Hard Fork (Blockchain)",
        Definition: "A type of protocol change that validates all previously invalid transactions, and invalidates all previously valid transactions."
      },
      {
        Term: "Hardware Security Module",
        Definition: "A hardware security module is a type of computing device that secures digital keys and encrypts data."
      },
      {
        Term: "Hardware Wallet",
        Definition: "A hardware wallet is a wallet for cryptocurrencies that usually resemble a USB stick."
      },
      {
        Term: "Hash",
        Definition: "A hash is the output result of a hashing algorithm, which creates a unique, fixed-length string to encrypt and secure a certain selection of arbitrary data."
      },
      {
        Term: "Hash Function",
        Definition: "Any function used to map data of arbitrary size to data of a fixed size. *see Cryptographic Hash Function."
      },
      {
        Term: "Hash Power / Hash Rate",
        Definition: "A unit of measurement for the amount of computing power being consumed by the network to continuously operate."
      },
      {
        Term: "Hidden Cap",
        Definition: "Hidden cap is an unknown limit to the amount of money a team elects to receive from investors in its initial coin offering (ICO). The purpose of a hidden cap is to even the playing field by letting smaller investors put in money, without the large investors forming an accurate understanding of the total cap and adjusting their investment as a result."
      },
      {
        Term: "Hierarchical Deterministic Wallet (HD Wallet)",
        Definition: "A wallet that uses Hierarchical Deterministic (HD) protocol to support the generation of crypto-wallets from a single master seed using 12 mnemonic phrases. *see Deterministic Wallet."
      },
      {
        Term: "HODL",
        Definition: "A type of passive investment strategy where you hold an investment for a long period of time, regardless of any changes in the price or markets. The term first became famous due to a typo made in a Bitcoin forum, and the term is now commonly expanded to stand for \ufffdHold On for Dear Life.\ufffd"
      },
      {
        Term: "Honeyminer",
        Definition: "Honeyminer is a cryptocurrency mining app available for download on multiple devices."
      },
      {
        Term: "Hosted Wallet",
        Definition: "A wallet managed by a third-party service."
      },
      {
        Term: "Hot Storage",
        Definition: "The online storage of private keys allowing for quicker access to cryptocurrencies. *see Cold Storage."
      },
      {
        Term: "Hot Wallet",
        Definition: "A cryptocurrency wallet that is connected to the internet for hot storage of cryptoassets, as opposed to an offline, cold wallet with cold storage. *See Cold Wallet."
      },
      {
        Term: "Howey Test",
        Definition: "A test used to determine whether or not an asset is a security."
      },
      {
        Term: "Hybrid PoW/PoS",
        Definition: "A hybrid PoW/PoS allows for both proof-of-stake and proof-of-work as consensus distribution algorithms on the network. This approach aims to bring together the security of PoW consensus and the governance and energy efficiency of PoS."
      },
      {
        Term: "Hyperledger (Hyperledger Foundation)",
        Definition: "Hyperledger is an umbrella project of open source blockchains and blockchain-related tools started by the Linux Foundation in 2015 to support the collaborative development of blockchain-based distributed ledgers."
      },
      {
        Term: "Immutable",
        Definition: "A property that defines the inability to be changed, especially over time."
      },
      {
        Term: "Impermanent Loss",
        Definition: "Impermanent loss is when a liquidity provider has a temporary loss of funds because of volatility in a trading pair."
      },
      {
        Term: "Infinite Approval",
        Definition: "Pre-approving smart contracts to enable the platform to spend any amount of your coins."
      },
      {
        Term: "Infinite Mint Attack",
        Definition: "An infinite mint attack occurs when an unwanted entity or hacker mints an absurd (\"infinite\") amount of tokens within a protocol."
      },
      {
        Term: "Inflation",
        Definition: "A general increase in prices and fall in the purchasing value of money."
      },
      {
        Term: "Initial Bounty Offering (IBO)",
        Definition: "A novel way of launching a project that focuses on people contributing skills to a platform rather than money."
      },
      {
        Term: "Initial Coin Offering (ICO)",
        Definition: "Short for Initial Coin Offering, an ICO is a type of crowdfunding, or crowdsale, using cryptocurrencies as a means of raising capital for early-stage companies."
      },
      {
        Term: "Initial Dex Offering",
        Definition: "An initial dex offering (IDX) is an alternative to an initial coin offering (ICO)."
      },
      {
        Term: "Initial Exchange Offering",
        Definition: "A type of crowdfunding where crypto start-ups generate capital by listing through an exchange."
      },
      {
        Term: "Initial Farm Offering (IFO)",
        Definition: "Initial Farm Offering (IFO) helps DeFi projects raise capital through the farming feature offered by decentralized exchanges."
      },
      {
        Term: "Initial Game Offering (IGO)",
        Definition: "Initial game offerings (IGOs) provide individuals with an opportunity to invest in gaming projects at an early stage that have the potential to offer huge returns after their launch."
      },
      {
        Term: "Initial Public Offering (IPO)",
        Definition: "An initial public offering (IPO) is the process of a company offering shares for purchase on the stock market for the first time."
      },
      {
        Term: "Initial Token Offering (ITO)",
        Definition: "ITOs are similar to initial coin offerings \ufffd but have more of a focus on offering tokens with intrinsic utility in the form of software or usage in an ecosystem."
      },
      {
        Term: "Insider Trading",
        Definition: "Insider trading happens when someone purchases or sells stocks while possessing private, material information about that stock."
      },
      {
        Term: "Instamine",
        Definition: "When a large portion of a coin\ufffds total supply is distributed to investors shortly after launch."
      },
      {
        Term: "Instant Settlement Network Layer",
        Definition: "Instant settlement network allows participants to exchange digital assets in real-time from anywhere in the world."
      },
      {
        Term: "Institutional Investor",
        Definition: "An Institutional Investor is an organization or a legal entity that trades in the market on behalf of its clients that may be retail investors."
      },
      {
        Term: "Insurance Fund",
        Definition: "An exchange insurance fund is used to cover any unexpected losses from leveraged trading. This fund is used to prevent traders from bankruptcy in the event of liquidations."
      },
      {
        Term: "Intercontinental Exchange (ICE)",
        Definition: "The Intercontinental Exchange (ICE) is an American company founded in 2000 to purchase and operate global exchanges and clearing houses."
      },
      {
        Term: "Interest Rates",
        Definition: "A time-dependent charge or return made in proportion to the amount of money deposited, borrowed or lent."
      },
      {
        Term: "Intermediary/Middleman",
        Definition: "A person or entity that acts as the go-between different parties to bring about agreements or carry out directives."
      },
      {
        Term: "Internet of Things",
        Definition: "Internet of Things (IoT) is a global interconnected network of devices, sensors and software that can collect and exchange data with each other in real-time over the Internet."
      },
      {
        Term: "Internet Service Provider (ISP)",
        Definition: "Internet Service Providers (ISPs) are commercial entities that provide end-users with access to the internet."
      },
      {
        Term: "Interoperability",
        Definition: "Blockchain interoperability, or cross-chain interoperability, is the ability to see and share information across multiple blockchains."
      },
      {
        Term: "InterPlanetary File System (IPFS)",
        Definition: "The InterPlatery File System is a peer-to-peer, distributed system for storing and accessing files, as well as websites and applications, which relies on content addressing rather than location."
      },
      {
        Term: "In-the-Money / Out-of-the-Money",
        Definition: "In-the-money and out-of-the-money are options trading mechanisms that allow investors to benefit from additional tools to work with the market."
      },
      {
        Term: "Intrinsic Value",
        Definition: "The intrinsic value of an asset depicts the asset\ufffds actual worth based on a complex financial calculation rather than its current price."
      },
      {
        Term: "Invest",
        Definition: "Investing is when you put money in a financial scheme with the intent of making a gain."
      },
      {
        Term: "Investment Vehicles (Crypto-tied)",
        Definition: "Investment vehicles are the assets (classes) in which investors put their money with hopes to increase the value of their portfolio in the future."
      },
      {
        Term: "IOU",
        Definition: "An IOU, acronym for \ufffdI owe you,\ufffd is a document stating that one party owes a debt to another party."
      },
      {
        Term: "IP Address",
        Definition: "IP addresses are unique numeric addresses assigned to devices connected to the internet or a local network."
      },
      {
        Term: "Java",
        Definition: "Java is a general-purpose, class-based as well as object-oriented programming language."
      },
      {
        Term: "JavaScript",
        Definition: "JavaScript is a powerful, dynamic, lightweight, and advanced programming language. It is mostly used in web-based applications."
      },
      {
        Term: "JOMO",
        Definition: "The opposite state of JOMO stands for \ufffdJoy of Missing Out.\ufffd"
      },
      {
        Term: "Keylogger",
        Definition: "A keylogger or keystroke logging software is a spying tool often used by hackers to record keystrokes made by users."
      },
      {
        Term: "Kimchi Premium",
        Definition: "Kimchi premium is a phenomenon occurring in South Korean crypto exchanges, making valuations appear higher than on other international exchanges."
      },
      {
        Term: "Klinger Oscillator",
        Definition: "The Klinger volume oscillator is a volume-based technical indicator that compares volume to price to forecast price reversals in the financial markets."
      },
      {
        Term: "Know Your Customer (KYC)",
        Definition: "Short for Know Your Customer, these are checks that crypto exchanges and trading platforms must complete to verify the identity of their customers."
      },
      {
        Term: "Lambo",
        Definition: "Slang for the type of car that many crypto enthusiasts aspire to buy when their digital assets \ufffdmoon\ufffd \ufffd or rise in value substantially."
      },
      {
        Term: "Laser Eyes",
        Definition: "Laser eyes is a viral Twitter meme that is used by Bitcoiners who attempt to push the price of BTC to its new all-time highs. It was originated with a hashtag, #LaserRayUntil100, back in February 2021."
      },
      {
        Term: "Layer 0",
        Definition: "Layer 0 is a network framework running beneath the blockchain. It is made up of protocols, connections, hardware, miners, and everything else that forms the foundation of the blockchain ecosystem."
      },
      {
        Term: "Layer 2",
        Definition: "Layer 2 is the name given to a scaling solution that enables high throughput of transactions whilst fully inheriting the security of the underlying blockchain that it is built on.\ufffd"
      },
      {
        Term: "Layer-1 Blockchain",
        Definition: "A layer-1 blockchain is a set of solutions that improve the base protocol itself"
      },
      {
        Term: "Ledger",
        Definition: "A record of financial transactions that cannot be changed, only appended with new transactions."
      },
      {
        Term: "Leverage",
        Definition: "Money that a trader borrows from a brokerage, enabling them to gain far greater exposure to a position than what their capital allows."
      },
      {
        Term: "Leveraged Tokens",
        Definition: "In the world of cryptocurrencies, leveraged tokens give you a leveraged position in trading, meaning that your earnings and losses are multiplied."
      },
      {
        Term: "Light Node",
        Definition: "Light nodes are typically downloaded wallets and are connected to full nodes to further validate the information that is stored on the blockchain."
      },
      {
        Term: "Lightning Network",
        Definition: "A second-layer protocol that is designed to solve Bitcoin\ufffds scalability problem by allowing transactions to be processed more quickly."
      },
      {
        Term: "Limit Order",
        Definition: "A limit order is a type of order to purchase or sell a security at a specified price or a better one.\ufffd"
      },
      {
        Term: "Limit Order/Limit Buy/Limit Sell",
        Definition: "Tools that enable traders to automatically buy or sell cryptocurrencies on a trading platform when a certain price target is reached."
      },
      {
        Term: "Liquidation",
        Definition: "Liquidation refers to the conversion of an asset or cryptocurrency for fiat or its equivalents."
      },
      {
        Term: "Liquidity",
        Definition: "How easily a cryptocurrency can be bought and sold without impacting the overall market price."
      },
      {
        Term: "Liquidity Bootstrapping Pool (LBP)",
        Definition: "A liquidity bootstrapping pool is essentially a contract that manages a core pool containing tokens to be used on an exchange."
      },
      {
        Term: "Liquidity Pool",
        Definition: "Liquidity pools are crypto assets that are kept to facilitate the trading of trading pairs on decentralized exchanges."
      },
      {
        Term: "Liquidity Provider",
        Definition: "Liquidity providers are decentralized exchange users who fund a liquidity pool with tokens they own."
      },
      {
        Term: "Liquidity Provider Tokens (LP Tokens)",
        Definition: "Liquidity provider tokens or LP tokens are tokens issued to liquidity providers on a decentralized exchange (DEX) that run on an automated market maker (AMM) protocol."
      },
      {
        Term: "Liveness",
        Definition: "A guarantee that a system will continue to provide data, and that no centralized authority can shut down its services."
      },
      {
        Term: "Location Swap",
        Definition: "Location swap allows the change of claim to the assets manifested in the form of a token with no effect on other attributes."
      },
      {
        Term: "Long",
        Definition: "A situation where you buy a cryptocurrency with the expectation of selling it at a higher price for profit later."
      },
      {
        Term: "Longing (Long Position)",
        Definition: "A long position (longing) refers to the situation where an investor buys a cryptocurrency or any other financial instrument to sell it later when the price goes high."
      },
      {
        Term: "Mainnet",
        Definition: "An independent blockchain running its own network with its own technology and protocol."
      },
      {
        Term: "Mainnet Swap",
        Definition: "Mainnet swap refers to the shift of a cryptocurrency project from one blockchain network to another (which in most cases is its own native blockchain network)."
      },
      {
        Term: "Malware",
        Definition: "Malware or malicious software refers to harmful programs utilized by bad actors to illegally access and/or compromise a computer, network or server."
      },
      {
        Term: "Man-in-the-Middle Attack (MITM)",
        Definition: "a man-in-the-middle attack (MITM) attack is a general term for a cyberattack where a perpetrator positions himself in a conversation between two parties either to secretly eavesdrop."
      },
      {
        Term: "Margin Call",
        Definition: "When an investor\ufffds account value falls below the margin maintenance amount."
      },
      {
        Term: "Margin Trading",
        Definition: "A practice where a trader uses borrowed funds from a broker to trade a cryptocurrency."
      },
      {
        Term: "Market",
        Definition: "An area or arena, online or offline, in which commercial dealings are conducted."
      },
      {
        Term: "Market Capitalization/Market Cap/MCAP",
        Definition: "Total capitalization of a cryptocurrency\ufffds price. It is one of the ways to rank the relative size of a cryptocurrency. *see Circulating Supply."
      },
      {
        Term: "Market Maker, Market Taker",
        Definition: "The maker places an order (to buy or sell at a quoted price), while a taker accepts that placed order (to execute the buy or sell at the quoted price)"
      },
      {
        Term: "Market Order/Market Buy/Market Sell",
        Definition: "A purchase or sale of a cryptocurrency on an exchange at the current best available price."
      },
      {
        Term: "Market Signal",
        Definition: "Through signaling, market participants\ufffdare essentially creating a volatile market which can help to point out the opportunities to the investors."
      },
      {
        Term: "Masternodes",
        Definition: "Masternodes are a server maintained by its owner, somewhat like full nodes, but with additional functionalities such as anonymizing transactions, clearing transactions, and participating in governance and voting. It was initially popularized by Dash to reward owners of these servers for maintaining a service for the blockchain."
      },
      {
        Term: "Max Supply",
        Definition: "The best approximation of the maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. *see Circulating Supply and Total Supply."
      },
      {
        Term: "Medium of Exchange",
        Definition: "A medium of exchange can be seen as an intermediary instrument or system that is used to facilitate a sale, purchase or even trade of goods between parties.\ufffd"
      },
      {
        Term: "Mempool",
        Definition: "A mempool is the node's collection of all of the unconfirmed transactions that it has seen."
      },
      {
        Term: "Merkle Tree",
        Definition: "A tree structure in cryptography, in which every leaf node is labelled with the hash of a data block and every non-leaf node is labelled with the cryptographic hash of the labels of its child nodes. Hash trees allow efficient and secure verification of the contents of blockchains, as each change propagates upwards so verification can be done by simply looking at the top hash."
      },
      {
        Term: "MetaMask",
        Definition: "An online digital wallet that allows users to manage, transfer and receive Ethereum, operating as an extension to a regular browser."
      },
      {
        Term: "Metaverse",
        Definition: "A metaverse is a digital universe that contains all the aspects of the real world, such as real-time interactions and economies. It offers a unique experience to end-users."
      },
      {
        Term: "MicroBitcoin (uBTC)",
        Definition: "One millionth of a bitcoin or 0.000001 of a bitcoin. Often confused as a fork of Bitcoin."
      },
      {
        Term: "Micropayment",
        Definition: "A micropayment is essentially a small transaction that is carried out online and can be as small as a fraction of a cent."
      },
      {
        Term: "Microtransaction",
        Definition: "A business model where very small payments can be made in exchange for common digital goods and services, such as pages of an ebook or items in a game."
      },
      {
        Term: "Mineable",
        Definition: "Some cryptocurrencies have a system through which miners can be rewarded with newly-created cryptocurrencies for creating blocks through contributing their hash power. Cryptocurrencies with this ability to generate new cryptocurrencies through the process of confirmation is said to be mineable. * Not Mineable Some cryptocurrencies are generated only through other mechanisms, such as annual inflation through staking. These cryptocurrencies are said to be not mineable."
      },
      {
        Term: "Minecraft",
        Definition: "Minecraft is a video game where players can essentially create and break apart different kinds of blocks in a three-dimensional world."
      },
      {
        Term: "Miner Extractable Value (MEV)",
        Definition: "Miner extractable value (MEV) is a measure of the profit a miner can make through their ability to arbitrarily include, exclude, or re-order transactions within the blocks they produce.\ufffd"
      },
      {
        Term: "Miners",
        Definition: "Contributors to a blockchain taking part in the process of mining. They can be professional miners or organizations with large-scale operations, or hobbyists who set up mining rigs at home or in the office."
      },
      {
        Term: "Minimum Viable Product (MVP)",
        Definition: "A minimum viable product (MVP) is a product that has enough features to attract early-adopter customers and validate a product idea."
      },
      {
        Term: "Mining",
        Definition: "A process where blocks are added to a blockchain, verifying transactions. It is also the process through which new bitcoin or some altcoins are created."
      },
      {
        Term: "Mining Contract",
        Definition: "Another term for cloud mining, where users can rent or invest in mining capacity online."
      },
      {
        Term: "Mining Difficulty",
        Definition: "The mining difficulty of a cryptocurrency is how difficult it is to find the right hash for the next block."
      },
      {
        Term: "Mining Farm",
        Definition: "A mining farm is when a group of miners mine together for a variety of advantageous reasons, like energy use."
      },
      {
        Term: "Mining Pool",
        Definition: "An arrangement where a number of miners pool their resources to increase their chances of finding the next block."
      },
      {
        Term: "Mining Reward",
        Definition: "The income that miners receive after finding and validating a block."
      },
      {
        Term: "Mining Rewards",
        Definition: "Mining rewards are the rewards that crypto miners receive for mining a new block on the blockchain."
      },
      {
        Term: "Mining Rig",
        Definition: "Equipment that is used for mining cryptocurrencies."
      },
      {
        Term: "Minnow",
        Definition: "An alternative term to Fish, describing someone with a small crypto investment."
      },
      {
        Term: "Mnemonic Phrase",
        Definition: "A list of words used in sequence to access or restore your crypto assets."
      },
      {
        Term: "Mnemonics",
        Definition: "Mnemonics are memory aids with a system such as letters or associations that help in recall. *see Mnemonic Phrase."
      },
      {
        Term: "Mobile Wallet",
        Definition: "A mobile wallet is a crypto wallet installed on a mobile device."
      },
      {
        Term: "Monetary Policy",
        Definition: "Monetary policy can be defined as a set of rules that a country\ufffds central bank makes to control the supply of money."
      },
      {
        Term: "Money Flow Index (MFI)",
        Definition: "The Money Flow Index (MFI) is a technical indicator that measures the buying or selling pressure of an asset through price and volume."
      },
      {
        Term: "Money Laundering",
        Definition: "Money laundering is a technique used for illegal businesses to hide their money from the authorities."
      },
      {
        Term: "Money Transmitter/Money Transfer License",
        Definition: "A business entity that provides money transfer services or payment instruments."
      },
      {
        Term: "Moon",
        Definition: "A situation where there is a continuous upward movement in the price of a cryptocurrency. Often used in communities to question when a cryptocurrency will experience such a phenomenon, saying \ufffdWhen moon?\ufffd It is usually combined with \ufffdWhen Lambo?\ufffd"
      },
      {
        Term: "Moore's Law",
        Definition: "Moore's Law states that computers' speed and capability will increase every year, even as cost goes down."
      },
      {
        Term: "Moving Average (MA)",
        Definition: "Moving Average (MA) is a technical indicator that reacts to the trends of the financial markets and is used by market experts to predict the direction of an asset's trend."
      },
      {
        Term: "Moving Average Convergence Divergence (MACD)",
        Definition: "A technical analysis method."
      },
      {
        Term: "Mt. Gox",
        Definition: "A crypto exchange for buying and selling Bitcoin that closed in 2014 after a major hack."
      },
      {
        Term: "Multi-Coin Wallet",
        Definition: "A multi-coin wallet, also known as a multi-chain wallet, allows users to keep more than one crypto asset belonging to multiple blockchain networks."
      },
      {
        Term: "Multi-Party Computation",
        Definition: "Multi-party computation (MPC) is a cryptographic mechanism that distributes computation operations across several parties where no singular entity can see the other parties\ufffd data."
      },
      {
        Term: "Multisignature",
        Definition: "Multisignature crypto wallets require more than a single signature to sign a transaction."
      },
      {
        Term: "Multi-Signature (Multi-Sig)",
        Definition: "An added layer of security by requiring more than one key to authorize a transaction."
      },
      {
        Term: "Negative Volume Index (NVI)",
        Definition: "The negative volume index (NVI) is a powerful technical indicator that shows how price is being influenced by low-volume timeframes."
      },
      {
        Term: "Network",
        Definition: "A network refers to all nodes in the operation of a blockchain at any given moment in time."
      },
      {
        Term: "Newb",
        Definition: "A newb is someone that is new to a certain industry."
      },
      {
        Term: "Nick Szabo",
        Definition: "Nick Szabo is the inventor of Bit Gold and the use of smart contracts."
      },
      {
        Term: "Nifty Gateway",
        Definition: "Nifty Gateway is an NFT platform owned by the Winklevoss twins."
      },
      {
        Term: "No-Coiner",
        Definition: "A no-coiner is someone who has no cryptocurrency in his or her investment portfolio and firmly believes that cryptocurrency in general will fail."
      },
      {
        Term: "Node",
        Definition: "The most basic unit of blockchain infrastructure that stores data."
      },
      {
        Term: "Nominators",
        Definition: "Nominators are one of two main actors who are involved in a blockchain network that uses the nominated proof-of-stake (NPoS) consensus algorithm."
      },
      {
        Term: "Nonce",
        Definition: "When a transaction is hashed by a miner, an arbitrary number meant to be used only once is generated, called a nonce."
      },
      {
        Term: "Non-Custodial",
        Definition: "Usually referring to the storage of keys, in relation to wallets or exchanges, a non-custodial setup is one in which private keys are held by the user directly."
      },
      {
        Term: "Non-Fungible Token",
        Definition: "Non-fungible tokens (NFTs) are cryptocurrencies that do not possess the property of fungibility."
      },
      {
        Term: "Notarization on Blockchain",
        Definition: "Notarization on blockchain simply uses the intrinsic nature and advantages of blockchain technology to let anyone create a timestamped artifact. The authorship and identity of this artifact can easily and securely be identified at any point."
      },
      {
        Term: "Office of the Comptroller of the Currency (OCC)",
        Definition: "The Office of the Comptroller (OCC) is a U.S. Treasury branch that regulates all national banks, federal savings associations, federal branches and foreign bank agencies"
      },
      {
        Term: "Off-Ledger Currency",
        Definition: "A currency that is created (minted) outside of the specified blockchain ledger but is accepted or used."
      },
      {
        Term: "Offline Storage",
        Definition: "The act of storing cryptocurrencies in devices or systems not connected to the internet."
      },
      {
        Term: "On-Balance Volume (OBV)",
        Definition: "On-balance volume (OBV) is a technical trading indicator that forecasts an asset's price movements based on the volume flow."
      },
      {
        Term: "On-Chain",
        Definition: "Transactions that are recorded on the blockchain itself and shared with all of the participants are done on-chain."
      },
      {
        Term: "One Cancels the Other Order (OCO)",
        Definition: "A situation where two orders for cryptocurrency are placed simultaneously, with a rule in place to enforce that if one is accepted, the other is cancelled."
      },
      {
        Term: "On-Ledger Currency",
        Definition: "A currency that is both minted on the blockchain ledger and also used on the blockchain ledger, such as Bitcoin."
      },
      {
        Term: "Online Storage",
        Definition: "The act of storing cryptocurrencies in devices or systems connected to the internet."
      },
      {
        Term: "Open Source",
        Definition: "Open source is a philosophy, with participants believing in the free and open sharing of information in pursuit of the greater common good."
      },
      {
        Term: "Open/Close",
        Definition: "The price at which a cryptocurrency opens at a time period or the programming principle of software parts being extendable."
      },
      {
        Term: "OpenSea [2021]",
        Definition: "OpenSea is a decentralized P2P platform for NFTs."
      },
      {
        Term: "Optimistic Rollup",
        Definition: "An optimistic rollup is a type layer 2 scaling solution that relies on off-chain computation to trustlessly record transactions that happen in the layer 2."
      },
      {
        Term: "Option",
        Definition: "A contract giving the buyer the right, but not the obligation, to buy or sell an underlying asset or instrument at a specified strike price."
      },
      {
        Term: "Options Market",
        Definition: "A public market for options, giving the buyer an option to buy or sell a cryptocurrency at a specific strike price, on or before a specific date."
      },
      {
        Term: "Oracle Manipulation",
        Definition: "Oracle manipulation is when an oracle smart contract is manipulated by hackers."
      },
      {
        Term: "Oracles",
        Definition: "An agent that finds and verifies information, bridging the real world and the blockchain by providing data to smart contracts for execution of said contracts under specified conditions."
      },
      {
        Term: "Order Book",
        Definition: "An order book comprises different key information regarding an asset."
      },
      {
        Term: "Orphan",
        Definition: "A valid block on the blockchain that is not part of the main chain."
      },
      {
        Term: "Orphaned Block",
        Definition: "An orphaned block is a block where the parent block does not exist or is unknown."
      },
      {
        Term: "Overbought",
        Definition: "When a cryptocurrency has been purchased by more and more investors over time, with its price increasing for an extended period of time."
      },
      {
        Term: "Over-Collateralization",
        Definition: "Over-collateralization (OC) is the provision of collateral that is worth more than enough to cover potential losses in cases of default."
      },
      {
        Term: "Oversold",
        Definition: "When a cryptocurrency has been sold by more and more investors over time, with its price decreasing for an extended period of time."
      },
      {
        Term: "Over-the-Counter (OTC)",
        Definition: "Over-the-counter is defined as a transaction made outside of an exchange, often peer-to-peer through private trades."
      },
      {
        Term: "Over-the-Counter (OTC) Trading",
        Definition: "Over-the-counter refers to the process of how securities are traded through a broker-dealer network as opposed to a centralized exchange."
      },
      {
        Term: "Pair",
        Definition: "Trade between one cryptocurrency and another, for example, the trading pair BTC/ETH."
      },
      {
        Term: "Paper Trading",
        Definition: "Paper trading or simulated trading is the practice of using a virtual transactional environment to simulate trading without the use of real capital."
      },
      {
        Term: "Paper Wallet",
        Definition: "A physical document containing your private key or seed phrase."
      },
      {
        Term: "Parachain",
        Definition: "Parachains are application-specific data structures that run in parallel to each other within Polkadot."
      },
      {
        Term: "Passive Income",
        Definition: "Passive income is money produced from investments that do not require the earner to be actively involved."
      },
      {
        Term: "Password Manager",
        Definition: "A password manager is a tool or software that stores all sorts of passwords needed for online applications and services."
      },
      {
        Term: "Paul Le Roux",
        Definition: "Paul Le Roux is a criminal kingpin that many believe could be the founder of Bitcoin, Satoshi Nakamoto."
      },
      {
        Term: "Payee",
        Definition: "A payee is a party within an exchange of goods or even services that can receive payment."
      },
      {
        Term: "Peer-to-Peer (P2P)",
        Definition: "The decentralized interactions between parties in a distributed network, partitioning tasks or workloads between peers."
      },
      {
        Term: "Peer-to-Peer (P2P) Lending",
        Definition: "Crypto P2P lending refers to a practice of lending assets without the involvement of a middleman. Such loans rely on collateral material originally owned by borrowers."
      },
      {
        Term: "Peg",
        Definition: "A \ufffdpeg\ufffd is a specified price for the rate of exchange between two assets."
      },
      {
        Term: "Pegged Currency",
        Definition: "A stablecoin is a currency whose value is pegged to a real-world asset, such as a fiat currency."
      },
      {
        Term: "Permissioned Ledger",
        Definition: "A ledger designed with restrictions, such that only people or organizations requiring access have permission to access it."
      },
      {
        Term: "Permissionless",
        Definition: "Often used to describe blockchains, a system is said to be permissionless when there is no entity that can regulate who can use it and how it can be used."
      },
      {
        Term: "Perpetual Contracts",
        Definition: "A perpetual contract is a derivative similar to a futures contract but without an expiry date."
      },
      {
        Term: "Phishing",
        Definition: "When a scammer pretends to be a trusted institution or person to trick people into revealing sensitive information such as Social Security numbers, passwords, banking details, etc., often through a malware link disguised as legitimate."
      },
      {
        Term: "Phone Phishing",
        Definition: "Phone phishing, also known as a telephone scam or vishing (voice phishing), refers to the practice of using fraudulent and malicious phone calls to extort money or sensitive information from victims."
      },
      {
        Term: "Physical Bitcoins",
        Definition: "A physical Bitcoin is a physical token that usually has an intricate design, as well as a public key and private key."
      },
      {
        Term: "Platform",
        Definition: "On CoinMarketCap, platform refers to the parent blockchain of tokens. It may also refer to a cryptocurrency exchange on which you may trade cryptocurrencies."
      },
      {
        Term: "Play2Earn (Play-to-Earn)",
        Definition: "The play-to-earn business model supports the notion of an open economy and gives financial rewards to players who bring value to its metaverse."
      },
      {
        Term: "Player Payout",
        Definition: "Player payouts is a new way of automatically paying online gaming participants immediately after the tournament ends."
      },
      {
        Term: "Play-to-Earn (Play2Earn)",
        Definition: "The play-to-earn business model supports the notion of an open economy and gives financial rewards to players who bring value to its metaverse."
      },
      {
        Term: "Ponzi Scheme",
        Definition: "A fraudulent investment involving the payment of purported returns to existing investors from funds contributed by new investors."
      },
      {
        Term: "Portfolio",
        Definition: "A collection of cryptocurrencies or crypto assets held by an investment company, hedge fund, financial institution or individual."
      },
      {
        Term: "Post-Mine",
        Definition: "The retroactive creation of new coins following a cryptocurrency\ufffds launch, before public mining is possible."
      },
      {
        Term: "Prediction Market",
        Definition: "Prediction Markets are exchange-traded markets where the future outcomes of events are traded. It indicates the confidence of the crowd in a specific future event."
      },
      {
        Term: "Pre-IDO",
        Definition: "Pre-IDO refers to token offerings before the actual initial DEX offering (IDO) takes place."
      },
      {
        Term: "Pre-Mine",
        Definition: "When some or all of a coin\ufffds initial supply is generated during or before the public launch."
      },
      {
        Term: "Pre-Sale",
        Definition: "The sale of a cryptocurrency, ahead of it going public, to specific investors."
      },
      {
        Term: "Price Impact",
        Definition: "The difference between market price and estimated price due to trade size."
      },
      {
        Term: "Private Blockchain",
        Definition: "A private blockchain is a type of blockchain in which only a single organization has authority over the network."
      },
      {
        Term: "Private Key/Secret Key",
        Definition: "A piece of code generated in asymmetric-key encryption process, paired with a public key, to be used in decrypting information hashed with the public key."
      },
      {
        Term: "Programmability",
        Definition: "Programmability implies that something is capable of following instructions."
      },
      {
        Term: "Proof of Attendance Protocol",
        Definition: "Proof of Attendance Protocol (POAP) refers to a business offering to use the ERC-721 NFT protocol on Ethereum to ascribe individuals a unique, non-fungible blockchain-based identifier that only the person can access"
      },
      {
        Term: "Proof-of-Authority (PoA)",
        Definition: "A blockchain consensus mechanism that delivers comparatively fast transactions using identity as a stake."
      },
      {
        Term: "Proof-of-Burn",
        Definition: "Proof-of-burn is an attempt at creating a system that can prevent fraudulent transactions on a blockchain and can also improve the overall efficiency and functioning of the blockchain."
      },
      {
        Term: "Proof-of-Burn (PoB)",
        Definition: "A blockchain consensus mechanism aiming to bootstrap one blockchain to another with increased energy efficiency, by verifying that a cost was incurred in \ufffdburning\ufffd a coin by sending it to an unspendable address."
      },
      {
        Term: "Proof-of-Developer (PoD)",
        Definition: "Any verification that provides evidence of a real, living software developer who created a cryptocurrency, in order to prevent an anonymous developer from making away with any raised funds without delivering a working model."
      },
      {
        Term: "Proof-of-Donation",
        Definition: "Proof-of-donation refers to the integration of charitable donations into the functionality of a blockchain."
      },
      {
        Term: "Proof-of-Replication",
        Definition: "Proof-of-replication (PoRep) is the way that a storage miner proves to the network that they are storing an entirely unique copy of a piece of data."
      },
      {
        Term: "Proof-of-Spacetime",
        Definition: "In simplest terms, PoSt means that someone can now guarantee that they are spending a certain amount of space for storage.\ufffd"
      },
      {
        Term: "Proof-of-Stake (PoS)",
        Definition: "A blockchain consensus mechanism in addition to Proof-of-Work that maintains the integrity of blockchain."
      },
      {
        Term: "Proof-of-Validation",
        Definition: "Proof-of-validation (PoV) is a unique proof-of-stake (PoS) consensus mechanism that works to achieve consensus through staked validator nodes."
      },
      {
        Term: "Proof-of-Work (PoW)",
        Definition: "A blockchain consensus mechanism involving solving of computationally intensive puzzles to validate transactions and create new blocks. *see Proof-of-Stake (PoS)."
      },
      {
        Term: "Protocol",
        Definition: "The set of rules that define interactions on a network, usually involving consensus, transaction validation, and network participation on a blockchain."
      },
      {
        Term: "Pseudonymous",
        Definition: "Writing under a false name, such as \ufffdSatoshi Nakamoto.\ufffd"
      },
      {
        Term: "Public Address",
        Definition: "A public address is the cryptographic hash of a public key, allowing the user to use it as an address to request for payment."
      },
      {
        Term: "Public Blockchain",
        Definition: "A blockchain that can be accessed by anyone."
      },
      {
        Term: "Public Key",
        Definition: "A public key refers to a series of alphanumeric characters used to encrypt plain text messages into ciphertext."
      },
      {
        Term: "Pump and Dump (P&D) Scheme",
        Definition: "A form of fraud involving the artificial inflation of the price of a cryptocurrency with false and misleading positive statements."
      },
      {
        Term: "Put Option",
        Definition: "A put option contract offers an owner the opportunity, but not the compulsion, to buy an underlying security at a certain price within a given time frame."
      },
      {
        Term: "Pyramid Scheme",
        Definition: "A pyramid scheme is a scam with a hierarchical top-down structure."
      },
      {
        Term: "QR Code",
        Definition: "A machine-readable label that shows information encoded into a graphical black-and-white pattern."
      },
      {
        Term: "Quantum Computing",
        Definition: "A computer that harnesses phenomena from quantum mechanics in order to perform much more efficient computations than older, classical computer technologies are capable of."
      },
      {
        Term: "Quorum (Governance",
        Definition: "A quorum is the minimum number of members of an assembly or group that must be present at any of its meetings to make the proceedings of that meeting valid."
      },
      {
        Term: "Radio Frequency Identification (RFID)",
        Definition: "Radio Frequency Identification (RFID) is a type of technology that uses radio waves to passively identify a tagged item or individual."
      },
      {
        Term: "Raiden Network",
        Definition: "An off-chain scaling solution aiming to enable near-instant, low-fee and scalable payments on the Ethereum blockchain, similar to Bitcoin's proposed Lightning Network."
      },
      {
        Term: "Rank",
        Definition: "The relative position of a cryptocurrency by market capitalization."
      },
      {
        Term: "Ransomware",
        Definition: "Ransomware is a type of malware used by hackers to steal or encrypt their victims\ufffd files to extort them for a ransom in exchange for file decryption or restoration."
      },
      {
        Term: "Rebase",
        Definition: "A token designed so that the circulating supply adjusts automatically according to price fluctuations."
      },
      {
        Term: "Recovery Seed",
        Definition: "A recovery seed is a cryptographically derived security code composed of a list of random words, typically ranging between 12 and 14."
      },
      {
        Term: "Regulated",
        Definition: "Regulation is when something is controlled by a specific set of rules."
      },
      {
        Term: "Rehypothecation",
        Definition: "Rehypothecation is the practice where banks, and even the brokers themselves, use assets that have been posted as collateral by their clients for their own purposes."
      },
      {
        Term: "Rehypothecation",
        Definition: "Rehypothecation is a process where brokers use the assets collateralized by clients for their own benefit."
      },
      {
        Term: "REKT",
        Definition: "A shorthand slang for \ufffdwrecked,\ufffd describing a bad loss in a trade."
      },
      {
        Term: "Relative Strength Index (RSI)",
        Definition: "A form of technical analysis that serves as a momentum oscillator, measuring the speed and change of price movements."
      },
      {
        Term: "Relay Chain",
        Definition: "The Relay Chain is the central chain that is used by the Polkadot network."
      },
      {
        Term: "Repair Miners",
        Definition: "Repair miners are a proposed type of mining node within the Filecoin network."
      },
      {
        Term: "Replay Attack",
        Definition: "Replay attacks are network security attacks where the comms between a sender and receiver is intercepted."
      },
      {
        Term: "Replicated Ledger",
        Definition: "A copy of a distributed ledger in a network that is distributed to all participants in a cryptocurrency network."
      },
      {
        Term: "Resistance (Line/Level)",
        Definition: "The highest price level of an asset during a specific period."
      },
      {
        Term: "Retargeting",
        Definition: "A retargeting algorithm, also referred to as a difficulty adjustment algorithm, is used on proof-of-work blockchains, such as Bitcoin.\ufffd"
      },
      {
        Term: "Revenue Participation Tokens",
        Definition: "Revenue participation tokens are a two token system that uses one participation token and one payout token."
      },
      {
        Term: "Reverse Indicator",
        Definition: "A person whom you may use as an indicator of how not to place buy or sell orders because they are always wrong at predicting price movements of cryptocurrencies."
      },
      {
        Term: "Ring CT (Confidential Transactions)",
        Definition: "RingCT is how transaction amounts are hidden in Monero."
      },
      {
        Term: "Ring Signature",
        Definition: "A cryptographic digital signature that obfuscates the identities of two parties within a transaction."
      },
      {
        Term: "Roadmap",
        Definition: "A roadmap is a high-level visual summary that helps map out the vision as well as the direction of a specific product."
      },
      {
        Term: "Roger Ver",
        Definition: "Roger Ver, also known as Bitcoin Jesus, has been a long-term proponent of Bitcoin and Bitcoin Cash."
      },
      {
        Term: "ROI",
        Definition: "Short for \ufffdReturn on Investment,\ufffd the ratio between the net profit and cost of investing."
      },
      {
        Term: "Roth IRA",
        Definition: "Roth IRAs are generally the best investment option when you think your taxes will be higher in retirement than they are now."
      },
      {
        Term: "Rug Pull",
        Definition: "A rug pull is a type of scam where developers abandon a project and take their investors' money."
      },
      {
        Term: "Rust",
        Definition: "Rust is a multi-paradigm programming language, similar to C++."
      },
      {
        Term: "Ryuk Ransomware",
        Definition: "Ryuk ransomware is a ransomware attack first discovered in August 2018."
      },
      {
        Term: "Satoshi (SATS)",
        Definition: "The smallest unit of bitcoin with a value of 0.00000001 BTC."
      },
      {
        Term: "Satoshi Nakamoto",
        Definition: "The individual or group of individuals that created Bitcoin."
      },
      {
        Term: "Scaling Problem",
        Definition: "The scaling problem is the limitations of a blockchain's transaction throughout and ability to have fast and low cast transactions."
      },
      {
        Term: "Scaling Solution",
        Definition: "A scaling solution is a method of enable a system to expand."
      },
      {
        Term: "Scam",
        Definition: "A scheme that is designed to dupe people out of cash or crypto."
      },
      {
        Term: "Scamcoin",
        Definition: "Coins that are created as \"get rich quick schemes\" by their developers are referred to as a scamcoin.\ufffd"
      },
      {
        Term: "Scammer",
        Definition: "A scammer is someone that participates in a fraudulent scheme."
      },
      {
        Term: "Scholarship/Scholar",
        Definition: "A scholarship is a popular practice in the Axie Infinity universe where managers lend their free Axies to new players (scholars) and earn passively from the battle rewards."
      },
      {
        Term: "Script",
        Definition: "A computer script is a list of commands that are executed by a certain program or scripting language."
      },
      {
        Term: "Scrypt",
        Definition: "An alternative proof-of-work (PoW) algorithm to SHA-256, used in Bitcoin mining. Scrypt mining relies more heavily on memory than on pure CPU power, aiming to reduce the advantage that ASICs have and hence increasing network participation and energy efficiency."
      },
      {
        Term: "Secondary Market",
        Definition: "A secondary market is a place where investors or traders can buy and sell different kinds of assets or securities that they own, with others."
      },
      {
        Term: "Second-Layer Solutions",
        Definition: "A set of solutions built on top of a public blockchain to extend its scalability and efficiency, especially for micro-transactions or actions. Examples include Plasma, TrueBit, Lightning Network and more."
      },
      {
        Term: "Secure Element",
        Definition: "A secure element is a type of hardware chip that runs a specified number of applications."
      },
      {
        Term: "Secure Multi-Party Computation (sMPC)",
        Definition: "SMPC is a subfield of cryptography that allows parties to compute a function while keeping the inputs private."
      },
      {
        Term: "Securities and Exchange Commission (SEC)",
        Definition: "An independent agency of the United States federal government, responsible for enforcing federal securities laws, proposing securities rules, and regulating the securities industry, the nation's stock and options exchanges, and other related activities and organizations."
      },
      {
        Term: "Security",
        Definition: "The term securities refers to a fungible and tradable financial instrument that carries a type of monetary value."
      },
      {
        Term: "Security Token",
        Definition: "A security token is essentially a digital form of traditional securities."
      },
      {
        Term: "Security Token Offering",
        Definition: "A security token offering (STO) is a public offering where tokenized digital securities are sold."
      },
      {
        Term: "Seed Phrase",
        Definition: "A single starting point when deriving keys for a deterministic wallet."
      },
      {
        Term: "Segregated Witness (SegWit)",
        Definition: "A Bitcoin Improvement Proposal (BIP) that aimed to fix transaction malleability on Bitcoin."
      },
      {
        Term: "Selfish Mining",
        Definition: "A situation in which a miner mines a new block but does not broadcast this new block to the other miners."
      },
      {
        Term: "Sell Wall",
        Definition: "A situation where a large limit order has been placed to sell when a cryptocurrency reaches a certain value."
      },
      {
        Term: "Semantic Web",
        Definition: "The ambition of the Semantic Web is to enable computers to manipulate information on our behalf."
      },
      {
        Term: "Settlement Layer",
        Definition: "A settlement layer is a layer that essentially provides an anchor for an entire ecosystem."
      },
      {
        Term: "SHA-256",
        Definition: "A cryptographic hash function that generates a 256-bit signature for a text, used in Bitcoin proof-of-work (PoW)."
      },
      {
        Term: "Shard",
        Definition: "Essentially, a shard is a portion of a blockchain network that has been split into multiple shards, which has its own data."
      },
      {
        Term: "Shard Chain",
        Definition: "In the world of cryptocurrencies, sharding can reduce the network congestion as well as increase transactions per second through the creation of new chains"
      },
      {
        Term: "Sharding",
        Definition: "Sharding is a scaling approach that enables splitting of blockchain states into partitions containing states and transaction history, so that each shard can be processed in parallel."
      },
      {
        Term: "Shielded Transaction",
        Definition: "A shielded transaction is essentially a transaction that is between two shielded addresses."
      },
      {
        Term: "Shilling",
        Definition: "The act of enthusiastically promoting a cryptocurrency or ICO project."
      },
      {
        Term: "Shitcoin",
        Definition: "A coin with no obvious potential value or usage."
      },
      {
        Term: "SHO (Strong Holder Offering)",
        Definition: "A strong holder offering (SHO) is a fundraising mechanism where eligible investors are chosen based on their on-chain activities and other proprietary data sets."
      },
      {
        Term: "Short",
        Definition: "A trading technique in which a trader borrows an asset in order to sell it, with the expectation that the price will continue to decline. In the event that the price does decline, the short seller will then buy the asset at this lower price in order to return it to the lender of the asset, making the difference in profit."
      },
      {
        Term: "Side Chain",
        Definition: "A blockchain ledger that runs in parallel to a primary blockchain, where there is a two-way link between the primary chain and sidechain."
      },
      {
        Term: "Side Channel Attack",
        Definition: "A side channel attack is a hacking method that exploits a computer\ufffds inherent \ufffdtells\" that unintentionally convey information."
      },
      {
        Term: "Signal",
        Definition: "Signals are a call to action to either buy or sell an asset."
      },
      {
        Term: "Silk Road",
        Definition: "An online black market that existed on the dark web, now shut down by the FBI."
      },
      {
        Term: "Simplified Payment Verification (SPV)",
        Definition: "A lightweight client to verify blockchain transactions."
      },
      {
        Term: "SIM-Swap",
        Definition: "A type of scam that exploits two-factor authentication measures."
      },
      {
        Term: "Slippage",
        Definition: "Slippage happens when traders have to settle for a different price than what they initially requested due to a price movement."
      },
      {
        Term: "Smart Contract",
        Definition: "A smart contract is a computer protocol intended to facilitate, verify or enforce a contract on the blockchain without third parties."
      },
      {
        Term: "Smart Contract Audit",
        Definition: "A smart contract audit is a security check done by cybersecurity professionals meant to ensure that the on-chain code behind a smart contract is devoid of bugs or security vulnerabilities."
      },
      {
        Term: "Smart Token",
        Definition: "Smart tokens are simply regular tokens that not only transmit value they contain but also all the information needed to execute a transaction simultaneously."
      },
      {
        Term: "Soft Cap",
        Definition: "The minimum amount that an initial coin offering (ICO) wants to raise."
      },
      {
        Term: "Soft Fork (Blockchain)",
        Definition: "A protocol upgrade where only previously valid transactions are made invalid, with most soft forks requiring miners to upgrade their mining software."
      },
      {
        Term: "Software Library",
        Definition: "A software library is a collection of code that can be referenced while developing other executable programs."
      },
      {
        Term: "Solidity",
        Definition: "The programming language used by Ethereum for developing smart contracts."
      },
      {
        Term: "SPAC",
        Definition: "A special purpose acquisition company (SPAC) is formed by investors in order to publicly list an organization without going through the troubles that come with the traditional IPO process."
      },
      {
        Term: "Spoon (Blockchain)",
        Definition: "A hard spoon is a meta-protocol that exists on top of a blockchain."
      },
      {
        Term: "Spot",
        Definition: "A contract or transaction buying or selling a cryptocurrency for immediate settlement, or payment and delivery, of the cryptocurrency on the market."
      },
      {
        Term: "Spot Market",
        Definition: "A public market in which cryptocurrencies are traded for immediate settlement. It contrasts with a futures market, in which settlement is due at a later date."
      },
      {
        Term: "Spyware",
        Definition: "Spyware is a malware that records all of the activities on an electronic device."
      },
      {
        Term: "Stablecoin",
        Definition: "A cryptocurrency with extremely low volatility, sometimes used as a means of portfolio diversification. Examples include gold-backed cryptocurrency or fiat-pegged cryptocurrency."
      },
      {
        Term: "Staking",
        Definition: "Participation in a proof-of-stake (PoS) system to put your tokens in to serve as a validator to the blockchain and receive rewards."
      },
      {
        Term: "Staking Pool",
        Definition: "Staking Pools allows users to combine their resources in order to increase their chances of earning rewards. This mechanism offers more staking power to the network to verify and validate new blocks."
      },
      {
        Term: "Stale Block",
        Definition: "A block which was successfully mined but not included on the current longest blockchain, usually because another block at the same height was added to the chain first."
      },
      {
        Term: "State Channel",
        Definition: "A second-layer scaling solution that reduces the total on-chain transactions necessary, moving the transactions off-chain and letting participants sign to the main chain after multiple off-chain transactions."
      },
      {
        Term: "Stochastic Oscillator",
        Definition: "A stochastic oscillator is a popular technical indicator used for identifying overbought and oversold stock/asset/cryptocurrency levels that rely on an asset's price history, as it tend to fluctuate within a specific price range.."
      },
      {
        Term: "Stop-Loss Order",
        Definition: "A stop-loss order in trading allows investors to determine the lowest price at which they are willing to sell an asset and trigger an automatic sell order when and if this price is reached."
      },
      {
        Term: "Storage (Decentralized)",
        Definition: "Decentralized storage refers to the concept of storing files online by splitting them into encrypted fragments and delegating these fragments to multiple nodes on a distributed network, e.g. a blockchain."
      },
      {
        Term: "Storage Miners",
        Definition: "Storage miners are cryptocurrency miners who rely on offering sufficient storage space for nodes to reach consensus and validate transactions."
      },
      {
        Term: "Store of Value",
        Definition: "A store of value is an asset, commodity or currency that can be saved, retrieved as well as exchanged in the future without it losing any value."
      },
      {
        Term: "Substrate",
        Definition: "Substrate is a web app development framework developed by Parity Technologies."
      },
      {
        Term: "Supercomputer",
        Definition: "A supercomputer is a superior version of a general-purpose computer, which has a significantly increased capacity and processing power."
      },
      {
        Term: "Supply and Demand",
        Definition: "Supply and demand are the levels in an economy that determine the market's willingness to buy or sell assets or services, respectively."
      },
      {
        Term: "Supply Chain",
        Definition: "A supply chain is the collection of steps that a product or service needs to go through before reaching the final customer."
      },
      {
        Term: "Supply Chain Attack",
        Definition: "A supply chain attack is a tactic used by hackers to compromise third-party suppliers to major corporations, governments and organizations to gain valuable information."
      },
      {
        Term: "Swing Trading",
        Definition: "Swing trading is a market trading technique that aims to profit from short to medium-term price changes in stocks, commodities, and/or currencies over a period of days or weeks."
      },
      {
        Term: "Sybil Attack",
        Definition: "Sybil attacks undermine an online network by creating many IDs, accounts or nodes to upset the balance of power."
      },
      {
        Term: "Symbol",
        Definition: "The ticker of a cryptocurrency; for example, Bitcoin's symbol is BTC."
      },
      {
        Term: "Synthetic Asset",
        Definition: "Synthetic assets, sometimes referred to as synths, are a combination of cryptocurrencies and traditional derivative assets. In other words, synths are tokenized derivatives."
      },
      {
        Term: "Taint",
        Definition: "The percentage of cryptocurrency in an account that can be traced to another account."
      },
      {
        Term: "Tamper-Proof Ledger",
        Definition: "A tamper-proof ledger is essentially any system of records that has the fundamental properties of a blockchain distributed ledger."
      },
      {
        Term: "Tangle",
        Definition: "The Tangle is a blockchain alternative developed by IOTA, using directed acyclic graphs which only builds in one single direction and in a way that it never repeats, and is quantum-computing resistant."
      },
      {
        Term: "Taproot",
        Definition: "Taproot is an instantiation of a soft fork for Bitcoin, intended to both improve privacy and improve other aspects tied to more complex transactions."
      },
      {
        Term: "Technical Analysis/Trend Analysis (TA)",
        Definition: "An evaluation method involving statistical analyses of market activity, such as price and volume. Charts and other tools are used to identify patterns to underpin and drive investment decisions."
      },
      {
        Term: "Technical Indicators",
        Definition: "A technical indicator is a statistical algorithm or pattern-based indication based on a security's or contract's historical price, volume, and/or open interest."
      },
      {
        Term: "Testnet",
        Definition: "An alternative blockchain used by developers for testing."
      },
      {
        Term: "The DAO",
        Definition: "The DAO is the first decentralized autonomous organization, which was created by a group of developers in April 2016."
      },
      {
        Term: "Think Long Term (TLT)",
        Definition: "A mindset where you have a longer-term investment horizon of months to years."
      },
      {
        Term: "This Is Gentlemen",
        Definition: "Originally an error in writing the full \ufffdThis is it, gentlemen\ufffd. It is now used as an introduction for good news."
      },
      {
        Term: "Throughput",
        Definition: "Throughput is how many actions can be completed in a given time frame."
      },
      {
        Term: "Ticker",
        Definition: "An abbreviation used to uniquely identify cryptocurrencies. *see Symbol."
      },
      {
        Term: "Ticker Symbol",
        Definition: "The ticker symbol is the unique combination of letters assigned to stocks or cryptocurrencies that makes them distinguishable on exchanges and other trading applications."
      },
      {
        Term: "Timelock/Locktime",
        Definition: "A condition for a transaction to only be processed at a certain time or block on the blockchain."
      },
      {
        Term: "Timestamp",
        Definition: "A form of identification for when a certain transaction occurred."
      },
      {
        Term: "Tipset",
        Definition: "A tipset is a set, rather than a chain, of blocks that make up a blockchain.\ufffd"
      },
      {
        Term: "Token",
        Definition: "A digital unit designed with utility in mind, providing access and use of a larger crypto economic system."
      },
      {
        Term: "Token Economy",
        Definition: "An economy of goods and services that can run without intermediaries and third parties with the help of the blockchain technology."
      },
      {
        Term: "Token Generation Event",
        Definition: "The time at which a token is issued."
      },
      {
        Term: "Token Issuance",
        Definition: "Token issuance is the process of creating new tokens and adding them to the total token supply of a cryptocurrency."
      },
      {
        Term: "Token Sale",
        Definition: "A token sale refers to the initial offering of a cryptocurrency token to a private pool of investors before it officially goes on the market."
      },
      {
        Term: "Token Standard",
        Definition: "The most common token standard today is the Ethereum Request for Comment or ERC."
      },
      {
        Term: "Token Swap",
        Definition: "Token swaps can refer to one of two things: 1. Direct exchange of a certain amount of one cryptocurrency token for another between users facilitated by a special exchange service. 2. Migration of a cryptocurrency token built on top of one blockchain platform to a different blockchain."
      },
      {
        Term: "Tokenize",
        Definition: "The process by which real-world assets are turned into something of digital value called a token, often subsequently able to offer ownership of parts of this asset to different owners."
      },
      {
        Term: "Tokenized Securities",
        Definition: "Tokenized securities are when the ownership of a security is materialized through the issuance of a token."
      },
      {
        Term: "Tokenomics",
        Definition: "Tokenomics is the science of token economy which consists of a set of rules that governs a cryptocurrency's issuance and supply."
      },
      {
        Term: "Toll Bridge",
        Definition: "A toll bridge is a bridge powered by a smart contract where a monetary value called a toll fee unlocks access to extra functionalities."
      },
      {
        Term: "Tor",
        Definition: "Tor is a decentralized network that anonymizes users' web traffic by encrypting it and routing it through a series of relays before it reaches its final destination."
      },
      {
        Term: "Total Supply",
        Definition: "The total amount of coins in existence right now, minus any coins that have been verifiably burned. *see Circulating Supply and Max Supply."
      },
      {
        Term: "Total Value Locked (TVL)",
        Definition: "?otal value locked represents the number of assets that are currently being staked in a specific protocol."
      },
      {
        Term: "Trade Volume",
        Definition: "The amount of the cryptocurrency that has been traded in the last 24 hours."
      },
      {
        Term: "Trading Bot",
        Definition: "A crypto trading bot is essentially a program that is designed to automate cryptocurrency asset trading on the behalf of the trader."
      },
      {
        Term: "Trading Tournament",
        Definition: "Trading tournaments are unique crypto trading campaigns organized by cryptocurrency exchanges, encouraging users to trade more to win incentives, such as tokens, hardware wallets and more/"
      },
      {
        Term: "Trading Volume",
        Definition: "?rading volume refers to the total number of shares (or tokens/coins) that have been exchanged between buyers and sellers of a given asset during trading hours of a certain day."
      },
      {
        Term: "Transaction (TX)",
        Definition: "The act of exchanging cryptocurrencies on a blockchain."
      },
      {
        Term: "Transaction Fee",
        Definition: "A payment for using the blockchain to transact."
      },
      {
        Term: "Treasury Bills (T-Bills)",
        Definition: "Treasury bills (T-Bills) are short-term U.S. government debt obligations."
      },
      {
        Term: "Trojan",
        Definition: "A trojan is a type of malware that is often disguised as legitimate software."
      },
      {
        Term: "Trust",
        Definition: "A trust is a fiduciary relationship in which one party, known as a trustor, gives another party, the trustee, the right to hold title to property or assets for the benefit of a third party, the beneficiary."
      },
      {
        Term: "Trustless",
        Definition: "An environment where there is no centralized authority."
      },
      {
        Term: "Tumbler",
        Definition: "A mixing service that helps make cryptocurrency funds and transactions more anonymous."
      },
      {
        Term: "Turing-Complete",
        Definition: "A system that in principle could be able to solve any computation problem."
      },
      {
        Term: "Two-Factor Authentication (2FA)",
        Definition: "Two-factor authentication (2FA) is method of access that requires two different forms of authentication."
      },
      {
        Term: "Typosquatting",
        Definition: "Typosquatting is a deceptive practice used by scammers to trick people into entering a counterfeit website and compromising their private information."
      },
      {
        Term: "Unbanked",
        Definition: "Unbanked refers to those that are either unable to access banking services, or choose not to."
      },
      {
        Term: "Unconfirmed",
        Definition: "A state in which a transaction has not been appended to the blockchain."
      },
      {
        Term: "Unpermissioned Ledger",
        Definition: "A public ledger that is open to anyone, without being controlled by a single owner."
      },
      {
        Term: "Unspent Transaction Output (UTXO)",
        Definition: "A transaction that is left unspent after being completed, similar to leftover change after making a purchase."
      },
      {
        Term: "Unstoppable Domains",
        Definition: "Unstoppable Domains is the name of a San-Francisco based company that provides blockchain-based domain names to users."
      },
      {
        Term: "US Office of Foreign Assets Control (OFAC)",
        Definition: "The US Office of Foreign Assets Control (OFAC) is a financial intelligence and enforcement agency of the US Treasury Department."
      },
      {
        Term: "UTC Time",
        Definition: "Coordinated Universal Time."
      },
      {
        Term: "Utility Token",
        Definition: "Tokens that are designed specifically to be able to help people use something."
      },
      {
        Term: "Validator",
        Definition: "A participant on a proof-of-stake (PoS) blockchain, involved in validating blocks for rewards."
      },
      {
        Term: "Vanity Address",
        Definition: "A cryptocurrency public address with custom letters and numbers, usually picked by its owner."
      },
      {
        Term: "Vaporware",
        Definition: "A cryptocurrency project that is never actually developed."
      },
      {
        Term: "Venture Capital",
        Definition: "A form of private equity provided to fund small, early-stage firms considered to have high growth potential."
      },
      {
        Term: "Verification Code",
        Definition: "A verification code is a security protection method that is used to avoid internet bots from abusing or even spamming various online services.\ufffd"
      },
      {
        Term: "Virgin Bitcoin",
        Definition: "A bitcoin that has never been spent."
      },
      {
        Term: "Virtual Automated Market Makers (vAMMs)",
        Definition: "A virtual Automated Market Maker (vAMM) is a system that provides synthetic (or virtual) liquidity, allowing traders to buy and sell derivatives entirely on the blockchain."
      },
      {
        Term: "Virtual Reality (VR)",
        Definition: "Virtual reality (VR) technology is used to simulate an immersive artificial world that can mimic or transcend reality. V"
      },
      {
        Term: "Virus",
        Definition: "Computers are usually infected with a virus when a user unknowingly installs it via a downloaded file."
      },
      {
        Term: "Vitalik Buterin",
        Definition: "Vitalik Buterin is one of the creators of Ethereum, the second-largest cryptocurrency after Bitcoin."
      },
      {
        Term: "Volatility",
        Definition: "A statistical measure of dispersion of returns, measured by using the standard deviation or variance between returns from that same security or market index."
      },
      {
        Term: "Volume",
        Definition: "How much cryptocurrency has been traded over a set period, such as the past 24 hours."
      },
      {
        Term: "Wallet",
        Definition: "A place where cryptocurrency users can store, send and receive digital assets."
      },
      {
        Term: "Wallstreetbets (WSB)",
        Definition: "Wallstreetbets, otherwise known as /r/wallstreetbets or WSB, is a subreddit for participants to discuss stock and options trading.\ufffd"
      },
      {
        Term: "WannaCry Ransomware",
        Definition: "WannaCry is a piece of ransomware that can infect and spread rapidly through a number of computer networks.\ufffd"
      },
      {
        Term: "Wash Trade",
        Definition: "A form of market manipulation in which investors create artificial activity in the marketplace by simultaneously selling and buying the same cryptocurrencies."
      },
      {
        Term: "Watchlist",
        Definition: "A watchlist is a feature of the website where users can create their own lists of cryptocurrencies to follow. Alternative definition A watchlist is a set of pages a user has selected to monitor for changes."
      },
      {
        Term: "Weak Hands",
        Definition: "An investor prone to panic selling at the first sign of a price decline."
      },
      {
        Term: "Web 1.0",
        Definition: "Web 1.0 is a term that is often used to describe the early version of the internet."
      },
      {
        Term: "Web 2.0",
        Definition: "Web 2.0 describes the current state of the web, which supports more user-generated content and stability for front-end users than its predecessor, Web 1.0"
      },
      {
        Term: "Web 3.0",
        Definition: "Web 3.0 is the coming generation of the internet."
      },
      {
        Term: "Web3 Foundation",
        Definition: "The Web3 Foundation was created to foster new technologies and applications in the field of decentralized web software protocols."
      },
      {
        Term: "Wei",
        Definition: "The smallest fraction of an Ether, with each Ether to 1000000000000000000 Wei."
      },
      {
        Term: "Whale",
        Definition: "A term used to describe investors who have uncommonly large amounts of crypto, especially those with enough funds to manipulate the market."
      },
      {
        Term: "What Is the Financial Crimes Enforcement Network (FinCEN)?",
        Definition: "The Financial Crimes Enforcement Network (FinCEN) is a U.S. bureau that analyzes financial transactions to prevent financial crimes."
      },
      {
        Term: "When Lambo",
        Definition: "A phrase referring to when cryptocurrency holders will become rich enough to afford the purchase of a Lamborghini."
      },
      {
        Term: "When Moon",
        Definition: "A phrase used to ask when the price of cryptocurrencies will explode."
      },
      {
        Term: "White Label",
        Definition: "White Labeling allows a company to customize an existing product framework in order to rebrand and resell this product as their own."
      },
      {
        Term: "Whitelist",
        Definition: "A list of interested participants in an initial coin offering, who registered their intent to take part or purchase in a sale."
      },
      {
        Term: "Whitepaper",
        Definition: "A document released by a crypto project that gives investors technical information about its concept, and a roadmap for how it plans to grow and succeed."
      },
      {
        Term: "Winding Down",
        Definition: "Winding down is the process of unwrapping tokens back to their original form in DeFi."
      },
      {
        Term: "Winding Up",
        Definition: "In decentralized finance (DeFi), winding up essentially means wrapping crypto tokens through various projects in order to find the best yield.\ufffd"
      },
      {
        Term: "Yield Farming",
        Definition: "Yield farming involves earning interest by investing crypto in decentralized finance markets."
      },
      {
        Term: "YTD",
        Definition: "Stands for Year to Date."
      },
      {
        Term: "Zero Confirmation Transaction",
        Definition: "Alternative phrasing for an unconfirmed transaction."
      },
      {
        Term: "Zero Confirmation/Unconfirmed Transaction",
        Definition: "A zero confirmation or unconfirmed transaction is defined as an exchange that has not yet been recorded or verified on the blockchain"
      },
      {
        Term: "Zero Knowledge Proof",
        Definition: "Proving certain information or data is true without revealing it."
      },
      {
        Term: "Zero Knowledge Rollup",
        Definition: "A zero knowledge rollup is a type of layer 2 scaling solution that relies on zero knowledge cryptography"
      },
      {
        Term: "Zero Knowledge Rollups",
        Definition: "A zero-knowledge rollup is a Layer 2 blockchain solution that performs computations and storage off-chain while funds are held in a smart contract."
      },
      {
        Term: "Zero-Knowledge Proof",
        Definition: "In cryptography, a zero-knowledge proof enables one party to provide evidence that a transaction or event happened without revealing private details of that transaction or event."
      },
      {
        Term: "Zk-SNARKs",
        Definition: "A proof that allows one party to prove it owns certain information without revealing it."
      }
    ]

  public firstInstanceOfAllLettersArray?: Array<any>;

  constructor() { }

  public getTerms() {
    return this.terminologyJson;
  }

  public getFirstInstanceOfAllLetters(): string[] {
    let firstLetter = '';

    this.firstInstanceOfAllLettersArray = this.terminologyJson.map(term => {
      if(firstLetter == term.Term[0].toLowerCase()) {
        return false;
      } else {
        firstLetter = term.Term[0].toLowerCase();
        return term.Term;
      }
    });

    return this.firstInstanceOfAllLettersArray;
  }
}
