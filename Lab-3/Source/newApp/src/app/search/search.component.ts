import { Component, OnInit } from '@angular/core';
import { HostserviceService} from "../hostservice.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public Itemsearch;
  public output: object;
  public texttospeechurl;

  constructor(private host: HostserviceService) { }
  ngOnInit() {
  }
  FoodFacts() {
    this.host.go(this.Itemsearch).subscribe(data => {
      this.output = data;
      console.log(data);
    })
    this.texttospeechurl = 'http://api.voicerss.org/?key=9831fe84d7af4ee584313f7dfd94af12&hl=en-us&src=you entered ' + this.Itemsearch + '' ;
  }
}
