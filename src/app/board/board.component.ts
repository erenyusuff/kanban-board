import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BoardService} from "./board.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalComponent} from "../modal/modal.component";
import {CdkDragDrop, moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';

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

  drop(event: CdkDragDrop<any>, status: any) {
    console.log('event: ', event);
    console.log('list: ', status.id);
    console.log('moved element: ', event.previousContainer.data[event.previousIndex]);
    const movedItem = event.previousContainer.data[event.previousIndex]
    if (event.previousContainer === event.container) {
      console.log('ayni container')
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('farkli container')
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // const movedItem = event.container.data[event.currentIndex];
      this.changeStatus(movedItem, status.id)
    }
  }

  changeStatus(moved: any, listId: number) {
    console.log(moved)
    const id = moved.id;
    this.boardService.updateOrder({
      listId: listId,
      id: id
    }).subscribe()
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
    this.modalRef = this.modalService.open(ModalComponent, {
      data: this.currentBoard,
    });
    this.modalRef.component = this.currentBoard
  }
}
