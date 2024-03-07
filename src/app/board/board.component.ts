import {Component, OnInit} from '@angular/core';
import {BoardService} from "./board.service";
import {Board} from "./board.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  currentBoard: any;
  a: any;
  constructor(private boardService: BoardService, private route: ActivatedRoute) {

  }
  ngOnInit(): any {
    this.a = this.route.snapshot.paramMap.get("id");
    console.log(this.a)
    this.boardService.getBoard(this.a).subscribe((result) => {
      console.log(result)
      if (result) {
        this.currentBoard = result;
      }
    })
  }
}
