import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { LazyLoadImageModule} from 'ng-lazyload-image';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgAisModule } from 'angular-instantsearch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTableComponent } from './shortcode/main-table/main-table.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SilverOakCasinoReviewComponent } from './reviews/silver-oak-casino-review/silver-oak-casino-review.component';
import { SlotMadnessCasinoReviewComponent } from './reviews/slot-madness-casino-review/slot-madness-casino-review.component';
import { RoaringCasinoReviewComponent } from './reviews/roaring-casino-review/roaring-casino-review.component';
import { LuckyHippoCasinoReviewComponent } from './reviews/lucky-hippo-casino-review/lucky-hippo-casino-review.component';
import { PalaceOfChanceReviewComponent } from './reviews/palace-of-chance-review/palace-of-chance-review.component';
import { PrismCasinoReviewComponent } from './reviews/prism-casino-review/prism-casino-review.component';
import { RubySlotsCasinoReviewComponent } from './reviews/ruby-slots-casino-review/ruby-slots-casino-review.component';
import { RoyalAceCasinoReviewComponent } from './reviews/royal-ace-casino-review/royal-ace-casino-review.component';
import { AceLuckyCasinoReviewComponent } from './reviews/ace-lucky-casino-review/ace-lucky-casino-review.component';
import { WildCardCityCasinoReviewComponent } from './reviews/wild-card-city-casino-review/wild-card-city-casino-review.component';
import { CasinoCruiseCasinoReviewComponent } from './reviews/casino-cruise-casino-review/casino-cruise-casino-review.component';
import { ElRoyaleCasinoReviewComponent } from './reviews/el-royale-casino-review/el-royale-casino-review.component';
import { CasinoMateCasinoReviewComponent } from './reviews/casino-mate-casino-review/casino-mate-casino-review.component';
import { SpinfinityCasinoReviewComponent } from './reviews/spinfinity-casino-review/spinfinity-casino-review.component';
import { OldHavanaCasinoReviewComponent } from './reviews/old-havana-casino-review/old-havana-casino-review.component';
import { CasinoMaxReviewComponent } from './reviews/casino-max-review/casino-max-review.component';
import { SlotsEmpireCasinoReviewComponent } from './reviews/slots-empire-casino-review/slots-empire-casino-review.component';
import { AussiePlayCasinoReviewComponent } from './reviews/aussie-play-casino-review/aussie-play-casino-review.component';
import { CherryJackpotCasinoReviewComponent } from './reviews/cherry-jackpot-casino-review/cherry-jackpot-casino-review.component';
import { BovegasCasinoReviewComponent } from './reviews/bovegas-casino-review/bovegas-casino-review.component';
import { EclipseCasinoReviewComponent } from './reviews/eclipse-casino-review/eclipse-casino-review.component';
import { CherryGoldCasinoReviewComponent } from './reviews/cherry-gold-casino-review/cherry-gold-casino-review.component';
import { DomGameCasinoReviewComponent } from './reviews/dom-game-casino-review/dom-game-casino-review.component';
import { GoldenLionCasinoReviewComponent } from './reviews/golden-lion-casino-review/golden-lion-casino-review.component';
import { SupernovaCasinoReviewComponent } from './reviews/supernova-casino-review/supernova-casino-review.component';
import { BodogCasinoReviewComponent } from './reviews/bodog-casino-review/bodog-casino-review.component';
import { SlotsLvCasinoReviewComponent } from './reviews/slots-lv-casino-review/slots-lv-casino-review.component';
import { DrakeCasinoReviewComponent } from './reviews/drake-casino-review/drake-casino-review.component';
import { CafeCasinoReviewComponent } from './reviews/cafe-casino-review/cafe-casino-review.component';
import { ExclusiveCasinoReviewComponent } from './reviews/exclusive-casino-review/exclusive-casino-review.component';
import { FreeSpinCasinoReviewComponent } from './reviews/free-spin-casino-review/free-spin-casino-review.component';
import { IrishLuckCasinoReviewComponent } from './reviews/irish-luck-casino-review/irish-luck-casino-review.component';
import { CasinoReviewsComponent } from './reviews/casino-reviews/casino-reviews.component';
import { IgnitionCasinoReviewComponent } from './reviews/ignition-casino-review/ignition-casino-review.component';
import { MybookieCasinoReviewComponent } from './reviews/mybookie-casino-review/mybookie-casino-review.component';
import { JackspayCasinoReviewComponent } from './reviews/jackspay-casino-review/jackspay-casino-review.component';
import { TwoUpCasinoReviewComponent } from './reviews/two-up-casino-review/two-up-casino-review.component';
import { BingoFestCasinoReviewComponent } from './reviews/bingo-fest-casino-review/bingo-fest-casino-review.component';
import { TwentyFourVipCasinoReviewComponent } from './reviews/twenty-four-vip-casino-review/twenty-four-vip-casino-review.component';
import { BingoSpiritCasinoReviewComponent } from './reviews/bingo-spirit-casino-review/bingo-spirit-casino-review.component';
import { CyberBingoCasinoReviewComponent } from './reviews/cyber-bingo-casino-review/cyber-bingo-casino-review.component';
import { LuckyTigerCasinoReviewComponent } from './reviews/lucky-tiger-casino-review/lucky-tiger-casino-review.component';
import { HighwayCasinoReviewComponent } from './reviews/highway-casino-review/highway-casino-review.component';
import { RichPalmsCasinoReviewComponent } from './reviews/rich-palms-casino-review/rich-palms-casino-review.component';
import { BigSpinCasinoReviewComponent } from './reviews/big-spin-casino-review/big-spin-casino-review.component';
import { TigerGamingCasinoReviewComponent } from './reviews/tiger-gaming-casino-review/tiger-gaming-casino-review.component';
import { BusrCasinoReviewComponent } from './reviews/busr-casino-review/busr-casino-review.component';
import { XbetCasinoReviewComponent } from './reviews/xbet-casino-review/xbet-casino-review.component';
import { MybCasinoReviewComponent } from './reviews/myb-casino-review/myb-casino-review.component';
import { TripleEightTigerCasinoReviewComponent } from './reviews/triple-eight-tiger-casino-review/triple-eight-tiger-casino-review.component';
import { SportsBettingCasinoReviewComponent } from './reviews/sports-betting-casino-review/sports-betting-casino-review.component';
import { VegasCrestCasinoReviewComponent } from './reviews/vegas-crest-casino-review/vegas-crest-casino-review.component';
import { SuperiorCasinoReviewComponent } from './reviews/superior-casino-review/superior-casino-review.component';
import { SuperSlotsCasinoReviewComponent } from './reviews/super-slots-casino-review/super-slots-casino-review.component';
import { SlotsPlusCasinoReviewComponent } from './reviews/slots-plus-casino-review/slots-plus-casino-review.component';
import { WildCasinoReviewComponent } from './reviews/wild-casino-review/wild-casino-review.component';
import { PlanetSevenCasinoReviewComponent } from './reviews/planet-seven-casino-review/planet-seven-casino-review.component';
import { LasVegasCasinoReviewComponent } from './reviews/las-vegas-casino-review/las-vegas-casino-review.component';
import { SunPalaceCasinoReviewComponent } from './reviews/sun-palace-casino-review/sun-palace-casino-review.component';
import { CoolcatCasinoReviewComponent } from './reviews/coolcat-casino-review/coolcat-casino-review.component';
import { BovadaCasinoReviewComponent } from './reviews/bovada-casino-review/bovada-casino-review.component';
import { HighCountryCasinoReviewComponent } from './reviews/high-country-casino-review/high-country-casino-review.component';
import { ClubPlayerCasinoReviewComponent } from './reviews/club-player-casino-review/club-player-casino-review.component';
import { RedDogCasinoReviewComponent } from './reviews/red-dog-casino-review/red-dog-casino-review.component';
import { RagingBullCasinoReviewComponent } from './reviews/raging-bull-casino-review/raging-bull-casino-review.component';
import { SlotsOfVegasCasinoReviewComponent } from './reviews/slots-of-vegas-casino-review/slots-of-vegas-casino-review.component';
import { GossipSlotsCasinoReviewComponent } from './reviews/gossip-slots-casino-review/gossip-slots-casino-review.component';
import { WildVegasCasinoReviewComponent } from './reviews/wild-vegas-casino-review/wild-vegas-casino-review.component';
import { DreamsCasinoReviewComponent } from './reviews/dreams-casino-review/dreams-casino-review.component';
import { CaptainJackCasinoReviewComponent } from './reviews/captain-jack-casino-review/captain-jack-casino-review.component';
import { BridesmaidsSlotReviewComponent } from './reviews/bridesmaids-slot-review/bridesmaids-slot-review.component';
import { EmoticoinsSlotReviewComponent } from './reviews/emoticoins-slot-review/emoticoins-slot-review.component';
import { PlaySunnyCasinoReviewComponent } from './reviews/play-sunny-casino-review/play-sunny-casino-review.component';
import { MegaMoneyRushSlotReviewComponent } from './reviews/mega-money-rush-slot-review/mega-money-rush-slot-review.component';
import { PotsOfLuckCasinoReviewComponent } from './reviews/pots-of-luck-casino-review/pots-of-luck-casino-review.component';
import { PurePlatinumSlotReviewComponent } from './reviews/pure-platinum-slot-review/pure-platinum-slot-review.component';
import { HiLoRollerSlotReviewComponent } from './reviews/hi-lo-roller-slot-review/hi-lo-roller-slot-review.component';
import { SandPrincessSlotReviewComponent } from './reviews/sand-princess-slot-review/sand-princess-slot-review.component';
import { TempleOfLuxorSlotReviewComponent } from './reviews/temple-of-luxor-slot-review/temple-of-luxor-slot-review.component';
import { ThunderstruckTwoOnlineSlotReviewComponent } from './reviews/thunderstruck-two-online-slot-review/thunderstruck-two-online-slot-review.component';
import { TombRaiderSlotReviewComponent } from './reviews/tomb-raider-slot-review/tomb-raider-slot-review.component';
import { WinningRoomCasinoReviewComponent } from './reviews/winning-room-casino-review/winning-room-casino-review.component';
import { SlotyCasinoReviewComponent } from './reviews/sloty-casino-review/sloty-casino-review.component';
import { LasAtlantisCasinoReviewComponent } from './reviews/las-atlantis-casino-review/las-atlantis-casino-review.component';
import { AndromedaCasinoReviewComponent } from './reviews/andromeda-casino-review/andromeda-casino-review.component';
import { WildCoinsCasinoReviewComponent } from './reviews/wild-coins-casino-review/wild-coins-casino-review.component';
import { BetusCasinoReviewComponent } from './reviews/betus-casino-review/betus-casino-review.component';
import { ComicPlayCasinoReviewComponent } from './reviews/comic-play-casino-review/comic-play-casino-review.component';
import { GrandRushCasinoReviewComponent } from './reviews/grand-rush-casino-review/grand-rush-casino-review.component';
import { JuicyVegasCasinoReviewComponent } from './reviews/juicy-vegas-casino-review/juicy-vegas-casino-review.component';
import { LincolnCasinoReviewComponent } from './reviews/lincoln-casino-review/lincoln-casino-review.component';
import { TrueFortuneCasinoReviewComponent } from './reviews/true-fortune-casino-review/true-fortune-casino-review.component';
import { ShazamCasinoReviewComponent } from './reviews/shazam-casino-review/shazam-casino-review.component';
import { BetOnlineCasinoReviewComponent } from './reviews/bet-online-casino-review/bet-online-casino-review.component';
import { LibertySlotsCasinoReviewComponent } from './reviews/liberty-slots-casino-review/liberty-slots-casino-review.component';
import { LuckyRedCasinoReviewComponent } from './reviews/lucky-red-casino-review/lucky-red-casino-review.component';
import { SportsAndCasinoReviewComponent } from './reviews/sports-and-casino-review/sports-and-casino-review.component';
import { AladdinsGoldCasinoReviewComponent } from './reviews/aladdins-gold-casino-review/aladdins-gold-casino-review.component';
import { HighNoonCasinoReviewComponent } from './reviews/high-noon-casino-review/high-noon-casino-review.component';
import { ManhattanSlotsCasinoReviewComponent } from './reviews/manhattan-slots-casino-review/manhattan-slots-casino-review.component';
import { AllStarSlotsCasinoReviewComponent } from './reviews/all-star-slots-casino-review/all-star-slots-casino-review.component';
import { CasinoExtremeReviewComponent } from './reviews/casino-extreme-review/casino-extreme-review.component';
import { BrangoCasinoReviewComponent } from './reviews/brango-casino-review/brango-casino-review.component';
import { YabbyCasinoReviewComponent } from './reviews/yabby-casino-review/yabby-casino-review.component';
import { MicrogamingComponent } from './pages/microgaming/microgaming/microgaming.component';
import { AgeOfDiscoveryComponent } from './pages/microgaming/age-of-discovery/age-of-discovery.component';
import { BearlyFishingComponent } from './pages/microgaming/bearly-fishing/bearly-fishing.component';
import { AsianBeautyComponent } from './pages/microgaming/asian-beauty/asian-beauty.component';
import { BushTelegraphComponent } from './pages/microgaming/bush-telegraph/bush-telegraph.component';
import { BomberGirlsComponent } from './pages/microgaming/bomber-girls/bomber-girls.component';
import { ArianaComponent } from './pages/microgaming/ariana/ariana.component';
import { BoogieMonstersComponent } from './pages/microgaming/boogie-monsters/boogie-monsters.component';
import { AvalonComponent } from './pages/microgaming/avalon/avalon.component';
import { AlaskanFishingComponent } from './pages/microgaming/alaskan-fishing/alaskan-fishing.component';
import { ArcticFortuneComponent } from './pages/microgaming/arctic-fortune/arctic-fortune.component';
import { BeachBabesComponent } from './pages/microgaming/beach-babes/beach-babes.component';
import { BreakDaBankAgainComponent } from './pages/microgaming/break-da-bank-again/break-da-bank-again.component';
import { BuffetBonanzaComponent } from './pages/microgaming/buffet-bonanza/buffet-bonanza.component';
import { BarsAndStripesComponent } from './pages/microgaming/bars-and-stripes/bars-and-stripes.component';
import { ImmortalRomanceComponent } from './pages/microgaming/immortal-romance/immortal-romance.component';
import { AdventurePalaceComponent } from './pages/microgaming/adventure-palace/adventure-palace.component';
import { AgentJaneBlondeComponent } from './pages/microgaming/agent-jane-blonde/agent-jane-blonde.component';
import { AlleyCatsComponent } from './pages/microgaming/alley-cats/alley-cats.component';
import { CabinFeverComponent } from './pages/microgaming/cabin-fever/cabin-fever.component';
import { CaptainCashComponent } from './pages/microgaming/captain-cash/captain-cash.component';
import { DoctorLoveComponent } from './pages/microgaming/doctor-love/doctor-love.component';
import { ExoticCatsComponent } from './pages/microgaming/exotic-cats/exotic-cats.component';
import { FatLadySingsComponent } from './pages/microgaming/fat-lady-sings/fat-lady-sings.component';
import { FortuniumComponent } from './pages/microgaming/fortunium/fortunium.component';
import { MegaMoolahComponent } from './pages/microgaming/mega-moolah/mega-moolah.component';
import { PlayboyGoldComponent } from './pages/microgaming/playboy-gold/playboy-gold.component';
import { RainbrewComponent } from './pages/microgaming/rainbrew/rainbrew.component';
import { WildScarabsComponent } from './pages/microgaming/wild-scarabs/wild-scarabs.component';
import { PageTemplateComponent } from './pages/page-template/page-template.component';
import { OnlineRouletteComponent } from './pages/online-roulette/online-roulette/online-roulette.component';
import { HowToPlayRouletteComponent } from './pages/online-roulette/how-to-play-roulette/how-to-play-roulette.component';
import { TipsComponent } from './pages/online-roulette/tips/tips.component';
import { RouletteRoyaleComponent } from './pages/online-roulette/roulette-royale/roulette-royale.component';
import { AmericanRouletteComponent } from './pages/online-roulette/american-roulette/american-roulette.component';
import { EuropeanRouletteComponent } from './pages/online-roulette/european-roulette/european-roulette.component';
import { FrenchRouletteComponent } from './pages/online-roulette/french-roulette/french-roulette.component';
import { MultiWheelRouletteComponent } from './pages/online-roulette/multi-wheel-roulette/multi-wheel-roulette.component';
import { MultiPlayerRouletteComponent } from './pages/online-roulette/multi-player-roulette/multi-player-roulette.component';
import { PremierRouletteComponent } from './pages/online-roulette/premier-roulette/premier-roulette.component';
import { CasinoBonusesComponent } from './pages/casino-bonuses/casino-bonuses/casino-bonuses.component';
import { BirthdayComponent } from './pages/casino-bonuses/birthday/birthday.component';
import { NoDepositBonusComponent } from './pages/casino-bonuses/no-deposit-bonus/no-deposit-bonus.component';
import { FreeSpinsComponent } from './pages/casino-bonuses/free-spins/free-spins.component';
import { WelcomeBonusComponent } from './pages/casino-bonuses/welcome-bonus/welcome-bonus.component';
import { MobileCasinosComponent } from './pages/mobile-casinos/mobile-casinos.component';
import { AppleCasinosComponent } from './pages/apple-casinos/apple-casinos.component';
import { AndroidCasinosComponent } from './pages/android-casinos/android-casinos.component';
import { OnlineBaccaratComponent } from './pages/casino-games/online-baccarat/online-baccarat.component';
import { OnlineBlackjackComponent } from './pages/casino-games/online-blackjack/online-blackjack.component';
import { OnlineCrapsComponent } from './pages/casino-games/online-craps/online-craps.component';
import { OnlineVideoPokerComponent } from './pages/casino-games/online-video-poker/online-video-poker.component';
import { OnlinePokerComponent } from './pages/casino-games/online-poker/online-poker.component';
import { LiveDealerCasinosComponent } from './pages/casino-games/live-dealer-casinos/live-dealer-casinos.component';
import { CasinoGamesComponent } from './pages/casino-games/casino-games/casino-games.component';
import { OnlineSlotsComponent } from './pages/online-slots/online-slots.component';
import { FiveReelSlotsComponent } from './pages/online-slot/five-reel-slots/five-reel-slots.component';
import { ThreeReelSlotsComponent } from './pages/online-slot/three-reel-slots/three-reel-slots.component';
import { SlotsTipsComponent } from './pages/online-slot/slots-tips/slots-tips.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { ResponsibleGamingComponent } from './pages/responsible-gaming/responsible-gaming.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { StatesComponent } from './pages/states/states/states.component';
import { NevadaComponent } from './pages/states/nevada/nevada.component';
import { DelawareComponent } from './pages/states/delaware/delaware.component';
import { NewJerseyComponent } from './pages/states/new-jersey/new-jersey.component';
import { NewYorkComponent } from './pages/states/new-york/new-york.component';
import { PennsylvaniaComponent } from './pages/states/pennsylvania/pennsylvania.component';
import { CaliforniaComponent } from './pages/states/california/california.component';
import { AlabamaComponent } from './pages/states/alabama/alabama.component';
import { AlaskaComponent } from './pages/states/alaska/alaska.component';
import { ArkansasComponent } from './pages/states/arkansas/arkansas.component';
import { HawaiiComponent } from './pages/states/hawaii/hawaii.component';
import { IowaComponent } from './pages/states/iowa/iowa.component';
import { KentuckyComponent } from './pages/states/kentucky/kentucky.component';
import { TexasComponent } from './pages/states/texas/texas.component';
import { WashingtonComponent } from './pages/states/washington/washington.component';
import { ArizonaComponent } from './pages/states/arizona/arizona.component';
import { WisconsinComponent } from './pages/states/wisconsin/wisconsin.component';
import { SafeOnlineCasinosComponent } from './pages/safe-online-casinos/safe-online-casinos.component';
import { HighRollerCasinosComponent } from './pages/high-roller-casinos/high-roller-casinos.component';
import { RealMoneyCasinosComponent } from './pages/real-money-casinos/real-money-casinos.component';
import { BankingComponent } from './pages/banking/banking/banking.component';
import { NetellerCasinosComponent } from './pages/banking/neteller-casinos/neteller-casinos.component';
import { VisaCasinosComponent } from './pages/banking/visa-casinos/visa-casinos.component';
import { DebitCardCasinosComponent } from './pages/banking/debit-card-casinos/debit-card-casinos.component';
import { CreditCardCasinosComponent } from './pages/banking/credit-card-casinos/credit-card-casinos.component';
import { EcopayzCasinosComponent } from './pages/banking/ecopayz-casinos/ecopayz-casinos.component';
import { EntropayCasinosComponent } from './pages/banking/entropay-casinos/entropay-casinos.component';
import { MastercardCasinosComponent } from './pages/banking/mastercard-casinos/mastercard-casinos.component';
import { PaysafecardCasinosComponent } from './pages/banking/paysafecard-casinos/paysafecard-casinos.component';
import { UsemybankCasinosComponent } from './pages/banking/usemybank-casinos/usemybank-casinos.component';
import { JokersWildComponent } from './pages/online-video-poker/jokers-wild/jokers-wild.component';
import { BonusVideoPokerComponent } from './pages/online-video-poker/bonus-video-poker/bonus-video-poker.component';
import { DeucesWildVideoPokerComponent } from './pages/online-video-poker/deuces-wild-video-poker/deuces-wild-video-poker.component';
import { DoubleBonusVideoPokerComponent } from './pages/online-video-poker/double-bonus-video-poker/double-bonus-video-poker.component';
import { DoubleDoubleBonusVideoPokerComponent } from './pages/online-video-poker/double-double-bonus-video-poker/double-double-bonus-video-poker.component';
import { HowToPlayVideoPokerComponent } from './pages/online-video-poker/how-to-play-video-poker/how-to-play-video-poker.component';
import { JacksOrBetterVideoPokerComponent } from './pages/online-video-poker/jacks-or-better-video-poker/jacks-or-better-video-poker.component';
import { TensOrBetterComponent } from './pages/online-video-poker/tens-or-better/tens-or-better.component';
import { OnlineVideoPokerTipsComponent } from './pages/online-video-poker/online-video-poker-tips/online-video-poker-tips.component';
import { BlackjackRulesComponent } from './pages/online-blackjack-vp/blackjack-rules/blackjack-rules.component';
import { BlackjackStrategyComponent } from './pages/online-blackjack-vp/blackjack-strategy/blackjack-strategy.component';
import { CardCountingComponent } from './pages/online-blackjack-vp/card-counting/card-counting.component';
import { GlossaryComponent } from './pages/online-blackjack-vp/glossary/glossary.component';
import { HowToPlayBlackjackComponent } from './pages/online-blackjack-vp/how-to-play-blackjack/how-to-play-blackjack.component';
import { WinAtBlackjackComponent } from './pages/online-blackjack-vp/win-at-blackjack/win-at-blackjack.component';
import { OnlineBlackjackTipsComponent } from './pages/online-blackjack-vp/online-blackjack-tips/online-blackjack-tips.component';
import { CrapsRulesComponent } from './pages/online-craps/craps-rules/craps-rules.component';
import { CrapsGlossaryComponent } from './pages/online-craps/craps-glossary/craps-glossary.component';
import { HowToPlayCrapsComponent } from './pages/online-craps/how-to-play-craps/how-to-play-craps.component';
import { OnlineLotteriesComponent } from './pages/online-lotteries/online-lotteries.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { CasinoGameIndexComponent } from './pages/casino-game-index/casino-game-index.component';
import { HighestPayoutCasinoGamesComponent } from './pages/highest-payout-casino-games/highest-payout-casino-games.component';
import { KenoComponent } from './pages/keno/keno.component';
import { OnlineGamblingTipsComponent } from './pages/online-gambling-tips/online-gambling-tips.component';
import { SunnyCasinoReviewComponent } from './pages/sunny-casino-review/sunny-casino-review.component';
import { BestPayoutSlotsComponent } from './pages/best-payout-slots/best-payout-slots.component';
import { QuickspinCasinosComponent } from './pages/quickspin-casinos/quickspin-casinos.component';
import { PragmaticPlayCasinosComponent } from './pages/pragmatic-play-casinos/pragmatic-play-casinos.component';
import { RivalCasinosComponent } from './pages/rival-casinos/rival-casinos.component';
import { PaiGowPokerComponent } from './pages/pai-gow-poker/pai-gow-poker.component';
import { IgtGamingCasinosComponent } from './pages/igt-gaming-casinos/igt-gaming-casinos.component';
import { BetsoftCasinosComponent } from './pages/betsoft-casinos/betsoft-casinos.component';
import { TraitsOfAGoodOnlineCasinoComponent } from './pages/traits-of-a-good-online-casino/traits-of-a-good-online-casino.component';
import { DownloadCasinosComponent } from './pages/download-casinos/download-casinos.component';
import { BestPayoutCasinosComponent } from './pages/best-payout-casinos/best-payout-casinos.component';
import { NewOnlineCasinosComponent } from './pages/new-online-casinos/new-online-casinos.component';
import { TableGamesComponent } from './pages/table-games/table-games.component';
import { FreeCasinoGamesComponent } from './pages/free-casino-games/free-casino-games.component';
import { ProgressiveJackpotsComponent } from './pages/progressive-jackpots/progressive-jackpots.component';
import { SportsBettingComponent } from './pages/sports-betting/sports-betting.component';
import { BigWinCasinosComponent } from './pages/big-win-casinos/big-win-casinos.component';
import { BitcoinCasinosComponent } from './pages/bitcoin-casinos/bitcoin-casinos.component';
import { SearchComponent } from './search/search.component';
import { VegasCasinoOnlineReviewComponent } from './reviews/vegas-casino-online-review/vegas-casino-online-review.component';
import { CryptoReelsCasinoReviewComponent } from './reviews/crypto-reels-casino-review/crypto-reels-casino-review.component';
import { BuzzluckCasinoReviewComponent } from './reviews/buzzluck-casino-review/buzzluck-casino-review.component';
import { ClubWorldCasinoReviewComponent } from './reviews/club-world-casino-review/club-world-casino-review.component';
import { StatuscodesService } from './core/statuscodes.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BaccaratTipsComponent } from './pages/casino-games/baccarat-tips/baccarat-tips.component';
import { CrapsTipsComponent } from './pages/online-craps/craps-tips/craps-tips.component';
import { CasinoGamesShortcodeComponent } from './shortcode/casino-games-shortcode/casino-games-shortcode.component';




@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent,
    NoPageFoundComponent,
    SilverOakCasinoReviewComponent,
    SlotMadnessCasinoReviewComponent,
    RoaringCasinoReviewComponent,
    LuckyHippoCasinoReviewComponent,
    PalaceOfChanceReviewComponent,
    PrismCasinoReviewComponent,
    RubySlotsCasinoReviewComponent,
    RoyalAceCasinoReviewComponent,
    AceLuckyCasinoReviewComponent,
    WildCardCityCasinoReviewComponent,
    CasinoCruiseCasinoReviewComponent,
    ElRoyaleCasinoReviewComponent,
    CasinoMateCasinoReviewComponent,
    SpinfinityCasinoReviewComponent,
    OldHavanaCasinoReviewComponent,
    CasinoMaxReviewComponent,
    SlotsEmpireCasinoReviewComponent,
    AussiePlayCasinoReviewComponent,
    CherryJackpotCasinoReviewComponent,
    BovegasCasinoReviewComponent,
    EclipseCasinoReviewComponent,
    CherryGoldCasinoReviewComponent,
    DomGameCasinoReviewComponent,
    GoldenLionCasinoReviewComponent,
    SupernovaCasinoReviewComponent,
    BodogCasinoReviewComponent,
    SlotsLvCasinoReviewComponent,
    DrakeCasinoReviewComponent,
    CafeCasinoReviewComponent,
    ExclusiveCasinoReviewComponent,
    FreeSpinCasinoReviewComponent,
    IrishLuckCasinoReviewComponent,
    CasinoReviewsComponent,
    IgnitionCasinoReviewComponent,
    MybookieCasinoReviewComponent,
    JackspayCasinoReviewComponent,
    TwoUpCasinoReviewComponent,
    BingoFestCasinoReviewComponent,
    TwentyFourVipCasinoReviewComponent,
    BingoSpiritCasinoReviewComponent,
    CyberBingoCasinoReviewComponent,
    LuckyTigerCasinoReviewComponent,
    HighwayCasinoReviewComponent,
    RichPalmsCasinoReviewComponent,
    BigSpinCasinoReviewComponent,
    TigerGamingCasinoReviewComponent,
    BusrCasinoReviewComponent,
    XbetCasinoReviewComponent,
    MybCasinoReviewComponent,
    TripleEightTigerCasinoReviewComponent,
    SportsBettingCasinoReviewComponent,
    VegasCrestCasinoReviewComponent,
    SuperiorCasinoReviewComponent,
    SuperSlotsCasinoReviewComponent,
    SlotsPlusCasinoReviewComponent,
    WildCasinoReviewComponent,
    PlanetSevenCasinoReviewComponent,
    LasVegasCasinoReviewComponent,
    SunPalaceCasinoReviewComponent,
    CoolcatCasinoReviewComponent,
    BovadaCasinoReviewComponent,
    HighCountryCasinoReviewComponent,
    ClubPlayerCasinoReviewComponent,
    RedDogCasinoReviewComponent,
    RagingBullCasinoReviewComponent,
    SlotsOfVegasCasinoReviewComponent,
    GossipSlotsCasinoReviewComponent,
    WildVegasCasinoReviewComponent,
    DreamsCasinoReviewComponent,
    CaptainJackCasinoReviewComponent,
    BridesmaidsSlotReviewComponent,
    EmoticoinsSlotReviewComponent,
    PlaySunnyCasinoReviewComponent,
    MegaMoneyRushSlotReviewComponent,
    PotsOfLuckCasinoReviewComponent,
    PurePlatinumSlotReviewComponent,
    HiLoRollerSlotReviewComponent,
    SandPrincessSlotReviewComponent,
    TempleOfLuxorSlotReviewComponent,
    ThunderstruckTwoOnlineSlotReviewComponent,
    TombRaiderSlotReviewComponent,
    WinningRoomCasinoReviewComponent,
    SlotyCasinoReviewComponent,
    LasAtlantisCasinoReviewComponent,
    AndromedaCasinoReviewComponent,
    PagenotfoundComponent,
    WildCoinsCasinoReviewComponent,
     BetusCasinoReviewComponent,
     ComicPlayCasinoReviewComponent,
     GrandRushCasinoReviewComponent,
     JuicyVegasCasinoReviewComponent,
     LincolnCasinoReviewComponent,
     TrueFortuneCasinoReviewComponent,
     ShazamCasinoReviewComponent,
     BetOnlineCasinoReviewComponent,
     LibertySlotsCasinoReviewComponent,
     LuckyRedCasinoReviewComponent,
     SportsAndCasinoReviewComponent,
     AladdinsGoldCasinoReviewComponent,
     HighNoonCasinoReviewComponent,
     ManhattanSlotsCasinoReviewComponent,
     AllStarSlotsCasinoReviewComponent,
     CasinoExtremeReviewComponent,
     BrangoCasinoReviewComponent,
     YabbyCasinoReviewComponent,
     MicrogamingComponent,
     AgeOfDiscoveryComponent,
     BearlyFishingComponent,
     AsianBeautyComponent,
     BushTelegraphComponent,
     BomberGirlsComponent,
     ArianaComponent,
     BoogieMonstersComponent,
     AvalonComponent,
     AlaskanFishingComponent,
     ArcticFortuneComponent,
     BeachBabesComponent,
     BreakDaBankAgainComponent,
     BuffetBonanzaComponent,
     BarsAndStripesComponent,
     ImmortalRomanceComponent,
     AdventurePalaceComponent,
     AgentJaneBlondeComponent,
     AlleyCatsComponent,
     CabinFeverComponent,
     CaptainCashComponent,
     DoctorLoveComponent,
     ExoticCatsComponent,
     FatLadySingsComponent,
     FortuniumComponent,
     MegaMoolahComponent,
     PlayboyGoldComponent,
     RainbrewComponent,
     WildScarabsComponent,
     PageTemplateComponent,
     OnlineRouletteComponent,
     HowToPlayRouletteComponent,
     TipsComponent,
     RouletteRoyaleComponent,
     AmericanRouletteComponent,
     EuropeanRouletteComponent,
     FrenchRouletteComponent,
     MultiWheelRouletteComponent,
     MultiPlayerRouletteComponent,
     PremierRouletteComponent,
     CasinoBonusesComponent,
     BirthdayComponent,
     NoDepositBonusComponent,
     FreeSpinsComponent,
     WelcomeBonusComponent,
     MobileCasinosComponent,
     AppleCasinosComponent,
     AndroidCasinosComponent,
     OnlineBaccaratComponent,
     OnlineBlackjackComponent,
     OnlineCrapsComponent,
     OnlineVideoPokerComponent,
     OnlinePokerComponent,
     LiveDealerCasinosComponent,
     CasinoGamesComponent,
     OnlineSlotsComponent,
     FiveReelSlotsComponent,
     ThreeReelSlotsComponent,
     SlotsTipsComponent,
     SitemapComponent,
     ResponsibleGamingComponent,
     AboutUsComponent,
     ContactUsComponent,
     StatesComponent,
     NevadaComponent,
     DelawareComponent,
     NewJerseyComponent,
     NewYorkComponent,
     PennsylvaniaComponent,
     CaliforniaComponent,
     AlabamaComponent,
     AlaskaComponent,
     ArkansasComponent,
     HawaiiComponent,
     IowaComponent,
     KentuckyComponent,
     TexasComponent,
     WashingtonComponent,
     ArizonaComponent,
     WisconsinComponent,
     SafeOnlineCasinosComponent,
     HighRollerCasinosComponent,
     RealMoneyCasinosComponent,
     BankingComponent,
     NetellerCasinosComponent,
     VisaCasinosComponent,
     DebitCardCasinosComponent,
     CreditCardCasinosComponent,
     EcopayzCasinosComponent,
     EntropayCasinosComponent,
     MastercardCasinosComponent,
     PaysafecardCasinosComponent,
     UsemybankCasinosComponent,
     JokersWildComponent,
     BonusVideoPokerComponent,
     DeucesWildVideoPokerComponent,
     DoubleBonusVideoPokerComponent,
     DoubleDoubleBonusVideoPokerComponent,
     HowToPlayVideoPokerComponent,
     JacksOrBetterVideoPokerComponent,
     TensOrBetterComponent,
     OnlineVideoPokerTipsComponent,
     BlackjackRulesComponent,
     BlackjackStrategyComponent,
     CardCountingComponent,
     GlossaryComponent,
     HowToPlayBlackjackComponent,
     WinAtBlackjackComponent,
     OnlineBlackjackTipsComponent,
     CrapsRulesComponent,
     CrapsGlossaryComponent,
     HowToPlayCrapsComponent,
     OnlineLotteriesComponent,
     FaqsComponent,
     CasinoGameIndexComponent,
     HighestPayoutCasinoGamesComponent,
     KenoComponent,
     OnlineGamblingTipsComponent,
     SunnyCasinoReviewComponent,
     BestPayoutSlotsComponent,
     QuickspinCasinosComponent,
     PragmaticPlayCasinosComponent,
     RivalCasinosComponent,
     PaiGowPokerComponent,
     IgtGamingCasinosComponent,
     BetsoftCasinosComponent,
     TraitsOfAGoodOnlineCasinoComponent,
     DownloadCasinosComponent,
     BestPayoutCasinosComponent,
     NewOnlineCasinosComponent,
     TableGamesComponent,
     FreeCasinoGamesComponent,
     ProgressiveJackpotsComponent,
     SportsBettingComponent,
     BigWinCasinosComponent,
     BitcoinCasinosComponent,
     SearchComponent,
     VegasCasinoOnlineReviewComponent,
     CryptoReelsCasinoReviewComponent,
     BuzzluckCasinoReviewComponent,
     ClubWorldCasinoReviewComponent,
     BaccaratTipsComponent,
     CrapsTipsComponent,
     CasinoGamesShortcodeComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    LazyLoadImageModule,
    RouterModule,
    FormsModule,
    NgAisModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [Title, StatuscodesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
