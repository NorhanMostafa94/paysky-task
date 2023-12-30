import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSideBar: EventEmitter<boolean> = new EventEmitter(false);
  isSideBarClosed: boolean = false;
  
  /**
   * Toggle navigation sidebar
   */
  onToggleSideBar() {
    this.isSideBarClosed = !this.isSideBarClosed;
    this.toggleSideBar.emit(this.isSideBarClosed);
  }
}
