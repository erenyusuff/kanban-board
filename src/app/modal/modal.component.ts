import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BoardService} from "../board/board.service";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    tag: new FormControl(''),
    listId: new FormControl(''),
    color: new FormControl('')
  });

  constructor(public modalRef: MdbModalRef<ModalComponent>,private boardService: BoardService) {
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

