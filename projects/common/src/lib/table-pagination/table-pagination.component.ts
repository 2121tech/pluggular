import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'plg-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css'],
})
export class PluggularTablePaginationComponent implements OnInit {
  @Input() pages = 1;
  @Input() activeClass = 'text-white bg-green-400 hover:bg-green-400';
  @Output() hasPageClicked = new EventEmitter<number>();

  perSet = 5;
  skip = 1;
  currentSet = 0;
  numbersSet: number[][] = [];
  currentPage = 0;

  angleDoubleLeftIcon = faAngleDoubleLeft;
  angleLeftIcon = faAngleLeft;
  angleDoubleRightIcon = faAngleDoubleRight;
  angleRightIcon = faAngleRight;
  ellipsisIcon = faEllipsis;

  ngOnInit(): void {
    this.numbersSet = this.generateItems();
  }

  onNextSetClick(): void {
    const nextSet = this.currentSet + 1;
    if (nextSet < this.numbersSet.length) {
      this.currentSet = nextSet;
    }
  }

  onNextPageClick(): void {
    const nextPage = this.currentPage + 1;
    if (nextPage < this.pages) {
      if (this.numbersSet[this.currentSet].indexOf(nextPage) < 0) {
        this.onNextSetClick();
      }
      this.currentPage += 1;
      this.hasPageClicked.emit(this.currentPage);
    }
  }

  onPrevPageClick(): void {
    const prevPage = this.currentPage - 1;
    if (prevPage >= 0) {
      if (this.numbersSet[(this, this.currentSet)].indexOf(prevPage) < 0) {
        this.onPrevSetClick();
      }
      this.currentPage = prevPage;
      this.hasPageClicked.emit(this.currentPage);
    }
  }

  onPrevSetClick(): void {
    const prevSet = this.currentSet - 1;
    if (prevSet >= 0) {
      this.currentSet = prevSet;
    }
  }

  private generateItems(): number[][] {
    const numbersSet = [];
    const setCount = Math.floor(this.pages / this.perSet);
    let from = 0;
    for (let currentSet = 0; currentSet < setCount; currentSet++) {
      numbersSet.push([...Array(5)].map((_, i) => from + i * 1));
      from += 5;
    }

    if (this.pages % this.perSet > 0) {
      numbersSet.push([...Array(this.pages % this.perSet)].map((_, i) => this.pages - 1 + i * 1));
    }

    return numbersSet;
  }

  onPageClick(page: number): void {
    this.currentPage = page;
    this.hasPageClicked.emit(this.currentPage);
  }
}
