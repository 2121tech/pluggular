import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';

export type TPaginationResult = {
  currentPage: number;
  lastPage?: number;
};
@Component({
  selector: 'plg-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css'],
})
export class PluggularTablePaginationComponent implements OnInit, OnChanges {
  @Input() pages = 1;
  @Input() activeClass = 'text-white bg-green-400 hover:bg-green-400';
  @Input() isInfinite = false;
  @Input() isLastPage = false;
  @Output() hasPageClicked = new EventEmitter<TPaginationResult>();

  perSet = 5;
  skip = 1;
  currentSet = 0;
  numbersSet: number[][] = [];
  currentPage = 0;
  lastPage = 0;

  angleDoubleLeftIcon = faAngleDoubleLeft;
  angleLeftIcon = faAngleLeft;
  angleDoubleRightIcon = faAngleDoubleRight;
  angleRightIcon = faAngleRight;
  ellipsisIcon = faEllipsis;

  ngOnInit(): void {
    this.numbersSet = this.generateItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isLastPage?.currentValue === true) {
      this.lastPage = this.currentPage;
    }
  }

  onNextSetClick(): void {
    const nextSet = this.currentSet + 1;
    if (nextSet < this.numbersSet.length) {
      this.currentSet = nextSet;
    }
  }

  onNextPageClick(): void {
    let result: TPaginationResult = { currentPage: this.currentPage };

    if (!this.lastPage || this.currentPage + 1 <= this.lastPage) {
      this.currentPage += 1;
    }

    if (!this.isLastPage) {
      if (this.isInfinite) {
        this.pages += 1;
        this.numbersSet = this.generateItems();
      }

      if (this.currentPage < this.pages) {
        if (this.numbersSet[this.currentSet].indexOf(this.currentPage) < 0) {
          this.onNextSetClick();
        }
        result = {
          currentPage: this.currentPage,
          lastPage: this.lastPage,
        };
      }
    } else {
      this.lastPage = this.currentPage;
      result = {
        currentPage: this.currentPage,
        lastPage: this.lastPage,
      };
    }
    this.hasPageClicked.emit(result);
    this.scrollToTop();
  }

  onPrevPageClick(): void {
    const prevPage = this.currentPage - 1;
    if (prevPage >= 0) {
      if (this.numbersSet[(this, this.currentSet)].indexOf(prevPage) < 0) {
        this.onPrevSetClick();
      }
      this.currentPage = prevPage;
      const result = {
        currentPage: this.currentPage,
        lastPage: this.lastPage,
      };
      this.hasPageClicked.emit(result);
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
      from = this.pages - (this.pages % this.perSet);
      numbersSet.push([...Array(this.pages % this.perSet)].map((_, i) => from + i * 1));
    }

    return numbersSet;
  }

  onPageClick(page: number): void {
    this.currentPage = page;
    const result = {
      currentPage: this.currentPage,
      lastPage: this.lastPage,
    };
    this.hasPageClicked.emit(result);
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
