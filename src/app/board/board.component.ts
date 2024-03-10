import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BoardService} from "./board.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    tag: new FormControl(''),
    listId: new FormControl(''),
    color: new FormControl('')
  });
  modalRef: MdbModalRef<ModalComponent> | null = null;
  modal = 'modal';
  @ViewChild('myModal') myModal: ElementRef;
  currentBoard: any;
  a: any;

  constructor(private boardService: BoardService, private route: ActivatedRoute, private modalService: MdbModalService) {

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

  create(): void {
    const {title, description, tag, listId, color} = this.taskForm.value;
    this.boardService.create({
      title,
      description,
      tag,
      listId,
      color
    }).subscribe()
  }

  openModalReal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }
}
