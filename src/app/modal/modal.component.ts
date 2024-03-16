import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BoardService} from "../board/board.service";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  currentBoard: any | null = null;
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    tag: new FormControl(''),
    listId: new FormControl(''),
    color: new FormControl('')
  });

  constructor(public modalRef: MdbModalRef<ModalComponent>,private boardService: BoardService) {
  }

  ngOnInit(): any {
    this.currentBoard = this.modalRef.component
    console.log(this.modalRef.component)
  }
  create() {
    const {title, description, tag, listId, color} = this.taskForm.value;
    this.boardService.create({
      title,
      description,
      tag,
      listId,
      color
    }).subscribe()
  }
}

