import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AndroidCasinosComponent } from './pages/android-casinos/android-casinos.component';
import { AppleCasinosComponent } from './pages/apple-casinos/apple-casinos.component';
import { BankingComponent } from './pages/banking/banking/banking.component';
import { CreditCardCasinosComponent } from './pages/banking/credit-card-casinos/credit-card-casinos.component';
import { DebitCardCasinosComponent } from './pages/banking/debit-card-casinos/debit-card-casinos.component';
import { EcopayzCasinosComponent } from './pages/banking/ecopayz-casinos/ecopayz-casinos.component';
import { EntropayCasinosComponent } from './pages/banking/entropay-casinos/entropay-casinos.component';
import { MastercardCasinosComponent } from './pages/banking/mastercard-casinos/mastercard-casinos.component';
import { NetellerCasinosComponent } from './pages/banking/neteller-casinos/neteller-casinos.component';
import { PaysafecardCasinosComponent } from './pages/banking/paysafecard-casinos/paysafecard-casinos.component';
import { UsemybankCasinosComponent } from './pages/banking/usemybank-casinos/usemybank-casinos.component';
import { VisaCasinosComponent } from './pages/banking/visa-casinos/visa-casinos.component';
import { BestPayoutCasinosComponent } from './pages/best-payout-casinos/best-payout-casinos.component';
import { BestPayoutSlotsComponent } from './pages/best-payout-slots/best-payout-slots.component';
import { BetsoftCasinosComponent } from './pages/betsoft-casinos/betsoft-casinos.component';
import { BigWinCasinosComponent } from './pages/big-win-casinos/big-win-casinos.component';
import { BitcoinCasinosComponent } from './pages/bitcoin-casinos/bitcoin-casinos.component';
import { BirthdayComponent } from './pages/casino-bonuses/birthday/birthday.component';
import { CasinoBonusesComponent } from './pages/casino-bonuses/casino-bonuses/casino-bonuses.component';
import { FreeSpinsComponent } from './pages/casino-bonuses/free-spins/free-spins.component';
import { NoDepositBonusComponent } from './pages/casino-bonuses/no-deposit-bonus/no-deposit-bonus.component';
import { WelcomeBonusComponent } from './pages/casino-bonuses/welcome-bonus/welcome-bonus.component';
import { CasinoGameIndexComponent } from './pages/casino-game-index/casino-game-index.component';
import { BaccaratTipsComponent } from './pages/casino-games/baccarat-tips/baccarat-tips.component';
import { CasinoGamesComponent } from './pages/casino-games/casino-games/casino-games.component';
import { LiveDealerCasinosComponent } from './pages/casino-games/live-dealer-casinos/live-dealer-casinos.component';
import { OnlineBaccaratComponent } from './pages/casino-games/online-baccarat/online-baccarat.component';
import { OnlineBlackjackComponent } from './pages/casino-games/online-blackjack/online-blackjack.component';
import { OnlineCrapsComponent } from './pages/casino-games/online-craps/online-craps.component';
import { OnlinePokerComponent } from './pages/casino-games/online-poker/online-poker.component';
import { OnlineVideoPokerComponent } from './pages/casino-games/online-video-poker/online-video-poker.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DownloadCasinosComponent } from './pages/download-casinos/download-casinos.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { FreeCasinoGamesComponent } from './pages/free-casino-games/free-casino-games.component';
import { HighRollerCasinosComponent } from './pages/high-roller-casinos/high-roller-casinos.component';
import { HighestPayoutCasinoGamesComponent } from './pages/highest-payout-casino-games/highest-payout-casino-games.component';
import { IgtGamingCasinosComponent } from './pages/igt-gaming-casinos/igt-gaming-casinos.component';
import { KenoComponent } from './pages/keno/keno.component';
import { AdventurePalaceComponent } from './pages/microgaming/adventure-palace/adventure-palace.component';
import { AgeOfDiscoveryComponent } from './pages/microgaming/age-of-discovery/age-of-discovery.component';
import { AgentJaneBlondeComponent } from './pages/microgaming/agent-jane-blonde/agent-jane-blonde.component';
import { AlaskanFishingComponent } from './pages/microgaming/alaskan-fishing/alaskan-fishing.component';
import { AlleyCatsComponent } from './pages/microgaming/alley-cats/alley-cats.component';
import { ArcticFortuneComponent } from './pages/microgaming/arctic-fortune/arctic-fortune.component';
import { ArianaComponent } from './pages/microgaming/ariana/ariana.component';
import { AsianBeautyComponent } from './pages/microgaming/asian-beauty/asian-beauty.component';
import { AvalonComponent } from './pages/microgaming/avalon/avalon.component';
import { BarsAndStripesComponent } from './pages/microgaming/bars-and-stripes/bars-and-stripes.component';
import { BeachBabesComponent } from './pages/microgaming/beach-babes/beach-babes.component';
import { BearlyFishingComponent } from './pages/microgaming/bearly-fishing/bearly-fishing.component';
import { BomberGirlsComponent } from './pages/microgaming/bomber-girls/bomber-girls.component';
import { BoogieMonstersComponent } from './pages/microgaming/boogie-monsters/boogie-monsters.component';
import { BreakDaBankAgainComponent } from './pages/microgaming/break-da-bank-again/break-da-bank-again.component';
import { BuffetBonanzaComponent } from './pages/microgaming/buffet-bonanza/buffet-bonanza.component';
import { BushTelegraphComponent } from './pages/microgaming/bush-telegraph/bush-telegraph.component';
import { CabinFeverComponent } from './pages/microgaming/cabin-fever/cabin-fever.component';
import { CaptainCashComponent } from './pages/microgaming/captain-cash/captain-cash.component';
import { DoctorLoveComponent } from './pages/microgaming/doctor-love/doctor-love.component';
import { ExoticCatsComponent } from './pages/microgaming/exotic-cats/exotic-cats.component';
import { FatLadySingsComponent } from './pages/microgaming/fat-lady-sings/fat-lady-sings.component';
import { FortuniumComponent } from './pages/microgaming/fortunium/fortunium.component';
import { ImmortalRomanceComponent } from './pages/microgaming/immortal-romance/immortal-romance.component';
import { MegaMoolahComponent } from './pages/microgaming/mega-moolah/mega-moolah.component';
import { MicrogamingComponent } from './pages/microgaming/microgaming/microgaming.component';
import { PlayboyGoldComponent } from './pages/microgaming/playboy-gold/playboy-gold.component';
import { RainbrewComponent } from './pages/microgaming/rainbrew/rainbrew.component';
import { WildScarabsComponent } from './pages/microgaming/wild-scarabs/wild-scarabs.component';
import { MobileCasinosComponent } from './pages/mobile-casinos/mobile-casinos.component';
import { NewOnlineCasinosComponent } from './pages/new-online-casinos/new-online-casinos.component';
import { BlackjackRulesComponent } from './pages/online-blackjack-vp/blackjack-rules/blackjack-rules.component';
import { BlackjackStrategyComponent } from './pages/online-blackjack-vp/blackjack-strategy/blackjack-strategy.component';
import { CardCountingComponent } from './pages/online-blackjack-vp/card-counting/card-counting.component';
import { GlossaryComponent } from './pages/online-blackjack-vp/glossary/glossary.component';
import { HowToPlayBlackjackComponent } from './pages/online-blackjack-vp/how-to-play-blackjack/how-to-play-blackjack.component';
import { OnlineBlackjackTipsComponent } from './pages/online-blackjack-vp/online-blackjack-tips/online-blackjack-tips.component';
import { WinAtBlackjackComponent } from './pages/online-blackjack-vp/win-at-blackjack/win-at-blackjack.component';
import { CrapsGlossaryComponent } from './pages/online-craps/craps-glossary/craps-glossary.component';
import { CrapsRulesComponent } from './pages/online-craps/craps-rules/craps-rules.component';
import { CrapsTipsComponent } from './pages/online-craps/craps-tips/craps-tips.component';
import { HowToPlayCrapsComponent } from './pages/online-craps/how-to-play-craps/how-to-play-craps.component';
import { OnlineGamblingTipsComponent } from './pages/online-gambling-tips/online-gambling-tips.component';
import { OnlineLotteriesComponent } from './pages/online-lotteries/online-lotteries.component';
import { AmericanRouletteComponent } from './pages/online-roulette/american-roulette/american-roulette.component';
import { EuropeanRouletteComponent } from './pages/online-roulette/european-roulette/european-roulette.component';
import { FrenchRouletteComponent } from './pages/online-roulette/french-roulette/french-roulette.component';
import { HowToPlayRouletteComponent } from './pages/online-roulette/how-to-play-roulette/how-to-play-roulette.component';
import { MultiPlayerRouletteComponent } from './pages/online-roulette/multi-player-roulette/multi-player-roulette.component';
import { MultiWheelRouletteComponent } from './pages/online-roulette/multi-wheel-roulette/multi-wheel-roulette.component';
import { OnlineRouletteComponent } from './pages/online-roulette/online-roulette/online-roulette.component';
import { PremierRouletteComponent } from './pages/online-roulette/premier-roulette/premier-roulette.component';
import { RouletteRoyaleComponent } from './pages/online-roulette/roulette-royale/roulette-royale.component';
import { TipsComponent } from './pages/online-roulette/tips/tips.component';
import { FiveReelSlotsComponent } from './pages/online-slot/five-reel-slots/five-reel-slots.component';
import { SlotsTipsComponent } from './pages/online-slot/slots-tips/slots-tips.component';
import { ThreeReelSlotsComponent } from './pages/online-slot/three-reel-slots/three-reel-slots.component';
import { OnlineSlotsComponent } from './pages/online-slots/online-slots.component';
import { BonusVideoPokerComponent } from './pages/online-video-poker/bonus-video-poker/bonus-video-poker.component';
import { DeucesWildVideoPokerComponent } from './pages/online-video-poker/deuces-wild-video-poker/deuces-wild-video-poker.component';
import { DoubleBonusVideoPokerComponent } from './pages/online-video-poker/double-bonus-video-poker/double-bonus-video-poker.component';
import { DoubleDoubleBonusVideoPokerComponent } from './pages/online-video-poker/double-double-bonus-video-poker/double-double-bonus-video-poker.component';
import { HowToPlayVideoPokerComponent } from './pages/online-video-poker/how-to-play-video-poker/how-to-play-video-poker.component';
import { JacksOrBetterVideoPokerComponent } from './pages/online-video-poker/jacks-or-better-video-poker/jacks-or-better-video-poker.component';
import { JokersWildComponent } from './pages/online-video-poker/jokers-wild/jokers-wild.component';
import { OnlineVideoPokerTipsComponent } from './pages/online-video-poker/online-video-poker-tips/online-video-poker-tips.component';
import { TensOrBetterComponent } from './pages/online-video-poker/tens-or-better/tens-or-better.component';
import { PaiGowPokerComponent } from './pages/pai-gow-poker/pai-gow-poker.component';
import { PragmaticPlayCasinosComponent } from './pages/pragmatic-play-casinos/pragmatic-play-casinos.component';
import { ProgressiveJackpotsComponent } from './pages/progressive-jackpots/progressive-jackpots.component';
import { QuickspinCasinosComponent } from './pages/quickspin-casinos/quickspin-casinos.component';
import { RealMoneyCasinosComponent } from './pages/real-money-casinos/real-money-casinos.component';
import { ResponsibleGamingComponent } from './pages/responsible-gaming/responsible-gaming.component';
import { RivalCasinosComponent } from './pages/rival-casinos/rival-casinos.component';
import { SafeOnlineCasinosComponent } from './pages/safe-online-casinos/safe-online-casinos.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { SportsBettingComponent } from './pages/sports-betting/sports-betting.component';
import { AlabamaComponent } from './pages/states/alabama/alabama.component';
import { AlaskaComponent } from './pages/states/alaska/alaska.component';
import { ArizonaComponent } from './pages/states/arizona/arizona.component';
import { ArkansasComponent } from './pages/states/arkansas/arkansas.component';
import { CaliforniaComponent } from './pages/states/california/california.component';
import { DelawareComponent } from './pages/states/delaware/delaware.component';
import { HawaiiComponent } from './pages/states/hawaii/hawaii.component';
import { IowaComponent } from './pages/states/iowa/iowa.component';
import { KentuckyComponent } from './pages/states/kentucky/kentucky.component';
import { NevadaComponent } from './pages/states/nevada/nevada.component';
import { NewJerseyComponent } from './pages/states/new-jersey/new-jersey.component';
import { NewYorkComponent } from './pages/states/new-york/new-york.component';
import { PennsylvaniaComponent } from './pages/states/pennsylvania/pennsylvania.component';
import { StatesComponent } from './pages/states/states/states.component';
import { TexasComponent } from './pages/states/texas/texas.component';
import { WashingtonComponent } from './pages/states/washington/washington.component';
import { WisconsinComponent } from './pages/states/wisconsin/wisconsin.component';
import { SunnyCasinoReviewComponent } from './pages/sunny-casino-review/sunny-casino-review.component';
import { TableGamesComponent } from './pages/table-games/table-games.component';
import { TraitsOfAGoodOnlineCasinoComponent } from './pages/traits-of-a-good-online-casino/traits-of-a-good-online-casino.component';
import { AceLuckyCasinoReviewComponent } from './reviews/ace-lucky-casino-review/ace-lucky-casino-review.component';
import { AladdinsGoldCasinoReviewComponent } from './reviews/aladdins-gold-casino-review/aladdins-gold-casino-review.component';
import { AllStarSlotsCasinoReviewComponent } from './reviews/all-star-slots-casino-review/all-star-slots-casino-review.component';
import { AndromedaCasinoReviewComponent } from './reviews/andromeda-casino-review/andromeda-casino-review.component';
import { AussiePlayCasinoReviewComponent } from './reviews/aussie-play-casino-review/aussie-play-casino-review.component';
import { BetOnlineCasinoReviewComponent } from './reviews/bet-online-casino-review/bet-online-casino-review.component';
import { BetusCasinoReviewComponent } from './reviews/betus-casino-review/betus-casino-review.component';
import { BigSpinCasinoReviewComponent } from './reviews/big-spin-casino-review/big-spin-casino-review.component';
import { BingoFestCasinoReviewComponent } from './reviews/bingo-fest-casino-review/bingo-fest-casino-review.component';
import { BingoSpiritCasinoReviewComponent } from './reviews/bingo-spirit-casino-review/bingo-spirit-casino-review.component';
import { BodogCasinoReviewComponent } from './reviews/bodog-casino-review/bodog-casino-review.component';
import { BovadaCasinoReviewComponent } from './reviews/bovada-casino-review/bovada-casino-review.component';
import { BovegasCasinoReviewComponent } from './reviews/bovegas-casino-review/bovegas-casino-review.component';
import { BrangoCasinoReviewComponent } from './reviews/brango-casino-review/brango-casino-review.component';
import { BridesmaidsSlotReviewComponent } from './reviews/bridesmaids-slot-review/bridesmaids-slot-review.component';
import { BusrCasinoReviewComponent } from './reviews/busr-casino-review/busr-casino-review.component';
import { BuzzluckCasinoReviewComponent } from './reviews/buzzluck-casino-review/buzzluck-casino-review.component';
import { CafeCasinoReviewComponent } from './reviews/cafe-casino-review/cafe-casino-review.component';
import { CaptainJackCasinoReviewComponent } from './reviews/captain-jack-casino-review/captain-jack-casino-review.component';
import { CasinoCruiseCasinoReviewComponent } from './reviews/casino-cruise-casino-review/casino-cruise-casino-review.component';
import { CasinoExtremeReviewComponent } from './reviews/casino-extreme-review/casino-extreme-review.component';
import { CasinoMateCasinoReviewComponent } from './reviews/casino-mate-casino-review/casino-mate-casino-review.component';
import { CasinoMaxReviewComponent } from './reviews/casino-max-review/casino-max-review.component';
import { CasinoReviewsComponent } from './reviews/casino-reviews/casino-reviews.component';
import { CherryGoldCasinoReviewComponent } from './reviews/cherry-gold-casino-review/cherry-gold-casino-review.component';
import { CherryJackpotCasinoReviewComponent } from './reviews/cherry-jackpot-casino-review/cherry-jackpot-casino-review.component';
import { ClubPlayerCasinoReviewComponent } from './reviews/club-player-casino-review/club-player-casino-review.component';
import { ClubWorldCasinoReviewComponent } from './reviews/club-world-casino-review/club-world-casino-review.component';
import { ComicPlayCasinoReviewComponent } from './reviews/comic-play-casino-review/comic-play-casino-review.component';
import { CoolcatCasinoReviewComponent } from './reviews/coolcat-casino-review/coolcat-casino-review.component';
import { CryptoReelsCasinoReviewComponent } from './reviews/crypto-reels-casino-review/crypto-reels-casino-review.component';
import { CyberBingoCasinoReviewComponent } from './reviews/cyber-bingo-casino-review/cyber-bingo-casino-review.component';
import { DomGameCasinoReviewComponent } from './reviews/dom-game-casino-review/dom-game-casino-review.component';
import { DrakeCasinoReviewComponent } from './reviews/drake-casino-review/drake-casino-review.component';
import { DreamsCasinoReviewComponent } from './reviews/dreams-casino-review/dreams-casino-review.component';
import { EclipseCasinoReviewComponent } from './reviews/eclipse-casino-review/eclipse-casino-review.component';
import { ElRoyaleCasinoReviewComponent } from './reviews/el-royale-casino-review/el-royale-casino-review.component';
import { EmoticoinsSlotReviewComponent } from './reviews/emoticoins-slot-review/emoticoins-slot-review.component';
import { ExclusiveCasinoReviewComponent } from './reviews/exclusive-casino-review/exclusive-casino-review.component';
import { FreeSpinCasinoReviewComponent } from './reviews/free-spin-casino-review/free-spin-casino-review.component';
import { GoldenLionCasinoReviewComponent } from './reviews/golden-lion-casino-review/golden-lion-casino-review.component';
import { GossipSlotsCasinoReviewComponent } from './reviews/gossip-slots-casino-review/gossip-slots-casino-review.component';
import { GrandRushCasinoReviewComponent } from './reviews/grand-rush-casino-review/grand-rush-casino-review.component';
import { HiLoRollerSlotReviewComponent } from './reviews/hi-lo-roller-slot-review/hi-lo-roller-slot-review.component';
import { HighCountryCasinoReviewComponent } from './reviews/high-country-casino-review/high-country-casino-review.component';
import { HighNoonCasinoReviewComponent } from './reviews/high-noon-casino-review/high-noon-casino-review.component';
import { HighwayCasinoReviewComponent } from './reviews/highway-casino-review/highway-casino-review.component';
import { IgnitionCasinoReviewComponent } from './reviews/ignition-casino-review/ignition-casino-review.component';
import { IrishLuckCasinoReviewComponent } from './reviews/irish-luck-casino-review/irish-luck-casino-review.component';
import { JackspayCasinoReviewComponent } from './reviews/jackspay-casino-review/jackspay-casino-review.component';
import { JuicyVegasCasinoReviewComponent } from './reviews/juicy-vegas-casino-review/juicy-vegas-casino-review.component';
import { LasAtlantisCasinoReviewComponent } from './reviews/las-atlantis-casino-review/las-atlantis-casino-review.component';
import { LasVegasCasinoReviewComponent } from './reviews/las-vegas-casino-review/las-vegas-casino-review.component';
import { LibertySlotsCasinoReviewComponent } from './reviews/liberty-slots-casino-review/liberty-slots-casino-review.component';
import { LincolnCasinoReviewComponent } from './reviews/lincoln-casino-review/lincoln-casino-review.component';
import { LuckyHippoCasinoReviewComponent } from './reviews/lucky-hippo-casino-review/lucky-hippo-casino-review.component';
import { LuckyRedCasinoReviewComponent } from './reviews/lucky-red-casino-review/lucky-red-casino-review.component';
import { LuckyTigerCasinoReviewComponent } from './reviews/lucky-tiger-casino-review/lucky-tiger-casino-review.component';
import { ManhattanSlotsCasinoReviewComponent } from './reviews/manhattan-slots-casino-review/manhattan-slots-casino-review.component';
import { MegaMoneyRushSlotReviewComponent } from './reviews/mega-money-rush-slot-review/mega-money-rush-slot-review.component';
import { MybCasinoReviewComponent } from './reviews/myb-casino-review/myb-casino-review.component';
import { MybookieCasinoReviewComponent } from './reviews/mybookie-casino-review/mybookie-casino-review.component';
import { OldHavanaCasinoReviewComponent } from './reviews/old-havana-casino-review/old-havana-casino-review.component';
import { PalaceOfChanceReviewComponent } from './reviews/palace-of-chance-review/palace-of-chance-review.component';
import { PlanetSevenCasinoReviewComponent } from './reviews/planet-seven-casino-review/planet-seven-casino-review.component';
import { PlaySunnyCasinoReviewComponent } from './reviews/play-sunny-casino-review/play-sunny-casino-review.component';
import { PotsOfLuckCasinoReviewComponent } from './reviews/pots-of-luck-casino-review/pots-of-luck-casino-review.component';
import { PrismCasinoReviewComponent } from './reviews/prism-casino-review/prism-casino-review.component';
import { PurePlatinumSlotReviewComponent } from './reviews/pure-platinum-slot-review/pure-platinum-slot-review.component';
import { RagingBullCasinoReviewComponent } from './reviews/raging-bull-casino-review/raging-bull-casino-review.component';
import { RedDogCasinoReviewComponent } from './reviews/red-dog-casino-review/red-dog-casino-review.component';
import { RichPalmsCasinoReviewComponent } from './reviews/rich-palms-casino-review/rich-palms-casino-review.component';
import { RoaringCasinoReviewComponent } from './reviews/roaring-casino-review/roaring-casino-review.component';
import { RoyalAceCasinoReviewComponent } from './reviews/royal-ace-casino-review/royal-ace-casino-review.component';
import { RubySlotsCasinoReviewComponent } from './reviews/ruby-slots-casino-review/ruby-slots-casino-review.component';
import { SandPrincessSlotReviewComponent } from './reviews/sand-princess-slot-review/sand-princess-slot-review.component';
import { ShazamCasinoReviewComponent } from './reviews/shazam-casino-review/shazam-casino-review.component';
import { SilverOakCasinoReviewComponent } from './reviews/silver-oak-casino-review/silver-oak-casino-review.component';
import { SlotMadnessCasinoReviewComponent } from './reviews/slot-madness-casino-review/slot-madness-casino-review.component';
import { SlotsEmpireCasinoReviewComponent } from './reviews/slots-empire-casino-review/slots-empire-casino-review.component';
import { SlotsLvCasinoReviewComponent } from './reviews/slots-lv-casino-review/slots-lv-casino-review.component';
import { SlotsOfVegasCasinoReviewComponent } from './reviews/slots-of-vegas-casino-review/slots-of-vegas-casino-review.component';
import { SlotsPlusCasinoReviewComponent } from './reviews/slots-plus-casino-review/slots-plus-casino-review.component';
import { SlotyCasinoReviewComponent } from './reviews/sloty-casino-review/sloty-casino-review.component';
import { SpinfinityCasinoReviewComponent } from './reviews/spinfinity-casino-review/spinfinity-casino-review.component';
import { SportsAndCasinoReviewComponent } from './reviews/sports-and-casino-review/sports-and-casino-review.component';
import { SportsBettingCasinoReviewComponent } from './reviews/sports-betting-casino-review/sports-betting-casino-review.component';
import { SunPalaceCasinoReviewComponent } from './reviews/sun-palace-casino-review/sun-palace-casino-review.component';
import { SuperSlotsCasinoReviewComponent } from './reviews/super-slots-casino-review/super-slots-casino-review.component';
import { SuperiorCasinoReviewComponent } from './reviews/superior-casino-review/superior-casino-review.component';
import { SupernovaCasinoReviewComponent } from './reviews/supernova-casino-review/supernova-casino-review.component';
import { TempleOfLuxorSlotReviewComponent } from './reviews/temple-of-luxor-slot-review/temple-of-luxor-slot-review.component';
import { ThunderstruckTwoOnlineSlotReviewComponent } from './reviews/thunderstruck-two-online-slot-review/thunderstruck-two-online-slot-review.component';
import { TigerGamingCasinoReviewComponent } from './reviews/tiger-gaming-casino-review/tiger-gaming-casino-review.component';
import { TombRaiderSlotReviewComponent } from './reviews/tomb-raider-slot-review/tomb-raider-slot-review.component';
import { TripleEightTigerCasinoReviewComponent } from './reviews/triple-eight-tiger-casino-review/triple-eight-tiger-casino-review.component';
import { TrueFortuneCasinoReviewComponent } from './reviews/true-fortune-casino-review/true-fortune-casino-review.component';
import { TwentyFourVipCasinoReviewComponent } from './reviews/twenty-four-vip-casino-review/twenty-four-vip-casino-review.component';
import { TwoUpCasinoReviewComponent } from './reviews/two-up-casino-review/two-up-casino-review.component';
import { VegasCasinoOnlineReviewComponent } from './reviews/vegas-casino-online-review/vegas-casino-online-review.component';
import { VegasCrestCasinoReviewComponent } from './reviews/vegas-crest-casino-review/vegas-crest-casino-review.component';
import { WildCardCityCasinoReviewComponent } from './reviews/wild-card-city-casino-review/wild-card-city-casino-review.component';
import { WildCasinoReviewComponent } from './reviews/wild-casino-review/wild-casino-review.component';
import { WildCoinsCasinoReviewComponent } from './reviews/wild-coins-casino-review/wild-coins-casino-review.component';
import { WildVegasCasinoReviewComponent } from './reviews/wild-vegas-casino-review/wild-vegas-casino-review.component';
import { WinningRoomCasinoReviewComponent } from './reviews/winning-room-casino-review/winning-room-casino-review.component';
import { XbetCasinoReviewComponent } from './reviews/xbet-casino-review/xbet-casino-review.component';
import { YabbyCasinoReviewComponent } from './reviews/yabby-casino-review/yabby-casino-review.component';


const routes: Routes = [
  // homepage
  { path: '', component: HomeComponent,pathMatch: 'full', },

  // reviews pages
  { path: 'silver-oak-casino-review', component: SilverOakCasinoReviewComponent, },
  { path: 'slot-madness-casino-review', component: SlotMadnessCasinoReviewComponent, },
  { path: 'roaring-21-casino-review', component: RoaringCasinoReviewComponent,},
  { path: 'lucky-hippo-casino-review', component: LuckyHippoCasinoReviewComponent,},
  { path: 'palace-of-chance-review', component: PalaceOfChanceReviewComponent,},
  { path: 'prism-casino-review', component: PrismCasinoReviewComponent,},
  { path: 'ruby-slots-casino-review', component: RubySlotsCasinoReviewComponent,},
  { path: 'royal-ace-casino-review', component: RoyalAceCasinoReviewComponent,},
  { path: 'ace-lucky-casino-review',component: AceLuckyCasinoReviewComponent,},
  { path: 'wild-card-city-casino-review', component: WildCardCityCasinoReviewComponent,},
  { path: 'casino-cruise-casino-review', component: CasinoCruiseCasinoReviewComponent,},
  { path: 'el-royale-casino-review', component: ElRoyaleCasinoReviewComponent,},
  { path: 'casino-mate-casino-review', component: CasinoMateCasinoReviewComponent,},
  { path: 'spinfinity-casino-review', component: SpinfinityCasinoReviewComponent,},
  { path: 'old-havana-casino-review', component: OldHavanaCasinoReviewComponent,},
  { path: 'casino-max-review', component: CasinoMaxReviewComponent,},
  { path: 'slots-empire-casino-review', component: SlotsEmpireCasinoReviewComponent,},
  { path: 'aussie-play-casino-review', component: AussiePlayCasinoReviewComponent,},
  { path: 'cherry-jackpot-casino-review', component: CherryJackpotCasinoReviewComponent,},
  { path: 'bovegas-casino-review', component: BovegasCasinoReviewComponent,},


  { path: 'eclipse-casino-review', component: EclipseCasinoReviewComponent,},
  { path: 'cherry-gold-casino-review', component: CherryGoldCasinoReviewComponent,},
  { path: 'dom-game-casino-review', component: DomGameCasinoReviewComponent,},
  { path: 'golden-lion-casino-review', component: GoldenLionCasinoReviewComponent,},
  { path: 'supernova-casino-review', component: SupernovaCasinoReviewComponent,},
  { path: 'bodog-casino-review', component: BodogCasinoReviewComponent,},
  { path: 'slots-lv-casino-review', component: SlotsLvCasinoReviewComponent,},
  { path: 'drake-casino-review', component: DrakeCasinoReviewComponent,},
  { path: 'cafe-casino-review', component: CafeCasinoReviewComponent,},
  { path: 'exclusive-casino-review', component: ExclusiveCasinoReviewComponent,},
  { path: 'free-spin-casino-review', component: FreeSpinCasinoReviewComponent,},
  { path: 'irish-luck-casino-review', component: IrishLuckCasinoReviewComponent,},
  { path: 'casino-reviews', component: CasinoReviewsComponent,},


  { path: 'ignition-casino-review', component: IgnitionCasinoReviewComponent,},
  { path: 'mybookie-casino-review', component: MybookieCasinoReviewComponent,},
  { path: 'buzzluck-casino-review', component: BuzzluckCasinoReviewComponent,},
  { path: 'jackspay-casino-review', component: JackspayCasinoReviewComponent,},
  { path: 'two-up-casino-review', component: TwoUpCasinoReviewComponent,},
  { path: 'bingo-fest-casino-review', component: BingoFestCasinoReviewComponent,},
  { path: '24-vip-casino-review', component: TwentyFourVipCasinoReviewComponent,},
  { path: 'bingo-spirit-casino-review', component: BingoSpiritCasinoReviewComponent,},
  { path: 'cyber-bingo-casino-review', component: CyberBingoCasinoReviewComponent,},
  { path: 'lucky-tiger-casino-review', component: LuckyTigerCasinoReviewComponent,},
  { path: 'crypto-reels-casino-review', component: CryptoReelsCasinoReviewComponent,},
  { path: 'club-world-casino-review', component: ClubWorldCasinoReviewComponent,},
  { path: 'highway-casino-review', component: HighwayCasinoReviewComponent,},
  { path: 'rich-palms-casino-review', component: RichPalmsCasinoReviewComponent,},
  { path: 'big-spin-casino-review', component: BigSpinCasinoReviewComponent,},
  { path: 'tiger-gaming-casino-review', component: TigerGamingCasinoReviewComponent,},
  { path: 'busr-casino-review', component: BusrCasinoReviewComponent,},
  { path: 'xbet-casino-review', component: XbetCasinoReviewComponent,},
  { path: 'myb-casino-review', component: MybCasinoReviewComponent,},
  { path: '888-tiger-casino-review', component: TripleEightTigerCasinoReviewComponent,},
  { path: 'sports-betting-casino-review', component: SportsBettingCasinoReviewComponent,},

  { path: 'sloty-casino-review', component: SlotyCasinoReviewComponent,},
  { path: 'vegas-crest-casino-review', component: VegasCrestCasinoReviewComponent,},
  { path: 'superior-casino-review', component: SuperiorCasinoReviewComponent,},
  { path: 'super-slots-casino-review', component: SuperSlotsCasinoReviewComponent,},
  { path: 'slots-plus-casino-review', component: SlotsPlusCasinoReviewComponent,},
  { path: 'wild-casino-review', component: WildCasinoReviewComponent,},
  { path: 'planet-7-casino-review', component: PlanetSevenCasinoReviewComponent,},
  { path: 'vegas-casino-online-review', component: VegasCasinoOnlineReviewComponent,},
  { path: 'las-vegas-casino-review', component: LasVegasCasinoReviewComponent,},
  { path: 'sun-palace-casino-review', component: SunPalaceCasinoReviewComponent,},
  { path: 'coolcat-casino-review', component: CoolcatCasinoReviewComponent,},
  { path: 'bovada-casino-review', component: BovadaCasinoReviewComponent,},
  { path: 'high-country-casino-review', component: HighCountryCasinoReviewComponent,},
  { path: 'club-player-casino-review', component: ClubPlayerCasinoReviewComponent,},
  { path: 'red-dog-casino-review', component: RedDogCasinoReviewComponent,},
  { path: 'raging-bull-casino-review', component: RagingBullCasinoReviewComponent,},
  { path: 'slots-of-vegas-casino-review', component: SlotsOfVegasCasinoReviewComponent,},
  { path: 'gossip-slots-casino-review', component: GossipSlotsCasinoReviewComponent,},
  { path: 'wild-vegas-casino-review', component: WildVegasCasinoReviewComponent,},

  { path: 'dreams-casino-review', component: DreamsCasinoReviewComponent,},
  { path: 'captain-jack-casino-review', component: CaptainJackCasinoReviewComponent,},
  { path: 'bridesmaids-slot-review', component: BridesmaidsSlotReviewComponent,},
  { path: 'emoticoins-slot-review', component: EmoticoinsSlotReviewComponent,},
  { path: 'play-sunny-casino-review', component: PlaySunnyCasinoReviewComponent,},
  { path: 'mega-money-rush-slot-review', component: MegaMoneyRushSlotReviewComponent,},
  { path: 'pots-of-luck-casino-review', component: PotsOfLuckCasinoReviewComponent,},
  { path: 'pure-platinum-slot-review', component: PurePlatinumSlotReviewComponent,},
  { path: 'sand-princess-slot-review', component: SandPrincessSlotReviewComponent,},
  { path: 'temple-of-luxor-slot-review', component: TempleOfLuxorSlotReviewComponent,},
  { path: 'tomb-raider-slot-review', component: TombRaiderSlotReviewComponent,},
  { path: 'winning-room-casino-review', component: WinningRoomCasinoReviewComponent,},

   // missing shortdesc and title
  { path: 'las-atlantis-casino-review', component: LasAtlantisCasinoReviewComponent,},
  { path: 'andromeda-casino-review', component: AndromedaCasinoReviewComponent,},
  { path: 'wild-coins-casino-review', component: WildCoinsCasinoReviewComponent,},
  { path: 'betus-casino-review', component: BetusCasinoReviewComponent,},
  { path: 'comic-play-casino-review', component: ComicPlayCasinoReviewComponent,},
  { path: 'grand-rush-casino-review', component: GrandRushCasinoReviewComponent,},
  { path: 'juicy-vegas-casino-review', component: JuicyVegasCasinoReviewComponent,},
  { path: 'lincoln-casino-review', component: LincolnCasinoReviewComponent,},
  { path: 'true-fortune-casino-review', component: TrueFortuneCasinoReviewComponent,},
  { path: 'shazam-casino-review', component: ShazamCasinoReviewComponent,},
  { path: 'bet-online-casino-review', component: BetOnlineCasinoReviewComponent,},
  { path: 'liberty-slots-casino-review', component: LibertySlotsCasinoReviewComponent,},
  { path: 'lucky-red-casino-review', component: LuckyRedCasinoReviewComponent,},
  { path: 'sports-and-casino-review', component: SportsAndCasinoReviewComponent,},
  { path: 'aladdins-gold-casino-review', component: AladdinsGoldCasinoReviewComponent,},
  { path: 'high-noon-casino-review', component: HighNoonCasinoReviewComponent,},
  { path: 'manhattan-slots-casino-review', component: ManhattanSlotsCasinoReviewComponent,},
  { path: 'all-star-slots-casino-review', component: AllStarSlotsCasinoReviewComponent,},
  { path: 'casino-extreme-review', component: CasinoExtremeReviewComponent,},
  { path: 'brango-casino-review', component: BrangoCasinoReviewComponent,},
  { path: 'yabby-casino-review', component: YabbyCasinoReviewComponent,},

  // pages with child pages microgaming

  // check the meta tags on the below URL
  { path: 'microgaming', children: [
    {path: '', component: MicrogamingComponent,},
    {path: 'adventure-palace', component: AdventurePalaceComponent,},
    {path: 'age-of-discovery', component: AgeOfDiscoveryComponent,},
    {path: 'agent-jane-blonde', component: AgentJaneBlondeComponent,},
    {path: 'alaskan-fishing', component: AlaskanFishingComponent,},
    {path: 'alley-cats', component: AlleyCatsComponent,},
    {path: 'arctic-fortune', component: ArcticFortuneComponent,},
    {path: 'ariana', component: ArianaComponent,},
    {path: 'asian-beauty', component: AsianBeautyComponent,},
    {path: 'avalon', component: AvalonComponent,},
    {path: 'bars-and-stripes', component: BarsAndStripesComponent,},
    {path: 'beach-babes', component: BeachBabesComponent,},
    {path: 'bearly-fishing', component: BearlyFishingComponent,},
    {path: 'bomber-girls', component: BomberGirlsComponent,},
    {path: 'boogie-monsters', component: BoogieMonstersComponent,},
    {path: 'break-da-bank-again', component: BreakDaBankAgainComponent,},
    {path: 'buffet-bonanza', component: BuffetBonanzaComponent,},
    {path: 'bush-telegraph', component: BushTelegraphComponent,},
    {path: 'captain-cash', component: CaptainCashComponent,},
    {path: 'cabin-fever', component: CabinFeverComponent,},
    {path: 'doctor-love', component: DoctorLoveComponent,},
    {path: 'exotic-cats', component: ExoticCatsComponent,},
    {path: 'fat-lady-sings', component: FatLadySingsComponent,},
    {path: 'fortunium', component: FortuniumComponent,},
    {path: 'immortal-romance', component: ImmortalRomanceComponent,},
    {path: 'mega-moolah', component: MegaMoolahComponent,},
    {path: 'playboy-gold', component: PlayboyGoldComponent,},
    {path: 'rainbrew', component: RainbrewComponent,},
    {path: 'wild-scarabs', component: WildScarabsComponent,},

  ],},

   // pages with child pages online roulette

   { path: 'online-roulette',children:[
     { path: '', component: OnlineRouletteComponent, },
     { path: 'american-roulette', component: AmericanRouletteComponent,},
     { path: 'european-roulette', component: EuropeanRouletteComponent,},
     { path: 'french-roulette', component: FrenchRouletteComponent,},
     { path: 'how-to-play-roulette', component: HowToPlayRouletteComponent,},
     { path: 'multi-player-roulette', component: MultiPlayerRouletteComponent,},
     { path: 'multi-wheel-roulette', component: MultiWheelRouletteComponent,},
     { path: 'premier-roulette', component: PremierRouletteComponent,},
     { path: 'roulette-royale', component: RouletteRoyaleComponent,},
     { path: 'roulette-tips', component: TipsComponent,},
   ], },

  // pages with child pages casino bonuses

   { path: 'casino-bonuses', children:[
    { path: '', component: CasinoBonusesComponent,},
    { path: 'birthday', component: BirthdayComponent,},
    { path: 'free-spins', component: FreeSpinsComponent,},
    { path: 'no-deposit-bonus', component: NoDepositBonusComponent,},
    { path: 'welcome-bonus', component: WelcomeBonusComponent,},

   ]},

   { path: 'mobile-casinos', component: MobileCasinosComponent,},
   { path: 'android-casinos', component: AndroidCasinosComponent,},
   { path: 'apple-casinos', component: AppleCasinosComponent,},

   { path: 'live-dealer-casinos', component: LiveDealerCasinosComponent,},
   { path: 'online-baccarat', children:[
    { path:'', component: OnlineBaccaratComponent,},
    { path: 'baccarat-tips', component: BaccaratTipsComponent}
   ],},


   { path: 'online-blackjack', children:[
     { path: '', component: OnlineBlackjackComponent,},
     { path: 'blackjack-rules', component: BlackjackRulesComponent,},
     { path: 'blackjack-strategy', component: BlackjackStrategyComponent,},
     { path: 'card-counting', component: CardCountingComponent,},
     { path: 'glossary', component: GlossaryComponent,},
     { path: 'how-to-play-blackjack', component: HowToPlayBlackjackComponent,},
     { path: 'win-at-blackjack', component: WinAtBlackjackComponent,},
     { path: 'blackjack-tips', component: OnlineBlackjackTipsComponent,},
   ], },


   { path: 'online-craps', children:[
     { path: '', component: OnlineCrapsComponent,},
     { path: 'craps-glossary', component: CrapsGlossaryComponent,},
     { path: 'craps-rules', component: CrapsRulesComponent,},
     { path: 'craps-tips', component: CrapsTipsComponent,},
     { path: 'how-to-play-craps', component: HowToPlayCrapsComponent,},
   ], },

  { path: 'responsible-gaming', component: ResponsibleGamingComponent,},
  { path: 'bitcoin-casinos', component: BitcoinCasinosComponent,},
  { path: 'big-win-casinos', component: BigWinCasinosComponent,},
  { path: 'online-lotteries', component: OnlineLotteriesComponent,},
  { path: 'sports-betting', component: SportsBettingComponent,},
  { path: 'progressive-jackpots', component: ProgressiveJackpotsComponent,},
  { path: 'free-casino-games', component: FreeCasinoGamesComponent,},
  { path: 'table-games', component: TableGamesComponent,},
  { path: 'new-online-casinos', component: NewOnlineCasinosComponent,},
  { path: 'best-payout-casinos', component: BestPayoutCasinosComponent,},
  { path: 'download-casinos', component: DownloadCasinosComponent,},
  { path: 'traits-of-a-good-online-casino', component: TraitsOfAGoodOnlineCasinoComponent,},
  { path: 'betsoft-casinos', component: BetsoftCasinosComponent,},
  { path: 'igt-gaming-casinos', component: IgtGamingCasinosComponent,},
  { path: 'pai-gow-poker', component: PaiGowPokerComponent,},
  { path: 'rival-casinos', component: RivalCasinosComponent,},

  { path: 'pragmatic-play-casinos', component: PragmaticPlayCasinosComponent,},
  { path: 'quickspin-casinos', component: QuickspinCasinosComponent,},
  { path: 'best-payout-slots', component: BestPayoutSlotsComponent,},
  // { path: 'sunny-casino-review', component: SunnyCasinoReviewComponent,},
  { path: 'online-gambling-tips', component:  OnlineGamblingTipsComponent,},
  { path: 'keno', component: KenoComponent,},
  { path: 'highest-payout-casino-games', component: HighestPayoutCasinoGamesComponent,},

  { path: 'casino-game-index', component: CasinoGameIndexComponent,},
  { path: 'faqs', component: FaqsComponent,},
  { path: 'online-lotteries', component: OnlineLotteriesComponent,},

   { path: 'online-poker', component: OnlinePokerComponent,},
   { path: 'online-slots', children: [
    { path: '', component: OnlineSlotsComponent,},
    { path: '5-reel-slots', component: FiveReelSlotsComponent,},
    { path: 'slots-tips', component: SlotsTipsComponent,},
    { path: '3-reel-slots', component: ThreeReelSlotsComponent,},
   ], },
   
   { path: 'online-video-poker', children:[
     { path: '', component: OnlineVideoPokerComponent,},
     { path: 'jokers-wild', component: JokersWildComponent,},
     { path: 'bonus-video-poker', component: BonusVideoPokerComponent,},
     { path: 'deuces-wild-video-poker', component: DeucesWildVideoPokerComponent,},
     { path: 'double-bonus-video-poker', component: DoubleBonusVideoPokerComponent,},
     { path: 'how-to-play-video-poker', component: HowToPlayVideoPokerComponent,},
     { path: 'jacks-or-better-video-poker', component: JacksOrBetterVideoPokerComponent,},
     { path: 'tens-or-better', component: TensOrBetterComponent,},
     { path: 'video-poker-tips', component: OnlineVideoPokerTipsComponent,},
     { path: 'double-double-bonus-video-poker', component: DoubleDoubleBonusVideoPokerComponent,},
     
   ], },

   { path: 'casino-games', component: CasinoGamesComponent,},
   { path: 'sitemap', component: SitemapComponent,},
   { path: 'about-us', component: AboutUsComponent,},
   { path: 'contact-us', component: ContactUsComponent,},

   { path: 'states', children: [
     { path: '', component: StatesComponent,},
     { path: 'alabama', component: AlabamaComponent,},
     { path: 'alaska', component: AlaskaComponent,},
     { path: 'arizona', component: ArizonaComponent,},
     { path: 'arkansas', component: ArkansasComponent,},
     { path: 'california', component: CaliforniaComponent,},
     { path: 'delaware', component: DelawareComponent,},
     { path: 'hawaii', component: HawaiiComponent,},
     { path: 'iowa', component: IowaComponent,},
     { path: 'kentucky', component: KentuckyComponent,},
     { path: 'nevada', component: NevadaComponent,},
     { path: 'new-jersey', component: NewJerseyComponent,},
     { path: 'new-york', component: NewYorkComponent,},
     { path: 'pennsylvania', component: PennsylvaniaComponent,},
     { path: 'texas', component: TexasComponent,},
     { path: 'washington', component: WashingtonComponent,},
     { path: 'wisconsin', component: WisconsinComponent,},

   ]},

  { path: 'safe-online-casinos', component: SafeOnlineCasinosComponent,},
  { path: 'high-roller-casinos', component: HighRollerCasinosComponent,},
  { path: 'real-money-casinos', component: RealMoneyCasinosComponent,},

  { path: 'banking', children:[
    { path: '', component: BankingComponent,},
    { path: 'credit-card-casinos', component: CreditCardCasinosComponent,},
    { path: 'debit-card-casinos', component: DebitCardCasinosComponent,},
    { path: 'ecopayz-casinos', component: EcopayzCasinosComponent,},
    { path: 'entropay-casinos', component: EntropayCasinosComponent,},
    { path: 'mastercard-casinos', component: MastercardCasinosComponent,},
    { path: 'neteller-casinos', component: NetellerCasinosComponent,},
    { path: 'paysafecard-casinos', component: PaysafecardCasinosComponent,},
    { path: 'usemybank-casinos', component: UsemybankCasinosComponent,},
    { path: 'visa-casinos', component: VisaCasinosComponent,},
  ],},
 { path: 'thunderstruck-two-online-slot-review', component: ThunderstruckTwoOnlineSlotReviewComponent,},
 { path: 'hi-lo-roller-slot-review', component: HiLoRollerSlotReviewComponent,},
 { path: '**', component: NoPageFoundComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
