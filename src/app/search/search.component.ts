
import { Component, OnInit, HostListener } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import * as $ from 'jquery';

const algoliaClient = algoliasearch(
  'YB9XLT0SK4',
  '00b72233e2c8c05ebc841e8b405a90d7'
);


const searchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliaClient.search(requests);
  },
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // $('.ais-Hits').hide();  
  }

  @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
      if($(".ais-SearchBox-input")){
        $('.col-sm-4').attr('style', 'width: 100% !important');
        $('.ais-SearchBox-form').attr('style', 'width: 120% !important');
        $(".col-sm-8").hide();
        $("aside#nav_menu-2").hide();
        $("aside#block-8").hide();
        $("aside#nav_menu-4").hide();
        $("button.ais-SearchBox-submit").hide();
        $('.ais-Hits').show();  
        $('.sidebar-hide-for-page-no-found').hide();
        $('.col-sm-81').attr('style', 'background: #f0f0f0 !important');
        // $('.p-no-found-detailed1').show();
      }
}

config = {
  indexName: 'pages',
  searchClient
};

}
