import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {

  bovegas_casino ="https://imgix.cosmicjs.com/794903a0-20f4-11ec-a8e0-f76ec38a4b1a-bovegas-casino.png";
  slots_of_vegas_casino ="https://imgix.cosmicjs.com/79154970-20f4-11ec-a8e0-f76ec38a4b1a-slots-of-vegas-casino.png";
  las_atlantis_casino_usa="https://imgix.cosmicjs.com/09813750-9fab-11ec-a634-2f1716dd45af-las-atlantis-casino-usa.png";
  sun_palace_casino="https://imgix.cosmicjs.com/7916a900-20f4-11ec-a8e0-f76ec38a4b1a-sun-palace-casino.png";
  andromeda="https://imgix.cosmicjs.com/37dc8c50-4e00-11ec-89df-f55462818fb0-andromeda-casino.png";
  wild_casino="https://imgix.cosmicjs.com/797ac200-20f4-11ec-a8e0-f76ec38a4b1a-wild-casino.png";
  lucky_hippo_casino="https://imgix.cosmicjs.com/79e606f0-20f4-11ec-a8e0-f76ec38a4b1a-lucky-hippo-casino.png";
  cafe_casino="https://imgix.cosmicjs.com/79e3e410-20f4-11ec-a8e0-f76ec38a4b1a-cafe-casino-usa.png";
  high_country="https://imgix.cosmicjs.com/79dcb820-20f4-11ec-a8e0-f76ec38a4b1a-high-country.png";
  red_dog_casino="https://imgix.cosmicjs.com/79e48050-20f4-11ec-a8e0-f76ec38a4b1a-red-dog-casino.png";
  wild_coins_casino="https://imgix.cosmicjs.com/3b27da30-a117-11ec-a634-2f1716dd45af-wild-coins-casino-logo.png";
  cherry_gold_casino="https://imgix.cosmicjs.com/79de3ec0-20f4-11ec-a8e0-f76ec38a4b1a-cherry-gold-casino.png";
  rich_palms_casino="https://imgix.cosmicjs.com/797b1020-20f4-11ec-a8e0-f76ec38a4b1a-rich-palms-casino.png";
  betus_casino="https://imgix.cosmicjs.com/998ecee0-7768-11ec-bfef-718573fe8f91-betus-casino.png";
  highway="https://imgix.cosmicjs.com/79ddc990-20f4-11ec-a8e0-f76ec38a4b1a-highway-casino.png";
  wild_vegas_casino="https://imgix.cosmicjs.com/79160cc0-20f4-11ec-a8e0-f76ec38a4b1a-wild-vegas-casino.png";
  irish_luck_casino="https://imgix.cosmicjs.com/79dc6a00-20f4-11ec-a8e0-f76ec38a4b1a-irish-luck-casino.png";
  old_havana_casino="https://imgix.cosmicjs.com/79e4f580-20f4-11ec-a8e0-f76ec38a4b1a-old-havana-casino.png";
  comic_play_casino="https://imgix.cosmicjs.com/6ed84a00-4dc4-11ec-89df-f55462818fb0-comic-play-casino-en.png";
  prism_casino="https://imgix.cosmicjs.com/79dc1be0-20f4-11ec-a8e0-f76ec38a4b1a-prism-casino.png";
  grand_rush_casino="https://imgix.cosmicjs.com/cace58e0-73ad-11ec-886a-130c8e529dc2-grand-rush-casino.png";
  juicy_vegas_online_casino="https://imgix.cosmicjs.com/caa2dc10-73ad-11ec-886a-130c8e529dc2-juicy-vegas-online-casino.png";
  el_royale_casino="https://imgix.cosmicjs.com/79adb8e0-20f4-11ec-a8e0-f76ec38a4b1a-el-royale-casino.png";
  las_vegas_usa_casino="https://imgix.cosmicjs.com/79e01380-20f4-11ec-a8e0-f76ec38a4b1a-las-vegas-usa-casino.png";
  casinomax="https://imgix.cosmicjs.com/79dd2d50-20f4-11ec-a8e0-f76ec38a4b1a-casinomax.png";
  lincoln_casino="https://imgix.cosmicjs.com/636fa170-a118-11ec-a634-2f1716dd45af-lincoln-casino-logo.png";
  true_fortune_casino="https://imgix.cosmicjs.com/76075850-4eb6-11ec-846a-25be80f1a4eb-true-fortune-casino.png";
  shazam_casino="https://imgix.cosmicjs.com/7f5f9e30-4eb6-11ec-846a-25be80f1a4eb-shazam-casino-1.png";
  roaring21="https://imgix.cosmicjs.com/79ae2e10-20f4-11ec-a8e0-f76ec38a4b1a-roaring21-casino.png";
  vegas_crest_casino="https://imgix.cosmicjs.com/7949c6f0-20f4-11ec-a8e0-f76ec38a4b1a-vegas-crest-casino-usa.png";
  planet_7_casino="https://imgix.cosmicjs.com/79de8ce0-20f4-11ec-a8e0-f76ec38a4b1a-planet-7-casino.png";
  raging_bull_casino="https://imgix.cosmicjs.com/2fefa960-a11a-11ec-a634-2f1716dd45af-raging-bull-casino-logo.png";
  aussie_play_casino="https://imgix.cosmicjs.com/79796270-20f4-11ec-a8e0-f76ec38a4b1a-aussie-play-casino.png";
  domgame="https://imgix.cosmicjs.com/79df5030-20f4-11ec-a8e0-f76ec38a4b1a-domgame-casino.png";
  supernova="https://imgix.cosmicjs.com/79aaf9c0-20f4-11ec-a8e0-f76ec38a4b1a-supernova-casino-usa.png";
  cool_cat="https://imgix.cosmicjs.com/79d95cc0-20f4-11ec-a8e0-f76ec38a4b1a-cool-cat-casino.png";
  dreams="https://imgix.cosmicjs.com/79aca770-20f4-11ec-a8e0-f76ec38a4b1a-dreams-casino.png";
  club_player="https://imgix.cosmicjs.com/79dedb00-20f4-11ec-a8e0-f76ec38a4b1a-club-player-casino.png";
  vegas_casino="https://imgix.cosmicjs.com/8742fac0-a11d-11ec-a634-2f1716dd45af-vegas-casino-online-us.png";
  royal_ace="https://imgix.cosmicjs.com/79e124f0-20f4-11ec-a8e0-f76ec38a4b1a-royal-ace-casino.png";
  gossip="https://imgix.cosmicjs.com/79e91430-20f4-11ec-a8e0-f76ec38a4b1a-gossip-slots-casino.png";
  goldenlion="https://imgix.cosmicjs.com/79da9540-20f4-11ec-a8e0-f76ec38a4b1a-goldenlion-casino.png";
  freespin="https://imgix.cosmicjs.com/79a99a30-20f4-11ec-a8e0-f76ec38a4b1a-freespin-casino.png";
  eclipse="https://imgix.cosmicjs.com/79e20f50-20f4-11ec-a8e0-f76ec38a4b1a-eclipse-casino.png";
  exclusive="https://imgix.cosmicjs.com/79d8c080-20f4-11ec-a8e0-f76ec38a4b1a-exclusive-casino.png";
  bigspin="https://imgix.cosmicjs.com/79b16260-20f4-11ec-a8e0-f76ec38a4b1a-bigspin-casino.png";
  busr="https://imgix.cosmicjs.com/797bac60-20f4-11ec-a8e0-f76ec38a4b1a-busr-casino.png";
  bookie="https://imgix.cosmicjs.com/79d9d1f0-20f4-11ec-a8e0-f76ec38a4b1a-my-bookie.png";
  xbet="https://imgix.cosmicjs.com/7979d7a0-20f4-11ec-a8e0-f76ec38a4b1a-xbet-casino.png";
  betonline="https://imgix.cosmicjs.com/79e6f150-20f4-11ec-a8e0-f76ec38a4b1a-betonline-casino.png";
  sports_betting="https://imgix.cosmicjs.com/794a6330-20f4-11ec-a8e0-f76ec38a4b1a-sports-betting-ag-casino.png";
  super_slots="https://imgix.cosmicjs.com/79b11440-20f4-11ec-a8e0-f76ec38a4b1a-super-slots-casino.png";
  tiger_gaming="https://imgix.cosmicjs.com/79e0afc0-20f4-11ec-a8e0-f76ec38a4b1a-tiger-gaming-casino-logo.png";
  vip="https://imgix.cosmicjs.com/79af1870-20f4-11ec-a8e0-f76ec38a4b1a-24vip-casino.png";
  tiger="https://imgix.cosmicjs.com/79acf590-20f4-11ec-a8e0-f76ec38a4b1a-888tiger-casino.png";
  ltiger="https://imgix.cosmicjs.com/79b0c620-20f4-11ec-a8e0-f76ec38a4b1a-lucky-tiger-casino.png";
  superior="https://imgix.cosmicjs.com/797ee0b0-20f4-11ec-a8e0-f76ec38a4b1a-superior-casino.png";
  two_up="https://imgix.cosmicjs.com/79e78d90-20f4-11ec-a8e0-f76ec38a4b1a-two-up-casino.png";
  silver_oak="https://imgix.cosmicjs.com/79e73f70-20f4-11ec-a8e0-f76ec38a4b1a-silver-oak-casino.png";
  slots_plus="https://imgix.cosmicjs.com/79ad6ac0-20f4-11ec-a8e0-f76ec38a4b1a-slots-plus-casino.png";
  liberty="https://imgix.cosmicjs.com/52a5dd70-a120-11ec-a634-2f1716dd45af-liberty-slots-casino-usa.png";
  slotslv="https://imgix.cosmicjs.com/79e43230-20f4-11ec-a8e0-f76ec38a4b1a-slotslv-casino.png";
  cherry="https://imgix.cosmicjs.com/79db0a70-20f4-11ec-a8e0-f76ec38a4b1a-cherry-jackpot-casino.png";
  ruby="https://imgix.cosmicjs.com/79e543a0-20f4-11ec-a8e0-f76ec38a4b1a-ruby-slots-casino.png";
  bingo_fest="https://imgix.cosmicjs.com/797a4cd0-20f4-11ec-a8e0-f76ec38a4b1a-bingo-fest-casino-1.png";
  bingo_spirit="https://imgix.cosmicjs.com/79dba6b0-20f4-11ec-a8e0-f76ec38a4b1a-bingo-spirit-casino-1.png";
  cyber_bingo="https://imgix.cosmicjs.com/79e591c0-20f4-11ec-a8e0-f76ec38a4b1a-cyber-bingo-casino.png";
  empire="https://imgix.cosmicjs.com/79dd7b70-20f4-11ec-a8e0-f76ec38a4b1a-slots-empire-casino.png";
  lucky_red="https://imgix.cosmicjs.com/380ceb20-4e00-11ec-89df-f55462818fb0-lucky-red-casino.png";
  sports_and_casino="https://imgix.cosmicjs.com/70f6b860-a122-11ec-a634-2f1716dd45af-sports-and-casino-usa.png";
  crl="https://imgix.cosmicjs.com/7ce33400-743b-11ec-a380-293534403094-crl-Logo.png";
  aladdins="https://imgix.cosmicjs.com/7c1e5d60-743b-11ec-a380-293534403094-aladdins-gold-casino.png";
  hIghnoon="https://imgix.cosmicjs.com/92430140-743b-11ec-a380-293534403094-hIghnoon.png";
  club_world="https://imgix.cosmicjs.com/7c54fdc0-743b-11ec-a380-293534403094-club-world-casino.png";
  manhattan="https://imgix.cosmicjs.com/7c4e6e10-743b-11ec-a380-293534403094-manhattan-slots-casino-usa.png";
  all_star="https://imgix.cosmicjs.com/7c1cfdd0-743b-11ec-a380-293534403094-all-star-slots-casino-us.png";
  buzz_luck="https://imgix.cosmicjs.com/7c1de830-743b-11ec-a380-293534403094-buzz-luck-casino.png";
  drake="https://imgix.cosmicjs.com/79e850e0-20f4-11ec-a8e0-f76ec38a4b1a-drake-casino.png";
  extreme="https://imgix.cosmicjs.com/cfa5b1c0-a124-11ec-a634-2f1716dd45af-extreme-casino-usa.png";
  brango="https://imgix.cosmicjs.com/cfa4ee70-a124-11ec-a634-2f1716dd45af-brango-casino-usa.png";
  yabby="https://imgix.cosmicjs.com/cfa6c330-a124-11ec-a634-2f1716dd45af-yabby-casino-usa.png";
  madness="https://imgix.cosmicjs.com/79ab6ef0-20f4-11ec-a8e0-f76ec38a4b1a-slots-of-madness-casino.png";
  bodog="https://imgix.cosmicjs.com/79df9e50-20f4-11ec-a8e0-f76ec38a4b1a-bodog-casino.png";
  bovada="https://imgix.cosmicjs.com/79e19a20-20f4-11ec-a8e0-f76ec38a4b1a-bovada-casino-us.png";
  spinfinity="https://imgix.cosmicjs.com/79484050-20f4-11ec-a8e0-f76ec38a4b1a-spinfinity-logo.png";
  jackspay="https://imgix.cosmicjs.com/79da4720-20f4-11ec-a8e0-f76ec38a4b1a-jackspay-casino.png";
  Myb="https://imgix.cosmicjs.com/79e36ee0-20f4-11ec-a8e0-f76ec38a4b1a-MYB-casino-usa.jpg";
  captain="https://imgix.cosmicjs.com/79aaaba0-20f4-11ec-a8e0-f76ec38a4b1a-captain-jack-casino.png";
  palace_of_chance="https://imgix.cosmicjs.com/79e061a0-20f4-11ec-a8e0-f76ec38a4b1a-palace-of-chance-casino.png";
  

  constructor() { }

  ngOnInit(): void {
    
    $('#buttonshowhide').click(function(){
      $('#maintable').toggle();
   });
    
  }


  

}
